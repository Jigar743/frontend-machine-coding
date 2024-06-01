import "./TabPanel.css";
import propTypes from "prop-types";

TabPanel.propTypes = {
  children: propTypes.node.isRequired,
  isActive: propTypes.bool.isRequired,
};

export default function TabPanel({ children, isActive }) {
  if (!isActive) return null;
  return (
    <div className={`tab-content ${isActive && "active-tab-content"}`}>
      {children}
    </div>
  );
}
