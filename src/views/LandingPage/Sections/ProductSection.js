import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import RoomService from "@material-ui/icons/RoomService";
import Storage from "@material-ui/icons/Storage";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we offer</h2>
          <h5 className={classes.description}> Tailored Logistic Services</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Contract logistics"
              description="Need custom logistic service? We got it covered. From overland, air, rail and sea transportation. Fast, safe and accurate shipment provided all over the globe."
              icon={Assignment}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Consulting Services"
              description="Don't know what mean of transportation would be right for you, or you need someone for full supply chain management? Please contact us. Our team of professionals will be happy to help."
              icon={RoomService}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Warehousing and Storage"
              description="Trucking offers intelligent warehouse solution. Lower your storage and good maintenance by using our modern and intelligent warehouses. You can see all locations on location page."
              icon={Storage}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
