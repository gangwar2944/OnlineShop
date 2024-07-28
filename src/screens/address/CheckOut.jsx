import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../commonComponents/Navbar";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import OrderSummary from "../order/OrderSummary"
import DeliveryAddForm from "./DeliveryAddForm"

const steps = ["Login", "Add Address", "Order Summary", "Payment"];

const StepperContainer = styled.div`
  margin-top: 100px;
`;

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step"), 10) || 0; // Ensure it's an integer

  React.useEffect(() => {
    setActiveStep(step);
  }, [step]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Navbar />
      <StepperContainer>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  "& .MuiStepConnector-root": {
                    borderColor: "black", // Custom color for the connector line
                  },
                  "& .MuiStepConnector-line": {
                    borderColor: "black", // Custom color for the line
                  },
                }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you're finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Conditional rendering based on the step */}
              {activeStep === 2 ? <DeliveryAddForm /> : <OrderSummary />}
            </React.Fragment>
          )}
        </Box>
      </StepperContainer>
      {/* <Footer /> */}
    </>
  );
}
