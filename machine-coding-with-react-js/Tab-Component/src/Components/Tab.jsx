import "./Tab.css";
import PropTypes from "prop-types";

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Tab({ label, isActive, onClick }) {
  return (
    <li onClick={onClick} className={`tab ${isActive ? "active-tab" : ""}`}>
      {label}
    </li>
  );
}
