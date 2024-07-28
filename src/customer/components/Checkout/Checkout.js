import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  // TODO: Method 1 - using useSearchParams hook
  //* const [searchParams, setSearchParams] = useSearchParams();
  //* const step = searchParams.get("step");
  //* console.log(step);

  // TODO: Method 2 - using URLSearchParams
  // ? SEETING STEP NUMBER IN SEARCH BAR (Hum is ko Method 1 or 2 dono say achieve kar sakte hain)
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = querySearch.get("step");

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className="py-10 px-3 md:px-10 lg:px-16 bg-[#f2f2f2]">
        {/* //TODO: MUI Steppe Code */}
        <Box sx={{ width: "100%" }}>
          <Stepper
            className="px-7 md:px-0 lg:px-4"
            activeStep={step}
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              </Box> */}
              <div>
                {step == 2 ? (
                  <DeliveryAddressForm />
                ) : (
                  step == 3 && <OrderSummary />
                )}
              </div>
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
}
