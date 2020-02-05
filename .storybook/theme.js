import logo from "./rfdd_logo.svg";
import { create } from "@storybook/theming";

export default create({
  // theme dark or light
  base: "dark",

  // brand logo
  brandImage: logo,
  brandName: "react-free-dropdown",
  brandUrl: "https://github.com/flamingotiger/react-free-dropdown"
});
