import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ArrowForward from "@material-ui/icons/ArrowForward";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className="requestQuote">
        <GridContainer justify="center">
          <GridItem>
            <h1 className={classes.title}>
              Our experts are ready to help find the right solution for your
              needs.
            </h1>
            <Button color="info">
              Request A Quote <ArrowForward />
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
