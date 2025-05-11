"use client";

import { useState, type MouseEventHandler } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increase() {
    setCount(count + step);
  }
  function decrease() {
    let newCount = count - step;
    if (newCount < 0) newCount = 0;

    setCount(newCount);
  }

  return (
    <div className="p-8">
      <MyButton sign="-" onClick={decrease} />
      <span className="border p-2 mx-2">{count}</span>
      <MyButton sign="+" onClick={increase} />
      <br />
      {/* input - output - validate(optional) - process */}
      Step:{" "}
      <input
        type="number"
        value={step}
        onChange={(e) => {
          let newStep = Number(e.target.value);
          if (newStep < 0) newStep = 1;
          setStep(newStep);
        }}
      />
    </div>
  );
}

interface MyButtonProps {
  sign: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function MyButton(props: MyButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="bg-amber-50 text-amber-700 px-2 py-1 border"
      >
        {props.sign}
      </button>
    </>
  );
}
