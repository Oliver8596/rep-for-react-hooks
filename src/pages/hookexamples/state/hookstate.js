import { useState, useRef } from "react";

export default function HookState() {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);

  const [version, setVersion] = useState(0);

  const [count, setCount] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }
  return (
    <>
      <h1>UseState</h1>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            setAge((a) => a + 2);
            setAge((a) => a + 5);
          }}
        >
          Increment age
        </button>
        <p>
          Hello, {name}. You are {age}.
        </p>
      </div>
      <br />
      <br />
      <div>
        <button onClick={handleReset}>Reset</button>
        <Form key={version} />
      </div>
      <br />
      <br />
      {/* <CountLabel count={count} /> */}
    </>
  );
}

function Form() {
  const [name, setName] = useState("Taylor");
  const [color, setColor] = useState("blue");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p>Hello, {name}.</p>
      <p>{color}</p>
    </>
  );
}

// TODO useRef的current属性不应该参与渲染（否则会出现难以预测的结果），参与渲染的应该是state
// 🍕 https://react.dev/reference/react/useRef
// function CountLabel() {
//   const [count, setCount] = useState(0);
//   let prevCountRef = useRef(0);
//   console.log("🎈ref before", prevCountRef.current);
//   // const [trend, setTrend] = useState(null);
//   let trend = "aaa";

//   if (prevCountRef.current !== count) {
//     trend = count >= prevCountRef.current ? "increase" : "decrease";
//     console.log("trend ", trend);
//     prevCountRef.current = count;
//     console.log("ref after", prevCountRef.current);
//   }
//   console.log("trend here", trend);
//   return (
//     <>
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//       </div>
//       <h1>{count}</h1>
//       <p>The count is {trend}</p>
//     </>
//   );
// }
