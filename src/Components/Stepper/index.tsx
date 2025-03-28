import {ReactElement} from "react";
import { StackLayout } from "@salt-ds/core";
import { Step, SteppedTracker } from "@salt-ds/lab";

const OrientationHorizontal = ():ReactElement => {
  return (
    <StackLayout style={{ width: "100%" }}>
      <SteppedTracker orientation="horizontal">
        <Step label="Step 1" stage="completed" />
        <Step label="Step 2" stage="active" />
        <Step label="Step 3" stage="pending" />
      </SteppedTracker>
    </StackLayout>
  );
};

export default OrientationHorizontal;