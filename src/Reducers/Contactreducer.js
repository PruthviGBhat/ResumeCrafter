import initialState from './Initialstate.json'
import * as contactActions from '../Actions/Actions.js';

const Contactreducer = (state=initialState.contact,action) => {
    switch(action.type){
        case contactActions.SET_CONTACT : 
            return {...action.pay}
        case contactActions.UPDATE_CONTACT : 
            return {...action.payload}
        default : return state 
    }
}

export default Contactreducer;