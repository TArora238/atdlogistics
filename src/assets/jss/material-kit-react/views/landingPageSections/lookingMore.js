import { title } from "assets/jss/material-kit-react.js";

import image from "assets/img/bg2.jpeg";
const productStyle = {
  lookingMore: {
    backgroundImage: "url(" + image + ")",
    backgroundAttachment: "fixed",
    padding: "4em 2em",
  },
  section: {
    padding: "70px 0 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "white",
    margin: "0 0 1em",
  },
  description: {
    color: "white",
  },
};

export default productStyle;
