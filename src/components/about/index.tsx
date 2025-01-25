import { Box, Typography } from "@mui/joy";
import BaseContainer from "../ui/base-container";
import restaurantFood from "@/assets/images/restaurantFood.jpg";

const About = () => {
  return (
    <Box sx={{ background: "#edefee", padding: "50px 0" }}>
      <BaseContainer>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            padding: "1rem",
            background: "#edefee",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
            <Typography sx={{ fontSize: "50px", fontWeight: 700 }}>
              Little Lemon
            </Typography>
            <Typography level='h1' sx={{ fontWeight: 300 }}>
              Chicago
            </Typography>
            <Typography level='h4' sx={{ fontWeight: 400, maxWidth: 500 }}>
              Nestled in the heart of bustling Chicago, Little Lemon is where
              modern flair meets cozy nostalgia. Our diverse, artisanal menu,
              featuring delectable bruschettas, succulent burgers, and
              refreshing Greek salads, is a testament to our belief that food is
              an art.
            </Typography>
          </Box>
          <Box>
            <Box
              component={"img"}
              src={restaurantFood}
              width={350}
              sx={{ borderRadius: 20 }}
            />
          </Box>
        </Box>
      </BaseContainer>
    </Box>
  );
};

export default About;
