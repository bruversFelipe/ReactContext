import React from "react";
import ReactDOM from "react-dom";
import LocaleProvider from "antd/lib/locale-provider";
import ptBr from "antd/lib/locale-provider/pt_BR";
import "antd/dist/antd.css";
import Home from "./Home/Home";

ReactDOM.render(
  <LocaleProvider locale={ptBr}>
    <Home />
  </LocaleProvider>,
  document.getElementById("root")
);
