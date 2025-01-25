import { Button, styled } from "@mui/joy";
import { Link } from "@tanstack/react-router";
import Logo from "../logo";
import BaseContainer from "../ui/base-container";

type NavItemProps = {
  title: string;
  to: string;
};
const NavItem = (props: NavItemProps) => {
  const { title, to } = props;

  return (
    <Link to={to} className='[&.active]:font-bold'>
      {title}
    </Link>
  );
};

const NavContainer = styled("nav")({
  display: "flex",
  gap: 30,
  padding: "1rem 0",
  alignItems: "center",
  justifyContent: "space-between",
});

const Navigation = styled("ul")({
  display: "flex",
  gap: 20,
  margin: 0,
  alignItems: "center",
});

export const Nav = () => {
  return (
    <BaseContainer>
      <NavContainer>
        <Logo />
        <Navigation>
          <NavItem title='Home' to='/' />
          <NavItem title='About' to='/about' />
          <NavItem title='Menu' to='/menu' />
          <NavItem title='Reservations' to='/reservations' />
          <NavItem title='Order online' to='/order-online' />
          <Button
            sx={{
              backgroundColor: "#f4ce14",
              color: "#495e57",
            }}
          >
            Login
          </Button>
        </Navigation>
      </NavContainer>
    </BaseContainer>
  );
};
