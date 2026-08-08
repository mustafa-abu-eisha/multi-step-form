import { Box, Typography, Stack } from "@mui/material";

import thanksIcon from "../assets/images/icon-thank-you.svg";

export default function SummaryStep() {
  return (
    <Stack
      component="section"
      sx={{
        position: "relative",
        flexBasis: { xs: "100%", sm: "calc(100% - 274px)" },
        padding: { xs: 0, lg: "48px 84px 16px 100px" },
        zIndex: 2,
        justifyContent: { xs: "flex-start", sm: "center" },
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "80px 24px",
            sm: "36px 8px 32px 24px",
            md: "36px 24px 32px 40px",
            lg: 0,
          },
          backgroundColor: "hsl(0, 100%, 100%)",
          borderRadius: { xs: "8px", sm: 0 },
          marginInline: { xs: "1rem", sm: 0 },
          boxShadow: { xs: "0px 4px 4px hsl(0deg 0% 0% / 3%)", sm: "none" },
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={thanksIcon}
          alt="Thanks You Icon"
          sx={{
            display: "block",
            marginInline: "auto",
            width: { xs: "56px", sm: "auto" },
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.65rem", sm: "2rem" },
            fontWeight: 700,
            lineHeight: 0.75,
            color: "text.primary",
            marginBlockStart: { xs: "28px", sm: "38px" },
          }}
        >
          {"Thank you!"}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            marginBlockStart: { xs: "14px", sm: "1.5rem" },
          }}
        >
          {
            "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          }
        </Typography>
      </Box>
    </Stack>
  );
}
