import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function NavPersonal({ ...rest }) {
  return (
    <Icon
      width="24"
      height="29"
      viewBox="0 0 24 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_d_30_85)">
        <path
          d="M12 6.4C12.2758 6.4 12.5489 6.45432 12.8036 6.55985C13.0584 6.66539 13.2899 6.82007 13.4849 7.01508C13.6799 7.21008 13.8346 7.44158 13.9401 7.69636C14.0457 7.95115 14.1 8.22422 14.1 8.5C14.1 8.77578 14.0457 9.04885 13.9401 9.30364C13.8346 9.55842 13.6799 9.78992 13.4849 9.98492C13.2899 10.1799 13.0584 10.3346 12.8036 10.4401C12.5489 10.5457 12.2758 10.6 12 10.6C11.443 10.6 10.9089 10.3788 10.5151 9.98492C10.1212 9.5911 9.9 9.05695 9.9 8.5C9.9 7.94305 10.1212 7.4089 10.5151 7.01508C10.9089 6.62125 11.443 6.4 12 6.4ZM12 15.4C14.97 15.4 18.1 16.86 18.1 17.5V18.6H5.9V17.5C5.9 16.86 9.03 15.4 12 15.4ZM12 4.5C9.79 4.5 8 6.29 8 8.5C8 10.71 9.79 12.5 12 12.5C14.21 12.5 16 10.71 16 8.5C16 6.29 14.21 4.5 12 4.5ZM12 13.5C9.33 13.5 4 14.84 4 17.5V19.5C4 20.05 4.45 20.5 5 20.5H19C19.55 20.5 20 20.05 20 19.5V17.5C20 14.84 14.67 13.5 12 13.5Z"
          fill="#E5E5E5"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_30_85"
          x="-4"
          y="0.5"
          width="32"
          height="32"
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
            result="effect1_dropShadow_30_85"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_30_85"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
}
