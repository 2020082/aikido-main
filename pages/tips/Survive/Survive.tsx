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
              HOW TO SURVIVE FRESHMAN YEAR OF COLLEGE IN THE DORMS:
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
            1. Pack Smart
          </Typography>
          <Typography>
            Don't overpack! I took pretty much my entire closet from home and
            ended up with no space. I didn't even wear half the things I
            brought. Pack smart and efficiently.Also Organize Your Dorm
            Effectively Because dorm rooms are such small spaces, it is
            important to organize effectively to make the most of your small
            room. I recommend storage containers, shoe organizers, and lots of
            bins and baskets to stay organized!
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
            2. One Day A Week To Clean
          </Typography>
          <Typography>
            Dorm rooms are small and can feel dirty really quickly. I recommend
            picking one day a week to clean your dorm room to avoid it getting
            too messy. I chose to do my weekly cleaning on Sunday so that I
            could start off my week with a clean room and feel prepared for my
            week ahead.
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
            3. Bring Extension Cords
          </Typography>
          <Typography>
            Extension cords are a necessity when it comes to living in your dorm
            freshman year of college. There are usually not very many outlets
            and they are often in inconvenient places. Bring extension cords to
            ensure you are able to plug everything in and have them in a place
            with easy access.
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
            4. Set House Rules
          </Typography>
          <Typography>
            To make living with other people the easiest it can be, set house
            rules. Set quiet times, cleaning schedules, and assign certain
            chores to each roommate. This will split up the work and set rules
            ahead of time so everyone knows what they need to do. Set regular
            fellowship time every month, it can be more easy to communicate with
            roommate and if your roommates want pray together.
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
            5. Keep Your Important Items Safe
          </Typography>
          <Typography>
            I lost my dorm key within 2 weeks of moving in which was a hefty
            $100 fine. Make sure and keep important belongings safe with a key
            ring or phone wallet. I also recommend having a small safe in your
            dorm to keep expensive items in. It’s sad, but people will steal
            things from your room if you keep it open or unlocked while you’re
            not home.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Success;
