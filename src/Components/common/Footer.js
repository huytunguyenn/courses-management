import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Trang web quản lý khóa học
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Đồ án phục vụ môn học phát triển ứng dụng web nâng cao
      </Typography>
      <Copyright />
    </Box>
  );
};
export default Footer;
