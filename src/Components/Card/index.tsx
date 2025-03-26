import type { ReactElement } from "react";
import { Card } from "@salt-ds/core";

interface CustomCardProps {
  [key: string]: any; // Replace `any` with specific prop types if known
}

const CustomCard = (props: CustomCardProps): ReactElement => {
  return <Card {...props}>{props.children}</Card>;
};

export default CustomCard;
