
import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './Home'

Enzyme.configure({ adapter: new Adapter() })
const app = Enzyme.shallow(<App />)

it('renders correctly', () => {
    expect(app).toMatchSnapshot()
})

it('renders correctly', () => {
    expect(app).toMatchSnapshot()
})