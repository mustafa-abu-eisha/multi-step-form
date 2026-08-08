import { Box, Typography, Button, Stack } from "@mui/material";

import checkmarkIcon from "../assets/images/icon-checkmark.svg";

export default function AddOnsStep({
  addOns,
  planType,
  handleChangeValues,
  handleNextClick,
}) {
  const handleSubmit = (e, step) => {
    e.preventDefault();
    handleNextClick(step);
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
          {"Pick add-ons"}
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
          {"Add-ons help enhance your gaming experience."}
        </Typography>
        <Box
          component="form"
          sx={{ marginBlockStart: { xs: "1.25rem", sm: "2.75rem" } }}
          id="add-ons-form"
        >
          <Stack sx={{ gap: { xs: "12px", sm: "16px" } }}>
            {addOns.map((add) => (
              <Button
                key={add.name}
                disableRipple
                onClick={() => handleChangeValues(add.name)}
                sx={{
                  textAlign: "start",
                  padding: { xs: "16px 16px 12px", md: "24px 24px 20px" },
                  borderRadius: "8px",
                  justifyContent: "flex-start",
                  textTransform: "none",
                  backgroundColor: add.selected
                    ? "background.paper"
                    : "transparent",
                  border: "1px solid",
                  borderColor: add.selected ? "action.hover" : "divider",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20px",
                    height: "20px",
                    borderRadius: "4px",
                    marginInlineEnd: { xs: "1rem", md: "1.5rem" },
                    border: "1px solid",
                    borderColor: add.selected ? "action.hover" : "divider",
                    backgroundColor: add.selected
                      ? "action.hover"
                      : "transparent",
                  }}
                >
                  <Box
                    component="img"
                    src={checkmarkIcon}
                    alt="Checkmark Icon"
                  />
                </Box>
                <Box component="span" sx={{ flex: 1 }}>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      display: "block",
                      lineHeight: 0.75,
                      fontSize: { xs: "14px", md: "17.5px" },
                      fontWeight: 700,
                      color: "text.primary",
                    }}
                  >
                    {add.name}
                  </Typography>
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      display: "block",
                      lineHeight: 0.75,
                      fontSize: { xs: "12.5px", md: "1rem" },
                      color: "text.secondary",
                      marginBlockStart: "10px",
                    }}
                  >
                    {add.describe}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body1"
                  sx={{
                    display: "block",
                    lineHeight: 0.75,
                    fontWeight: { xs: 500, md: 400 },
                    fontSize: { xs: "13px", md: "1rem" },
                    color: "action.hover",
                  }}
                >
                  {`+$${planType ? add.yearlyPrice : add.monthlyPrice}/${planType ? "yr" : "mo"}`}
                </Typography>
              </Button>
            ))}
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
          onClick={(e) => handleSubmit(e, 2)}
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
          form="add-ons-form"
          disableRipple
          onClick={(e) => handleSubmit(e, 4)}
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
