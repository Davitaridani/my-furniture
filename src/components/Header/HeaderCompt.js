import React, { useRef, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import userIcon from "../../assets/img/user-icon.png";
import iconLogo from "../../assets/img/icon-logo.png";

const menu_links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];

const HeaderCompt = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("header-sticky");
      } else {
        headerRef.current.classList.remove("header-sticky");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active-menu");
  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper d-flex justify-content-between align-content-center">
            <div className="item-brand d-flex align-items-center">
              <div className="logo">
                <img src={iconLogo} alt="img-logo" />
              </div>
              <div className="navbar-title">
                <h3>My Shop</h3>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu d-flex align-items-center">
                {menu_links.map((item, index) => (
                  <li key={index} className="nav-item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav-active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-icons d-flex align-items-center ">
              <span className="icon-cart" onClick={navigateToCart}>
                <iconify-icon icon="ion:bag-add-outline"></iconify-icon>
                <span className="bagde">{totalQuantity}</span>
              </span>
              <span className="img-user">
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className="menu-hamburger">
                <span onClick={menuToggle}>
                  <iconify-icon icon="charm:menu-hamburger"></iconify-icon>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderCompt;
