import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/coverageStyle.js";

const useStyles = makeStyles(styles);

export default function TimeMoneySection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center" className={classes.coverageSection}>
          <GridItem xs={12} sm={12} md={6} className="greySection">
            <div className="timeMoneyBG"></div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className="greySection">
            <h2 className={classes.title}>
              We’re Here To Save Your Time And Money!
            </h2>
            <h5 className={classes.description}>
              ATD Logistics gives all carriers & shippers the peace of mind they
              need so that they can drive their way to success. Our solutions
              help minimize overhead costs, optimize efficiency, save time, and
              maximize profitability. No matter the obstacle, our dedicated
              experts can develop a solution based on your unique needs. So, let
              us roll you towards your success by taking care of the stressful
              operational tasks for you.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
