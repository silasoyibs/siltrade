import LogoLight from "../assets/siltrade-logo-light.svg";
import LogoDark from "../assets/siltrade-logo-dark.svg";
import LogoShort from "../assets/siltrade-symbol.png";
import { useDarkMode } from "../contexts/DarkModeContext";

function Logo({ className, isExpanded }) {
  const { isDark } = useDarkMode();
  // correct logo choose based on theme
  const LogoFull = isDark ? LogoLight : LogoDark;

  return (
    <img
      src={isExpanded ? LogoFull : LogoShort}
      alt="Logo-Light"
      className={`${className}`}
    />
  );
}

export default Logo;
