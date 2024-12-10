/** @format */

import React, { useState } from "react";
import ImageCarousel from "@/components/imageCarousel";
import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CouncelorModal from "./Modal/modal2";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import TutorModal from "./Modal/modal";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  },
  darkerTextField: {
    "& .MuiInputBase-input": {
      color: "rgba(0, 0, 0, 0.9)",
    },
  },
}));

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SSPage: React.FC = () => {
  const [openTutorModal, setOpenTutorModal] = useState(false);
  const [openCounselorModal, setOpenCounselorModal] = useState(false);

  const handleOpenTutorModal = () => {
    setOpenTutorModal(true);
  };

  const handleCloseTutorModal = () => {
    setOpenTutorModal(false);
  };

  const handleOpenCounselorModal = () => {
    setOpenCounselorModal(true);
  };

  const handleCloseCounselorModal = () => {
    setOpenCounselorModal(false);
  };

  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <ImageCarousel
          textContent="Student Support"
          textdesc="Where to turn when you need a helping hand"
          image={"/LifePage/Lifebg.jpg"}
        />
      </Grid>

      <Paper
        elevation={0}
        sx={{
          maxWidth: "90%",
          marginTop: "5rem",
          marginLeft: "5rem",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          border: "1px solid #173980",
          padding: "2rem",
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.formContainer}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              marginTop: "20rem",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#173980",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  padding: "2rem",
                  width: "100%",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                "Are you currently considering enlisting the expertise of a
                tutor to augment your progress and proficiency in your
                endeavors?"
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", marginLeft: "2rem" }}>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}
              >
                1.Customized Learning Plan:
              </Typography>
              <Typography>
                Tutors can create a customized learning plan based on your
                strengths, weaknesses, and goals, ensuring that you make
                progress efficiently.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}
              >
                2. Motivation:
              </Typography>
              <Typography>
                Tutors can offer encouragement and motivation, helping you stay
                focused and committed to your learning goals.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}
              >
                3. Personalized Attention:
              </Typography>
              <Typography>
                Tutors can tailor their teaching style to your learning pace and
                preferences, providing personalized attention that may not be
                possible in a classroom setting.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                If you want to find a tutor click here
                <Button
                  onClick={handleOpenTutorModal}
                  style={{ color: "#007bff", fontSize: "1.3rem" }}
                >
                  <ArrowRightAltOutlinedIcon />
                  Find a Tutor
                </Button>
                .
              </Typography>
              <TutorModal
                open={openTutorModal}
                handleClose={handleCloseTutorModal}
              />
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#173980",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  padding: "2rem",
                  width: "100%",
                  fontSize: "2rem",
                  textAlign: "center",
                }}
              >
                "Have you been contemplating the idea of seeking the assistance
                of a counselor to enhance your journey towards personal growth
                and emotional well-being?"
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", marginLeft: "2rem" }}>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}
              >
                1.Professional Guidance:
              </Typography>
              <Typography>
                Counselors possess the expertise and knowledge to offer
                personalized guidance and support that addresses your unique
                needs. Their training enables them to provide evidence-based
                strategies and insights to help you overcome challenges and
                achieve your goals effectively.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}
              >
                2. Emotional Support:
              </Typography>
              <Typography>
                One of the core aspects of counseling is the provision of a safe
                and supportive environment where you can freely express your
                emotions and thoughts without fear of judgment. Counselors offer
                empathetic listening and validation, which can be incredibly
                validating and comforting, especially during times of distress
                or uncertainty.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                }}
              >
                3. Empowerment:
              </Typography>
              <Typography>
                Counseling empowers individuals by fostering self-awareness,
                self-acceptance, and self-efficacy. Through the therapeutic
                process, you gain a deeper understanding of yourself, your
                strengths, and areas for growth. This self-awareness enables you
                to make informed decisions, set meaningful goals, and take
                proactive steps towards positive change and personal
                fulfillment.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "fantasy",
                  fontStyle: "oblique",
                  fontSize: "1.5rem",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                If you want to find a tutor click here
                <Button
                  onClick={handleOpenCounselorModal}
                  style={{ color: "#007bff", fontSize: "1.3rem" }}
                >
                  <ArrowRightAltOutlinedIcon />
                  Find a Counselor
                </Button>
                .
              </Typography>
              <CouncelorModal
                open={openCounselorModal}
                handleClose={handleCloseCounselorModal}
              />
            </Box>
            <Box sx={{ padding: "1rem", marginLeft: "2rem" }}>
              <Typography
                variant="h2"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  padding: "2rem",
                  width: "100%",
                  fontSize: "2rem",
                  textAlign: "start",
                  marginTop: "2rem",
                }}
              >
                Student Care Program (SCP)
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  fontSize: "1.2rem",
                }}
              >
                Student Care Program is a designated program for each student of
                MIU. Please contact your department AS to get more information
                about the program.
              </Typography>
            </Box>
            <Box sx={{ padding: "1rem", marginLeft: "2rem" }}>
              <Typography
                variant="h2"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  padding: "2rem",
                  width: "100%",
                  fontSize: "2rem",
                  textAlign: "start",
                }}
              >
                Membership Trainig Program (MTP)
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  fontSize: "1.2rem",
                }}
              >
                Member Training Program (MTP) is an off-campus event hosted
                annually by each department at the start of the new academic
                year. It aims to welcome the newly enrolled students to their
                department professors, senior students and peers, helping them
                adjust to university life with ease, further promoting healthy
                relationships. Programs may include games, sports and seminars.
              </Typography>
            </Box>
          </Grid>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
};

export default SSPage;
