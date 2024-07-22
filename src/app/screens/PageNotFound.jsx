import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <h1>Page inconnue !</h1>
      <Link to="/">
        <p>Retournez a la landing page</p>
      </Link>
    </>
  );
};
export default PageNotFound;
