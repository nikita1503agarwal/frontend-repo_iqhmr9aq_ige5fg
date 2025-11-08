import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Child Development Centre Aggregator
            </h1>
            <p className="mt-4 text-slate-700 text-lg md:text-xl">
              Connect with trusted therapists, centres, and learning resources. Track progress, book sessions, and learn — all in one calming space.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#parents" className="px-5 py-3 rounded-lg bg-slate-900 text-white text-sm md:text-base text-center">
                Explore as Parent
              </a>
              <a href="#therapists" className="px-5 py-3 rounded-lg bg-white text-slate-900 border border-slate-200 text-sm md:text-base text-center">
                For Therapists
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
    </section>
  );
}
