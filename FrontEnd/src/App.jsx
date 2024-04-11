import "./App.css";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
