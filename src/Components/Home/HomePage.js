import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {useSelector} from "react-redux";

const HomePage = () => {
  const userState = useSelector(state => state.user)

  return (
    <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Khóa học của {userState.user.email}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Quản lý các khóa học nhanh chóng & hiệu quả ~
        </Typography>
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Link to="about" style={{ textDecoration: "none" }}>
            <Button variant="contained">Go to About</Button>
          </Link>
          <Link to="courses" style={{ textDecoration: "none" }}>
            <Button variant="outlined">Go to Khóa học</Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
