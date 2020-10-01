import React from "react";
import PropTypes from "prop-types";

export default function Navbar({
  selectedMenu,
  setSelectedMenu,
  navMenu,
  className,
  showLoginModal,
  showContactModal
}) {
  return (
    <div className={className}>
      {navMenu &&
        navMenu.map((item, i) => {
          return (
            <a
              key={i}
              className={
                "nav__items mx-3 mt-2 ptr no-anchor " +
                ((selectedMenu.key === item.key) && (!item.modal) ? "nav__items__selected" : "")
              }
              onClick={() => {
                if (item.modal) {
                  if (item.key === "contact") showContactModal();
                  if (item.key === "login") showLoginModal();
                }
                else setSelectedMenu(item);
              }}
              href={item.href}
            >
              {item.name}
            </a>
          );
        })}
    </div>
  );
}
Navbar.propTypes = {
  setSelectedMenu: PropTypes.func.isRequired,
  selectedMenu: PropTypes.object.isRequired,
  navMenu: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string.isRequired,
  showContactModal: PropTypes.func,
  showLoginModal: PropTypes.func,
};
