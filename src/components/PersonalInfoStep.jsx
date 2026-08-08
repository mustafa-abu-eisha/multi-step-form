import { useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function PersonalInfoStep({
  personalInfo,
  handleChangeValues,
  handleNextClick,
}) {
  const [errors, setErrors] = useState({
    nameErrors: null,
    emailErrors: null,
    phoneErrors: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = personalInfo.userName.trim();
    const trimmedEmail = personalInfo.emailAddress.trim();
    const trimmedPhone = personalInfo.phoneNumber.trim();

    const nameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\+\d{1,3}\d{9}$/;

    const newErrors = {
      nameErrors: null,
      emailErrors: null,
      phoneErrors: null,
    };

    if (!trimmedName) newErrors.nameErrors = "This field is required";
    else if (!nameRegex.test(trimmedName))
      newErrors.nameErrors = "Please enter a valid name";

    if (!trimmedEmail) newErrors.emailErrors = "This field is required";
    else if (!emailRegex.test(trimmedEmail))
      newErrors.emailErrors = "Please enter a valid email";

    if (!trimmedPhone) newErrors.phoneErrors = "This field is required";
    else if (!phoneRegex.test(trimmedPhone))
      newErrors.phoneErrors = "Please enter a valid phone number";

    setErrors(newErrors);

    if (
      !newErrors.nameErrors &&
      !newErrors.emailErrors &&
      !newErrors.phoneErrors
    ) {
      handleNextClick(2);
    }
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
          variant="h1"
          sx={{
            fontSize: { xs: "1.65rem", sm: "2rem" },
            fontWeight: 700,
            lineHeight: 0.75,
            color: "text.primary",
          }}
        >
          Personal info
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
          {"Please provide your name, email address, and phone number."}
        </Typography>
        <Box
          component="form"
          sx={{ marginBlockStart: { xs: "1.5rem", sm: "3rem" } }}
          id="personal-form"
        >
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "14px", sm: "1rem" },
                color: "text.primary",
                lineHeight: 0.75,
                display: "block",
              }}
            >
              Name
            </Typography>
            {errors.nameErrors && (
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  right: 0,
                  fontSize: { xs: "12px", md: "16px" },
                  top: { xs: 0, md: "-.25rem" },
                  fontWeight: 700,
                  color: "error.main",
                }}
              >
                {errors.nameErrors}
              </Typography>
            )}
            <TextField
              fullWidth
              id="user-name"
              autoComplete="off"
              variant="outlined"
              placeholder="e.g. Stephen King"
              value={personalInfo.userName}
              onChange={(e) =>
                handleChangeValues("personalInfo", "userName", e.target.value)
              }
              sx={{
                marginBlockStart: { xs: "6px", sm: "10px" },
                "& .MuiOutlinedInput-root": {
                  fontSize: "16.45px",
                  fontWeight: 500,
                  borderRadius: { xs: "4px", sm: "8px" },
                  height: { xs: "40px", sm: "48px" },
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "action.hover",
                    },
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "1px",
                      borderColor: "action.hover",
                    },
                  },
                },
                "& input": {
                  padding: "0 16px",
                  "&::placeholder": {
                    color: "text.secondary",
                    opacity: 0.9,
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: errors.nameErrors ? "error.main" : "divider",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              marginBlockStart: { xs: "14px", sm: "1.5rem" },
              position: "relative",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "14px", sm: "1rem" },
                color: "text.primary",
                lineHeight: 0.75,
                display: "block",
              }}
            >
              Email Address
            </Typography>
            {errors.emailErrors && (
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  right: 0,
                  fontSize: { xs: "12px", md: "16px" },
                  top: { xs: 0, md: "-.25rem" },
                  fontWeight: 700,
                  color: "error.main",
                }}
              >
                {errors.emailErrors}
              </Typography>
            )}
            <TextField
              fullWidth
              id="email-address"
              autoComplete="off"
              variant="outlined"
              placeholder="e.g. stephenking@lorem.com"
              value={personalInfo.emailAddress}
              onChange={(e) =>
                handleChangeValues(
                  "personalInfo",
                  "emailAddress",
                  e.target.value,
                )
              }
              sx={{
                marginBlockStart: { xs: "6px", sm: "10px" },
                "& .MuiOutlinedInput-root": {
                  fontSize: "16.45px",
                  fontWeight: 500,
                  borderRadius: { xs: "4px", sm: "8px" },
                  height: { xs: "40px", sm: "48px" },
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "action.hover",
                    },
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "1px",
                      borderColor: "action.hover",
                    },
                  },
                },
                "& input": {
                  padding: "0 16px",
                  "&::placeholder": {
                    color: "text.secondary",
                    opacity: 0.9,
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: errors.emailErrors ? "error.main" : "divider",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              marginBlockStart: { xs: "14px", sm: "1.5rem" },
              position: "relative",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "14px", sm: "1rem" },
                color: "text.primary",
                lineHeight: 0.75,
                display: "block",
              }}
            >
              Phone Number
            </Typography>
            {errors.phoneErrors && (
              <Typography
                variant="body1"
                sx={{
                  position: "absolute",
                  right: 0,
                  fontSize: { xs: "12px", md: "16px" },
                  top: { xs: 0, md: "-.25rem" },
                  fontWeight: 700,
                  color: "error.main",
                }}
              >
                {errors.phoneErrors}
              </Typography>
            )}
            <TextField
              fullWidth
              id="phone-number"
              autoComplete="off"
              variant="outlined"
              placeholder="e.g. +1 234 567 890"
              value={personalInfo.phoneNumber}
              onChange={(e) =>
                handleChangeValues(
                  "personalInfo",
                  "phoneNumber",
                  e.target.value,
                )
              }
              sx={{
                marginBlockStart: { xs: "6px", sm: "10px" },
                "& .MuiOutlinedInput-root": {
                  fontSize: "16.45px",
                  fontWeight: 500,
                  borderRadius: { xs: "4px", sm: "8px" },
                  height: { xs: "40px", sm: "48px" },
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "action.hover",
                    },
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "1px",
                      borderColor: "action.hover",
                    },
                  },
                },
                "& input": {
                  padding: "0 16px",
                  "&::placeholder": {
                    color: "text.secondary",
                    opacity: 0.9,
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: errors.phoneErrors ? "error.main" : "divider",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
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
          type="submit"
          form="personal-form"
          disableRipple
          onClick={handleSubmit}
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
