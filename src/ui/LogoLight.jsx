import Logo from "../assets/siltrade-logo-dark.svg";

function LogoLight({ className }) {
  return <img src={Logo} alt="Logo-Light" className={`${className}`} />;
}

export default LogoLight;
