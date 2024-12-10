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

const Social: React.FC = () => {
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
              HOW TO MAKE FRIENDS IN COLLEGE:
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid>
        <ButtonBase sx={{ width: "100%", height: 200 }}>
          <Img alt='complex' src='/tips/social.jpg' />
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
            1.Message People Before Going To School
          </Typography>
          <Typography>
            One of my best pieces of college advice for freshman is to message
            people before going to school. Make connections ahead of time so
            when you get to school you feel a little less lonely. I did this
            before my freshman year and it honestly got me even more excited to
            move in.
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
            2. Don't Be Afraid To Reach Out To People You Haven't Talked To
          </Typography>
          <Typography>
            I remember feeling so weird texting someone I had barely talked to
            to ask to hang out. But, I promise it is not only normal but
            something I 100% encourage. So many students are trying to find
            friends freshman year so I promise no one will feel weirded out if
            you ask them to hang out without talking much. In fact, it will
            probably make their day!
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
            3. Don't Try And Force A Friendship
          </Typography>
          <Typography>
            While you do want to make an effort to make friends, you also don't
            want to force a friendship. If you have asked someone multiple times
            to hang out and they seem to flake or never make an effort to see
            you, don’t push it! There are plenty of other people that would love
            to be friends with you and you will end up getting along with them
            better anyways!
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
            4. Your Friends Will Change And That Is Okay
          </Typography>
          <Typography>
            Losing friends is something that is so normal in college but also
            something I was totally not prepared for. I started out the year
            hanging out with a huge group of girls and it stayed that way for a
            few months. But as the year goes on, you will become more or less
            close with certain people and your group will start to get smaller
            which is totally okay and normal! I definitely went through a period
            where I felt like I had no friends at school and most people I have
            talked to said the exact same thing their freshman year. There are
            thousands of people in college so meeting your lifelong best friends
            freshman year doesn't always happen! Just know a ton of other people
            feel the same way you do so don't stop trying.
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
            5. Don't Change Yourself To Fit In
          </Typography>
          <Typography>
            College is a huge community of people that are different in all
            kinds of ways. One thing you should never do is change who you are
            or what you enjoy in order to fit in in college. I was definitely
            guilty of doing this in high school because it was such a small
            school and I wanted to fit in. But, in college, there are so many
            more people you are likely to fit in with naturally! Even though it
            may take time, there are people that are like-minded as you and you
            will find them.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Social;
