/// ✅ Firebase Config
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
const ref = db.ref("projects");

let projects = [];

/**
 * ✅ SMART LOGIC: Google Favicon Service
 * Ye service har domain ka icon (favicon) nikal leti hai.
 */
function getLogo(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    const domain = u.hostname;
    // Google API jo 128px size mein favicon return karti hai
    return `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
  } catch (e) {
    return "";
  }
}

// Fallback Initials
function initials(name) {
  if(!name) return "??";
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

// =======================
// 🔥 FIREBASE DATA HANDLING
// =======================

function load() {
  ref.on("value", snap => {
    const data = snap.val();
    // Convert object to array and keep the firebase key for deletion
    projects = data ? Object.entries(data).map(([key, val]) => ({ ...val, firebaseId: key })) : [];
    render();
  });
}

function save(projectObj) {
  ref.push(projectObj);
}

// =======================
// 🎨 UI RENDERING
// =======================

function render() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    // ✅ Logo Selection Logic
    const finalLogo = p.img || getLogo(p.live);

    card.innerHTML = `
      <button class="del-btn" onclick="deleteProject('${p.firebaseId}', event)">×</button>

      <div class="card-thumb">
        ${finalLogo ? 
          `<img src="${finalLogo}" 
                style="width:50px; height:50px; object-fit:contain;"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : 
          '' 
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
// ⚙️ ACTIONS
// =======================

function addProject(title, img, live, staging, dev) {
  if (!title) { alert("Title zaroori hai!"); return; }

  const newProj = {
    title,
    img: img || "",
    live: live || "",
    staging: staging || "",
    dev: dev || "Muhammad Azam Mustafa",
    date: Date.now()
  };

  save(newProj);
}

function deleteProject(key, e) {
  e.stopPropagation();
  if (confirm("Kiya aap ye project delete karna chahte hain?")) {
    db.ref(`projects/${key}`).remove();
  }
}

// =======================
// 🧠 MODAL & HELPERS
// =======================

const f = (id) => document.getElementById(id).value.trim();

function openModal() { document.getElementById("modalOverlay").classList.add("open"); }
function closeModal() { document.getElementById("modalOverlay").classList.remove("open"); }

function submitModal() {
  addProject(f("m-title"), f("m-img"), f("m-live"), f("m-staging"), f("m-dev"));
  closeModal();
  // Form clear
  ["m-title", "m-img", "m-live", "m-staging"].forEach(id => document.getElementById(id).value = "");
}

// Initial Load
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