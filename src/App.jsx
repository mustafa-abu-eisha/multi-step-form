import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import "./App.css";

import mobileSidebarBg from "./assets/images/bg-sidebar-mobile.svg";
import desktopSidebarBg from "./assets/images/bg-sidebar-desktop.svg";
import PersonalInfoStep from "./components/PersonalInfoStep";
import PlansStep from "./components/PlansStep";
import AddOnsStep from "./components/AddOnsStep";
import SummaryStep from "./components/SummaryStep";
import ThanksPage from "./components/ThanksPage";

const formSteps = [
  { number: 1, title: "Your Info" },
  { number: 2, title: "Select Plan" },
  { number: 3, title: "Add-ons" },
  { number: 4, title: "Summary" },
];

function App() {
  const [formValues, setFormValues] = useState({
    personalInfo: { userName: "", emailAddress: "", phoneNumber: "" },
    plan: { yearly: false, planName: "Arcade", price: 9 },
    addOns: [
      {
        name: "Online service",
        describe: "Access to multiplayer games",
        monthlyPrice: 1,
        yearlyPrice: 10,
        selected: true,
      },
      {
        name: "Larger storage",
        describe: "Extra 1TB of cloud save",
        monthlyPrice: 2,
        yearlyPrice: 20,
        selected: true,
      },
      {
        name: "Customizable Profile",
        describe: "Custom theme on your profile",
        monthlyPrice: 2,
        yearlyPrice: 20,
        selected: false,
      },
    ],
  });
  const [selectedStep, setSelectedStep] = useState(1);
  const [openThankPage, setOpenThankPage] = useState(false);

  const handleChangeFormValues = (cat, valueName, value) => {
    setFormValues((prev) => ({
      ...prev,
      [cat]: { ...prev[cat], [valueName]: value },
    }));
  };

  const handleChangeAddOnsStatus = (name) => {
    setFormValues((prev) => ({
      ...prev,
      addOns: prev["addOns"].map((add) => {
        if (add.name === name) return { ...add, selected: !add.selected };
        else return add;
      }),
    }));
  };

  const handleNextStep = (val) => {
    setSelectedStep(val);
  };

  const handlePreviousStep = (val) => {
    handleNextStep(val);
    setOpenThankPage(false);
  };

  const handleOpenThankPage = () => {
    setOpenThankPage(true);
  };
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "center",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          width: "940px",
          maxWidth: "100%",
          height: { xs: "100vh", sm: "600px" },
          padding: { xs: "0", sm: "1rem" },
          marginInline: { sm: "1rem", md: 0 },
          backgroundColor: { xs: "transparent", sm: "hsl(0, 100%, 100%)" },
          borderRadius: ".75rem",
          boxShadow: { xs: "none", sm: "4px 4px 4px hsl(0deg 0% 0% / 3%)" },
        }}
      >
        <Box
          component="aside"
          sx={{
            width: { xs: "100%", sm: "274px" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={mobileSidebarBg}
            alt="Mobile Sidebar Background"
            sx={{
              position: "absolute",
              zIndex: -1,
              display: { xs: "block", sm: "none" },
              width: "100%",
            }}
          />
          <Box
            component="img"
            src={desktopSidebarBg}
            alt="Desktop Sidebar Background"
            sx={{
              position: "absolute",
              zIndex: -1,
              display: { xs: "none", sm: "block" },
            }}
          />
          <Stack
            sx={{
              padding: { xs: "2rem", sm: "40px 32px" },
              position: "relative",
              gap: { xs: "1rem", sm: "2rem" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
            direction={{ xs: "row", sm: "column" }}
          >
            {formSteps.map((step) => (
              <Button
                onClick={() => handlePreviousStep(step.number)}
                disableRipple
                disabled={step.number > selectedStep}
                key={step.number}
                sx={{
                  minWidth: { xs: "auto", sm: "100%" },
                  textAlign: "start",
                  padding: 0,
                  justifyContent: "flex-start",
                  gap: "1rem",
                  "&.Mui-disabled": {
                    cursor: "no-drop",
                    pointerEvents: "auto",
                  },
                }}
              >
                <Stack
                  component="span"
                  direction="row"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    backgroundColor:
                      selectedStep === step.number
                        ? "primary.light"
                        : "transparent",
                    border: "2px solid",
                    borderColor: "primary.light",
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      fontWeight: 700,
                      color:
                        selectedStep === step.number
                          ? "text.primary"
                          : "background.default",
                    }}
                  >
                    {step.number}
                  </Typography>
                </Stack>
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      display: "block",
                      lineHeight: 1,
                      fontSize: "13px",
                      color: "text.secondary",
                    }}
                  >{`Step ${step.number}`}</Typography>
                  <Typography
                    variant="button"
                    sx={{
                      fontWeight: 700,
                      color: "background.default",
                      letterSpacing: "1px",
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Stack>
        </Box>
        {selectedStep === 1 && (
          <PersonalInfoStep
            personalInfo={formValues.personalInfo}
            handleChangeValues={handleChangeFormValues}
            handleNextClick={handleNextStep}
          />
        )}
        {selectedStep === 2 && (
          <PlansStep
            planInfo={formValues.plan}
            handleChangeValues={handleChangeFormValues}
            handleNextClick={handleNextStep}
          />
        )}
        {selectedStep === 3 && (
          <AddOnsStep
            addOns={formValues.addOns}
            planType={formValues.plan.yearly}
            handleChangeValues={handleChangeAddOnsStatus}
            handleNextClick={handleNextStep}
          />
        )}
        {selectedStep === 4 && !openThankPage && (
          <SummaryStep
            plan={formValues.plan}
            addOns={formValues.addOns}
            handleNextClick={handleNextStep}
            handleOpen={handleOpenThankPage}
          />
        )}
        {selectedStep === 4 && openThankPage && <ThanksPage />}
      </Stack>
    </Box>
  );
}

export default App;
