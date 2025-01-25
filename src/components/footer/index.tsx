import footerLogo from "@/assets/images/footer-logo.png";
import { Box, Grid, styled, Typography } from "@mui/joy";
import { Link } from "@tanstack/react-router";
import BaseContainer from "../ui/base-container";

const FooterItem = styled(Typography)({
  color: "#fff",
  marginBottom: 10,
});

const FooterBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  color: "#fff",
});
const Footer = () => {
  return (
    <Box component={"footer"} sx={{ background: "#495e57", padding: "50px 0" }}>
      <BaseContainer>
        <Grid container>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Box
              component={"img"}
              src={footerLogo}
              alt='footer-logo'
              width={100}
            />
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <FooterBlock>
              <FooterItem level='h4'>SITEMAP</FooterItem>
              <Link to='/'>Home</Link>
              <Link to='/'>About</Link>
              <Link to='/'>Menu</Link>
              <Link to='/'>Reservations</Link>
              <Link to='/'>Order online</Link>
            </FooterBlock>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <FooterBlock>
              <FooterItem level='h4'>CONTACT</FooterItem>
              <FooterItem>123 Citrus Lane</FooterItem>
              <FooterItem>123-456-7890</FooterItem>
              <FooterItem>little.lemon@lemon.com</FooterItem>
            </FooterBlock>
          </Grid>
          <Grid lg={3} md={3} sm={6} xs={12}>
            <FooterBlock>
              <FooterItem level='h4'>SOCIAL MEDIA LINKS</FooterItem>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Twitter</Link>
            </FooterBlock>
          </Grid>
        </Grid>
      </BaseContainer>
    </Box>
  );
};

export default Footer;
