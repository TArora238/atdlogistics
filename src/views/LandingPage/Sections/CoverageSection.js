import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} className="greySection">
            <h2 className={classes.title}>INDUSTRY SECTORS COVERAGE</h2>
            <h5 className={classes.description}>
              We cover different industry sectors, from food and beverage,
              chemical, retail, durable goods and more. Check the full list.
            </h5>
            <ul className="coverageList">
              <li className={classes.description}>Consumer Packaged Goods</li>
              <li className={classes.description}>Chemical Goods</li>
              <li className={classes.description}>Food & Beverages</li>
              <li className={classes.description}>Retail Goods</li>
              <li className={classes.description}>Energy, Oil & Gas</li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className="coverageBG"></div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
