const services = [
  ["Terapevt ko'rigi", "Terapiya", 120000, "Umumiy holat va shamollash maslahati"],
  ["LOR qabuli", "LOR", 150000, "Quloq, burun va tomoq shikoyati"],
  ["Nevrolog", "Nevrologiya", 180000, "Bosh og'rig'i bo'yicha maslahat"],
  ["Pediatr", "Pediatriya", 130000, "Bolalar ko'rigi va emlash eslatmasi"],
  ["Kardiolog", "Yurak", 200000, "Yurak-qon tomir maslahati"],
  ["Umumiy qon", "Laboratoriya", 90000, "Namuna tahlil kartasi"],
  ["UZI", "Diagnostika", 160000, "Shifokor yo'llanmasi bilan"],
  ["EKG", "Diagnostika", 80000, "Yurak yozuvi"],
  ["Skrining", "Profilaktika", 140000, "Rejali tekshiruv"],
  ["Video qabul", "Onlayn", 100000, "Uydan dastlabki maslahat"],
  ["Muolaja", "Muolaja", 70000, "Shifokor belgilagan tartib"],
  ["Bolalar massaji", "Pediatriya", 110000, "Mutaxassis seansi"],
  ["Quloq ko'rigi", "LOR", 90000, "LOR xonasi"],
  ["Oilaviy maslahat", "Terapiya", 160000, "Bir necha a'zo uchun reja"],
  ["Siydik tahlili", "Laboratoriya", 70000, "Laboratoriya navbati"],
  ["Takroriy nevrolog", "Nevrologiya", 150000, "Keyingi tashrif"],
  ["Kattalar massaji", "Muolaja", 120000, "Belgilangan seans"],
  ["Profilaktika", "Profilaktika", 100000, "Mavsumiy reja"]
];
const first = ["Malika", "Javohir", "Nilufar", "Bekzod", "Sevara", "Aziz", "Dilnoza", "Sardor", "Madina", "Akmal", "Gulnora", "Jasur"];
const last = ["Karimova", "Rasulov", "Yusupova", "Alimov", "Qodirova", "Tursunov", "Ergasheva", "Ismoilov", "Rahimova", "Norboyev", "Saidova", "Holmatov"];
const specs = ["Terapevt", "LOR", "Nevrolog", "Pediatr", "Kardiolog", "Laboratoriya"];
const cities = ["Toshkent", "Samarqand", "Buxoro", "Andijon", "Namangan", "Farg'ona"];
const colors = ["#0f766e", "#0369a1", "#7c3aed", "#b45309", "#be123c", "#047857"];
const doctors = Array.from({ length: 36 }, (_, i) => ({
  name: first[i % 12] + " " + last[(i + 3) % 12],
  spec: specs[i % 6],
  city: cities[i % 6],
  exp: (6 + (i % 12)) + " yil",
  rate: (4.5 + ((i * 3) % 6) / 10).toFixed(1),
  price: 100000 + (i % 8) * 15000,
  color: colors[i % 6]
}));
const articles = [
  ["Shamollashda dam olish", "Profilaktika", "Iliq suyuqlik iching va dam oling. Harorat chiqsa shifokorga yoziling."],
  ["Emlash eslatmasi", "Pediatriya", "Muddatni poliklinika kartasi bilan solishtiring."],
  ["EKG qachon kerak", "Diagnostika", "Tekshiruvni shifokor tavsiya qiladi."],
  ["Uyqu tartibi", "Nevrologiya", "Bir xil yotish vaqti foydali."],
  ["Quloq og'rig'i", "LOR", "Tomchini o'zingiz tanlamang, LOR ko'rsin."],
  ["Skrining", "Profilaktika", "Erta yozilish navbatni qisqartiradi."],
  ["Oilaviy aptechka", "Terapiya", "Muddati o'tgan dori saqlamang."],
  ["Video qabul", "Onlayn", "Tinch xona va internet tayyorlang."],
  ["Suv ichish", "Pediatriya", "Issiq kunda suvni unutmang."],
  ["Tahlil kuni", "Laboratoriya", "Och qorin kerakligini oldindan so'rang."],
  ["Yengil yurish", "Profilaktika", "Kundalik yurish foydali."],
  ["Maktab sumkasi", "Pediatriya", "Og'ir sumka yelkani charchatishi mumkin."],
  ["Chang mavsumi", "LOR", "Mavsumda shifokordan so'rang."],
  ["Nonushta", "Terapiya", "Ertalab ovqatlanish energiyani ushlab turadi."],
  ["Ekran tanaffusi", "Profilaktika", "Uzoq tikmang."],
  ["Qo'l yuvish", "Profilaktika", "Ovqatdan oldin qo'l yuving."],
  ["Tish tozalash", "Pediatriya", "Kuni ikki marta tozalang."],
  ["Sport oldidan", "Terapiya", "Og'riq bo'lsa mashqni to'xtating."],
  ["Qon tahlili", "Laboratoriya", "Natijani shifokor izohlaydi."],
  ["Kuzgi reja", "Profilaktika", "Mavsum oldidan ko'rikni rejalang."],
  ["Isitma yozuvi", "Pediatriya", "O'lchab yozib boring."],
  ["Navbat vaqti", "Onlayn", "Kechiksangiz registraturaga ayting."],
  ["Hujjatlar", "Terapiya", "Eski tahlil varaqasini oling."],
  ["Yakshanba", "Filial", "Namoyish jadvalida dam olish kuni."]
];
const faqs = [
  ["Navbar qayerda?", "Har sahifada o'z navbar kodi alohida yozilgan."],
  ["Tashxis bormi?", "Yo'q. Sayt kasallik aniqlamaydi va dori yozmaydi."],
  ["Ma'lumot qayerda saqlanadi?", "Navbat, eslatma va xabar shu brauzerning localStorage ida."],
  ["Nechta sahifa bor?", "Bosh, xizmatlar, shifokorlar, maqolalar, kabinet va aloqa."]
];
const branches = [
  ["Toshkent", "Gulxaniy ko'chasi, 12", "09:00–16:00"],
  ["Samarqand", "Markaziy ko'cha, namoyish", "09:00–16:00"],
  ["Buxoro", "Namoyish manzil", "09:00–15:00"],
  ["Andijon", "Namoyish manzil", "09:00–16:00"],
  ["Namangan", "Namoyish manzil", "09:00–16:00"],
  ["Farg'ona", "Namoyish manzil", "09:00–15:30"]
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const money = (n) => Number(n).toLocaleString("uz-UZ") + " so'm";
const params = new URLSearchParams(location.search);
const state = { tag: params.get("tur") || "Barchasi", page: 1, slot: "10:00" };

function load(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; }
}
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function toast(text) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = text;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}
function openModal(title, body) {
  $("#modalTitle").textContent = title;
  $("#modalBody").textContent = body;
  $("#modal").classList.add("open");
}
function tomorrow() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().slice(0, 10);
}

