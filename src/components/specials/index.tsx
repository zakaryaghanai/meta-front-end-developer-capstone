import restaurantFood from "@/assets/images/restaurantFood.jpg";
import { Box, Grid, styled, Typography } from "@mui/joy";
import SpecialsItem from "../specials-item";
import BaseContainer from "../ui/base-container";
const SpecialsContainer = styled(Box)({
  display: "flex",
  gap: 20,
  justifyContent: "space-between",
});
const Specials = () => {
  const specialsList = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      price: 9.99,
      description:
        "Fresh romaine, tomatoes, cucumbers, red onions, feta cheese, kalamata olives, and pepperoncini peppers. Served with Greek dressing.",
      image: restaurantFood,
    },
    {
      id: "bruschetta",
      name: "Bruschetta",
      price: 5.99,
      description:
        "Grilled bread with garlic and tomatoes, served with olive oil and balsamic vinegar.",
      image: restaurantFood,
    },
    {
      id: "lemon-dessert",
      name: "Lemon Dessert",
      price: 4.99,
      description:
        "Freshly squeezed lemon juice, sugar, and a touch of cinnamon. Served with a scoop of vanilla ice cream.",
      image: restaurantFood,
    },
  ];

  return (
    <Box sx={{ padding: "50px 0" }}>
      <BaseContainer>
        <Box>
          <Typography level='h2' sx={{ mb: 5 }}>
            Specials
          </Typography>
          <SpecialsContainer>
            <Grid container spacing={4}>
              {specialsList.map((special) => {
                return (
                  <Grid xs={12} sm={6} md={4} key={special.id}>
                    <SpecialsItem item={special} />
                  </Grid>
                );
              })}
            </Grid>
          </SpecialsContainer>
        </Box>
      </BaseContainer>
    </Box>
  );
};

export default Specials;
