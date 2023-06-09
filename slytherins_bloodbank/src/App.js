import { Route, Routes  } from "react-router-dom";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import UserSignup from "./Pages/UserSignup";


function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/user/signup" Component={UserSignup} />

      <Route path="/test" Component={Test} />
    </Routes>
  );
}

export default App;