document.addEventListener("click", (event) => {
  if (event.target.id === "menuBtn") $("#menu").classList.toggle("open");
  if (event.target.closest("#menu a")) $("#menu")?.classList.remove("open");
  if (event.target.id === "modal" || event.target.id === "closeModal") $("#modal")?.classList.remove("open");

  const chip = event.target.closest("[data-filter]");
  if (chip) {
    state.tag = chip.dataset.filter;
    state.page = 1;
    $$("[data-filter]").forEach((item) => item.classList.toggle("active", item.dataset.filter === state.tag));
    renderServices();
    renderArticles();
  }
  const pageBtn = event.target.closest("[data-page]");
  if (pageBtn) {
    state.page = Number(pageBtn.dataset.page);
    renderDoctors();
  }
  const book = event.target.closest("[data-book]");
  if (book) {
    localStorage.setItem("sd-picked", book.dataset.book);
    location.href = "kabinet.html";
  }
  const article = event.target.closest("[data-art]");
  if (article) {
    const item = articles[Number(article.dataset.art)];
    openModal(item[0], item[2] + " Bu qisqa eslatma, tibbiy xulosa emas.");
  }
  const tab = event.target.closest("[data-tab]");
  if (tab) {
    $$(".tab").forEach((item) => item.classList.toggle("on", item === tab));
    $("#tabAppts").hidden = tab.dataset.tab !== "appts";
    $("#noteForm").hidden = tab.dataset.tab !== "notes";
    $("#familyForm").hidden = tab.dataset.tab !== "family";
  }
  const slot = event.target.closest("[data-slot]");
  if (slot) {
    state.slot = slot.dataset.slot;
    renderSlots();
  }
  const del = event.target.closest("[data-del]");
  if (del) {
    save("sd-appts", load("sd-appts").filter((item) => item.id !== del.dataset.del));
    renderCabinet();
    toast("Navbat o'chirildi");
  }
  const faq = event.target.closest(".faq-item button");
  if (faq) faq.parentElement.classList.toggle("open");
});

