

import MainLayout from "./layouts/MainLayout";
import SideBar from "./Components/SideBar/SideBar";
import ContentContainer from "./Components/ContentContainer";
import BTNMenu from "./Components/BTNMenu";
import TabPanel from "./Components/Tabs/TabPanel";
import { MainProvider } from "./contexts/MainProvider";



import HomePageContainer from "./Components/Home/HomePageContainer";
import HeaderHomePage from "./Components/Home/HeaderHomePage";
import BodyHomePage from "./Components/Home/BodyHomePage";



function App() {

  return (
    <MainProvider>
      <MainLayout>
        <BTNMenu />
        <SideBar isMobile={false} />
        <ContentContainer>
          <TabPanel index={0}>
            <HomePageContainer>
              <HeaderHomePage />
              <BodyHomePage />
            </HomePageContainer>
          </TabPanel>
          <TabPanel index={1}><h3>اسلاید 2</h3></TabPanel>
          <TabPanel index={2}><h3>اسلاید 3</h3></TabPanel>
          <TabPanel index={3}><h3>اسلاید 4</h3></TabPanel>
          <TabPanel index={4}><h3>اسلاید 5</h3></TabPanel>
        </ContentContainer>
      </MainLayout>
    </MainProvider >
  );
}

export default App;
