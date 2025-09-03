import LogoLight from "../assets/siltrade-logo-light.svg";
import LogoDark from "../assets/siltrade-logo-dark.svg";
import LogoShort from "../assets/siltrade-symbol.png";
import { useDarkMode } from "../contexts/DarkModeContext";

function Logo({ className }) {
  const { isDark } = useDarkMode();

  return (
    <img
      src={isDark ? LogoLight : LogoDark}
      alt="Logo"
      className={`${className}`}
    />
  );
}

export default Logo;
