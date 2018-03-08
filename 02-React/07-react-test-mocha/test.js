const Code = require('code')
const expect = Code.expect
const MyMath = require('./src/MyApp/Math/calc.js')

it('Exist', () => {
    expect(MyMath()).to.exist()
})

it('returns a number ....', () => {
    expect(MyMath(2, 7)).to.be.a.number()
})
