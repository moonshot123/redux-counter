import * as types from '../actions/ActionTypes';

const initialState = {
    counters:[
        {
            color:'black',
            number:0
        }
    ]
}


function counter(state = initialState, action){
    const { counters } =state;

    switch(action.type){
        case types.CREATE:
        return{
            counter:[
                ...counter,
                {
                    color:action.color,
                    number:0
                }
            ]
        };
    
        case types.REMOVE:
        return {
            counter:counters.slice(0,counter.length-1)
        };


        case types.INCREMENT:
        return{
            counter:[
                ...counters.slice(0,action.index),
                {
                    ...counters[action.index],
                    number: counters[action.index].nember + 1
                },
                ...counter.slice(action.index +1, counters.length)
            ]
        };


        case types.DECREMENT:
        return{
            counter:[
                ...counters.slice(0,action.index),
                {
                    ...counters[action.index],
                    number: counters[action.index].nember - 1
                },
                ...counter.slice(action.index +1, counters.length)
            ]
        };


        case types.SET_COLOR:
        return{
            counter:[
                ...counters.slice(0,action.index),
                {
                    ...counters[action.index],
                    color:action.color
                },
                ...counter.slice(action.index +1, counters.length)
            ]
        };


        default:
        return state;
    }
}




export default counter;








/** 
 * 리듀서나눠서 사용시
 * 
import number from './number'
import color from './color'

import {combineReducers} from 'redux'

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

export default reducers;
 * 
*/


/*
단일 리듀서생성시
import * as types from '../actions/ActionTypes';

const initialState = {
    color: 'black',
    number:0
};

function counter (state = initialState, action){
    switch (action.type){
        case types.INCREMENT: 
            return {
                ...state,
                number:state.number+1
            };

        case types.DECREMENT:
            return {
                ...state,
                number:state.number-1
            };     
           
        case types.SET_COLOR:
            return {
                ...state,
                color:action.color
            };    

        default: return state;    
    }
}

export default counter;

*/