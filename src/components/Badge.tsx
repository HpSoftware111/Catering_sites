export function Badge() {
  return (
    <div className="relative h-48 w-48">
      <div className="absolute inset-0 bg-white rounded-full z-10 flex items-center justify-center">
        <div className="text-center text-[#003366] font-serif p-4">
          <div className="text-sm leading-tight italic">The</div>
          <div className="text-lg font-bold leading-tight">BEST CHOICE</div>
          <div className="flex items-center justify-center gap-1 text-sm italic leading-tight">
            <span>-for-</span>
          </div>
          <div className="text-2xl font-bold leading-tight tracking-wide">Catering</div>
          <div className="text-sm leading-tight mt-1">In New Jersey</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 mx-auto mt-1 text-[#003366]"
          >
            <path
              fillRule="evenodd"
              d="M8.2,2.2c-0.2-0.2-0.5-0.2-0.7,0L2.7,7C2.5,7.2,2.5,7.5,2.7,7.7l4.8,4.8c0.2,0.2,0.5,0.2,0.7,0l4.8-4.8 c0.2-0.2,0.2-0.5,0-0.7L8.2,2.2z M15.7,8.2c-0.2-0.2-0.5-0.2-0.7,0L9.2,14c-0.2,0.2-0.2,0.5,0,0.7l5.8,5.8c0.2,0.2,0.5,0.2,0.7,0 l5.8-5.8c0.2-0.2,0.2-0.5,0-0.7L15.7,8.2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[-4px] bg-[#003366] rounded-full z-0"></div>
    </div>
  );
}
