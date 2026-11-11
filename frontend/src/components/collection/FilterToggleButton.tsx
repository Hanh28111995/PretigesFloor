'use client';

interface FilterToggleButtonProps {
  active: boolean;
  onToggle: () => void;
}

export default function FilterToggleButton({ active, onToggle }: FilterToggleButtonProps) {
  return (
    <button className="flex items-center pt-10 group outline-none" onClick={onToggle}>
      <div className="p-2 border border-gray-200 rounded-md group-hover:bg-gray-50 transition-colors">
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12H16M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19H20M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z"
            stroke="#AD6F10"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="ml-3 font-black uppercase text-[12px] tracking-widest text-gray-800">
        {active ? 'Show' : 'Hide'} Filters
      </span>
    </button>
  );
}
