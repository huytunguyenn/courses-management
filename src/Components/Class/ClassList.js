import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';

const ClassList = ({items}) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {items.map((cls) => (
          <Grid item key={uuidv4()} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" sx={{pt: "56.25%",/*16:9*/}}
                image="https://source.unsplash.com/random"
                alt="random picture"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {cls.className}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Đây là môn học thử nghiệm
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Xem</Button>
                <Button size="small">Chỉnh sửa</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClassList;
