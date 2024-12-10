/** @format */

import React from "react";
import { Grid, Typography, createTheme, ThemeProvider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";

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

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Success: React.FC = () => {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          borderBottom: "solid 2px #173992",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "1rem",
          minHeight: "10rem",
        }}>
        <Grid
          item
          xs={12}
          lg={10}
          xl={8}
          sx={{ margin: "auto", marginTop: "5rem" }}>
          <ThemeProvider theme={theme}>
            <Typography
              variant='h2'
              sx={{
                color: "#173980",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "2rem",
                width: "100%",
                fontSize: "2rem",
                textAlign: "center",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              COLLEGE TIPS FOR SUCCESS IN CLASS:
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid>
        <ButtonBase sx={{ width: "100%", height: 200 }}>
          <Img alt='complex' src='/tips/success.jpg' />
        </ButtonBase>
      </Grid>
      <Grid
        item
        xs={12}
        sm
        container
        direction='column'
        sx={{ width: "80%", marginLeft: "5rem", marginBottom: "5rem" }}>
        <Grid
          item
          xs={12}
          sm
          container
          direction='column'
          spacing={2}
          sx={{ marginTop: "1rem" }}>
          <Typography
            sx={{
              fontFamily: "fantasy",
              fontStyle: "oblique",
              fontSize: "1.5rem",
            }}>
            1. Go To Study Sessions
          </Typography>
          <Typography>
            A ton of professors will hold study sessions before big exams. These
            are the perfect time to ask questions and a lot of times the
            professor will even go over test questions. Study sessions are a
            great alternative to private tutoring that is not only free but
            specific to your class.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          direction='column'
          spacing={2}
          sx={{ marginTop: "1rem" }}>
          <Typography
            sx={{
              fontFamily: "fantasy",
              fontStyle: "oblique",
              fontSize: "1.5rem",
            }}>
            2. Make A Friend In Each Of Your Classes
          </Typography>
          <Typography>
            One piece of advice every college freshman should know is to make a
            friend in each of your classes. Having that one person you can talk
            to, get help from, and collaborate with makes a big class feel less
            lonely. I made a friend in one of my classes that ended up having
            the same major as me, meaning we had a ton of the same classes. We
            ended up helping each other all through college and actually became
            good friends!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          direction='column'
          spacing={2}
          sx={{ marginTop: "1rem" }}>
          <Typography
            sx={{
              fontFamily: "fantasy",
              fontStyle: "oblique",
              fontSize: "1.5rem",
            }}>
            3. Take Effective Notes
          </Typography>
          <Typography>
            One of my biggest pieces of college advice for freshman is to take
            good and effective notes. In college, this does not mean write down
            your entire lecture word for word. This is not only impossible with
            how fast college professors talk but is also pretty much useless.
            Write down key points and ways to remember the material. Make the
            material make sense to you. If you are ever having trouble keeping
            up with lectures, you can always record the lecture with your phone
            to listen back to and take additional notes.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          direction='column'
          spacing={2}
          sx={{ marginTop: "1rem" }}>
          <Typography
            sx={{
              fontFamily: "fantasy",
              fontStyle: "oblique",
              fontSize: "1.5rem",
            }}>
            4. Look For Pre-Made Quizlets
          </Typography>
          <Typography>
            You have to think about the fact that so many students have taken
            the same class before you. This means there are a ton of students
            that have already made study guides for quizzes and exams. Look up
            your class and school and search for pre-made Quizlets. These are
            great resources that will save you time making a study guide from
            scratch.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          direction='column'
          spacing={2}
          sx={{ marginTop: "1rem" }}>
          <Typography
            sx={{
              fontFamily: "fantasy",
              fontStyle: "oblique",
              fontSize: "1.5rem",
            }}>
            5. Give Yourself Breaks
          </Typography>
          <Typography>
            College is going to be stressful so it is completely normal and
            healthy to give yourself breaks. My favorite thing to do was plan
            ahead and give myself a day off that I had no homework to do. Set
            alarms while doing your homework and allow yourself a 15-minute
            break to stretch, walk around, and grab a snack. This will keep you
            from getting frustrated or overwhelmed while doing work.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Success;
