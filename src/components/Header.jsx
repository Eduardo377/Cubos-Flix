import Image from "next/image";
import { toggleTheme } from "../components/ToggleTheme";

const Header = ({ onToggleTheme }) => {
  onToggleTheme = toggleTheme;
  return (
    <header className="header">
      <Image src="./assets/logo.svg" alt="Logo" width={32} height={32} />
      <h1 className="header__title">Cubos Flix</h1>
      <Image
        src="./assets/light-mode.svg"
        alt="Botão de tema"
        onClick={onToggleTheme}
        width={32}
        height={32}
      />
    </header>
  );
};

export default Header;
