// Cayra iPhone AU
const CORRECT_PASSCODE = "2509";

const apps = [
  { id: "whatsapp", name: "WhatsApp", icon: "◉", cls: "whatsapp" },
  { id: "instagram", name: "Instagram", icon: "◎", cls: "instagram" },
  { id: "photos", name: "Photos", icon: "✿", cls: "photos" },
  { id: "camera", name: "Camera", icon: "▣", cls: "camera" },
  { id: "twitter", name: "X", icon: "𝕏", cls: "twitter" },
  { id: "notes", name: "Notes", icon: "▤", cls: "notes" },
  { id: "music", name: "Music", icon: "♫", cls: "music" },
  { id: "roblox", name: "Roblox", icon: "R", cls: "roblox" },
  { id: "mail", name: "Mail", icon: "✉", cls: "mail" },
  { id: "settings", name: "Settings", icon: "⚙", cls: "settings" }
];

const whatsappChats = {
  "mnyt🐵": [
    ["mnyt🐵","woy","16:32"],
    ["mnyt🐵","woy","16:32"],
    ["mnyt🐵","jamet","16:32"],
    ["mnyt🐵","WOY","16:32"],
    ["Aku","aoa si mnyt","16:40"],
    ["Aku","brisik","16:40"],
    ["mnyt🐵","dah sampe rumah?","16:42"],
    ["Aku","sypa","16:43"],
    ["mnyt🐵","anjing gue","16:43"],
    ["Aku","🖕","16:43"],
    ["mnyt🐵","ya lo lah bego","16:44"],
    ["Aku","udah","16:44"],
    ["mnyt🐵","woy","16:46"],
    ["mnyt🐵","woy","16:46"],
    ["mnyt🐵","WOYYYYYYYYY","16:46"],
    ["Aku","gausah woy woy","16:47"],
    ["Aku","gw punya nama anjig","16:47"],
    ["mnyt🐵","hehe","16:47"],
    ["Aku","lo bener2 ya","16:48"],
    ["Aku","pengen gw ptahib tuh tangan rasanya","16:48"],
    ["Aku","ini lgi, kaoan aj lo buka hp gw. Lo hack ya","16:48"],
    ["Aku","perasaan konta lo gue block","16:48"],
    ["mnyt🐵","lagian lo lebay bgt pake segala block gue segala","16:49"],
    ["mnyt🐵","atau lo masih belom bisa moveon ya dari gue? makanya lo blok gue🤭","16:49"],
    ["Aku","[Stiker: Ngomong sama pantat]","16:50"],
    ["mnyt🐵","sorry, tdi gw panik banget sumpah","16:51"],
    ["mnyt🐵","gue ga liat-liat siapa yang gue tarik, eh taunya mak Lampir awokawok","16:51"],
    ["Aku","[Stiker: Foto tidur]","16:52"],
    ["Aku","seraj lo dab anjing","16:52"],
    ["mnyt🐵","ini typo lo kok makin menjadi-jadi ya","16:53"],
    ["Aku","sksk gw","16:53"],
    ["Aku","asla lo tau, padahak gw lagi mode ninja ya, eh main lu tarik2 aja","16:54"],
    ["Aku","klo semosal ada yang nyidul gw gimaan bnagsat","16:54"],
    ["Aku","bbisa hanbsur reputasi gw","16:54"],
    ["mnyt🐵","alah","16:55"],
    ["mnyt🐵","emang masih ada yang mau nge-fans sama artis rewel kayak lo?","16:55"],
    ["mnyt🐵","harusnya lo bangga dikit lah, secara gak langsung gue akuin jadi pacar lagi","16:55"],
    ["mnyt🐵","vokalis band nomor satu nih yang ngomong","16:56"],
    ["Aku","NAJIS","16:56"],
    ["Aku","NAJIS","16:56"],
    ["mnyt🐵","heh, kaca di rumah lo pecah ya?","16:57"],
    ["mnyt🐵","sok najis najis","16:57"],
    ["mnyt🐵","dulu lo yang nembak gue pake surat warna pink bau parfum malaikat subuh itu ya!","16:57"],
    ["mnyt🐵","jangan amnesia lo","16:57"],
    ["mnyt🐵","gue sebenernya juga heran, kenapa dulu mau-mauan sama cwe yang kalo ketawa suaranya kayak knalpot racing","16:58"],
    ["Aku","ITU SURAT DITITIPIN TEMEN GUE YA, GUE CUMA BANTU NGASIHIN","16:58"],
    ["Aku","pokonya beok lo harus klarifikadi ke nykap lo klo qta gk ada apa2","16:59"],
    ["Aku","ga dudi gw masuk ke selasih keliuarga lo","16:59"],
    ["mnyt🐵","gak bisa","17:00"],
    ["mnyt🐵","nyokap gue udah terlanjur suka sama lo","17:00"],
    ["mnyt🐵","katanya \"wah pacar kamu kalem ya, pendiem walaupun pake masker\"","17:00"],
    ["mnyt🐵","awokawok","17:01"],
    ["mnyt🐵","nyokap gatau aja, kalo lo ga pake masker mungkin meja cafe abis lo lalapin","17:01"],
    ["Aku","JIAZA ANJING","17:02"],
    ["Aku","gw blok ya iji","17:02"],
    ["mnyt🐵","jangan diblok dong, ntar kalo gue disuruh bawa lo makan bareng keluarga gimana?","17:03"],
    ["Aku","[Kontak diblokir]","17:03"]
  ],

  "Stezi": [
    ["Stezi","Cayra","09:12"],
    ["Stezi","Cayraa","09:13"],
    ["Stezi","Jawab","09:14"],
    ["Aku","ap sih","09:20"],
    ["Stezi","Lo dimana?","09:21"],
    ["Aku","di puncak monas","09:22"],
    ["Stezi","serius monyet","09:22"],
    ["Stezi","Syuting jam 10 jangan lupa","09:23"],
    ["Aku","iya iya tau","09:25"],
    ["Stezi","Jangan iya iya doang","09:25"],
    ["Stezi","besok harus bangun pagi, ntar ada driver jemput","09:26"],
    ["Aku","gausah gw mau nytir sndiri","09:28"],
    ["Stezi","Cayra sumpah ya","09:28"],
    ["Stezi","Jangan ulangi kejadian kemarin","09:29"],
    ["Aku","iyahhh","09:30"],
    ["Stezi","Cepat. Jangan bikin gue telpon lagi.","09:31"]
  ],

  "Yebi": [
    ["Yebi","Cay, besok jadi nonton bareng?","22:15"],
    ["Aku","Liat beosk dehg","22:20"],
    ["Yebi","Jangan liat liat besok mulu","22:21"]
  ],

  "Sutradara": [
    ["Sutradara","Cayra, besok scene emosionalnya kita ambil pagi ya","20:45"],
    ["Aku","Siap kak","20:50"]
  ]
};

