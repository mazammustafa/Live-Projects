// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyANaTGjip95Zd2ITIK91MaDV12T4LIRbPs",
  authDomain: "live-projtect.firebaseapp.com",
  projectId: "live-projtect",
  storageBucket: "live-projtect.firebasestorage.app",
  messagingSenderId: "968166939491",
  appId: "1:968166939491:web:b62a11c30e5df802bcd156"
};

// ✅ Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
const ref = db.ref("projects");

let projects = [];
const ADMIN_EMAIL = "azammustafa.office@gmail.com";

// =======================
// 🔐 AUTH LOGIC
// =======================

// Login Modal kholne ke liye
function openLoginModal() {
    document.getElementById("loginOverlay").classList.add("open");
}

// Login Modal band karne ke liye
function closeLoginModal() {
    document.getElementById("loginOverlay").classList.remove("open");
}

function handleLogin() {
    const email = document.getElementById("login-email").value.trim();
    const pass = document.getElementById("login-pass").value.trim();

    if (email !== ADMIN_EMAIL) {
        alert("Only authorized admin can log in!");
        return;
    }

    auth.signInWithEmailAndPassword(email, pass)
        .then(() => {
            // Login successful hone par modal band hoga
            closeLoginModal();
        })
        .catch(err => {
            alert("Login Failed: " + err.message);
        });
}

function handleLogout() {
    if(confirm("Logout karna chahte hain?")) {
        auth.signOut();
    }
}

// ✅ Check if user is Logged In (Real-time Listener)
auth.onAuthStateChanged(user => {
    const addBtn = document.getElementById("addBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const loginOverlay = document.getElementById("loginOverlay");

    if (user && user.email === ADMIN_EMAIL) {
        // Admin logged in
        loginOverlay.classList.remove("open"); // Agar modal khula hai toh band kar do
        if(addBtn) addBtn.style.display = "flex";
        if(loginBtn) loginBtn.style.display = "none";
        if(logoutBtn) logoutBtn.style.display = "block";
    } else {
        // Not logged in: Sirf buttons switch karo, popup auto nahi khulega
        if(addBtn) addBtn.style.display = "none";
        if(loginBtn) loginBtn.style.display = "block";
        if(logoutBtn) logoutBtn.style.display = "none";
    }
    render(); 
});

// =======================
// 🛠️ DATA HANDLING
// =======================

function load() {
    ref.on("value", snap => {
        const data = snap.val();
        projects = data ? Object.entries(data).map(([key, val]) => ({ ...val, firebaseId: key })) : [];
        render();
    });
}

function save(projectObj) {
    ref.push(projectObj);
}

function deleteProject(key, e) {
    e.stopPropagation();
    if (confirm("Kiya aap ye project delete karna chahte hain?")) {
        db.ref(`projects/${key}`).remove();
    }
}

// =======================
// 🎨 UI RENDERING
// =======================

function getLogo(url) {
    if (!url) return "";
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
    } catch (e) { return ""; }
}

function initials(name) {
    if(!name) return "??";
    return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

function render() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";
    
    // Check authentication for delete permission
    const isAdmin = auth.currentUser && auth.currentUser.email === ADMIN_EMAIL;

    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        const finalLogo = p.img || getLogo(p.live);

        card.innerHTML = `
            ${isAdmin ? `<button class="del-btn" onclick="deleteProject('${p.firebaseId}', event)">×</button>` : ""}
            <div class="card-thumb">
                ${finalLogo ? 
                  `<img src="${finalLogo}" style="width:50px; height:50px; object-fit:contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : '' 
                }
                <div class="card-monogram" style="${!finalLogo ? 'display:flex' : 'display:none'}">
                  ${initials(p.title)}
                </div>
            </div>
            <div class="card-body">
                <div class="card-name">${p.title}</div>
                <div class="card-dev">${p.dev || 'Azam Mustafa'}</div>
                <div class="card-badges">
                  ${p.live ? `<a class="badge badge-live" target="_blank" href="${p.live}">Live</a>` : ""}
                  ${p.staging ? `<a class="badge badge-staging" target="_blank" href="${p.staging}">Staging</a>` : ""}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById("stat-total").innerText = projects.length;
    document.getElementById("stat-live").innerText = projects.filter(p => p.live).length;
}

// =======================
// 🧠 MODAL HELPERS
// =======================

const f = (id) => document.getElementById(id).value.trim();

function openModal() { document.getElementById("modalOverlay").classList.add("open"); }
function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); }

function submitModal() {
    const title = f("m-title");
    if (!title) { alert("Title zaroori hai!"); return; }

    const newProj = {
        title,
        img: f("m-img") || "",
        live: f("m-live") || "",
        staging: f("m-staging") || "",
        dev: f("m-dev") || "Muhammad Azam Mustafa",
        date: Date.now()
    };

    save(newProj);
    closeModal();
    ["m-title", "m-img", "m-live", "m-staging"].forEach(id => document.getElementById(id).value = "");
}

// Start app
load();

// function bulkAdd(urls) {
//   urls.forEach(url => {
//     if (!url) return;

//     // ensure https
//     if (!url.startsWith("http")) {
//       url = "https://" + url;
//     }

//     const domain = new URL(url).hostname.replace("www.", "");

//     const title = domain
//       .split(".")[0]
//       .replace(/-/g, " ")
//       .replace(/\b\w/g, l => l.toUpperCase());

//     projects.push({
//       id: Date.now() + Math.random(),
//       title: title,
//       img: "",
//       live: url,
//       staging: "",
//       dev: "Muhammad Azam Mustafa"
//     });
//   });

//   save();
//   render();
// }