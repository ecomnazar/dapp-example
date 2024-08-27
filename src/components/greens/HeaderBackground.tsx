export const HeaderBackground = () => {
  return (
    <svg
      width="100%"
      viewBox="0 0 750 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_257_375)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M750 149.03C700.28 156.81 625.16 159.42 511.35 159.42H259.98C128.56 159.42 48.71 155.95 0 145.04V1H750V149.03Z"
          fill="url(#paint0_linear_257_375)"
        />
        <path
          d="M750.077 149.524L750.5 149.458V149.03V1V0.5H750H0H-0.5V1V145.04V145.44L-0.109282 145.528C48.6645 156.452 128.572 159.92 259.98 159.92H511.35C625.156 159.92 700.313 157.311 750.077 149.524Z"
          stroke="#6D4353"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_257_375"
          x="-5"
          y="-10.5"
          width="760"
          height="178.92"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_257_375"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_257_375"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-11" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.627451 0 0 0 0 0.392157 0 0 0 0 0.258824 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_257_375"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-14" />
          <feGaussianBlur stdDeviation="5.25" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.623529 0 0 0 0 0.392157 0 0 0 0 0.258824 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_257_375"
            result="effect3_innerShadow_257_375"
          />
        </filter>
        <linearGradient
          id="paint0_linear_257_375"
          x1="375"
          y1="0.999995"
          x2="375"
          y2="159"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFA868" />
          <stop offset="1" stopColor="#C38450" />
        </linearGradient>
      </defs>
    </svg>
  );
};
