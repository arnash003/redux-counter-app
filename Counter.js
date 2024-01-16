import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function Counter(props) {
    return (
        <div>
            <h1>Counter: {props.counter}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    counter: state,
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
