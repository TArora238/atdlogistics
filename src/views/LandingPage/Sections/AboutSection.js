import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Assignment from "@material-ui/icons/Assignment";
import RoomService from "@material-ui/icons/RoomService";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import LiveHelp from "@material-ui/icons/LiveHelp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea";

import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4} lg={4}>
          <h2 className={classes.title}>About ATD Logistics</h2>
          <h5 className={classes.title}>Your gateway to smart trucking</h5>
          <p>
            ATD is a team of experienced individuals committed to helping
            carriers & shippers across the US. Based in Washington, USA,
            American Smart Trucking aims to create a reliable marketplace for
            carriers and provide best-in-class transportation solutions for the
            leading supply chains. Our constant endeavor is to redefine the
            trucking industry, thus saving both truckers as well as
            owner-operators from the hassle of finding top loads and handling
            the back-office operations.
          </p>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={8} className={classes.infoSection}>
          <div className={classes.infoBox}>
            <InfoArea
              title="Start rolling with us"
              description="Let us take care of the necessary paperwork while you focus on expanding your business."
              icon={Assignment}
              iconColor="gray"
              vertical
            />
          </div>
          <div className={classes.infoBox}>
            <InfoArea
              title="Book your shipment"
              description="No matter the type & volume of freight you want to move, AST has got you covered for your every shipping need."
              icon={RoomService}
              iconColor="gray"
              vertical
            />
          </div>
          <div className={classes.infoBox}>
            <InfoArea
              title="Join our carrier network"
              description="Find the rewarding opportunities that will accelerate your career growth."
              icon={EmojiPeople}
              iconColor="gray"
              vertical
            />
          </div>
          <div className={classes.infoBox}>
            <InfoArea
              title="Have a Question?"
              description="Got a question regarding our dispatching services? We’re here to answer them all."
              icon={LiveHelp}
              iconColor="gray"
              vertical
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
