import { Button } from "@salt-ds/core";
import { type ReactElement, ReactNode } from "react";
import { ButtonProps } from "@salt-ds/core";

interface CustomButtonProps extends ButtonProps {
  children?: ReactNode;
}

const CustomButton = (props: CustomButtonProps): ReactElement => (
  <>
    <Button {...props}>
      {props.children}
    </Button>
  </>
);

export default CustomButton;