import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";

function App() {
  
  const noticationSuccess = () => toast("Toast sample success!");
  const noticationErr = () => { 
    toast.error("warning!", { 
      position: "bottom-right"} 
    );
  };

  return (
    <div>
      <h1>Bootstrap Components</h1>
      <Button color="success" onClick={noticationSuccess}>First react button</Button>
      <Button color="warning" onClick={noticationErr}>Second react button</Button>
      <ToastContainer/>    
      <Home/>
      <Course/>
    </div>
  );
}

export default App;
