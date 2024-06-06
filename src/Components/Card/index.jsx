import React from "react";
import { Card} from "@chakra-ui/react";

const BasicCard = ({ ...rest }) => {
  return <Card {...rest}></Card>;
};

export default BasicCard;
