// Firebase Configuration
// Yahan apni Firebase config details daal dena
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyANaTGjip95Zd2ITIK91MaDV12T4LIRbPs",
    authDomain: "live-projtect.firebaseapp.com",
    projectId: "live-projtect",
    storageBucket: "live-projtect.firebasestorage.app",
    messagingSenderId: "968166939491",
    appId: "1:968166939491:web:b62a11c30e5df802bcd156",
    measurementId: "G-CP52QH4T0Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Firebase Initialize
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const projectsRef = database.ref('projects');

var STORAGE_KEY = 'azam_portfolio_v3';

function faviconUrl(liveUrl) {
    if (!liveUrl) return '';
    try { var u = new URL(liveUrl); return 'https://www.google.com/s2/favicons?sz=64&domain=' + u.hostname; }
    catch (e) { return ''; }
}

var DEFAULT_PROJECTS = [
    { id: 1, title: 'Ensozen Apartments', img: './images/Ensozen.png', live: '', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 2, title: 'Revanguard', img: './images/Revanguard.png', live: 'https://mazammustafa.github.io/REVANGUARD/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 3, title: 'Wave Pickleball', img: './images/Wave-pickleball.png', live: 'https://mazammustafa.github.io/WAVE-PICKLEBALL/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 4, title: 'Spider Security', img: './images/Spider-Security-Products.png', live: 'https://mazammustafa.github.io/Spider-Security-Product/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 5, title: 'Email Template', img: './images/Email-Template.png', live: 'https://mazammustafa.github.io/Email-Template/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 6, title: 'AceIT Technologies', img: './images/Ace-IT.png', live: 'https://mazammustafa.github.io/AceIT/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 7, title: 'Helen Bartley', img: './images/Helen-Bartley.png', live: 'https://mazammustafa.github.io/Helen-Bartley/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 8, title: "Salt'n Pepper", img: "./images/Salt'n Pepper.PNG", live: 'https://mazammustafa.github.io/Salt-n-Pepper/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 9, title: 'IT-Kol', img: './images/IT-Kol.PNG', live: 'https://mazammustafa.github.io/IT-Kol/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 10, title: 'InterActivision', img: './images/InterActvision.png', live: 'https://mazammustafa.github.io/InterActvision/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 11, title: 'Pacific Domes', img: './images/PacificDomes.png', live: 'https://mazammustafa.github.io/PacificDomes/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 12, title: 'Burch Packaging', img: './images/Burch.png', live: 'https://mazammustafa.github.io/Email-Newsletter-Template/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 13, title: 'Think Flagami', img: './images/Think-Flagami-Elementary.png', live: 'https://mazammustafa.github.io/Think-Flagmi-Elementary/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 14, title: 'BuildCon', img: './images/Build-con.PNG', live: 'https://mazammustafa.github.io/BuildCon/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 15, title: 'Healthly', img: './images/healthly.png', live: 'https://mazammustafa.github.io/Healthly/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 16, title: 'HireHack', img: './images/hire_logo.png', live: 'https://mazammustafa.github.io/HireHack/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 101, title: 'Takwa Home Care', img: '', live: 'https://takwahomecareservices.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 102, title: 'Fit & Fab', img: '', live: 'https://fitandfab.life/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 103, title: 'Happy Pappy', img: '', live: 'https://happypappy.co/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 104, title: 'Rightway Notaries', img: '', live: 'https://rightwaynotaries.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 105, title: 'Emerald Envy NC', img: '', live: 'https://emeraldenvync.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 106, title: 'Luxury Fragrance Collection', img: '', live: 'https://luxuryfrangrancecollection.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 107, title: 'Infinite Employer Solutions', img: '', live: 'https://www.infiniteemployersolutions.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 108, title: 'AJT Design', img: '', live: 'https://ajtdesign.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 109, title: 'Galil Med Spa', img: '', live: 'https://galilmedspa.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 110, title: 'Blackwater Protection', img: '', live: 'https://blackwater-protection.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 111, title: 'Happy Hours Style', img: '', live: 'https://happyhoursstyle.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 112, title: 'Enzo Design', img: '', live: 'https://enzodesign.eu/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 113, title: 'Dwellix', img: '', live: 'https://dwellix.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 114, title: 'Planet Moving ATX', img: '', live: 'https://planetmovingatx.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 115, title: 'Baby Knits & More', img: '', live: 'https://babyknitsandmore.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 116, title: 'Apex CM', img: '', live: 'https://apexcm.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 117, title: 'Ian J Alexander', img: '', live: 'https://www.ianjalexander.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 118, title: 'La Diva Global Cosmetics', img: '', live: 'https://ladivaglobal237cosmetics.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 119, title: 'Zen Cafe MN', img: '', live: 'https://zencafemn.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 120, title: 'King of Ice Cream', img: '', live: 'https://kingoficecream.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 121, title: 'Elazer Safe', img: '', live: 'https://www.elazersafe.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 122, title: 'KUN Cleaning', img: '', live: 'https://kuncleaning.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 123, title: 'Benefits Direct Ins', img: '', live: 'https://benefitsdirectins.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 124, title: 'Any Day Assistants', img: '', live: 'https://anydayassistants.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 125, title: 'Alignapull', img: '', live: 'https://alignapull.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 126, title: 'Amy Mantyka', img: '', live: 'https://amymantyka.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 127, title: 'Explaindigo', img: '', live: 'https://explaindigo.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 128, title: 'Global Pathway Agency', img: '', live: 'https://globalpathwayagency.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 129, title: 'Wholesale Balloons Direct', img: '', live: 'https://wholesaleballoonsdirect.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 130, title: 'Houser Construction LLC', img: '', live: 'https://houserconstructionllc.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 131, title: "Gloria's Global Market", img: '', live: 'https://gloriasglobalmarket.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 132, title: 'BCD IGTB', img: '', live: 'https://bcdigtb.org/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 133, title: 'Mystery Number Sports', img: '', live: 'https://mysterynumber-sports.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 134, title: 'Rose Catering', img: '', live: 'https://rosecatering.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 135, title: 'Lease Remarketing Services', img: '', live: 'https://leaseremarketingservices.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 136, title: 'Links Golf Shack', img: '', live: 'https://linksgolfshack.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 137, title: 'Dr. Daph', img: '', live: 'https://drdaph.org/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 138, title: 'Auto Gift Baskets', img: '', live: 'https://autogiftbasketsbyvelociteey.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 139, title: 'Febax', img: '', live: 'http://febax.de/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 140, title: 'Roushe LLC', img: '', live: 'https://roushellc.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 141, title: 'Neuro Resilient Therapy', img: '', live: 'https://neuroresilient-therapy.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 142, title: "Leon's Warts Books", img: '', live: 'http://leonswartsbooks.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 143, title: "Dancelia Children's Home", img: '', live: 'https://danceliachildrenshome.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 144, title: 'Sparkle Up Photos', img: '', live: 'https://sparkleupphotos.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 145, title: 'Obert Photographer', img: '', live: 'https://obertphotographer.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 146, title: 'A-M Janitorial Services', img: '', live: 'https://a-mjanitorialservices.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 147, title: 'Exquisite Drive', img: '', live: 'https://exquisitedrive.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 148, title: 'GTXS LLC', img: '', live: 'https://gtxsllc.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 149, title: 'Rapid Aviation', img: '', live: 'https://rapidaviation.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 150, title: 'Iyer Law Group', img: '', live: 'https://iyerlawgrp.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 151, title: "Mya's Place", img: '', live: 'https://myasplace.net/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 152, title: 'Limo Taxius', img: '', live: 'https://limotaxius.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 153, title: 'Stardust Airline', img: '', live: 'https://stardustairline.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 154, title: 'HVAC Prime', img: '', live: 'https://hvac-prime.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 155, title: 'Heavensent Hair Designer', img: '', live: 'https://heavensenthairdesigner.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 156, title: 'Food Science Club', img: '', live: 'https://foodscienceclub.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 157, title: 'E 25th St Collection', img: '', live: 'https://e25thstcollection.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 158, title: 'Electric Taxis', img: '', live: 'https://electrictaxis.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 159, title: "My Parents' Paradise", img: '', live: 'https://myparentsparadise.org/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 160, title: 'You Tried It', img: '', live: 'http://youtriedit.co/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 161, title: 'Ken-Wat', img: '', live: 'https://ken-wat.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 162, title: 'Perry Aka Tattoo Damion', img: '', live: 'https://perryakatattoodamion.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 163, title: 'Nifty Fix', img: '', live: 'https://nifty-fix.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 164, title: 'Darryl Philip', img: '', live: 'https://darrylphilip.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 165, title: 'Illusions in Sherwood', img: '', live: 'https://illusionsinsherwood.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 166, title: 'Ernest Long Jr', img: '', live: 'https://ernestlongjr.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 167, title: 'Green Recruit', img: '', live: 'https://greenrecruit.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 168, title: 'Prince of Peace Medical', img: '', live: 'https://princeofpeacemedical.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 169, title: 'Butler RV Marine Storage', img: '', live: 'https://butlerrvmarinestorage.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 170, title: 'Just Send Freight', img: '', live: 'https://justsendfreight.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 171, title: 'Wayne Loehring', img: '', live: 'https://wayneloehring.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 172, title: 'AAS Home Buyers', img: '', live: 'https://aashomebuyers.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 173, title: 'Platinum Leathers', img: '', live: 'https://platinumleathers.com/home/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 174, title: 'Dorrance Publishers', img: '', live: 'https://dorrancepublishers.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 175, title: 'Oscar Tshiebwe', img: '', live: 'https://theoscartshiebwe.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 176, title: 'Cal Laundry Systems', img: '', live: 'https://calaundrysystems.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 177, title: 'Will B Famous', img: '', live: 'http://willbfamous.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 178, title: 'Jayanthi Koka', img: '', live: 'https://www.jayanthikoka.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 179, title: 'Intl Business Network Online', img: '', live: 'https://internationalbusinessnetworkonline.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 180, title: 'Edna Writes', img: '', live: 'http://www.ednawrites.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 181, title: 'Emergency Layers', img: '', live: 'https://emergencylayersfordifficulttoresolvecases.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 182, title: 'Worm Rid', img: '', live: 'https://wormrid.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 183, title: 'Emergency Lawyers', img: '', live: 'https://emergencylawyersfordifficulttoresolvecases.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 184, title: 'Groceries 4 You', img: '', live: 'https://groceries4you.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 185, title: 'Diane Reichenbach Books', img: '', live: 'https://dianereichenbachbooksllc.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 186, title: 'Insight Paralegal', img: '', live: 'https://insightparalegal.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 187, title: '1 Operation Vet Help', img: '', live: 'https://1operationvethelp.org/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 188, title: 'Project Shewa', img: '', live: 'https://projectshewa.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 189, title: 'John Barnett Author', img: '', live: 'https://johnbarnettauthor.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 190, title: 'Bestenheider Stories', img: '', live: 'http://bestenheiderstories.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 191, title: 'Julie Lomaivboje', img: '', live: 'https://julielomaivboje.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 192, title: 'Pure Mekan', img: '', live: 'http://puremekan.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 193, title: 'Trail Campground', img: '', live: 'https://trailcampground.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 194, title: 'Blackjack Bootcamp', img: '', live: 'https://blackjack-bootcamp.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 195, title: 'Jake Mayberry', img: '', live: 'https://jakemayberry.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 196, title: 'Papa Jim Writes', img: '', live: 'https://papajimwrites.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 197, title: 'Myth vs Medicine', img: '', live: 'https://myth-vs-medicine.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 198, title: 'Author Tom Davy', img: '', live: 'https://authortomdavy.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 199, title: 'Cynthia Rea', img: '', live: 'https://cynthiarea.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 200, title: 'Jay Boyle Writes', img: '', live: 'https://jayboylewrites.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 201, title: 'Carol Astepper', img: '', live: 'https://carolastepper.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 202, title: 'Thompson Institute', img: '', live: 'https://thethompsoninsitute.info/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 203, title: 'Dr. Daph Net', img: '', live: 'https://drdaph.net/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 204, title: 'Blessed Creations NM', img: '', live: 'https://www.blessedcreationsnm.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 205, title: 'Jahani Law', img: '', live: 'https://jahanilaw.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 206, title: 'Hope Private Care', img: '', live: 'https://hopeprivatecare.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 207, title: 'Cynthia Michaels', img: '', live: 'https://cynthiamichaels.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 208, title: 'Georgian Pet Waste Mgmt', img: '', live: 'https://www.georgianpetwastemanagement.ca/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 209, title: 'The Sargonian Chronicles', img: '', live: 'https://thesargonianchronicles.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 210, title: 'Brianna Harris', img: '', live: 'https://briannaharris.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 211, title: 'Bible Talks', img: '', live: 'http://bible-talks.com/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 212, title: 'Angelic Lighthouse', img: '', live: 'https://angelic-lighthouse.square.site/', staging: '', dev: 'Muhammad Azam Mustafa' },
    { id: 213, title: 'Seventh Base Foundation', img: '', live: 'https://seventhbasefoundation.org/', staging: '', dev: 'Muhammad Azam Mustafa' }
];

var projects = [];
var isFirebaseReady = false;

// Firebase se projects load karna
function loadProjectsFromFirebase() {
    projectsRef.once('value')
        .then(function(snapshot) {
            var data = snapshot.val();
            if (data && Array.isArray(data) && data.length > 0) {
                projects = data;
            } else {
                // Agar Firebase mein data nahi hai tou default use karo aur Firebase mein save karo
                projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
                saveProjectsToFirebase();
            }
            isFirebaseReady = true;
            render();
            showToast('Projects loaded from Firebase!');
        })
        .catch(function(error) {
            console.error('Firebase load error:', error);
            // Fallback to localStorage
            projects = loadProjectsFromLocalStorage();
            isFirebaseReady = true;
            render();
            showToast('Loaded from local backup');
        });
}

// Firebase mein projects save karna
function saveProjectsToFirebase() {
    if (!isFirebaseReady) return;
    
    projectsRef.set(projects)
        .then(function() {
            // Backup ke liye localStorage mein bhi save karo
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
            } catch (e) {}
            
            document.getElementById('save-msg').textContent = 'Saved to Firebase at ' + new Date().toLocaleTimeString();
            console.log('Saved to Firebase successfully!');
        })
        .catch(function(error) {
            console.error('Firebase save error:', error);
            showToast('Error saving to Firebase!');
        });
}

