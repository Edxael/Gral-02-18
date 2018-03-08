const Code = require('code')
const expect = Code.expect
import * as MyMath from './MyApp/Math/calc.js'




expect(true).to.be.a.boolean().and.to.not.equal(false)
expect('this string').to.only.include(['this', 'string'])