function renderHome() {
  const box = $("#openNow");
  if (box) {
    box.innerHTML = "<strong>Bugun ochiq yo'nalishlar</strong>" + specs.map((spec) =>
      `<a class="list-card" style="display:block;margin-top:8px" href="shifokorlar.html?spec=${encodeURIComponent(spec)}">${spec} · navbat ochiq</a>`
    ).join("");
  }
  const departments = $("#homeDepts");
  if (departments) {
    departments.innerHTML = [
      ["Xizmatlar", "xizmatlar.html", "18 ta karta va kalkulyator"],
      ["Shifokorlar", "shifokorlar.html", "36 ta profil va filtr"],
      ["Maqolalar", "maqolalar.html", "24 ta oilaviy eslatma"],
      ["Kabinet", "kabinet.html", "Navbat va eslatma"],
      ["Aloqa", "aloqa.html", "6 ta filial"],
      ["Savol-javob", "index.html#savol", "Sayt qoidalari"]
    ].map((item) => `<a class="card" href="${item[1]}"><h3>${item[0]}</h3><p class="muted">${item[2]}</p></a>`).join("");
  }
  const faq = $("#faq");
  if (faq) faq.innerHTML = faqs.map((item) => `<div class="faq-item"><button type="button">${item[0]}</button><p>${item[1]}</p></div>`).join("");
}

function renderServices() {
  const grid = $("#serviceGrid");
  if (!grid) return;
  const filters = $("#serviceFilters");
  const tags = ["Barchasi", ...new Set(services.map((item) => item[1]))];
  if (filters && !filters.childElementCount) {
    filters.innerHTML = tags.map((tag) => `<button class="chip ${tag === state.tag ? "active" : ""}" data-filter="${tag}" type="button">${tag}</button>`).join("");
  }
  const list = services.filter((item) => state.tag === "Barchasi" || item[1] === state.tag);
  grid.innerHTML = list.map((item) => `<article class="card"><span class="badge">${item[1]}</span><h3>${item[0]}</h3><p class="muted">${item[3]}</p><b class="price">${money(item[2])}</b><a class="btn" href="kabinet.html">Shu xizmatga yozilish</a></article>`).join("") || "<p>Bu yo'nalishda xizmat topilmadi.</p>";
  const boxes = $("#calcBoxes");
  if (boxes && !boxes.childElementCount) {
    boxes.innerHTML = services.slice(0, 8).map((item) => `<label><input type="checkbox" data-price="${item[2]}"> ${item[0]} — ${money(item[2])}</label>`).join("");
  }
}

function calc() {
  if (!$("#calcTotal")) return;
  let sum = 0;
  const names = [];
  $$("#calcForm input:checked").forEach((box) => {
    sum += Number(box.dataset.price);
    names.push(box.parentElement.textContent.trim().split("—")[0]);
  });
  $("#calcTotal").textContent = money(sum);
  $("#calcList").textContent = names.join(", ") || "Xizmat tanlanmagan";
}

function renderDoctors() {
  const grid = $("#doctorGrid");
  if (!grid) return;
  const spec = $("#spec");
  const city = $("#city");
  if (!spec.childElementCount) {
    spec.innerHTML = ["Barchasi", ...specs].map((item) => `<option>${item}</option>`).join("");
    city.innerHTML = ["Barchasi", ...cities].map((item) => `<option>${item}</option>`).join("");
    if (params.get("spec")) spec.value = params.get("spec");
    if (params.get("city")) city.value = params.get("city");
  }
  const query = ($("#q").value || "").toLowerCase();
  let list = doctors.filter((doctor) =>
    (spec.value === "Barchasi" || doctor.spec === spec.value) &&
    (city.value === "Barchasi" || doctor.city === city.value) &&
    `${doctor.name} ${doctor.spec} ${doctor.city}`.toLowerCase().includes(query)
  );
  const sort = $("#sort").value;
  list = [...list].sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : sort === "price" ? a.price - b.price : Number(b.rate) - Number(a.rate));
  const size = 9;
  const pages = Math.max(1, Math.ceil(list.length / size));
  state.page = Math.min(state.page, pages);
  const view = list.slice((state.page - 1) * size, state.page * size);
  grid.innerHTML = view.map((doctor) => `
    <article class="doc">
      <div class="avatar photo" style="background-image:url('${["media/shifokor-ayol.jpg","media/shifokor-erkak.jpg","media/shifokor-3.jpg","media/shifokor-4.jpg","media/shifokor-5.jpg"][doctors.indexOf(doctor)%5]}')"></div>
      <strong>${esc(doctor.name)}</strong>
      <p class="muted">${esc(doctor.spec)} · ${esc(doctor.city)} · ${esc(doctor.exp)} · ★ ${esc(doctor.rate)}</p>
      <b class="price">${money(doctor.price)}</b>
      <button class="btn" data-book="${esc(doctor.name)}" type="button">Yozilish</button>
    </article>`).join("") || "<p>Shifokor topilmadi. Filtrni o'zgartiring.</p>";
  $("#pager").innerHTML = Array.from({ length: pages }, (_, i) => `<button class="chip ${i + 1 === state.page ? "active" : ""}" data-page="${i + 1}" type="button">${i + 1}</button>`).join("");
}

