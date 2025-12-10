'use client';

export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10"
    >
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d9ff" stopOpacity={1} />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity={1} />
        </linearGradient>
      </defs>
      
      <path
        d="M20 35C20 35 4 24 4 15C4 10 8 6 12 6C14 6 16 7 18 8.5C19 9 19.5 9.5 20 10.5C20.5 9.5 21 9 22 8.5C24 7 26 6 28 6C32 6 36 10 36 15C36 24 20 35 20 35Z"
        fill="url(#heartGradient)"
      />
      
      <g transform="translate(24, 6)">
        <path
          d="M4 0C2 1 0 3 0 6C0 8 2 10 4 10C6 8 8 6 8 3C8 1 6 0 4 0Z"
          fill="#10b981"
          opacity={1}
        />
        <line x1="4" y1="0" x2="4" y2="10" stroke="#059669" strokeWidth={1.2} />
      </g>
      
      <g opacity={1}>
        <circle cx="20" cy="20" r="18" fill="none" stroke="#00d9ff" strokeWidth={1} />
      </g>
    </svg>
  );
}
