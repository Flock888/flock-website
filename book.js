// Walk enquiries: turns the form into a ready-written WhatsApp message
document.getElementById("bookform").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  let msg = "Hi Flock! I'd like to ask about a walk." +
    "\nName: " + f.get("name") +
    "\nDate: " + (f.get("date") || "flexible") +
    "\nPeople: " + (f.get("people") || "?") +
    "\nLanguage: " + f.get("lang");
  if (f.get("note")) msg += "\n" + f.get("note");
  window.location.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);
});