function renderArticles() {
  const grid = $("#articleGrid");
  if (!grid) return;
  const filters = $("#articleFilters");
  const tags = ["Barchasi", ...new Set(articles.map((item) => item[1]))];
  if (filters && !filters.childElementCount) {
    filters.innerHTML = tags.map((tag) => `<button class="chip ${tag === state.tag ? "active" : ""}" data-filter="${tag}" type="button">${tag}</button>`).join("");
  }
  grid.innerHTML = articles.map((item, index) => [item, index]).filter(([item]) => state.tag === "Barchasi" || item[1] === state.tag).map(([item, index]) => `
    <article class="card"><img src="${["media/klinika.jpg","media/laboratoriya.jpg","media/bolalar.jpg","media/qabul.jpg","media/mikroskop.jpg","media/dahliz.jpg","media/tahlil.jpg","media/oyinchoq.jpg"][index % 8]}" alt="" style="height:120px;width:100%;object-fit:cover;border-radius:14px"><span class="badge">${item[1]}</span><h3>${item[0]}</h3><p class="muted">${item[2]}</p><button class="btn ghost" data-art="${index}" type="button">O'qish</button></article>
  `).join("") || "<p>Maqola topilmadi.</p>";
}

function renderSlots() {
  const box = $("#slots");
  if (!box) return;
  box.innerHTML = ["09:00", "10:00", "11:30", "13:00", "15:00", "16:30", "18:00"].map((slot) =>
    `<button class="slot ${slot === state.slot ? "on" : ""}" data-slot="${slot}" type="button">${slot}</button>`
  ).join("");
}

