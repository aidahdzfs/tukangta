export default function TestimonialCard({ name, role, quote }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <p className="text-gray-600 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="font-semibold text-brand-black">{name}</p>
      {role && <p className="text-sm text-gray-500">{role}</p>}
    </div>
  );
}