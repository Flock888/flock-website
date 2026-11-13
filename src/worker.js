// Temporary password lock while the site is being finished.
// To go live: delete the LOCK check below (or set LOCKED to false) and push.
const LOCKED = true;
const HASH = "c31430d45bacefec9be016d6593b69331165985d7be8fb778fbeadfc88cab830"; // sha256 of "user:password"

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

export default {
  async fetch(request, env) {
    if (LOCKED) {
      const auth = request.headers.get("Authorization") || "";
      let ok = false;
      if (auth.startsWith("Basic ")) {
        try { ok = (await sha256(atob(auth.slice(6)))) === HASH; } catch (e) {}
      }
      if (!ok) {
        return new Response("Flock is coming soon.", {
          status: 401,
          headers: { "WWW-Authenticate": 'Basic realm="Flock preview"', "X-Robots-Tag": "noindex", "Content-Type": "text/plain" }
        });
      }
    }
    return env.ASSETS.fetch(request);
  }
};
