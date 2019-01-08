import CounterList from '../components/CounterList';
import * as actions from '../actions';
import {connect} from 'react-redux';

import getRandomColor from '../lib/getRandomColor'

/*
export function getRandomColor(){
    const colors =[
        '#495057',
        '#f03e3',
        '#d6336c',
        '#ae3ec9',
        '#181818',
        '#494942',
        '#238129',
        '#272034',
        '#011321',
        '#772811',
        '#667103',
        '#273618',
        '#998212',
    ];

    const random =Math.floor(Math.random()*13);
    return colors[random];
}
*/

const mapStateToProps = (state) =>({
    counters:state.counters
})

//액션생성함수를 사용하여 액션을 생성하고 해당액션을 디스패치하는 함수를 만든후 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index,color}));
    }
});

const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList)


export default CounterListContainer;