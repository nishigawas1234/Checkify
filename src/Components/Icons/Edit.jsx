import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function Edit({ ...rest }) {
  return (
    <Icon
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.25 5.25H4.5C4.10218 5.25 3.72064 5.40804 3.43934 5.68934C3.15804 5.97064 3 6.35218 3 6.75V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H11.25C11.6478 15 12.0294 14.842 12.3107 14.5607C12.592 14.2794 12.75 13.8978 12.75 13.5V12.75"
        stroke="#E5E5E5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 3.75008L14.25 6.00008M15.2888 4.93883C15.5841 4.64345 15.7501 4.24282 15.7501 3.82508C15.7501 3.40734 15.5841 3.00672 15.2888 2.71133C14.9934 2.41595 14.5927 2.25 14.175 2.25C13.7573 2.25 13.3566 2.41595 13.0613 2.71133L6.75 9.00008V11.2501H9L15.2888 4.93883Z"
        stroke="#E5E5E5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
}