function renderCabinet() {
  const select = $("#doctorSelect");
  if (select && !select.childElementCount) {
    const picked = localStorage.getItem("sd-picked");
    select.innerHTML = doctors.slice(0, 18).map((doctor) => `<option ${picked === doctor.name ? "selected" : ""}>${esc(doctor.name)}</option>`).join("");
    const date = document.querySelector("#apptForm input[name=date]");
    if (date && !date.value) date.value = tomorrow();
    renderSlots();
  }
  const box = $("#tabAppts");
  if (!box) return;
  const rows = load("sd-appts");
  box.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Raqam</th><th>Ism</th><th>Shifokor</th><th>Vaqt</th><th></th></tr></thead><tbody>${
    rows.map((row) => `<tr><td>${esc(row.id)}</td><td>${esc(row.name)}</td><td>${esc(row.doctor)}</td><td>${esc(row.date)} ${esc(row.slot)}</td><td><button data-del="${esc(row.id)}" type="button">O'chirish</button></td></tr>`).join("") || "<tr><td colspan='5'>Hali navbat yo'q</td></tr>"
  }</tbody></table></div>`;
  $("#noteList").innerHTML = load("sd-notes").map((note) => `<li>${esc(note.date)} — ${esc(note.title)}</li>`).join("") || "<li>Eslatma yo'q</li>";
  $("#familyList").innerHTML = load("sd-family").map((member) => `<li>${esc(member.role)}: ${esc(member.name)}</li>`).join("") || "<li>Oila ro'yxati bo'sh</li>";
  const week = $("#week");
  if (week) week.innerHTML = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"].map((day, index) => `<div class="day"><b>${day}</b><div>${index === 6 ? "Dam olish" : "09:00–16:00"}</div></div>`).join("");
}

function renderContact() {
  const list = $("#branches");
  if (!list) return;
  list.innerHTML = branches.map((branch) => `<article class="list-card"><strong>${branch[0]}</strong><p class="muted">${branch[1]} · ${branch[2]}</p></article>`).join("");
  $("#branchSelect").innerHTML = branches.map((branch) => `<option>${branch[0]}</option>`).join("");
  $("#gallery").innerHTML = ["Qabul", "Laboratoriya", "LOR", "UZI"].map((title, index) => `<div class="tile" style="background:${colors[index]}">${title}</div>`).join("");
  const saved = load("sd-messages");
  if (!$("#msgList")) {
    $("#contactForm").insertAdjacentHTML("afterend", '<div class="msg-list" id="msgList"></div>');
  }
  $("#msgList").innerHTML = saved.map((item) => `<article class="list-card"><b>${esc(item.name)}</b> · ${esc(item.branch)}<p class="muted">${esc(item.msg || "Xabar matni yo'q")}</p></article>`).join("") || "<p class='muted'>Hali xabar yo'q. Forma shu brauzerda saqlanadi.</p>";
}

$("#apptForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  if (!/^[+\d\s()-]{7,}$/.test(data.phone || "")) {
    toast("Telefon raqamini to'liq kiriting");
    return;
  }
  const list = load("sd-appts");
  list.unshift({ id: "SD-" + Math.floor(1000 + Math.random() * 9000), ...data, slot: state.slot });
  save("sd-appts", list);
  event.target.reset();
  event.target.querySelector("input[name=date]").value = tomorrow();
  renderCabinet();
  toast("Navbat saqlandi");
});
$("#noteForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const list = load("sd-notes");
  list.push({ title: $("#noteTitle").value.trim(), date: $("#noteDate").value });
  save("sd-notes", list);
  event.target.reset();
  renderCabinet();
  toast("Eslatma saqlandi");
});
$("#familyForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const list = load("sd-family");
  list.push({ name: $("#memberName").value.trim(), role: $("#memberRole").value });
  save("sd-family", list);
  event.target.reset();
  renderCabinet();
  toast("Oila a'zosi qo'shildi");
});
$("#contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  const list = load("sd-messages");
  list.unshift(data);
  save("sd-messages", list.slice(0, 8));
  event.target.reset();
  renderContact();
  toast("Xabar saqlandi");
});
$("#calcForm")?.addEventListener("change", calc);
["#q", "#spec", "#city", "#sort"].forEach((id) => {
  $(id)?.addEventListener("input", () => { state.page = 1; renderDoctors(); });
  $(id)?.addEventListener("change", () => { state.page = 1; renderDoctors(); });
});
$$("[data-count]").forEach((el) => {
  const target = Number(el.dataset.count);
  let current = 0;
  const timer = setInterval(() => {
    current += Math.max(1, Math.round(target / 25));
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 30);
});
window.addEventListener("scroll", () => {
  const button = $("#toTop");
  if (button) button.style.display = scrollY > 400 ? "grid" : "none";
});
$("#toTop")?.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

renderHome();
renderServices();
renderDoctors();
renderArticles();
renderCabinet();
renderContact();
calc();



const stage = document.querySelector("#stage");
if (stage) {
  document.querySelectorAll(".card,.stat,.list-card").forEach((el) => el.classList.add("reveal"));
  const tilt = document.querySelector(".tilt");
  if (tilt) {
    tilt.addEventListener("mousemove", (event) => {
      const rect = tilt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = "rotateY(" + (x * 12) + "deg) rotateX(" + (-y * 12) + "deg)";
    });
    tilt.addEventListener("mouseleave", () => { tilt.style.transform = ""; });
  }
}

const motion = document.querySelectorAll(".card,.doc,.list-card,.stat,.faq-item");
if ("IntersectionObserver" in window) {
  const seen = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        seen.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  motion.forEach((el) => seen.observe(el));
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;
  if (sessionStorage.getItem("sd-entered") === "1") {
    loader.remove();
    return;
  }
  setTimeout(() => loader.classList.add("hide"), 3200);
  setTimeout(() => {
    loader.remove();
    sessionStorage.setItem("sd-entered", "1");
  }, 3800);
});

const labs = [["Umumiy qon","1 kun","90 000"],["Umumiy siydik","1 kun","70 000"],["Glyukoza","1 kun","40 000"],["Temir","2 kun","80 000"],["Vitamin D","3 kun","150 000"],["Qalqonsimon bez","2 kun","120 000"]];
const labBox = document.getElementById("labTable");
if (labBox) labBox.innerHTML = labs.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]} so'm</td></tr>`).join("");
const priceBox = document.getElementById("priceTable");
if (priceBox) priceBox.innerHTML = services.map(s=>`<tr><td>${s[0]}</td><td>${s[1]}</td><td>${money(s[2])}</td></tr>`).join("");
const branchBox = document.getElementById("branchCards");
if (branchBox) branchBox.innerHTML = branches.map(b=>`<article class="card"><h3>${b[0]}</h3><p>${b[1]}</p><p class="muted">${b[2]} · +998 55 500 52 52</p><a class="btn" href="kabinet.html">Navbat</a></article>`).join("");
