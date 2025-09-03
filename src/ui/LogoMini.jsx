import LogoShort from "../assets/siltrade-symbol.png";

function LogoMini({ className }) {
  return <img src={LogoShort} alt="Logo" className={`${className}`} />;
}

export default LogoMini;
