import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function Delete({ ...rest }) {
  return (
    <Icon
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <svg>
        <path
          d="M5.25 15.75C4.8375 15.75 4.4845 15.6033 4.191 15.3097C3.8975 15.0162 3.7505 14.663 3.75 14.25V4.5H3V3H6.75V2.25H11.25V3H15V4.5H14.25V14.25C14.25 14.6625 14.1033 15.0157 13.8097 15.3097C13.5162 15.6038 13.163 15.7505 12.75 15.75H5.25ZM12.75 4.5H5.25V14.25H12.75V4.5ZM6.75 12.75H8.25V6H6.75V12.75ZM9.75 12.75H11.25V6H9.75V12.75Z"
          fill="#E5E5E5"
        />
      </svg>
    </Icon>
  );
}
