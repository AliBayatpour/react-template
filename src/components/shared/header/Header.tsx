import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="w-100 py-4 px-3">
      <Link to="/">
        <img
          width={120}
          src="https://assets.website-files.com/5e39229dc791b06ec8df84f6/5e3925072e417cfc397f77ba_horizontal-logo-brown.svg"
          alt="Logo"
        />
      </Link>
    </nav>
  );
};

export default Header;
