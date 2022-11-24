import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Login from "./Components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route
            path="/home"
            element={
              <>
                <Header></Header>
                <Home></Home>
              </>
            }
          ></Route>
          <Route
            path="/details/:id"
            element={
              <>
                <Header></Header>
                <Details></Details>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
