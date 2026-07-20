import { useContext } from "react";
import { MainContext, MainProvider } from "./contexts/MainProvider";

import MainLayout from "./layouts/MainLayout";
import SideBar from "./Components/SideBar/SideBar";
import ContentContainer from "./Components/ContentContainer";
import BTNMenu from "./Components/BTNMenu";
import TabPanel from "./Components/Tabs/TabPanel";

import HomePageContainer from "./Components/Home/HomePageContainer";
import HeaderHomePage from "./Components/Home/HeaderHomePage";
import BodyHomePage from "./Components/Home/BodyHomePage";
import TabTransition from "./Components/TabTransition";
import RoadPageContainer from "./Components/RoadMap/RoadPageContainer";
import ResumePDFContainer from "./Components/Resume/ResumePDFContainer";
import ConnectMeContainer from "./Components/Connect/ConnectMeContainer";
import AboutMeContainer from "./Components/About/AboutMeContainer";

function AppContent() {
  const { pageNumberValue } = useContext(MainContext);

  // 🟢 یک تابع کوچک برای رندر داینامیک تب فعال
  const renderTabContent = () => {
    switch (pageNumberValue) {
      case 0:
        return (
          <TabPanel index={0}>
            <HomePageContainer>
              <HeaderHomePage />
              <BodyHomePage />
            </HomePageContainer>
          </TabPanel>
        );
      case 1:
        return <TabPanel index={1}>
          <RoadPageContainer />
        </TabPanel>;
      case 2:
        return <TabPanel index={2}>
          <ResumePDFContainer />
        </TabPanel>;
      case 3:
        return <TabPanel index={3}>
          <ConnectMeContainer />
        </TabPanel>;
      case 4:
        return <TabPanel index={4}>
          <AboutMeContainer />
        </TabPanel>;
      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <BTNMenu />
      <SideBar isMobile={false} />
      <ContentContainer>
        {/* 🟢 حالا انیمیشن دقیقاً روی تعویض کامپوننت‌ها کنترل پیدا می‌کند */}
        <TabTransition value={pageNumberValue}>
          {renderTabContent()}
        </TabTransition>
      </ContentContainer>
    </MainLayout>
  );
}

function App() {
  return (
    <MainProvider>
      <AppContent />
    </MainProvider>
  );
}

export default App;