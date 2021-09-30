import Pagewrapper from "./components/Body/Pagewrapper";
import { BrowserRouter, Route} from "react-router-dom";
import NotFound from "./components/Body/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Pagewrapper />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