// LocalStorage se load karna (backup ke liye)
function loadProjectsFromLocalStorage() {
    try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) { 
            var p = JSON.parse(raw); 
            if (Array.isArray(p) && p.length > 0) return p; 
        }
    } catch (e) { }
    return JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
}

function initials(n) { 
    return n.split(' ').slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase(); 
}

function showToast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; 
    t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 2600);
}

function updateStats() {
    document.getElementById('stat-total').textContent = projects.length;
    document.getElementById('stat-live').textContent = projects.filter(function (p) { return p.live; }).length;
}

function makeCard(p, isNew) {
    var card = document.createElement('div');
    card.className = 'card' + (isNew ? ' new' : '');
    card.dataset.id = p.id;
    var imgSrc = p.img || faviconUrl(p.live);
    var thumbInner = imgSrc
        ? '<img src="' + imgSrc + '" alt="' + p.title + '" onerror="this.style.display=\'none\';this.nextSibling.style.display=\'flex\'">'
        + '<div class="card-monogram" style="display:none">' + initials(p.title) + '</div>'
        : '<div class="card-monogram">' + initials(p.title) + '</div>';
    var badges = '';
    if (p.live) badges += '<a class="badge badge-live" href="' + p.live + '" target="_blank">Live</a>';
    if (p.staging) badges += '<a class="badge badge-staging" href="' + p.staging + '" target="_blank">Staging</a>';
    card.innerHTML =
        '<button class="del-btn" onclick="deleteProject(' + p.id + ',event)">&#x00D7;</button>' +
        '<div class="card-thumb">' + thumbInner + '</div>' +
        '<div class="card-body"><div class="card-name">' + p.title + '</div><div class="card-dev">' + p.dev + '</div>' +
        (badges ? '<div class="card-badges">' + badges + '</div>' : '') + '</div>';
    return card;
}

