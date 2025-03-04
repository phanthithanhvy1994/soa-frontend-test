"use client";
import Container from "@/components/Container";
import TitleBlock from "@/shareComponents/TitleBlock";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface Case {
  title: string;
  subtitle: string;
  cases: CaseItem[];
}

interface CaseItem {
  category: string;
  cta: string;
  description: string;
  tagline: string;
  image: string;
}

const CaseGrid = ({ title, subtitle, cases }: Case): JSX.Element => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const newCases = cases.map((item, index) => ({
    ...item,
    image: item.image || `/images/case${index + 1}.png`,
  }));

  return (
    <Container>
      <Box textAlign="left" py={5}>
        <TitleBlock title={title} subtitle={subtitle} />
        <Grid container spacing={3} justifyContent="center">
          {newCases.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  maxWidth: { xs: "100%", sm: 345 },
                  margin: "0 auto",
                  transform:
                    index % 2 === 0 && !isMobile? "translateY(30px)" : "translateY(-10px)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.category}
                />
                <CardContent>
                  <Typography variant="caption" color="orange" gutterBottom>
                    {item.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {item.tagline}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.description}
                  </Typography>
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowOutwardIcon />}
                    >
                      {item.cta}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CaseGrid;
