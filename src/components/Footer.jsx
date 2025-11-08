export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-300 via-sky-300 to-emerald-300" />
              <span className="font-semibold text-slate-800">CDC Connect</span>
            </div>
            <p className="mt-3 text-slate-600">A friendly place to find support, manage sessions, and learn together.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Explore</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#parents" className="hover:text-slate-900">Parent Dashboard</a></li>
              <li><a href="#therapists" className="hover:text-slate-900">Therapist Hub</a></li>
              <li><a href="#training" className="hover:text-slate-900">Training Hub</a></li>
              <li><a href="#community" className="hover:text-slate-900">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Get in touch</h4>
            <p className="mt-3 text-slate-600">support@cdcconnect.example</p>
            <p className="text-slate-600">Mon–Fri · 9am–6pm</p>
          </div>
        </div>
        <div className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} CDC Connect. All rights reserved.</div>
      </div>
    </footer>
  );
}
