import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) =>({
    color:state.colorData.color,
    number:state.numberData.number
})

/*
단일리듀서 생성시
const mapStateToProps = (state) =>({
    color:state.color,
    number:state.number
})
*/

//액션생성함수를 사용하여 액션을 생성하고 해당액션을 디스패치하는 함수를 만든후 props로 연결
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


export default CounterContainer;