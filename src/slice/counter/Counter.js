import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increament())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decreament())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
