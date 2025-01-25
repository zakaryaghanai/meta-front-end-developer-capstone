import { Container } from "@mui/joy";

const BaseContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container maxWidth='lg'>{children}</Container>;
};

export default BaseContainer
