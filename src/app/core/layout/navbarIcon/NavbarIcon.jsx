
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavbarIcone = (props) => {

  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <Link className={`${isActive ? "isActive" : ""}fs-5 fw-bold nav-item m-2`} to={props.path}>
        {props.name}
      </Link>
    </>
  );
};

export default NavbarIcone;
