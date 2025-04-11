import { NavLink } from "react-router-dom";
const Header = ({ cartAllProduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 bg-primary navbar justify-content-between d-flex px-5">
          <ul className="d-flex gap-5  align-items-0 m-0 p-0 py-3">
            <NavLink
              to="/"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              HOME
            </NavLink>
            {/* <li className="list-unstyled text-light p-0 pointer">ABOUT</li> */}
            <NavLink
              to="/contact"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              CONCTACT
            </NavLink>
          </ul>
          <div className="nav-name">
            <li className=" list-unstyled text-light p-0 font-bold ">
              Ak Coding
            </li>
          </div>
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping fs-3"></i>
              <span
                className=" count rounded-pill text-dark position-absolute top-0 right"
                style={{ backgroundColor: "orange" }}
              >
                {cartAllProduct.length}
              </span>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
