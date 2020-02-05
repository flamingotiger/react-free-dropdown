import React from "react";
import { create } from "@storybook/theming";
import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { version } from "../package.json";
import color from "../src/common/styles";
import logo from "./rfdd_logo.svg";

const theme = create({
  brandImage: logo, brandName: "react-free-dropdown", brandUrl: "https://github.com/flamingotiger/react-free-dropdown"
});

addParameters({
  showPanel: false,
  options: theme
});

addDecorator(withInfo);

//http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=rfdd
console.log(`%c
██████╗ ███████╗██████╗ ██████╗ ██╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗██║
██████╔╝█████╗  ██║  ██║██║  ██║██║
██╔══██╗██╔══╝  ██║  ██║██║  ██║╚═╝
██║  ██║██║     ██████╔╝██████╔╝██╗
╚═╝  ╚═╝╚═╝     ╚═════╝ ╚═════╝ ╚═╝

%c Easy custom dropdown list with React
`, `color: ${color.keyColor}`, "color: #FFBA46");

console.group("%c react-free-drop-down info", "color: #DDDDFF");
console.log(`%c react-free-drop-down version %c${version}`, "color: #FFE05C", "font-weight: bold; color: #FFE05C");
console.log(`%c react version %c${React.version}`, "color: #FFE05C", "font-weight: bold; color: #FFE05C");
console.log(`%c process.env.NODE_ENV %c${process.env.NODE_ENV}`, "color: #FFE05C", "font-weight: bold; color: #FFE05C");
console.groupEnd();
