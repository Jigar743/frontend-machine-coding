import Tabs from "./Components/Tabs";
import Tab1Content from "./Components/Tab1Content";
import Tab2Content from "./Components/Tab2Content";
import Tab3Content from "./Components/Tab3Content";
import Tab4Content from "./Components/Tab4Content";
import Tab5Content from "./Components/Tab5Content";
import "./App.css";

export const TabsData = [
  {
    label: "Tab 1",
    content: <Tab1Content />,
  },
  {
    label: "Tab 2",
    content: <Tab2Content />,
  },
  {
    label: "Tab 3",
    content: <Tab3Content />,
  },
  {
    label: "Tab 4",
    content: <Tab4Content />,
  },
  {
    label: "Tab 5",
    content: <Tab5Content />,
  },
];

function App() {
  const handleTabChange = (index) => {
    console.log(`Tab changed to ${index}`);
  };

  return (
    <Tabs defaultActiveKey={"3"} tabs={TabsData} onChange={handleTabChange} />
  );
}

export default App;