const instagramDMs = {
  "PremRajveeeKumar_Real": [
    ["PremRajveeeKumar_Real","Halah, sok cantik lo","14:05"],
    ["PremRajveeeKumar_Real","Padahal aslinya kayak remah rengginang kalo ga pake filter","14:05"],
    ["PremRajveeeKumar_Real","Artis sombong","14:06"],
    ["PremRajveeeKumar_Real","Sok jual mahal banget","14:06"],
    ["PremRajveeeKumar_Real","Rasain tuh, ban mobilnya kempes kan tadi? awokawok","14:07"],
    ["PremRajveeeKumar_Real","Mending liat hidung gue, asli dari lahir","14:07"],
    ["PremRajveeeKumar_Real","Ga kaya hidung lo hasil vermak","14:08"],
    ["PremRajveeeKumar_Real","Lebih cakepan juga gue kemana-mana","14:08"],
    ["PremRajveeeKumar_Real","Liat nih foto gue pas lagi senyum, manis kan?","14:09"],
    ["PremRajveeeKumar_Real","Pantesan tadi di jalan banyak pohon","14:09"],
    ["PremRajveeeKumar_Real","Ternyata ada titisan reog mobilnya mogok awokawok","14:10"],
    ["PremRajveeeKumar_Real","Lo kalo matah mukanya kaya aspal baru ya","14:10"],
    ["PremRajveeeKumar_Real","Kasar-kasar gimana gitu","14:11"],
    ["Aku","HEH","14:15"],
    ["Aku","lw syp?","14:15"],
    ["Aku","brnainya lw ngatain gue reof","14:16"],
    ["Aku","Lw gak tau gw siapa?","14:16"],
    ["PremRajveeeKumar_Real","waduh, mbak artis marah","14:17"],
    ["PremRajveeeKumar_Real","Takuttt...","14:17"],
    ["PremRajveeeKumar_Real","Eh ga deng, lebih takut liat filter lo yang tebelnya kayak bedak nyonya-nyonya","14:18"],
    ["PremRajveeeKumar_Real","Lagian siapa yang ga kenal lo, si artis yang hobinya akting nangis padahal aslinya galak kayak herder","14:18"],
    ["Aku","BANGKE ORANG MANA SIH LU MNYT","14:20"],
    ["Aku","[Mencoba menelepon... tidak diangkat]","14:21"]
  ]
};

