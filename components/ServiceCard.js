export default function ServiceCard({ number, title, description, icon }) {
  return (
    <div className="group border-l-2 border-brand-line pl-5 py-2 hover:border-brand-gold hover:translate-x-1 transition-all duration-300">
      <div className="flex items-baseline gap-3 mb-2">
        {number && <span className="text-xs font-mono text-brand-slate/40">{number}</span>}
        {icon && <span className="text-2xl">{icon}</span>}
      </div>
      <h3 className="font-semibold text-lg text-brand-blue-deep mb-1 group-hover:text-brand-blue transition-colors">
        {title}
      </h3>
      <p className="text-brand-slate/80 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
// export default function ServiceCard({ number, title, description, icon }) {
//   return (
//     // <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
//     //   {icon && <div className="text-brand-yellow text-3xl mb-3">{icon}</div>}
//     //   <h3 className="font-semibold text-lg mb-2 text-brand-black">{title}</h3>
//     //   <p className="text-gray-600 text-sm">{description}</p>
//     // </div>
//     <div className="group border-l-2 border-brand-line pl-5 py-2 hover:border-brand-yellow transition-colors">
//       <div className="flex items-baseline gap-3 mb-2">
//         {number && (
//           <span className="text-xs font-mono text-brand-charcoal/40">{number}</span>
//         )}
//         {icon && <span className="text-2xl">{icon}</span>}
//       </div>
//       <h3 className="font-semibold text-lg text-brand-charcoal mb-1 group-hover:text-brand-ember transition-colors">
//         {title}
//       </h3>
//       <p className="text-brand-charcoal/60 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
// }