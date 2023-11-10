import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, deleteArrayItem } from "./store/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const myList = useSelector((state) => state.counter.myList);
  console.log("MyList: ", myList);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h1>{count}</h1>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <h6>My List</h6>
        {myList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => {
                dispatch(deleteArrayItem(index));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
