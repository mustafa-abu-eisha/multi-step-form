import {
  Box,
  Typography,
  styled,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
  ToggleButton,
  Switch,
  Button,
  Stack,
} from "@mui/material";

import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.firstButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      border: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderRadius: "8px",
    },
  [`& .${toggleButtonGroupClasses.lastButton}, & .${toggleButtonGroupClasses.middleButton}`]:
    {
      marginInlineStart: 0,
      border: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderRadius: "8px",
    },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 4,
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        ...theme.applyStyles("dark", {
          backgroundColor: theme.palette.primary.main,
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
    boxSizing: "border-box",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

const plans = [
  {
    name: "Arcade",
    icon: arcadeIcon,
    monthlyPrice: 9,
    yearlyPrice: 90,
  },
  {
    name: "Advanced",
    icon: advancedIcon,
    monthlyPrice: 12,
    yearlyPrice: 120,
  },
  {
    name: "Pro",
    icon: proIcon,
    monthlyPrice: 15,
    yearlyPrice: 150,
  },
];

export default function PlansStep({
  planInfo,
  handleChangeValues,
  handleNextClick,
}) {
  const handleSubmit = (e, step) => {
    e.preventDefault();
    handleNextClick(step);
  };

  const handlePlanChange = (e) => {
    handleChangeValues("plan", "planName", e.target.value);
    const selectedPrice = planInfo.yearly
      ? plans.find((plan) => plan.name === e.target.value).yearlyPrice
      : plans.find((plan) => plan.name === e.target.value).monthlyPrice;
    handleChangeValues("plan", "price", selectedPrice);
  };
  const handlePlanPriceChange = (e) => {
    handleChangeValues("plan", "yearly", e.target.checked);
    const selectedPrice = e.target.checked
      ? plans.find((plan) => plan.name === planInfo.planName).yearlyPrice
      : plans.find((plan) => plan.name === planInfo.planName).monthlyPrice;
    handleChangeValues("plan", "price", selectedPrice);
  };

  return (
    <Stack
      component="section"
      sx={{
        position: "relative",
        flexBasis: { xs: "100%", sm: "calc(100% - 274px)" },
        padding: { xs: 0, lg: "48px 84px 16px 100px" },
        zIndex: 2,
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "36px 24px 32px",
            sm: "36px 8px 32px 24px",
            md: "36px 24px 32px 40px",
            lg: 0,
          },
          backgroundColor: "hsl(0, 100%, 100%)",
          borderRadius: { xs: "8px", sm: 0 },
          marginInline: { xs: "1rem", sm: 0 },
          boxShadow: { xs: "0px 4px 4px hsl(0deg 0% 0% / 3%)", sm: "none" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.65rem", sm: "2rem" },
            fontWeight: 700,
            lineHeight: 0.75,
            color: "text.primary",
          }}
        >
          Select your plan
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "18px", sm: "1rem" },
            lineHeight: { xs: 1.5, md: 0.85 },
            color: "text.secondary",
            marginBlockStart: { xs: "14px", sm: "1.25rem" },
          }}
        >
          {"You have the option of monthly or yearly billing."}
        </Typography>
        <Box
          component="form"
          sx={{ marginBlockStart: { xs: "1.25rem", sm: "2.5rem" } }}
          id="plans-form"
        >
          <StyledToggleButtonGroup
            value={planInfo.planName}
            fullWidth
            exclusive
            onChange={handlePlanChange}
            aria-label="Choose Plan"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "12px", sm: "18px" },
            }}
          >
            {plans.map((plan) => (
              <ToggleButton
                disableRipple
                key={plan.name}
                value={plan.name}
                aria-label={`${plan.name} plan`}
                sx={{
                  padding: "20px 16px",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  flex: 1,
                  textTransform: "none",
                  flexDirection: { xs: "row", sm: "column" },
                  gap: { xs: "14px", sm: "2.75rem" },
                  "&:hover": {
                    backgroundColor: "background.paper",
                  },
                  "&.Mui-selected": {
                    borderColor: "action.hover",
                    backgroundColor: "background.paper",
                    "&:hover": {
                      backgroundColor: "background.paper",
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={plan.icon}
                  alt={`${plan.name} plan`}
                  sx={{ display: "block", pointerEvents: "none" }}
                />
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    textAlign: "start",
                    pointerEvents: "none",
                  }}
                >
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      display: "block",
                      fontWeight: 700,
                      color: "text.primary",
                      lineHeight: 0.75,
                    }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 0.95,
                      color: "text.secondary",
                      marginBlockStart: "10px",
                    }}
                  >
                    {`$${planInfo.yearly ? plan.yearlyPrice : plan.monthlyPrice}/${planInfo.yearly ? "yr" : "mo"}`}
                  </Typography>
                  {planInfo.yearly && (
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{
                        display: "block",
                        fontSize: "13px",
                        color: "text.primary",
                        fontWeight: 500,
                        marginBlockStart: "12px",
                        lineHeight: 0.75,
                      }}
                    >
                      2 months free
                    </Typography>
                  )}
                </Box>
              </ToggleButton>
            ))}
          </StyledToggleButtonGroup>
          <Stack
            direction="row"
            sx={{
              padding: "14px",
              borderRadius: "8px",
              gap: "24px",
              backgroundColor: "background.paper",
              justifyContent: "center",
              alignItems: "center",
              marginBlockStart: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                lineHeight: 0.75,
                color: !planInfo.yearly ? "text.primary" : "text.secondary",
              }}
            >
              Monthly
            </Typography>
            <AntSwitch
              disableRipple
              checked={planInfo.yearly}
              onChange={(e) => handlePlanPriceChange(e)}
              slotProps={{ input: { "aria-label": "ant design" } }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                lineHeight: 0.75,
                color: planInfo.yearly ? "text.primary" : "text.secondary",
              }}
            >
              Yearly
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: "1rem",
            sm: "0 8px 16px 24px",
            md: "0 24px 16px 40px",
            lg: 0,
          },
          backgroundColor: "hsl(0, 100%, 100%)",
        }}
      >
        <Button
          disableRipple
          onClick={(e) => handleSubmit(e, 1)}
          sx={{
            padding: 0,
            minWidth: "auto",
            fontSize: "16px",
            backgroundColor: "transparent",
            textTransform: "none",
            color: "text.secondary",
            lineHeight: 1,
          }}
        >
          Go Back
        </Button>
        <Button
          type="submit"
          form="plans-form"
          disableRipple
          onClick={(e) => handleSubmit(e, 3)}
          sx={{
            width: { xs: "100px", sm: "124px" },
            height: { xs: "40px", sm: "48px" },
            borderRadius: { xs: "4px", sm: "8px" },
            backgroundColor: "primary.main",
            color: "background.default",
            fontSize: { xs: "15px", sm: "1rem" },
            textTransform: "none",
            marginInlineStart: "auto",
            "&:hover": {
              opacity: 0.85,
            },
            "&.Mui-focusVisible": {
              opacity: 0.85,
            },
          }}
        >
          Next Step
        </Button>
      </Stack>
    </Stack>
  );
}
