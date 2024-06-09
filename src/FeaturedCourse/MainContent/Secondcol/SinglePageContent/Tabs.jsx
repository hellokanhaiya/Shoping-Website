import React, { useState } from "react";
import styles from "./Tabs.module.css";
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="woocommerce-tabs wc-tabs-wrapper my-14 ">
      <ul
        className={`flex  tabs wc-tabs ${styles.borderbottom}`}
        role="tablist"
      >
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={` mr-4 mb-6 font-bold text-[18px] ${
              tab.id === activeTab ? "active" : ""
            }`}
            id={`tab-title-${tab.id}`}
            role="tab"
            aria-controls={`tab-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <a href={`#tab-${tab.id}`}>{tab.label}</a>
          </li>
        ))}
      </ul>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`woocommerce-Tabs-panel woocommerce-Tabs-panel--${tab.id} panel entry-content wc-tab`}
          id={`tab-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-title-${tab.id}`}
          style={{ display: tab.id === activeTab ? "block" : "none" }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
