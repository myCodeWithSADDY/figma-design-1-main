import React from "react";
import { Box, Typography, Container } from "@mui/material";
import {
  fontSize,
  styled,
  textAlign,
  useMediaQuery,
  useTheme,
} from "@mui/system";

const data = [
  {
    id: 1,
    title: "Welcome",
    description: "Your partner in academic excellence.",
    subhead:
      "Your ultimate destination for seamless paper preparation. Whether you are drafting research papers, creating academic assignments, or organizing ideas, we have got you covered. Start crafting brilliance today!",
  },
];

const HeroWrapper = styled(Box)(({ theme }) => ({
  height: "90vh",
  width: "100%",
  position: "relative",
  backgroundImage:
    'url("https://s3-alpha-sig.figma.com/img/9c30/596e/442e1ba1dce49ebff90b0fcc6b70462c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZS9ub5f-Q0P7uxlg0BPphyYXgfdLVB6~fRm2Y9Uux938bJJRU94Xjb0B~6DvnX7ScPEVWKdB9jartyv1ASrAs9hXRawLLpU-ffJbtKku~2FakYjiXCFRJCaR8hDkIln46BEOvDTSVDBqFV241OZruZcBLESp4xJ33yQjM1ot0g4JFSONJhRENqJURz7egOwqYbzoouZkkCUNg3HjmIGFK3SC-P~sXuBl1~~aOtclfE~Am-VsBEKqjY-tMJvEuIjqcpSKdechz3~6TTmNdqFfPzE02-M9YE93iMk5BWRcqPWBr~q8BUgbYK66X6uU-OzHT5mneZ53w3EsuMPt9mVGA__")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#E4FBC4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center", // Adjust padding on smaller screens
    alignItems: "center",
  },
  justifyContent: "space-between",
  padding: theme.spacing(4),
}));

const MainText = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  maxWidth: "600px",
  marginBottom: theme.spacing(2),
  fontWeight: 700,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    textAlign: "center",
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
}));

const EmailText = styled(Typography)(({ theme }) => ({
  color: "#e0e0e0",
  opacity: 0.8,
  fontWeight: 300,
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isPad = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <HeroWrapper>
      <ContentWrapper>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              fontSize: isMobile || isPad ? "3rem" : "2rem",
              mt: "auto",
              mb: "auto",
              maxWidth: "50%",
            }}
          >
            <MainText variant="h3" gutterBottom>
              {item.title}
            </MainText>
            <MainText
              variant="h5"
              sx={{
                color: "#FFEA00",
                fontSize: isMobile || isPad ? "2rem" : "2rem",
              }}
            >
              {item.description}
            </MainText>
            <MainText
              variant="subtext"
              sx={{ display: isMobile ? "none" : "block" }}
              fontSize={"1rem"}
            >
              {item.subhead}
            </MainText>
          </Box>
        ))}

        <EmailText variant="subtitle1">info@malikharoon.com</EmailText>
      </ContentWrapper>
    </HeroWrapper>
  );
};

export default Hero;
