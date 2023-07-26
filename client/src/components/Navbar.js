import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap'
import {Dropdown} from "react-bootstrap";
import { logoutUser } from "../actions/userActions";
export default function Navbar() {
  const cartstate = useSelector(state => state.cartReducer);
  const userstate = useSelector(state => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
   
  const handleLogout = () => {
    // Call the logoutUser action using the dispatch function
    dispatch(logoutUser());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <a className="navbar-brand" href="/">
          SHEY PIZZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
            <li className="nav-item">
            <Dropdown>
             <Dropdown.Toggle variant="secondary" id="dropdown-basic">
               {currentUser.name}
             </Dropdown.Toggle>
             <Dropdown.Menu>
               <Dropdown.Item href="/orders">Orders</Dropdown.Item>
               <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
              </li>
            ) : (
              <li className="nav-item ">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
