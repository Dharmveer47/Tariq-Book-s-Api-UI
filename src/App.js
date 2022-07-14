import React, { useRef, useEffect } from "react";
import "./App.scss";
// import SvgComponent from "./ico/Circle";
export default function App() {
  const svgRef = useRef();
  useEffect(() => {
    console.log(svgRef?.current?.getTotalLength());
  }, []);

  return (
    <div className="App">
      <svg
        width="82"
        height="86"
        viewBox="0 0 82 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_14_340)">
          <path
            d="M41.4793 0C39.8225 0 38.4793 1.34315 38.4793 3C38.4793 4.65685 39.8225 6 41.4793 6V0ZM3 41.8092H0H3ZM34.2154 6.40483C35.8654 6.2539 37.0806 4.79399 36.9297 3.14402C36.7787 1.49406 35.3188 0.278847 33.6689 0.429776L34.2154 6.40483ZM41.4793 6C57.3625 6 75.3719 20.5985 75.3719 41.8092H81.3719C81.3719 17.1165 60.5053 0 41.4793 0V6ZM75.3719 41.8092C75.3719 65.8522 55.8686 79.7048 39.8926 79.7048V85.7048C58.8256 85.7048 81.3719 69.5117 81.3719 41.8092H75.3719ZM39.8926 79.7048C24.0741 79.7048 6.00001 66.0044 6 41.8092H0C1.21593e-05 69.3595 20.802 85.7048 39.8926 85.7048V79.7048ZM6 41.8092C5.99999 30.5145 11.0046 21.8627 17.1436 15.8788C23.3936 9.78677 30.5191 6.74295 34.2154 6.40483L33.6689 0.429776C28.2412 0.926265 19.8957 4.8175 12.9556 11.5823C5.9045 18.4552 -5.72205e-06 28.582 0 41.8092H6Z"
            fill="url(#paint0_linear_14_340)"
          />
        </g>
        <path
          d="M41.3337 3C53.967 3 63.7233 9.58487 69.8337 17.7002C72.9884 21.89 74.9377 25.2944 76.3337 29.7002C77.8337 33.7002 78.7455 41.2002 78.3337 44.7002C77.3338 53.2002 75.9852 59.4156 69.8337 67.3002C66.593 71.4539 61.8437 75.3922 57.8337 77.7002C54.1381 79.8273 51.7581 80.5647 48.8337 81.4002C45.3337 82.4002 40.8399 83.0245 37.3337 82.7002C30.1295 82.0337 23.3332 79.2088 17.8337 74.7002C14.7576 72.1784 12.4308 68.9806 9.83371 65.7001C7.90805 62.3303 5.61268 58.0335 4.33373 53.2002C2.95596 47.9934 2.68885 42.164 3.3336 36.2001C4.00206 30.0174 6.86688 23.963 10.3337 19.2002C13.5957 14.7189 17.4098 11.3969 19.8337 9.7002"
          stroke="url(#paint1_linear_14_340)"
          id="blueLine"
          stroke-width="3"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_i_14_340"
            x="0"
            y="0"
            width="83.3718"
            height="87.7051"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" dy="3" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_14_340"
            />
          </filter>
          <linearGradient
            id="paint0_linear_14_340"
            x1="21.6446"
            y1="5.50382"
            x2="65.5909"
            y2="74.0489"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#444444" />
            <stop offset="1" stop-color="#333333" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14_340"
            x1="17.1437"
            y1="2.99999"
            x2="70.165"
            y2="56.0895"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.119792" stop-color="#8DFBF4" />
            <stop offset="0.90625" stop-color="#437C9A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
