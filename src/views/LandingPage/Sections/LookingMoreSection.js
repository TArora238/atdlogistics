import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/lookingMore.js";

const useStyles = makeStyles(styles);

export default function LookingMoreSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.lookingMore}>
        <GridContainer justify="start">
          <GridItem>
            <h1 className={classes.title}>Looking for more?</h1>
            <h1 className={classes.title}>
              Here are a few places you need to explore
            </h1>
            <div>
              <Button color="info" simple>
                About Us
              </Button>
              <Button color="info" simple>
                Contact Us
              </Button>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
