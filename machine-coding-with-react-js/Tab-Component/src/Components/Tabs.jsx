import { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import PropTypes from "prop-types";
import "./Tabs.css";

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultActiveKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Tabs({ tabs, defaultActiveKey, onChange }) {
  const [activeTab, setActiveTab] = useState(Number(defaultActiveKey));

  const handleTabClick = (index) => {
    setActiveTab(index);
    onChange(String(index));
  };

  return (
    <div className={`tab-container`}>
      <ul className={`tab-listing`}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </ul>
      <div className={`tab-content-container`}>
        {tabs.map((tab, index) => (
          <TabPanel key={index} isActive={activeTab === index}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
