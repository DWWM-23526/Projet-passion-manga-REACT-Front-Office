import Routing from "./Routes";
import AppProvider from "./contexts/app/AppProvider";
import ApiProvider from "./contexts/api/ApiProvider";
import BaseLayout from "./layout/BaseLayout";
import RouteTitleUpdater from "./service/TitleService";
function App() {
  return (
    <>
      <AppProvider>
        <ApiProvider>
          <RouteTitleUpdater/>
          <BaseLayout>
            <Routing />
          </BaseLayout>
        </ApiProvider>
      </AppProvider>
    </>
  );
}

export default App;
