import * as documentActions from './Actions'
import { v4 as uuidv4 } from 'uuid';
import documentReducer from '../Reducers/Documentreducer';

export const setSkin = (skinCd) => {
    return {
        type:documentActions.SET_SKIN,
        payload:{
            skinCd : skinCd,
            id : uuidv4()
        }
    }
}

export const updateSkin = (skinCd) => {
    return {
        type:documentActions.UPDATE_SKIN,
        payload:{
            skinCd:skinCd
        }
    }
}