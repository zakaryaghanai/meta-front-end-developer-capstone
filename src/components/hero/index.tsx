import { Box, Button, styled, Typography } from "@mui/joy";
import restaurantFood from "@/assets/images/restaurantFood.jpg";
import BaseContainer from "@/components/ui/base-container";
const HeroSection = styled("section")({
  display: "flex",
  padding: "20px 0",
  gap: 50,
});

const HeroSectionLeft = styled(Box)({
  flex: 1,
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  ".store-title": {
    color: "#f4ce14",
    fontSize: "40px",
    fontWeight: 700,
  },
  ".store-location": {
    color: "inherit",
    fontSize: 28,
  },
  ".store-description": {
    marginTop: 40,
    color: "inherit",
  },
  "#reserve-a-table": {
    width: "max-content",
    backgroundColor: "#f4ce14",
    color: "#495e57",
    marginTop: 30,
  },
});

const HeroSectionRight = styled(Box)({});

const Hero: React.FC = () => {


  const reserveTable = () => {};
  return (
    <Box sx={{ background: "#edefee" }}>
      <BaseContainer>
        <HeroSection>
          <HeroSectionLeft>
            <Typography className='store-title'>Little Lemon</Typography>
            <Typography className='store-location'>Chicago</Typography>
            <Typography className='store-description'>
              Nestled in the heart of bustling Chicago, Little Lemon is where
              modern flair meets cozy nostalgia. Our diverse, artisanal menu,
              featuring delectable bruschettas, succulent burgers, and
              refreshing Greek salads, is a testament to our belief that food is
              an art.
            </Typography>
            <Button id='reserve-a-table' onClick={reserveTable}>Reserve a table</Button>
          </HeroSectionLeft>

          <HeroSectionRight>
            <Box
              component={"img"}
              src={restaurantFood}
              width={350}
              sx={{ borderRadius: 20 }}
            />
          </HeroSectionRight>
        </HeroSection>
      </BaseContainer>
    </Box>
  );
};

export default Hero;
