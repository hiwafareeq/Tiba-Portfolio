import { useEffect, useState } from "react";

function Footer() {
  const [time, setTime] = useState("");

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
    <footer
      className="
        relative min-h-[30vh]
        bg-black
        text-white
        px-8 pt-14 pb-[30vw]
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* LINKS */}
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

          {/* SOCIALS */}
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

          {/* LOCAL TIME */}
          <div>
            <p className="text-white/40 mb-4 uppercase tracking-widest text-xs">
              Local Time
            </p>
            <p className="text-lg font-medium">
              {time} <span className="text-white/50 text-sm">UTC+2</span>
            </p>
          </div>

          {/* VERSION */}
          <div>
            <p className="text-white/40 mb-4 uppercase tracking-widest text-xs">
              Version
            </p>
            <p className="text-md font-medium">
              {new Date().getFullYear()} © Edition
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-start lg:items-end justify-between gap-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@yourdomain.com"
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
            </a>
          </div>
        </div>
      </div>

      {/* BIG EDITORIAL NAME */}
      <p
        className="
            absolute bottom-0 inset-x-0
            text-[30vw]
            leading-none
            font-light
            tracking-tight
            text-transparent
            text-center
            pointer-events-none
            select-none
            mix-blend-screen
            translate-y-1/6
            [-webkit-text-stroke:1.5px_rgba(255,255,255,0.2)]
        "
      >
        TIBA
      </p>
    </footer>
  );
}

export default Footer;
