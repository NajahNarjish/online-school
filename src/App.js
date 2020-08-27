import React from 'react';
import './App.css';
import Package from './components/Package/Package';

function App() {
  const divStyle = {
    textAlign: 'center',
    marginBottom: "30px",
    paddingTop: "10px"
  }
  return (
    <div style={divStyle}>
      <p style = {{paddingTop: "50px"}}>Welcome to</p>
      <h1 style = {{ marginBottom: "50px"}}>Online Course Academy</h1>
      <p style = {{borderBottom: "2px solid black"}}></p>
      <Package></Package>
    </div>
  );
}

export default App;