const notesData = [
  {
    title: "Hari ini berantakan",
    date: "23 Oktober 2026",
    body: "Jiaza masih aja bikin ulah. Udah diblok tapi masih kepikiran. Besok syuting, harus fokus."
  },
  {
    title: "Stezi marah lagi",
    date: "22 Oktober 2026",
    body: "Stezi bilang jangan ulangi kejadian kemarin. Aku janji sih... tapi ya susah."
  }
];

let currentApp = "";
let currentChatName = "";
let currentChatSource = "whatsapp";

function $(id) {
  return document.getElementById(id);
}

function safeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function avatarInfo(name) {
  const map = {
    "mnyt🐵": { file: "assets/jiwoo.jpg", initial: "J" },
    "Stezi": { file: "assets/stella.jpg", initial: "S" },
    "Yebi": { file: "assets/yuha.jpg", initial: "Y" },
    "Cayra": { file: "assets/carmen.jpg", initial: "C" },
    "PremRajveeeKumar_Real": { file: "assets/prem.jpg", initial: "P" },
    "Sutradara": { file: "", initial: "D" }
  };

  return map[name] || {
    file: "",
    initial: String(name || "?").charAt(0).toUpperCase()
  };
}

function setAvatar(container, name) {
  if (!container) return;
  const info = avatarInfo(name);

  container.innerHTML = info.file
    ? `<img src="${info.file}" alt="" onerror="this.remove()"><span>${safeText(info.initial)}</span>`
    : `<span>${safeText(info.initial)}</span>`;
}

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });

  ["time", "home-time", "lock-status-time", "wa-time", "ig-time"].forEach(id => {
    if ($(id)) $(id).textContent = time;
  });

  if ($("date")) $("date").textContent = date;

  document.querySelectorAll(".live-time").forEach(el => {
    el.textContent = time;
  });
}

function showPasscode() {
  const panel = $("passcode-screen");
  if (panel) panel.classList.remove("hidden");

  if ($("passcode")) {
    $("passcode").value = "";
    $("passcode").focus();
  }

  if ($("passcode-error")) $("passcode-error").textContent = "";
}

function cancelPasscode() {
  if ($("passcode-screen")) $("passcode-screen").classList.add("hidden");
  if ($("passcode")) $("passcode").value = "";
  if ($("passcode-error")) $("passcode-error").textContent = "";
}

function checkPasscode() {
  const input = $("passcode") ? $("passcode").value.trim() : "";

  if (input === CORRECT_PASSCODE) {
    $("lockscreen")?.classList.add("hidden");
    $("homescreen")?.classList.remove("hidden");
    cancelPasscode();
  } else {
    if ($("passcode-error")) {
      $("passcode-error").textContent = "Kode sandinya salah, coba lagi ya.";
    } else {
      alert("Kode sandi salah. Coba 2509.");
    }

    if ($("passcode")) {
      $("passcode").value = "";
      $("passcode").focus();
    }
  }
}

function openApp(name) {
  const target = $(name);

  if (!target) {
    console.warn("Layar aplikasi tidak ditemukan:", name);
    return;
  }

  document.querySelectorAll(".app-screen").forEach(el => {
    el.classList.add("hidden");
  });

  $("homescreen")?.classList.add("hidden");
  target.classList.remove("hidden");
  currentApp = name;

  if (name === "whatsapp") renderChatList("whatsapp");
  if (name === "instagram") renderChatList("instagram");
  if (name === "notes") renderNotes();
}

function closeApp() {
  document.querySelectorAll(".app-screen").forEach(el => {
    el.classList.add("hidden");
  });

  $("chat-detail")?.classList.add("hidden");
  $("homescreen")?.classList.remove("hidden");
  currentApp = "";
}

