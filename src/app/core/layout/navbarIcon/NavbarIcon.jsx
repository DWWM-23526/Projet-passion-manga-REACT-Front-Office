import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

import "./navbarIcon.scss";

const NavbarIcone = (props) => {
  const resolvedPath = useResolvedPath(props.path);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <Link
        className={isActive ? "text-primary nav-Link fs-4 fw-bold m-2 mb-auto " : "nav-Link fs-4 fw-bold m-2 mb-auto"}
        to={props.path}
      >
        {props.name}
      </Link>
    </>
  );
};

NavbarIcone.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavbarIcone;
