import mingoExtraSmall from "/logo/mingo_extra_small.svg";
import mingoMonochrome from "/logo/mingo_monochrome.svg";
import mingoSimplified from "/logo/mingo_simplified.svg";
import mingoSmall from "/logo/mingo_small.svg";
import mingo from "/logo/mingo.svg";
import mingoExtraSmallDark from "/logo/mingo_extra_small_dark.svg";
import mingoMonochromeDark from "/logo/mingo_monochrome_dark.svg";
import mingoSimplifiedDark from "/logo/mingo_simplified_dark.svg";
import mingoSmallDark from "/logo/mingo_small_dark.svg";
import mingoDark from "/logo/mingo_dark.svg";

import { Logo } from "../ui/logo";

const isDarkThemeSelected = false;

export const Logos = () => (
  <div>
    <Logo
      src={isDarkThemeSelected ? mingoExtraSmallDark : mingoExtraSmall}
      className="logo react"
      alt="React logo"
    />

    <Logo
      src={isDarkThemeSelected ? mingoMonochromeDark : mingoMonochrome}
      className="logo react"
      alt="React logo"
    />

    <Logo
      src={isDarkThemeSelected ? mingoSimplifiedDark : mingoSimplified}
      className="logo react"
      alt="React logo"
    />

    <Logo
      src={isDarkThemeSelected ? mingoSmallDark : mingoSmall}
      className="logo react"
      alt="React logo"
    />

    <Logo
      src={isDarkThemeSelected ? mingoDark : mingo}
      className="logo react"
      alt="React logo"
    />
  </div>
);
