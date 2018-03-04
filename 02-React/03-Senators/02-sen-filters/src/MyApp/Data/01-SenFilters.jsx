import Data from './senators'


export const senAll = () => {
    return Data
}


export const senRep = () => {
    return Data.filter( (x) => { return x.party === 'Republican' } )
}


export const senDem = () => {
    return Data.filter( (x) => { return x.party === 'Democrat' })
}


export const senInd = () => { 
    return Data.filter( (x)  =>  { return x.party === 'Independent' })
}


export const byState = (homeState) => {
return Data.filter( (x)  => { return x.state === homeState })
}


export const basicData = () => { 
    return Data.map( (x) => { 
        return {
            name: x.person.name,
            gender: x.gender,
            party: x.party,
            state: x.state
        }
    })
}


export const myStateSr = () => { 
    return Data
            .filter( (x)  =>  { return x.state === 'FL' })
            .reduce( (z) => { return z } )
}