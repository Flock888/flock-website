// ===== Links: put the real web addresses here =====
const LINKS = {
  instagram: "#",
  facebook: "#",
  map: "#",        // Flock Google map
  hkhike: "#",     // Hong Kong Hike Mui Wo trail
  tours: "#",      // Luma booking page
  crowdfund: "#",
  shop: "#",
  buddies: "#",
  contact: "#"
};

document.querySelectorAll("[data-link]").forEach(a => {
  const url = LINKS[a.dataset.link];
  if (url && url !== "#") { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
});
