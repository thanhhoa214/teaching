"use client";

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  return (
    <div className="flex flex-col items-center md:flex-row justify-between mt-5 mb-2 mx-7">
      <span className="font-bold text-2xl md:pl-20 py-2">Exclusive</span>
      <div>
        <ul className="flex flex-row">
          <li className="px-4 py-2">Home</li>
          <li className="px-4 py-2">Contact</li>
          <li className="px-4 py-2">About</li>
          <li className="px-4 py-2">Sign Up</li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 rounded text-sm">
          <input
            type="text"
            placeholder="Search item..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>
        <div>
          <span className="px-4 py-2">♡</span>
          <button className="px-4 py-2">🛒</button>
        </div>
      </div>
    </div>
  );
}
