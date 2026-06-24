

import MainLayout from "./layouts/MainLayout";
import SideBar from "./Components/SideBar/SideBar";
import ContentContainer from "./Components/ContentContainer";
import BTNMenu from "./Components/BTNMenu";
import TabPanel from "./Components/Tabs/TabPanel";
import { MainProvider } from "./contexts/MainProvider";



import { Box } from "@mui/material";
import HomepageImg from "./Assets/Imgs/HomePage.webp";
import HomePageContainer from "./Components/Home/HomePageContainer";



function App() {

  return (
    <MainProvider>
      <MainLayout>
        <BTNMenu />
        <SideBar isMobile={false} />
        <ContentContainer>
          <TabPanel index={0}>
            <Box
              sx={{
                //back image
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${HomepageImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100vh",
                overflowX: "hidden",
                overflowY: "auto"
              }}
            >
              <HomePageContainer />
            </Box>
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
