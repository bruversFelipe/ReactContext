import React from "react";
import Badge from "antd/lib/badge";
import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import ContextGlobal from "../../Home/ContextGlobal";

const ButtonGroup = Button.Group;

const badgesStyle = {
  width: "120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const Badges = () => (
  <ContextGlobal.Consumer>
    {({ increaseBadge, declineBadge, count }) => (
      <div style={badgesStyle}>
        <Badge count={count}>
          <a href="#" className="head-example" />
        </Badge>
        <ButtonGroup>
          <Button onClick={declineBadge}>
            <Icon type="minus" />
          </Button>
          <Button onClick={increaseBadge}>
            <Icon type="plus" />
          </Button>
        </ButtonGroup>
      </div>
    )}
  </ContextGlobal.Consumer>
);

export default Badges;
