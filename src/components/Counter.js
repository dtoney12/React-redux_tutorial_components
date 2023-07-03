import {useReducer} from "react";
import Panel from "./Panel";
import Button from "./Button";

function Counter({initialCount}) {
    const SET_OPERATION = 'operation';
    const SET_VALUE_TO_ADD = 'setValueToAdd';

    const [state, dispatch] = useReducer((state, action)=> {
        switch (action.type) {
            case SET_OPERATION:
                return {
                    ...state,
                    // count: state.count + (parseInt(action.payload) || parseInt(state.valueToAdd) || 0),
                    count: state.count + (action.payload || state.valueToAdd || 0),
                    valueToAdd: 0
                }
            case SET_VALUE_TO_ADD:
                return {
                    ...state,
                    valueToAdd: parseInt(action.payload)
                }
            default:
                return state;
        }
    }, {
        count: initialCount,
        valueToAdd: 0
    });

    function increment() {
        dispatch({
            type: SET_OPERATION,
            payload: 1
        });
    }

    function decrement() {
        dispatch({
            type: SET_OPERATION,
            payload: -1
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({
            type: SET_OPERATION,
        });
    }

    function handleChange(event) {
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: event.target.value
        });
    }

    return <div>
        <Panel className="m-3">
            <h1 className="text-lg">Current Count: {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot </label>
                <input
                    value={state.valueToAdd || ""}
                    type="number"
                    onChange={handleChange}
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button type="submit">Add it!</Button>
            </form>
        </Panel>


    </div>

}

export default Counter;