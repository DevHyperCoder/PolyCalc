import React, { useState } from 'react';
import './App.css';

function App() {
  const [p1_a, set_p1_a] = useState(0)
  const [p1_b, set_p1_b] = useState(0)
  const [p1_c, set_p1_c] = useState(0)
  const [p2_a, set_p2_a] = useState(0)
  const [p2_b, set_p2_b] = useState(0)
  const [p2_c, set_p2_c] = useState(0)
  const [operation, setOperation] = useState('add');
  return (
    <div className="container">
      <h1 className="heading">PolyCalc</h1>

      <h2 className="heading">First Polynomial</h2>

      <div className="poly-container">
        <div className="poly">
          <input type="number" value={p1_a} name="p1-a" className="mathInput" id="p1-a" onChange={() => set_p1_a(document.getElementById('p1-a').value)} />
          <p>x²</p>
          <p>+</p>
          <input type="number" value={p1_b} name="p1-b" className="mathInput" id="p1-b" onChange={() => set_p1_b(document.getElementById('p1-b').value)} />
          <p>x</p>
          <p>+</p>
          <input type="number" value={p1_c} name="p1-c" className="mathInput" id="p1-c" onChange={() => set_p1_c(document.getElementById('p1-c').value)} />
          <p>=</p>
          <p>0</p>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={() => setOperation("add")} id="add" className="math-btn">+</button>
        <button onClick={() => setOperation("sub")} id="sub" className="math-btn">-</button>
      </div>

      <h2 className="heading">Second Polynomial</h2>

      <div className="poly-container">
        <div className="poly">
          <input type="number" value={p2_a} name="p2-a" className="mathInput" id="p2-a" onChange={() => set_p2_a(document.getElementById('p2-a').value)} />
          <p>x²</p>
          <p>+</p>
          <input type="number" value={p2_b} name="p2-b" className="mathInput" id="p2-b" onChange={() => set_p2_b(document.getElementById('p2-b').value)} />
          <p>x</p>
          <p>+</p>
          <input type="number" value={p2_c} name="p2-c" className="mathInput" id="p2-c" onChange={() => set_p2_c(document.getElementById('p2-c').value)} />
          <p>=</p>
          <p>0</p>
        </div>
      </div>

      <h2 className="heading">Final Polynomial</h2>

      <div className="poly-container">
        <div className="poly">
          <input type="number" name="p-f-a" readOnly className="mathInput" id="p-f-a" value={calcPoly(operation, p1_a, p2_a)} />
          <p>x²</p>
          <p>+</p>
          <input type="number" name="p-f-b" readOnly className="mathInput" id="p-f-b" value={calcPoly(operation, p1_b, p2_b)} />
          <p>x</p>
          <p>+</p>
          <input type="number" name="p-f-c" readOnly className="mathInput" id="p-f-c" value={calcPoly(operation, p1_c, p2_c)} />
          <p>=</p>
          <p>0</p>
        </div>
      </div>

    </div>

  );
}

function calcPoly(operation, val1, val2) {
  val1 = parseInt(val1)
  val2 = parseInt(val2)

  switch (operation) {
    case "add":
      return val2 + val1
    case "sub":
      return val1 - val2
    default:
      return 0
  }
}

export default App;
