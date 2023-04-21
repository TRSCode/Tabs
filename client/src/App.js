import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Contents from './components/Contents';

function App() {

  const dataContent = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Additional tabs created when additional objects added to the array" },
    { label: "Tab 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  ];

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">

      <Tabs dataContent={ dataContent } currentTabIndex={ currentTabIndex } setCurrentTabIndex={ setCurrentTabIndex } 
      />
      <Contents dataContent={ dataContent } currentTabIndex={ currentTabIndex } />
    </div>
  );
}

export default App;