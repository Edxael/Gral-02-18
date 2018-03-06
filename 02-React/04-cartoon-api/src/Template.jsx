import React from 'react';
const urlSrc = 'https://raw.githubusercontent.com/Edxael/Swap-Characters/master/src/comps/jsonData/data.json';
 
 
class TemplateComp extends React.Component {
 
    state = { items: [] }
   
 
 
  componentDidMount() {
    fetch(urlSrc)
    .then((myjsondata) => { return myjsondata.json() })
    .then((myarray) => {  return this.setState({ items: myarray })  })
    .catch((err) => { console.log("Error while 'FETCH':", err); } )
  }
 
 
  render(){
    let items = this.state.items;
    console.log(items);
    const cont1 = { border: "4px solid white", backgroundColor: "rgba(254, 254, 254, 0.5)", marginBottom: "10px", padding: "10px 0px", color: "black" }
    return(
        <div>
 
          {items.map((x) => { return(
 
            <div style={cont1} key={x.name}>
              <img src={x.pic} alt="Missing Pic."/>
              <div><strong>Name: </strong>{x.name}</div>
              <div><strong>From: </strong>{x.from}</div>
              <div><strong>Year: </strong>{x.year}</div>
            </div>
 
          )} )}
 
        </div>
    )
  }
 
}
 
 
export default TemplateComp;