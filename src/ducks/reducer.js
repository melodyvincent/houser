// const initialState = {
//     name: '',
//     address: '',
//     city: '',
//     propertystate: '',
//     zipcode:'',
//     img: '',
//     mortgage: '',
//     rent:''
// }

// const UPDATE_NAME = 'UPDATE_NAME';
// const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
// const UPDATE_PROPERTYSTATE = 'UPDATE_PROPERTYSTATE';
// const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
// const UPDATE_IMG = 'UPDATE_IMG';
// const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
// const UPDATE_RENT = 'UPDATE_RENT';

// function reducer (state = initialState, action) {
//     switch(action.type) {
        
//         case UPDATE_NAME:
//         return{...state, name: action, payload}

//         case UPDATE_ADDRESS:
//         return{...state, address: action, payload}

//         case UPDATE_CITY:
//         return{...state, city: action, payload}

//         case UPDATE_PROPERTYSTATE:
//         return{...state, propertystate: action, payload}

//         case UPDATE_ZIPCODE:
//         return{...state, zipcode: action, payload}

//         case UPDATE_IMG:
//         return{...state, img: action, payload}

//         case UPDATE_MORTGAGE:
//         return{...state, mortgage: action, payload}

//         case UPDATE_RENT:
//         return{...state, rent: action, payload}
//     }
// }

// export function updateName (name){
//     return {
//         type:UPDATE_NAME,
//         payload: name
//     }
// }

// export function updateAddress (address){
//     return {
//         type:UPDATE_ADDRESS,
//         payload: address
//     }
// }

// export function updateCity (city){
//     return {
//         type:UPDATE_CITY,
//         payload: city
//     }
// }

// export function updatePropertyState (propertystate){
//     return {
//         type:UPDATE_PROPERTYSTATE,
//         payload: propertystate
//     }
// }

// export function updateZipcode (zipcode){
//     return {
//         type:UPDATE_Zipcode,
//         payload: zipcode
//     }
// }

// export function updateImg (img){
//     return {
//         type:UPDATE_IMG,
//         payload: img
//     }
// }

// export function updateMortgage (mortgage){
//     return {
//         type:UPDATE_MORTGAGE,
//         payload: mortgage
//     }
// }

// export function updateRent (rent){
//     return {
//         type:UPDATE_RENT,
//         payload: rent
//     }
// }

// export default reducer;

const initialState = {
    name: '',
    address: '',
    city: '',
    propertystate: '',
    zipcode: '',
    img: '',
    mortgage: '',
    rent: ''
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROPERTYSTATE = 'UPDATE_PROPERTYSTATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';

function reducer (state = initialState, action) {
    switch (action.type) {

        case UPDATE_NAME:
        return {...state, name: action.payload}

        case UPDATE_ADDRESS:
        return {...state, address: action.payload}

        case UPDATE_CITY:
        return {...state, address: action.payload}

        case UPDATE_PROPERTYSTATE:
        return {...state, propertystate: action.payload}

        case UPDATE_ZIPCODE:
        return {...state, zipcode: action.payload}

        case UPDATE_IMG:
        return {...state, img: action.payload}

        case UPDATE_MORTGAGE:
        return {...state, mortgage: action.payload}

        case UPDATE_RENT:
        return {...state, rent: action.payload}

        default:
        return state;
    }
}

export function updateName (name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddress (address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}
export function updateCity (city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updatePropertyState (propertystate) {
    return {
        type: UPDATE_PROPERTYSTATE,
        payload: propertystate
    }
}
export function updateZipcode (zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}
export function updateImg (img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}
export function updateMortgage (mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}
export function updateRent (rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export default reducer;
