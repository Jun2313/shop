import {  useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";
import Set01 from "./component/set01";
import Set02 from "./component/set02";
import Set03 from "./component/set03";

import { Routes,Route, Link, useNavigate } from "react-router-dom";
import Cart from "./routes/Cart";
import Detail from "./screens/detail";
import About from "./screens/About";
import Event from "./component/Event";
import List from "./screens/List";
function App() {
  let [shoes, setShoes] = useState(data);
  const shoe = [<Set01 />, <Set02 />, <Set03 />];
  let navigate = useNavigate();
  let [urlIndex, setUrlIndex] = useState(0);
  let urls = [
    "https://codingapple1.github.io/shop/data2.json",
    "https://codingapple1.github.io/shop/data3.json",
  ];

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Junshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/"); }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/list");}}>List</Nav.Link>
            <Nav.Link onClick={() => { navigate("/detail/0");}}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate("/cart");}}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="danger">
        <Link to="/" style={{color: "white", textDecoration: "none",textAlign: "center",}}>
          홈
        </Link>
      </Button>
      <Button variant="warning">
        <Link to="/list" style={{ color: "white", textDecoration: "none" }}>
          상품페이지
        </Link>
      </Button>
      <Button variant="success">
        <Link to="/detail/0" style={{ color: "white", textDecoration: "none" }}>
          상세페이지
        </Link>
      </Button>
      <Routes>
        <Route path="/" element={<div>메인페이지임</div>}></Route>
        <Route path="/list" element={
          <List shoes={shoes} setShoes={setShoes} urlIndex={urlIndex} setUrlIndex={setUrlIndex} urls={urls} />
        }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는페이지예용~</div>}></Route>
        <Route path="/About" element={<About />}>
          <Route path="member" element={<div>맴버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}




export default App;

  /*  useEffect(()=> { }) 1.재랜더링마다 코드를실행하고싶으면
      useEffect(()=> { }, [])  2.mount시 1회 코드 실행하고싶으면 
      useEffect(()=> { 
                  return ()=> {})
                          3.unmount시 1회 코드 실행하고싶으면
      useEffect(()=> { }) useEffect 4. 실행전에 뭔가 실행시키려면 언제나 return ()=> {}
      useEffect(()=> { }, [ count]) 5. 특정state 변경시에만 실행하려면 [state명]
*/