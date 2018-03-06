import React from 'react';
import RactDOM from 'react-dom';
import TemplateComp from './Template.jsx';
 
const GatherCom = () => {
  const mainContSt = { backgroundColor: "rgb(129, 94, 245)", textAlign: "center", padding: "15px 100px", color: "white" }
  return(
    <div style={mainContSt} >
      <h1>API Data Fetch</h1>
      <TemplateComp />
    </div>
  )
}
 
RactDOM.render(<GatherCom />, document.getElementById("root"));