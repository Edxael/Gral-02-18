const Code = require('code')
const expect = Code.expect
const MyMath = require('./src/MyApp/Math/calc.js')

it('returns a number ....', () => {
    expect(MyMath(2, 7)).to.be.a.number()
})


// expect(true).to.be.a.boolean().and.to.not.equal(false)




// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });