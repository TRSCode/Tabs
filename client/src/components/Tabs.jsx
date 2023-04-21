import React from 'react';

const Tabs = (props) => {
  const { dataContent, currentTabIndex, setCurrentTabIndex } = props;


  const tabSelection = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
  }

  return (
    <div className="tab">
      {
        dataContent.map((item, index) => (
          <div className={`tab ${ tabSelection(index) }`} onClick={(event) => setSelectedTab(index) }>
            { item.label }
          </div>
        ))
      }
    </div>
  )
}

export default Tabs;