import { CssVarsProvider } from "@mui/joy";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return <CssVarsProvider>{children}</CssVarsProvider>;
};

export default Providers;
