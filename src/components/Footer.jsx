import { useEffect, useState } from "react";

/* =========================
   CONTACT MODAL
========================= */
function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-black text-white
          border border-white/20
          rounded-2xl
          w-full max-w-md
          p-6 sm:p-8
          max-h-[90vh]
          overflow-y-auto
          animate-fadeUp
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            w-8 h-8
            flex items-center justify-center
            rounded-full
            text-white/60
            hover:text-white hover:bg-white/10
          "
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Message Sent 🎉
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              Thanks for reaching out. I’ll get back to you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-3 rounded-full bg-white text-black"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6">
              Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white"
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white resize-none"
              />

              {status === "error" && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  w-full mt-4 py-3
                  rounded-full
                  bg-white text-black
                  font-medium
                  transition
                  disabled:opacity-50
                "
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* =========================
   FOOTER
========================= */
function Footer() {
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer
        id="contact"
        className="
          relative
          bg-black text-white
          px-6 sm:px-8
          pt-14
          pb-[40vw] sm:pb-[28vw] lg:pb-[22vw]
          overflow-hidden
          mt-32
        "
      >
        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm">
            <div>
              <p className="text-white/40 mb-4 uppercase tracking-widest text-xs">
                Links
              </p>
              <ul className="space-y-2">
                <li className="hover:opacity-70 cursor-pointer">Home</li>
                <li className="hover:opacity-70 cursor-pointer">Work</li>
                <li className="hover:opacity-70 cursor-pointer">About</li>
                <li className="hover:opacity-70 cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <p className="text-white/40 mb-4 uppercase tracking-widest text-xs">
                Socials
              </p>
              <ul className="space-y-2">
                <li className="hover:opacity-70 cursor-pointer">Email</li>
                <li className="hover:opacity-70 cursor-pointer">LinkedIn</li>
                <li className="hover:opacity-70 cursor-pointer">WhatsApp</li>
                <li className="hover:opacity-70 cursor-pointer">GitHub</li>
              </ul>
            </div>

            <div>
              <p className="text-white/40 mb-4 uppercase tracking-widest text-xs">
                Local Time
              </p>
              <p className="text-lg font-medium">
                {time} <span className="text-white/50 text-sm">UTC+2</span>
              </p>
            </div>

            <div>
              <p className="text-white/40 mb-4 uppercase tracking-widest text-xs">
                Version
              </p>
              <p className="text-md font-medium">
                {new Date().getFullYear()} © Edition
              </p>
            </div>
          </div>
            {/* MOBILE FLOATING CTA */}
            <button
              onClick={() => setOpen(true)}
              className="
                lg:hidden
                right-4
                bottom-24
                px-5 py-3
                rounded-full
                border border-white/30
                bg-black/80
                backdrop-blur
                text-sm
                text-white
                shadow-lg
                transition
                hover:bg-white hover:text-black
              "
            >
              Email
            </button>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex flex-col items-end justify-between">
            <button
              onClick={() => setOpen(true)}
              className="
              px-6 py-3
              rounded-full
              border border-white/30
              text-sm
                transition
                hover:bg-white hover:text-black
                "
            >
              contact@yourdomain.com
            </button>
          </div>
        </div>

        {/* EDITORIAL TEXT */}
        <p
          className="
            absolute bottom-0 inset-x-0
            text-[38vw] sm:text-[26vw] lg:text-[18vw]
            leading-none
            font-light
            tracking-tight
            text-transparent
            text-center
            pointer-events-none
            select-none
            z-0
            [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)]
          "
        >
          TIBA
        </p>
      </footer>


      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Footer;
