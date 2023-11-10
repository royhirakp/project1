import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import HeaderContainer from "@/container/HeaderContainer";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          padding: "10px 0",
          color: "secondary.light",
        }}
      >
        <HeaderContainer style={{}}>
          <Stack
            // gap={1}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              paddingTop: {
                xs: 3,
                sm: 8,
              },
              gap: {
                xs: 6,
                sm: 1,
              },
            }}
          >
            <Stack direction="row" flex={1} gap={1}>
              <LogoAndDetailsAndCourse />
            </Stack>
            <Stack direction="row" flex={1} gap={1}>
              <QuickLinkAndContacts />
            </Stack>
          </Stack>

          <Divider sx={{ backgroundColor: "secondary.light", marginTop: 4 }} />
          <Typography variant="body2" textAlign="center" pt={3} pb={2}>
            Copyright © 2023 GPFTPSC online | Design and Developed by
            Stackkaroo.com
          </Typography>
        </HeaderContainer>
      </Box>
    </div>
  );
};

export default Footer;

const LogoAndDetailsAndCourse = () => {
  return (
    <>
      <Box flex={1}>
        <Box
          sx={
            {
              // display: "flex",
              // justifyContent: "center",
              // border: "1px solid",
            }
          }
        >
          <Image
            src="/logo3.png"
            alt="logo"
            width={70}
            height={70}
            // style={{ border: "1px solid #ffff" }}
          />
        </Box>
        <Typography variant="body2" pr={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fuga
          placeat nis itaque nihil natus quae facilis
        </Typography>
        <Stack direction="row" gap={2} pt={3}>
          {[
            {
              icon: (
                <FacebookIcon
                  fontSize="medium"
                  sx={{ color: "secondary.main" }}
                />
              ),
            },
            {
              icon: (
                <InstagramIcon
                  fontSize="medium"
                  sx={{ color: "secondary.main" }}
                />
              ),
            },
          ].map((item, i) => {
            return (
              <Link href="face" style={{ textDecoration: "none" }} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "secondary.light",
                  }}
                >
                  {item.icon}
                </Box>
              </Link>
            );
          })}
        </Stack>
      </Box>
      <Stack flex={1} direction="column" gap={2}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            paddingBottom: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          Courses
        </Typography>
        {[
          "banking",
          "Learn JavaScript",
          "TRIPURA CIVIL SERVICE / TRIPURA POLICE SERVICE",
          "sbssbs",
          "test course",
        ].map((item, i) => {
          return (
            // <Typography variant="body2" key={i}>
            //   {item}
            // </Typography>
            <Link
              key={i}
              href={`/newapp/${"jj"}`}
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body2" color="secondary.light">
                {item}
              </Typography>
            </Link>
          );
        })}
      </Stack>
    </>
  );
};

const QuickLinkAndContacts = () => {
  return (
    <>
      <Stack flex={1} direction="column" gap={2}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            paddingBottom: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          Quick Link
        </Typography>
        {[
          { text: "About Us", route: "about" },
          { text: "Terms and condition", route: "about" },
          { text: "Privacy Policy", route: "about" },
        ].map((item, i) => {
          return (
            <Link
              key={i}
              href={`/newapp/${item.route}`}
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body2" color="secondary.light">
                {item.text}
              </Typography>
            </Link>
          );
        })}
      </Stack>
      <Stack flex={1} direction="column" gap={2}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            paddingBottom: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          Contact us
        </Typography>
        {[
          {
            icon: (
              <LocalPhoneIcon
                fontSize="small"
                sx={{ color: "secondary.light" }}
              />
            ),
            text: "+6009000355 +8798218194",
            action: "tel:+1234567890",
          },
          {
            icon: (
              <EmailIcon fontSize="small" sx={{ color: "secondary.light" }} />
            ),
            text: "gpftpsconline@gmail.com ",
            action: "mailto:example@example.com",
          },
        ].map((item, i) => {
          return (
            <Link href={item.action} key={i} style={{ textDecoration: "none" }}>
              <Stack
                direction="row"
                sx={{
                  gap: {
                    xs: 0,
                    sm: 1,
                  },
                }}
              >
                <Box>{item.icon}</Box>
                <Typography variant="body2" sx={{ color: "secondary.light" }}>
                  {item.text}
                </Typography>
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </>
  );
};
