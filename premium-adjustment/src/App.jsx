import React, { useState } from "react";
import { Layout } from "antd";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import TabNavigation from "./components/navigation/TabNavigation";
import AdjustmentsTab from "./components/adjustments/AdjustmentsTab";
import ResultsTab from "./components/results/ResultsTab";
import CustomAlert from "./components/common/CustomAlert";
import { tableStyles } from "./styles/tableStyles";

const { Content } = Layout;

const App = () => {
  const [activeTab, setActiveTab] = useState("results");
  const [showAlert, setShowAlert] = useState(true);

  console.log("Current activeTab:", activeTab);

  const handleTabChange = (newTab) => {
    console.log("Tab changing from", activeTab, "to", newTab);
    setActiveTab(newTab);
  };

  return (
    <Layout className="min-h-screen">
      <Header />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <Content className="p-6 bg-gray-50 flex-1">
        {activeTab === "adjustments" ? <AdjustmentsTab /> : <ResultsTab />}

        {/* <CustomAlert 
          show={showAlert} 
          onClose={() => setShowAlert(false)}
          message="Could not load adjustment data. Please try to reduce the list of selection."
        />  */}
      </Content>

      <Footer />

      <style jsx>{tableStyles}</style>
    </Layout>
  );
};

export default App;
