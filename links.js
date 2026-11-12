// ===== WhatsApp number for tour bookings: country code + number, no spaces or + =====
const WHATSAPP = "85293855721";

// ===== Links: put the real web addresses here =====
const LINKS = {
  instagram: "https://www.instagram.com/wangtongart/",
  facebook: "https://www.facebook.com/share/1DuyoUMjuH/",
  map: "https://www.google.com/maps/d/viewer?mid=1nom_b3xQwU4qwGFV-rnqQrbsJ6s0nk0",        // Flock Google map
  hkhike: "https://www.hongkonghike.com/flock-murals-hike-discover-the-birds-taking-over-mui-wo-walls/",     // Hong Kong Hike Mui Wo trail
  tours: "#",      // Luma booking page
  crowdfund: "https://wa.me/85293855721?text=Hi%20Flock%21%20Please%20let%20me%20know%20when%20the%20next%20crowdfunding%20round%20opens.",
  shop: "https://wa.me/85293855721?text=Hi%20Flock%21%20I%27d%20like%20to%20buy%20a%20tee%20or%20a%20print.%20What%27s%20available%3F",
  buddies: "https://wa.me/85293855721?text=Hi%20Flock%21%20Please%20add%20me%20to%20the%20Flock%20Buddies%20list.",
  contact: "mailto:flock@plastered.com"
};

document.querySelectorAll("[data-link]").forEach(a => {
  const url = LINKS[a.dataset.link];
  if (url && url !== "#") { a.href = url; if (!url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; } }
});
