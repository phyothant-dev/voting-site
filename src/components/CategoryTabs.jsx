const tabs = [
  { id: 'computer_science', label: 'Computer Science' },
  { id: 'computer_technology', label: 'Computer Technology' },
]

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="flex gap-2 mb-8">
      {tabs.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
