import React from "react";
import Progress from "antd/lib/progress";
import Button from "antd/lib/button";
import ContextGlobal from "../../Home/ContextGlobal";
import Icon from "antd/lib/icon";

const ButtonGroup = Button.Group;

const styleProgress = { display: "flex" };

const ProgressBar = () => (
  <ContextGlobal.Consumer>
    {({ increaseProgress, declineProgress, percent }) => (
      <div style={styleProgress}>
        <Progress type="circle" percent={percent} />
        <br />
        <br />
        <br />
        <ButtonGroup>
          <Button onClick={declineProgress}>
            <Icon type="minus" />
          </Button>
          <Button onClick={increaseProgress}>
            <Icon type="plus" />
          </Button>
        </ButtonGroup>
      </div>
    )}
  </ContextGlobal.Consumer>
);

export default ProgressBar;
