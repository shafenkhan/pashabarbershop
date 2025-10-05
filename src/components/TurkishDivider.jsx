const TurkishDivider = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-royal-gold" />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-royal-gold"
        >
          {/* Ottoman-style ornamental design */}
          <path
            d="M20 2L22.5 10L30 7.5L27.5 15L35 17.5L27.5 20L30 27.5L22.5 25L20 33L17.5 25L10 27.5L12.5 20L5 17.5L12.5 15L10 7.5L17.5 10L20 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-royal-gold" />
      </div>
    </div>
  );
};

export default TurkishDivider;
