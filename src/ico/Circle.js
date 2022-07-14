import React, { useRef } from "react";
import "../App.scss";
const SvgComponent = (props) => {
  const svgRef = useRef();
  console.log(svgRef?.current.getTotalLength());

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={102}
      height={111}
      fill="none"
      className="CircleSmall"
      {...props}
    >
      <g filter="url(#a)">
        <path
          d="M52 9.5a3 3 0 1 0 0 6v-6ZM3.5 59h-3 3Zm39.26-43.011a3 3 0 1 0-.52-5.978l.52 5.978ZM52 15.5c20.576 0 43.5 17.88 43.5 43.5h6c0-29.38-26.076-49.5-49.5-49.5v6ZM95.5 59c0 29.034-24.83 46-45.5 46v6c23.33 0 51.5-19.034 51.5-52h-6ZM50 105C29.49 105 6.5 88.182 6.5 59h-6c0 32.818 26.01 52 49.5 52v-6ZM6.5 59c0-13.669 6.375-24.167 14.227-31.442 7.955-7.372 17.106-11.14 22.033-11.57l-.52-5.977c-6.573.572-16.922 5.112-25.592 13.146C7.875 31.287.5 43.287.5 59h6Z"
          fill="url(#b)"
        />
      </g>
      <path
        ref={svgRef}
        d="M52 11a1.5 1.5 0 0 0 0 3v-3ZM3.5 59H2h1.5ZM52 14c21.288 0 45 18.44 45 45h3c0-28.44-25.288-48-48-48v3Zm45 45c0 30.017-25.665 47.5-47 47.5v3c22.665 0 50-18.517 50-50.5h-3Zm-47 47.5C28.745 106.5 5 89.09 5 59H2c0 31.91 25.255 50.5 48 50.5v-3ZM5 59c0-17.657 10.285-30.21 20.848-37.442l-1.695-2.476C13.06 26.678 2 40.05 2 59h3Z"
        fill="url(#c)"
      />

      <g filter="url(#d)">
        <circle cx={29} cy={18} r={6} fill="url(#e)" />
        <circle cx={29} cy={18} r={5.75} stroke="url(#f)" strokeWidth={0.5} />
      </g>

      <defs>
        <linearGradient
          id="b"
          x1={27}
          y1={15.5}
          x2={78.5}
          y2={100}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#444" />
          <stop offset={1} stopColor="#333" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={21.313}
          y1={12.5}
          x2={84.69}
          y2={79.27}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.12} stopColor="#8DFBF4" />
          <stop offset={0.906} stopColor="#437C9A" />
        </linearGradient>
        <linearGradient
          id="e"
          x1={25.25}
          y1={12}
          x2={33.211}
          y2={20.432}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.12} stopColor="#8DFBF4" />
          <stop offset={0.906} stopColor="#437C9A" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={25.5}
          y1={14}
          x2={33.5}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#67BBCD" />
          <stop offset={1} stopColor="#65ACA9" />
        </linearGradient>
        <filter
          id="a"
          x={0.5}
          y={9.5}
          width={103}
          height={103.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={3} dy={3} />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
          <feBlend in2="shape" result="effect1_innerShadow_935_1889" />
        </filter>
        <filter
          id="d"
          x={11}
          y={0}
          width={32}
          height={32}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.66 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_935_1889"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={-2} dy={-2} />
          <feGaussianBlur stdDeviation={5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.764531 0 0 0 0 0.970833 0 0 0 0 0.970833 0 0 0 0.38 0" />
          <feBlend
            in2="effect1_dropShadow_935_1889"
            result="effect2_dropShadow_935_1889"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_935_1889"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SvgComponent;
