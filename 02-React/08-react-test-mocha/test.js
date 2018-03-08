const Code = require('code')
const expect = Code.expect
const MyMath = require('./src/MyApp/Math/calc.js')


it('Exist', () => {
    expect(MyMath.add()).to.exist()
})

it('returns a number ....', () => {
    expect(MyMath.add(2, 7)).to.be.a.number()
})

it('Retunns 3 whe given 5, 2', () => {
    expect(MyMath.subtract(5, 2)).to.equal(3)
})
