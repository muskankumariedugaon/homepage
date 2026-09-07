import { PenTool } from 'lucide-react'

function SkillCard({ number, title, description, icon, iconType }) {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-2">
        {iconType === 'pencil' ? (
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <PenTool size={18} strokeWidth={2} className="text-gray-900" />
          </div>
        ) : (
          <img
            src={icon}
            alt={title}
            className="w-8 h-8 rounded-md object-cover flex-shrink-0"
          />
        )}
        <p className="text-sm text-gray-900">
          <span className="text-blue-600 font-bold">{number}</span>{' '}
          <span className="font-bold">{title}</span>
        </p>
      </div>
      <p className="text-xs text-gray-500 leading-snug">{description}</p>
    </div>
  )
}

export default SkillCard
