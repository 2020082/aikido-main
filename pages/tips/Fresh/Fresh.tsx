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

const Fresh: React.FC = () => {
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
              ADVICE FOR NEW COLLEGE STUDENTS:
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid>
        <ButtonBase sx={{ width: "100%", height: 200 }}>
          <Img alt='complex' src='/tips/newStudent.jpg' />
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
            1. Apply For Scholarships
          </Typography>
          <Typography>
            Scholarship money is the best way to cut down on student debt and
            easy scholarships are often not taken advantage of because people
            just don’t know about them! So many universities offer thousands of
            dollars in scholarships. Most of the time they are awarded for
            sports or grades but you will most likely know if you are being
            offered a scholarship for one of those two ahead of time. Applying
            for scholarships directly through your specific school is one of the
            best ways to earn some extra money, because you are competing
            against fewer students (only within your school!) and less people
            tend to know about them. In addition to these types of scholarships
            though, there are also
            <Link href='/page1' passHref>
              <Typography sx={{ color: "#173932", fontWeight: "bold" }}>
                plenty of scholarship
              </Typography>
            </Link>
            of all kinds offered by companies, professional organizations,
            non-profits, and other groups who are looking to help out students,
            so don’t forget about these!
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
            2. Do Your Research On Campus Services
          </Typography>
          <Typography>
            Getting to know your school resources is one of the biggest
            recommendations I have for incoming college freshmen. For example,
            my school offers tutoring, transport, help to build a resume, and
            other connections to help you get a job in the future. You are
            paying a lot of money to go to school so make sure you are taking
            advantage of your tuition!
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
            3. Use A Packing List
          </Typography>
          <Typography>
            I know packing up all your belongings is intimidating and you always
            feel like your forgetting something. Using a packing list is the
            best way to ensure you bring anything and everything you need during
            your freshman year of college. We have a free printable college dorm
            packing checklist that covers everything you need! Print this out
            ahead of time so you know exactly what you need to pack and can plan
            accordingly.
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
            4. Plan Separate Move-In Times From Your Roommate
          </Typography>
          <Typography>
            Move-in day is stressful enough as is and moving in the same day and
            time as your roommate will really add to the chaos. Try and plan a
            separate move-in day with your roommate ahead of time so you aren’t
            getting in each other’s way.
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
            5. Expect To Pay More Than You Thought
          </Typography>
          <Typography>
            One of the biggest things I wish I had known before moving to school
            was how much extra money I would have to pay that my tuition did not
            cover. This includes everything from books and supplies to computer
            programs for classes. I even had to pay an extra $100 just to access
            a website that my homework was on. These were things I could not
            have done school without and were absolutely mandatory to pay for.
            Try to budget a couple of hundred dollars at the beginning of each
            semester to cover these expenses.
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
            6. Schedule Classes When You Are Most Productive
          </Typography>
          <Typography>
            If you weren't a morning person in high school, you definitely won't
            be in college. You may think an 8 am class is great compared to your
            7 am high school start time but I'm telling you something changes
            your freshman year at college. If you have a hard time getting up
            early do yourself a favor and schedule your classes later. BUT, if
            you are an early bird, schedule your classes in the morning! I'm
            such an early riser and get burnt out by like 3 pm so I hated having
            class past 1. Try to schedule your classes around times when you are
            most productive.
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
            7. Talk To Your Advisor
          </Typography>
          <Typography>
            Your advisor is there to help you and knows exactly what classes you
            need to take in order to graduate on time. Set up a time before each
            semester to plan your classes and make a schedule. This will ensure
            you are on track to graduating and prevent you from getting to your
            senior year and realizing you actually need to take more credits.
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
            8. Having An Undecided Major Is Completely Normal
          </Typography>
          <Typography>
            I had so many friends, myself included, that had no idea what they
            wanted to go into. If this is you, it is totally okay to be unsure
            what you want to do. Most students end up switching their majors a
            couple of times anyway. One of my friends has switched hers 6 times.
            If you are going into school with an undecided major, I would
            suggest taking general classes that you would need to take no matter
            what major you decide on. This will make sure you don't take classes
            that won't count towards the major you eventually choose. If you
            have room in your schedule, also take classes that you think you may
            be interested in. This way you can get an idea about what you like
            and what you might want to major in down the road.
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
            9. Go To Your Schools Orientation
          </Typography>
          <Typography>
            Going to your school’s orientation is the best way to familiarize
            yourself with your campus and get to know your school. I went to my
            school’s orientation about a month before and found out so much
            information that would help me during my time on campus. I also met
            one of my closest friends during orientation!
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
            10. Look Up Your Professors
          </Typography>
          <Typography>
            I am going to share the best website ever with you that is one of
            the best pieces of advice I could give to a college freshman.
            www.ratemyprofessors.com
            <Link href='https://www.ratemyprofessors.com/' passHref>
              <Typography sx={{ color: "#173932", fontWeight: "bold" }}>
                www.ratemyprofessors.com
              </Typography>
            </Link>
            When picking classes, you should look up your professor on here.
            Looking up your professor ahead of time will let you know how hard
            the class is, how heavy the workload will be, if attendance is
            mandatory, etc. If there is a class with multiple professors, I
            would use this to see which professor's class to take. Seriously,
            this website is life-saving.
          </Typography>
        </Grid>
      </Grid>
      {/* <Link href='..'>
        <Button className='bg-blue-900 hover:bg-blue-500 bg-opacity-80 text-white font-bold py-3 rounded-l mb-4 w-[160px]'>
          back
        </Button>
      </Link> */}
    </Grid>
  );
};

export default Fresh;
