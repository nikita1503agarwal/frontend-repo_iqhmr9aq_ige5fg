import { Calendar, Users, BookOpen, MessageSquare } from "lucide-react";

function FeatureCard({ icon: Icon, title, desc, href }) {
  return (
    <a href={href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-200 via-sky-200 to-emerald-200 flex items-center justify-center">
          <Icon className="text-slate-800" size={20} />
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{desc}</p>
      <div className="mt-4 text-slate-900 font-medium">Explore →</div>
    </a>
  );
}

export default function Sections() {
  const features = [
    {
      icon: Calendar,
      title: "Parent Dashboard",
      desc: "Track milestones, appointments, and your child’s progress in one glance.",
      href: "#parents",
    },
    {
      icon: Users,
      title: "Therapist Hub",
      desc: "Manage slots, sessions, and profile to reach more families.",
      href: "#therapists",
    },
    {
      icon: Users,
      title: "Centres",
      desc: "Showcase your centre, list therapists, and view simple analytics.",
      href: "#centres",
    },
    {
      icon: BookOpen,
      title: "Training Hub",
      desc: "Bite-sized e-learning with progress tracking and certificates.",
      href: "#training",
    },
    {
      icon: MessageSquare,
      title: "Community",
      desc: "Ask questions, read blogs, and join discussions with other parents.",
      href: "#community",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Everything in one place</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A calm, friendly space designed for families, therapists, and centres to collaborate with ease.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
