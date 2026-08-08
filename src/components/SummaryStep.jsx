import { useMemo } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function SummaryStep({
  plan,
  addOns,
  handleNextClick,
  handleOpen,
}) {
  const totalPrices = useMemo(() => {
    const usedAddOns = addOns.filter((add) => add.selected);
    if (plan.yearly) {
      return usedAddOns.reduce((acc, add) => acc + add.yearlyPrice, plan.price);
    } else {
      return usedAddOns.reduce(
        (acc, add) => acc + add.monthlyPrice,
        plan.price,
      );
    }
  }, [addOns, plan.price, plan.yearly]);
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
          {"Finishing up"}
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
          {"Double-check everything looks OK before confirming."}
        </Typography>
        <Box sx={{ marginBlockStart: { xs: "1.25rem", sm: "2.75rem" } }}>
          <Box
            sx={{
              padding: { xs: "20px 16px 18px", sm: "24px 24px 28px" },
              backgroundColor: "background.paper",
              borderRadius: "8px",
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "text.primary",
                    lineHeight: 0.75,
                  }}
                >{`${plan.planName}(${plan.yearly ? "Yearly" : "Monthly"})`}</Typography>
                <Button
                  disableRipple
                  onClick={() => handleNextClick(2)}
                  sx={{
                    padding: 0,
                    textTransform: "none",
                    color: "text.secondary",
                    textDecoration: "underline",
                    textDecorationThickness: "2px",
                    justifyContent: "flex-start",
                    lineHeight: 1,
                    marginBlockStart: "10px",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "action.hover",
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "transparent",
                      color: "action.hover",
                      textDecoration: "underline",
                      textDecorationThickness: "2px",
                    },
                  }}
                >
                  Change
                </Button>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "text.primary",
                  lineHeight: 0.75,
                }}
              >{`$${plan.price}/${plan.yearly ? "yr" : "mo"}`}</Typography>
            </Stack>
            <Stack
              sx={{
                gap: "24px",
                paddingBlockStart: "20px",
                marginBlockStart: "24px",
                borderTop: "1px solid",
                borderTopColor: "divider",
              }}
            >
              {addOns.map((add) => {
                if (add.selected) {
                  return (
                    <Stack
                      key={add.name}
                      sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ lineHeight: 0.75, color: "text.secondary" }}
                      >
                        {add.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: 0.75,
                          color: "text.primary",
                        }}
                      >{`+$${plan.yearly ? add.yearlyPrice : add.monthlyPrice}/${plan.yearly ? "yr" : "mo"}`}</Typography>
                    </Stack>
                  );
                }
              })}
            </Stack>
          </Box>
          <Stack
            sx={{
              padding: { xs: "28px 16px 0", sm: "26px 24px 0" },
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              sx={{ lineHeight: 0.75, color: "text.secondary" }}
            >
              {`Total (per ${plan.yearly ? "year" : "month"})`}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "action.hover",
                lineHeight: 0.75,
              }}
            >{`+$${totalPrices}/${plan.yearly ? "yr" : "mo"}`}</Typography>
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
          onClick={() => handleNextClick(3)}
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
          disableRipple
          onClick={handleOpen}
          sx={{
            width: { xs: "100px", sm: "124px" },
            height: { xs: "40px", sm: "48px" },
            borderRadius: { xs: "4px", sm: "8px" },
            backgroundColor: "action.hover",
            color: "background.default",
            fontSize: { xs: "15px", sm: "1rem" },
            textTransform: "none",
            marginInlineStart: "auto",
            "&:hover": {
              opacity: 0.65,
            },
            "&.Mui-focusVisible": {
              opacity: 0.65,
            },
          }}
        >
          Confirm
        </Button>
      </Stack>
    </Stack>
  );
}
