const Code = require('code')
const expect = Code.expect
const MyMath = require('./src/MyApp/Math/calc.js')




expect(true).to.be.a.boolean().and.to.not.equal(false)
expect(MyMath(2, 7)).to.be.a.number()
