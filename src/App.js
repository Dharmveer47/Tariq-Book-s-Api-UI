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
        width="81"
        height="81"
        viewBox="0 0 81 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_14_340)">
          <path
            d="M41.2895 0C39.6326 0 38.2895 1.34315 38.2895 3C38.2895 4.65685 39.6326 6 41.2895 6V0ZM3 39.5183L0 39.5183L3 39.5183ZM34.048 6.38151C35.6987 6.23872 36.9211 4.78482 36.7783 3.13413C36.6355 1.48344 35.1816 0.261044 33.5309 0.403831L34.048 6.38151ZM41.2895 6C57.2488 6 75 19.8156 75 39.5183H81C81 16.0273 60.067 0 41.2895 0V6ZM75 39.5183C75 61.8839 55.7648 75 39.7105 75V81C58.3931 81 81 65.8438 81 39.5183H75ZM39.7105 75C23.8174 75 6.00001 62.0311 6 39.5183L0 39.5183C1.21228e-05 65.6966 20.8668 81 39.7105 81V75ZM6 39.5183C6 29.0088 10.9223 20.9266 17.0234 15.303C23.2276 9.58428 30.3277 6.70332 34.048 6.38151L33.5309 0.403831C28.1723 0.867358 19.8776 4.5121 12.9569 10.8913C5.93292 17.3656 -5.81857e-06 26.9536 0 39.5183L6 39.5183Z"
            fill="url(#paint0_linear_14_340)"
          />
        </g>
        <path
          id="blueLine"
          ref={svgRef}
          d="M41.1138 3C53.6746 3 63.3749 9.18984 69.4503 16.8183C72.5869 20.7567 74.525 23.9569 75.913 28.0984C77.4044 31.8585 78.3109 38.9085 77.9015 42.1986C76.9073 50.1886 75.5665 56.0312 69.4503 63.4428C66.2281 67.3473 61.5061 71.0493 57.5191 73.2189C53.8447 75.2183 51.4783 75.9115 48.5708 76.6969C45.0908 77.6369 40.6228 78.2238 37.1367 77.9189C29.9738 77.2924 23.2166 74.637 17.7486 70.3988C14.6902 68.0283 12.3767 65.0224 9.79451 61.9387C7.8799 58.771 5.59769 54.732 4.32608 50.1886C2.95621 45.2942 2.69064 39.8145 3.33168 34.2084C3.99631 28.3966 6.8447 22.7054 10.2917 18.2283C13.5349 14.0159 17.3271 10.8932 19.7372 9.29824"
          stroke="url(#paint1_linear_14_340)"
          stroke-width="3"
          stroke-linecap="round"
        />
        <foreignObject className="svg_div" width="100%" height="100%">
          <div>
            <div className="insideIn">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_1999_2425)">
                  <path
                    d="M22.2 17.1C22.2 19.9167 19.9167 22.2 17.1 22.2C14.2833 22.2 12 19.9167 12 17.1C12 14.2833 14.2833 12 17.1 12C19.9167 12 22.2 14.2833 22.2 17.1Z"
                    fill="url(#paint0_linear_1999_2425)"
                  />
                  <path
                    d="M21.95 17.1C21.95 19.7786 19.7786 21.95 17.1 21.95C14.4214 21.95 12.25 19.7786 12.25 17.1C12.25 14.4214 14.4214 12.25 17.1 12.25C19.7786 12.25 21.95 14.4214 21.95 17.1Z"
                    stroke="url(#paint1_linear_1999_2425)"
                    stroke-width="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd_1999_2425"
                    x="0"
                    y="0"
                    width="30.2"
                    height="30.2002"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.66 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1999_2425"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2" dy="-2" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.764531 0 0 0 0 0.970833 0 0 0 0 0.970833 0 0 0 0.38 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1999_2425"
                      result="effect2_dropShadow_1999_2425"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1999_2425"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1999_2425"
                    x1="13.9125"
                    y1="12"
                    x2="20.6797"
                    y2="19.1669"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.119792" stop-color="#8DFBF4" />
                    <stop offset="0.90625" stop-color="#437C9A" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1999_2425"
                    x1="54.0659"
                    y1="-5.13279"
                    x2="60.8659"
                    y2="0.81721"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#67BBCD" />
                    <stop offset="1" stop-color="#65ACA9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </foreignObject>

        <defs>
          <filter
            id="filter0_i_14_340"
            x="0"
            y="0"
            width="83"
            height="83"
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
            x1="21.5526"
            y1="5.35602"
            x2="61.9"
            y2="71.9055"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#444444" />
            <stop offset="1" stop-color="#333333" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14_340"
            x1="17.0625"
            y1="3"
            x2="66.8211"
            y2="55.6981"
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
