import { Route,Router,Routes  } from "react-router-dom";
import Home from "./Pages/Home";
import Test from "./Pages/Test";


function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/test" Component={Test} />
    </Routes>
  );
}

export default App;
