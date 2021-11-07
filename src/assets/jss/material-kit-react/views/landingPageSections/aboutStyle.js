import { container } from "assets/jss/material-kit-react";
import { title } from "assets/jss/material-kit-react.js";

const aboutStyle = {
  section: {
    padding: "70px 0",
    textAlign: "left",
  },
  container: {
    ...container,
    alignItems: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  infoSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  infoBox: {
    minHeight: "200px",
    minWidth: "300px",
    width: "40%",
    padding: "15px",
    background: "rgb(245,245,245,0.25)",
    margin: "20px",
    border: "1px solid rgba(227, 227, 227, 0.73)",
    borderRadius: "6px",
    "&:hover": {
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
  },
};

export default aboutStyle;
