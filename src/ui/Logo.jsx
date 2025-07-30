import LogoLight from "../assets/siltrade-logo-light.svg";
import LogoDark from "../assets/siltrade-logo-dark.svg";
import LogoSymbol from "../assets/siltrade-symbol.png";

function Logo({ className, dark, symbol }) {
  return (
    <img
      src={dark ? LogoDark : LogoLight || symbol ? LogoSymbol : LogoLight}
      alt="Logo-Light"
      className={`${className}`}
    />
  );
}

export default Logo;
