import Pagewrapper from "./components/Body/Pagewrapper";
import { BrowserRouter, Route} from "react-router-dom";
import ConterContext from "./components/Main/Context/ConterContext";
function App() {
  return (
    <ConterContext.Provider value={11}>
      <BrowserRouter>
        <Pagewrapper />
      </BrowserRouter>
    </ConterContext.Provider>
  );
}

export default App;
