import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const App = () => {

  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = () => {
    alert("I WAS CLICKED! IM A WINNER!")
    setClicked(!clicked)
  }

  return (
    <div className="App">
      <button 
        style={{ height: "50px", width: "100px", backgroundColor: 'blue' }}
        onClick={handleClick}
      >
        Click Me
      </ button>
      <Button variant="primary" size="lg" disabled={clicked} onClick={handleClick}>Click Me</Button>

      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link style={{ color: 'purple'}} href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