function makeComingCard() {
    var c = document.createElement('div');
    c.className = 'card coming-card';
    c.innerHTML = '<div class="card-thumb"><div class="coming-dashes"><span></span><span></span><span></span></div><div class="coming-tag">Coming Soon</div></div><div class="card-body"><div class="card-name">New Project</div><div class="card-dev">&mdash;</div></div>';
    return c;
}

function render() {
    var grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    projects.forEach(function (p) { grid.appendChild(makeCard(p, false)); });
    grid.appendChild(makeComingCard());
    grid.appendChild(makeComingCard());
    updateStats();
}

function deleteProject(id, e) {
    e.stopPropagation();
    if (!confirm('Remove this project?')) return;
    projects = projects.filter(function (p) { return p.id !== id; });
    saveProjectsToFirebase();
    var el = document.querySelector('.card[data-id="' + id + '"]');
    if (el) { 
        el.style.transition = 'all 0.22s'; 
        el.style.opacity = '0'; 
        el.style.transform = 'scale(0.8)'; 
        setTimeout(function () { el.remove(); updateStats(); }, 220); 
    }
    showToast('Project removed from Firebase.');
}

function addProject(title, img, live, staging, dev) {
    if (!title || !dev) { 
        showToast('Title aur Developer name zaroori hai!'); 
        return false; 
    }
    var p = { 
        id: Date.now(), 
        title: title.trim(), 
        img: img.trim(), 
        live: live.trim(), 
        staging: staging.trim(), 
        dev: dev.trim() 
    };
    projects.push(p);
    saveProjectsToFirebase();
    var grid = document.getElementById('projectsGrid');
    var comings = grid.querySelectorAll('.coming-card');
    var card = makeCard(p, true);
    if (comings.length > 0) grid.insertBefore(card, comings[0]); 
    else grid.appendChild(card);
    updateStats();
    showToast('Project added to Firebase!');
    return true;
}

