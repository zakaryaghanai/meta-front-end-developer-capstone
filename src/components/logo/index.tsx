import { Box, BoxProps } from "@mui/joy";
import { Link } from "@tanstack/react-router";

interface LogoProps extends BoxProps {}
const Logo = (props: LogoProps) => {
  const { sx } = props;

  return (
    <Box>
      <Link to='/'>
        <Box
          component={"img"}
          src={"/logo.svg"}
          className='logo'
          alt='logo'
          sx={{ ...sx }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
