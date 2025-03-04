"use client";

import Container from "@/components/Container";
import CardItem from "@/shareComponents/CardItem";
import ImageCard from "@/shareComponents/ImageCard";
import { Box, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface TitleComponentItem {
  author: string;
  review: string;
  date: string;
  imageUrl: string;
}
interface TitleComponentProps {
  title: string;
  text: string;
  reviews: TitleComponentItem[];
  footer: string;
}

const TitleComponent = ({
  title,
  text,
  reviews,
  footer,
}: TitleComponentProps) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const newCardItem = reviews.map((item, index) => {
    return {
      ...item,
      imageUrl: `/images/section7_${index + 1}.png`,
    };
  });
  return (
    <>
      <Box
        sx={{
          backgroundColor: !isMobile && "#E6F2F2",
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center", p: 2 }}>
            <Grid container spacing={4} alignItems="stretch">
              {!isMobile && (
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#aaa" }}>
                    {text}
                  </Typography>
                </Grid>
              )}

              <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                  {title}{" "}
                  <Typography component="span" sx={{ color: "#E86A33" }}>
                    {/* {hashtag} */}
                  </Typography>
                </Typography>
              </Grid>

              {isMobile && (
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "#aaa" }}>
                    {text}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>

      <ImageCard
        imageUrl="/images/banner_section7.png"
        title={reviews[0].author}
        description={reviews[0].review}
        date={reviews[0].date}
      />

      <Container>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          {newCardItem.map((item, index) => (
            <Grid item key={index} xs={6} sm={4} md={3}>
              <CardItem {...item} />
            </Grid>
          ))}
        </Grid>

        <Typography textAlign="center" variant="body2">
          {footer}
        </Typography>
      </Container>
    </>
  );
};

export default TitleComponent;
