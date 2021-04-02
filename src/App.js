import './App.css';
import {Col, Container, Row} from "reactstrap";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
  //const noticationSuccess = () => toast("Toast sample success!");
  //const noticationErr = () => { 
  //  toast.error("warning!", { 
  //    position: "bottom-right"} 
   // );
  //};

  return (
    <div>
      <Router>
        <ToastContainer/>    
        <Header/>        
        <Container>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/add-course" component={AddCourse} exact></Route>
              <Route path="/view-courses" component={AllCourses} exact></Route>
            </Col>
          </Row>
         
        </Container>
      </Router>  
    </div>
  );
}

export default App;