function backToList() {
  $("chat-detail")?.classList.add("hidden");
  $(currentChatSource)?.classList.remove("hidden");
  currentApp = currentChatSource;
}

function renderApps() {
  const grid = $("apps-grid");
  if (!grid) return;

  grid.innerHTML = apps.map(app => `
    <button class="app-tile" type="button" onclick="openApp('${app.id}')">
      <span class="app-icon ${app.cls}">${app.icon}</span>
      <span class="app-label">${app.name}</span>
    </button>
  `).join("");
}

function renderChatList(app) {
  const data = app === "whatsapp" ? whatsappChats : instagramDMs;
  const container = $(app + "-list");
  if (!container) return;

  container.innerHTML = Object.keys(data).map(name => {
    const msgs = data[name];
    const last = msgs[msgs.length - 1];
    const info = avatarInfo(name);
    const preview = last ? last[1] : "Belum ada pesan";

    return `
      <button class="chat-list-item" type="button"
        onclick="openChat('${app}', ${JSON.stringify(name).replace(/'/g, "&#39;")})">
        <span class="avatar">
          ${info.file ? `<img src="${info.file}" alt="" onerror="this.remove()">` : ""}
          <span>${safeText(info.initial)}</span>
        </span>
        <span class="chat-list-copy">
          <strong>${safeText(name)}</strong>
          <small>${safeText(preview)}</small>
        </span>
        <span class="chat-list-meta">${safeText(last ? last[2] : "")}</span>
      </button>
    `;
  }).join("");
}

function openChat(app, name) {
  const data = app === "whatsapp" ? whatsappChats : instagramDMs;
  const messages = data[name];

  if (!messages || !$("chat-detail")) return;

  currentChatSource = app;
  currentChatName = name;
  currentApp = app;

  $(app)?.classList.add("hidden");
  $("chat-detail").classList.remove("hidden");

  if ($("chat-name")) $("chat-name").textContent = name;

  if ($("chat-subtitle")) {
    $("chat-subtitle").textContent =
      name === "mnyt🐵" ? "terakhir dilihat baru-baru ini" : "online";
  }

  setAvatar($("chat-avatar"), name);

  if ($("chat-context")) $("chat-context").textContent = "Hari ini";

  renderMessages(messages);
}

function renderMessages(messages) {
  const container = $("chat-messages");
  if (!container) return;

  container.innerHTML = messages.map(msg => {
    const [from, text, time] = msg;
    const type = from === "Aku" ? "me" : "them";
    const sticker = /^\[Stiker:/.test(text);

    return `
      <div class="message ${type}${sticker ? " sticker-message" : ""}">
        <div class="message-text">${safeText(text)}</div>
        <div class="message-time">
          ${safeText(time)}${type === "me" ? " ✓✓" : ""}
        </div>
      </div>
    `;
  }).join("");

  const scroll = $("chat-scroll");
  if (scroll) scroll.scrollTop = scroll.scrollHeight;
}

function renderNotes() {
  const container = $("notes-content");
  if (!container) return;

  container.innerHTML = notesData.map(note => `
    <article class="note-item">
      <h3>${safeText(note.title)}</h3>
      <small>${safeText(note.date)}</small>
      <p>${safeText(note.body)}</p>
    </article>
  `).join("");
}

function sendMessage(event) {
  event.preventDefault();

  const input = $("message-input");
  const text = input ? input.value.trim() : "";

  if (!text || !currentChatName) return;

  const data = currentChatSource === "whatsapp"
    ? whatsappChats
    : instagramDMs;

  if (!data[currentChatName]) data[currentChatName] = [];

  const now = new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });

  data[currentChatName].push(["Aku", text, now]);
  renderMessages(data[currentChatName]);

  if (input) input.value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  renderApps();
  updateTime();
  setInterval(updateTime, 30000);

  $("unlock-button")?.addEventListener("click", showPasscode);

  $("lockscreen")?.addEventListener("click", event => {
    if (
      event.target.closest("button") ||
      event.target.closest("input") ||
      event.target.closest(".passcode-panel")
    ) return;

    showPasscode();
  });

  $("passcode")?.addEventListener("keydown", event => {
    if (event.key === "Enter") checkPasscode();
  });

  $("message-form")?.addEventListener("submit", sendMessage);

  document.querySelector(".home-indicator")?.addEventListener("click", () => {
    if (!$("homescreen")?.classList.contains("hidden")) return;
    closeApp();
  });
});
