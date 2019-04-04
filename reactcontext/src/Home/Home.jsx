import React from "react";
import Card from "antd/lib/card";
import Badges from "../Containers/Badges";
import { ContextGlobalProvider } from "./ContextGlobal";
import Progress from "../Containers/Progress";

const content = { width: "100%", padding: "24px" };

const Home = () => (
  <ContextGlobalProvider>
    <div style={content}>
      <Card>
        <Badges />
      </Card>
      <br />
      <Card>
        <Progress />
      </Card>
    </div>
  </ContextGlobalProvider>
);

export default Home;
