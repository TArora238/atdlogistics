import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import CoverageSection from "./Sections/CoverageSection.js";
import TimeMoneySection from "./Sections/TimeMoneySection.js";
import RequestQuote from "./Sections/RequestQuote.js";
import WorkSection from "./Sections/WorkSection.js";
import AboutSection from "./Sections/AboutSection.js";
import SolutionsSection from "./Sections/SolutionsSection.js";
import LookingMoreSection from "./Sections/LookingMoreSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // brand={<img src={logo} alt="..." height="50" />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/bg1.jpeg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Moving You Towards Stress-Free Trucking
              </h1>
              <h4 className={classes.subtitle}>
                ATD Logistics specializes in handling the back-office operations
                for operations for owner-operators & trucking fleets. We also
                help shippers deliver on time, every time with minimum headache.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <AboutSection />
        </div>
        <SolutionsSection />
        <div className={classes.container}>
          <ProductSection />
        </div>
        <div>
          <LookingMoreSection />
          <CoverageSection />
          <TimeMoneySection />
          <RequestQuote />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
