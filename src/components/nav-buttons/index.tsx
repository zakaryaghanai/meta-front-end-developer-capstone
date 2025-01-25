import { Box, Button, styled } from "@mui/joy";

const ButtonsContainer = styled(Box)({
  display: "flex",
  gap: 5,
});


const NavButtons = () => {
  return (
    <ButtonsContainer>
      <Button>Sing up</Button>
      <Button>Login</Button>
    </ButtonsContainer>
  );
};

export default NavButtons;