function addFromInline() {
    var ok = addProject(
        document.getElementById('f-title').value, 
        document.getElementById('f-img').value, 
        document.getElementById('f-live').value, 
        document.getElementById('f-staging').value, 
        document.getElementById('f-dev').value
    );
    if (ok) clearInlineForm();
}

function clearInlineForm() {
    ['f-title', 'f-img', 'f-live', 'f-staging'].forEach(function (id) { 
        document.getElementById(id).value = ''; 
    });
    document.getElementById('f-dev').value = 'Muhammad Azam Mustafa';
    document.getElementById('f-preview').style.display = 'none';
}

function setupPreview(inputId, previewId, imgId) {
    var input = document.getElementById(inputId), 
        wrap = document.getElementById(previewId), 
        img = document.getElementById(imgId), 
        t;
    input.addEventListener('input', function () {
        clearTimeout(t);
        t = setTimeout(function () {
            var url = input.value.trim();
            if (url) { 
                img.src = url; 
                img.onload = function () { wrap.style.display = 'flex'; }; 
                img.onerror = function () { wrap.style.display = 'none'; }; 
            } else { 
                wrap.style.display = 'none'; 
            }
        }, 600);
    });
}

setupPreview('f-img', 'f-preview', 'f-preview-img');
setupPreview('m-img', 'm-preview', 'm-preview-img');

var overlay = document.getElementById('modalOverlay');

function openModal() { 
    overlay.classList.add('open'); 
    document.body.style.overflow = 'hidden'; 
    document.getElementById('m-title').focus(); 
}

function closeModal() {
    overlay.classList.remove('open'); 
    document.body.style.overflow = '';
    ['m-title', 'm-img', 'm-live', 'm-staging'].forEach(function (id) { 
        document.getElementById(id).value = ''; 
    });
    document.getElementById('m-dev').value = 'Muhammad Azam Mustafa';
    document.getElementById('m-preview').style.display = 'none';
}

document.getElementById('fabBtn').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
document.getElementById('modalSubmitBtn').addEventListener('click', function () {
    var ok = addProject(
        document.getElementById('m-title').value, 
        document.getElementById('m-img').value, 
        document.getElementById('m-live').value, 
        document.getElementById('m-staging').value, 
        document.getElementById('m-dev').value
    );
    if (ok) closeModal();
});

// Page load hone pe Firebase se data load karo
loadProjectsFromFirebase();