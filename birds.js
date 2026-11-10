// ===== The birds: one line each. video = link to the making-of clip =====
const BIRDS = [
  ["Hoopoe", "hoopoe"],
  ["Fairy Pitta", "fairy-pita"],
  ["White-throated Kingfisher", "white-throated-kingfisher"],
  ["Red-billed Blue Magpie", "red-billed-blue-magpie"],
  ["Bulbul", "bulbul", "Our biggest mural yet, made possible by UTMB with support from Silvermine"],
  ["Shrike", "shrike", "Rooftop at Sunset Peak, 869m"],
  ["Black-capped Kingfisher", "black-capped-kingfisher"],
  ["Yellow-rumped Flycatcher (male)", "yellow-rumped-flycatcher-male"],
  ["Yellow-rumped Flycatcher (female)", "yellow-rumped-flycatcher-female"],
  ["Amur Paradise Flycatcher", "amur-flycatcher"],
  ["Grey Wagtail", "grey-wagtail"],
  ["Oriental Magpie Robin", "oriental-magpie-robin"],
  ["Silver-eared Mesia", "silver-eared-mesia"],
  ["Sunbird", "sunbird"],
  ["Redstart", "red-start"],
  ["Little Bunting", "little-bunting"],
  ["Yellow-browed Warbler", "yellow-browed-warbler"],
  ["Swinhoe's White-eye", "swinhoe-white-eye"],
  ["Tailorbird", "tailor-bird"],
  ["Waterhen", "waterhen"],
  ["Babbler", "babbler"],
  ["Myna", "myna-bird"]
];

const play = '<svg viewBox="0 0 24 24"><polygon points="8,5 19,12 8,19"/></svg>';
const pin = '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const grid = document.getElementById("grid");
BIRDS.forEach(([name, file, note]) => {
  const el = document.createElement("article");
  el.className = "bird";
  el.innerHTML = `
    <button class="pic" aria-label="View ${name}"><img loading="lazy" src="img/bird-${file}.jpg" alt="${name} mural"></button>
    <div class="meta">
      <h3>${name}</h3>
      <div class="acts">
        <a href="${LINKS.instagram}" class="ico" title="Watch it being painted">${play}</a>
        <a href="${LINKS.map}" class="ico" title="Find it on the map">${pin}</a>
      </div>
    </div>`;
  el.querySelector(".pic").onclick = () => openLb(`img/bird-${file}.jpg`, name + (note ? " · " + note : ""));
  grid.appendChild(el);
});

const lb = document.getElementById("lb");
function openLb(src, cap) {
  document.getElementById("lbimg").src = src;
  document.getElementById("lbcap").textContent = cap;
  lb.hidden = false;
}
lb.onclick = e => { if (e.target !== document.getElementById("lbimg")) lb.hidden = true; };
document.addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });
