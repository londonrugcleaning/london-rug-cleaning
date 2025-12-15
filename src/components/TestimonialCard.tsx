import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export const TestimonialCard = ({ name, role, content }: TestimonialCardProps) => {
  return (
    <div className="group rounded-2xl bg-white p-8 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="mb-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <div className="mb-auto">
        <p className="text-lg text-slate-700 leading-relaxed italic mb-6">"{content}"</p>
      </div>
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
        <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-base font-bold text-slate-900">{name}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};