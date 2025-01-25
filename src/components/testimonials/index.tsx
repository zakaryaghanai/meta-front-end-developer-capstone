import personImage from "@/assets/images/person.jpg";
import { Box, Typography } from "@mui/joy";
import { BiSolidStar } from "react-icons/bi";
import BaseContainer from "../ui/base-container";

const Testimonials = () => {
  const testimonials = [
    {
      id: "testimonial-1",
      name: "John Doe",
      image: personImage,
      review:
        "Little Lemon is my go-to spot for a quick, delicious meal. The Greek salad is my favorite!",
    },
    {
      id: "testimonial-2",
      name: "Jane Smith",
      image: personImage,
      review:
        "I've been a regular here for years and I can't get enough of the bruschetta. It's always fresh and flavorful.",
    },
    {
      id: "testimonial-3",
      name: "Sam Johnson",
      image: personImage,
      review:
        "The lemon dessert is the perfect way to end a meal. It's light, refreshing, and just the right amount of sweet.",
    },
  ];

  return (
    <Box sx={{ padding: "50px 0" }}>
      <BaseContainer>
        <Typography level='h2' sx={{ mb: 5 }}>
          Testimonials
        </Typography>
        {testimonials.map((testimonial) => {
          return (
            <Box
              key={testimonial.id}
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                marginBlockEnd: 5,
              }}
            >
              <Box sx={{ width: "100px", height: "100px" }}>
                <Box
                  component={"img"}
                  src={testimonial.image}
                  width={"100%"}
                  height={"100%"}
                  sx={{ borderRadius: 20, objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography level='h4'>{testimonial.name}</Typography>
                {Array.from({ length: 5 }).map((_, index) => {
                  return <BiSolidStar key={index} size={20} color='#f4ce14' />;
                })}
              </Box>
              <Typography>{testimonial.review}</Typography>
            </Box>
          );
        })}
      </BaseContainer>
    </Box>
  );
};

export default Testimonials;
