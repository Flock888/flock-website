// ===== The birds =====
// [name, file name, note, videos]
// videos: "m" = making-of, "t" = timelapse, "mt" = both, "" = none
// Photo lives at img/bird-<file>.jpg, videos at video/<file>-making.mp4 and video/<file>-timelapse.mp4
const BIRDS = [
  ["Hoopoe", "hoopoe", "", "m"],
  ["Fairy Pitta", "fairy-pita", "", "mt"],
  ["White-throated Kingfisher", "white-throated-kingfisher", "", ""],
  ["Red-billed Blue Magpie", "red-billed-blue-magpie", "", "t"],
  ["Red-whiskered Bulbul", "bulbul", "Our biggest mural yet, made possible by UTMB with support from Silvermine", "m"],
  ["Long-tailed Shrike", "shrike", "Rooftop at Sunset Peak, 869m", "m"],
  ["Black-capped Kingfisher", "black-capped-kingfisher", "", "mt"],
  ["Yellow-rumped Flycatcher (male)", "yellow-rumped-flycatcher-male", "", "mt"],
  ["Yellow-rumped Flycatcher (female)", "yellow-rumped-flycatcher-female", "", "mt"],
  ["Amur Paradise Flycatcher", "amur-flycatcher", "", ""],
  ["Grey Wagtail", "grey-wagtail", "", ""],
  ["Oriental Magpie Robin", "oriental-magpie-robin", "", "mt"],
  ["Silver-eared Mesia", "silver-eared-mesia", "", "mt"],
  ["Sunbird", "sunbird", "", "mt"],
  ["Redstart", "red-start", "", ""],
  ["Little Bunting", "little-bunting", "", "mt"],
  ["Yellow-browed Warbler", "yellow-browed-warbler", "", ""],
  ["Swinhoe's White-eye", "swinhoe-white-eye", "", ""],
  ["Tailorbird", "tailor-bird", "", "m"],
  ["Waterhen", "waterhen", "", "mt"],
  ["Babbler", "babbler", "", "mt"],
  ["Myna", "myna-bird", "", "mt"]
];

const ICON = {
  m: '<svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>',
  t: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>'
};
const LABEL = { m: "Making of", t: "Timelapse" };
const KIND = { m: "making", t: "timelapse" };

const grid = document.getElementById("grid");
BIRDS.forEach(([name, file, note, vids]) => {
  const el = document.createElement("article");
  el.className = "bird";
  const btns = [...(vids || "")].map(k =>
    `<button class="ico" data-k="${k}" title="${LABEL[k]}" aria-label="${LABEL[k]}: ${name}">${ICON[k]}</button>`).join("");
  el.innerHTML = `
    <button class="pic" aria-label="View ${name}"><img loading="lazy" src="img/bird-${file}.jpg" alt="${name} mural"></button>
    <div class="meta">
      <h3>${name}</h3>
      <div class="acts">${btns}<a href="${LINKS.map}" target="_blank" rel="noopener" class="ico" title="Find it on the map">${ICON.pin}</a></div>
    </div>`;
  const cap = name + (note ? " · " + note : "");
  el.querySelector(".pic").onclick = () => openLb({ img: `img/bird-${file}.jpg` }, cap);
  el.querySelectorAll("[data-k]").forEach(b => b.onclick = () =>
    openLb({ video: `video/${file}-${KIND[b.dataset.k]}.mp4` }, `${name} · ${LABEL[b.dataset.k]}`));
  grid.appendChild(el);
});

const lb = document.getElementById("lb");
const lbImg = document.getElementById("lbimg");
const lbVid = document.getElementById("lbvid");
function openLb(m, cap) {
  lbImg.hidden = !m.img; lbVid.hidden = !m.video;
  if (m.img) lbImg.src = m.img;
  if (m.video) { lbVid.src = m.video; lbVid.play().catch(() => {}); }
  document.getElementById("lbcap").textContent = cap;
  lb.hidden = false;
}
function closeLb() { lb.hidden = true; lbVid.pause(); lbVid.removeAttribute("src"); lbVid.load(); }
lb.onclick = e => { if (e.target === lb || e.target.classList.contains("close")) closeLb(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
