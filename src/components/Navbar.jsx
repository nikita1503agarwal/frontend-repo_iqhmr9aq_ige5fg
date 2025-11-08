import { Menu, Calendar, Users, BookOpen, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Parents", href: "#parents", icon: Calendar },
    { label: "Therapists", href: "#therapists", icon: Users },
    { label: "Centres", href: "#centres", icon: Users },
    { label: "Training", href: "#training", icon: BookOpen },
    { label: "Community", href: "#community", icon: MessageCircle },
  ];

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-300 via-sky-300 to-emerald-300" />
            <span className="font-semibold text-slate-800">CDC Connect</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-600">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
              Log in
            </button>
            <button className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
              Sign up
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="flex items-center gap-2 py-2 text-slate-700">
                {item.icon ? <item.icon size={18} /> : null}
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
                Log in
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
