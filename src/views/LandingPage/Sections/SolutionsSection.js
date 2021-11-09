import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ContactSupport from "@material-ui/icons/ContactSupport";
import Description from "@material-ui/icons/Description";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import CreditCard from "@material-ui/icons/CreditCard";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/solutionsStyle.js";
import InfoArea from "components/InfoArea/InfoArea";

const useStyles = makeStyles(styles);

export default function SolutionsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.requestQuote}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <h1 className={classes.title}>
              Solutions That Take The Stress Out Of The Move
            </h1>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className={classes.infoSection}
          >
            <div className={classes.infoBox}>
              <InfoArea
                title="24*7 Dispatching"
                description="Our dispatching services include finding the top paying loads, conducting credit checks, negotiating rates, handling all emails, contracts, and billing."
                icon={ContactSupport}
                iconColor="info"
                vertical={false}
                horizontal
              />
            </div>
            <div className={classes.infoBox}>
              <InfoArea
                title="Accounting"
                description="Our accounting team handles all the requirements including, carrier packets, broker setups, and all aspects of paperwork."
                icon={Description}
                iconColor="info"
                vertical={false}
                horizontal
              />
            </div>
            <div className={classes.infoBox}>
              <InfoArea
                title="Factoring"
                description="Our factoring solutions help you obtain fuel cards and cash for on-the-road expenses besides ensuring on-time payments for your freight bills."
                icon={AccountBalanceWallet}
                iconColor="info"
                horizontal
                vertical={false}
              />
            </div>
            <div className={classes.infoBox}>
              <InfoArea
                title="Billing & Invoicing"
                description="We submit your invoices to your factoring company so that you get timely payments for your loads."
                icon={CreditCard}
                iconColor="info"
                horizontal
                vertical={false}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
