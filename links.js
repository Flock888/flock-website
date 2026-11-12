// ===== WhatsApp number for tour bookings: country code + number, no spaces or + =====
const WHATSAPP = "85293855721";

// ===== Links: put the real web addresses here =====
const LINKS = {
  instagram: "https://www.instagram.com/wangtongart/",
  facebook: "#",
  map: "https://www.google.com/maps/d/viewer?mid=1nom_b3xQwU4qwGFV-rnqQrbsJ6s0nk0",        // Flock Google map
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
