import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

interface IButton {
  id: number;
}

const button: IButton[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];

type buttonProps = {
  value: IButton;
  onClick: (id: number) => void;
  selected: boolean;
};

function Button({ value, onClick, selected }: buttonProps) {
  // const [selected, setSelected] = useState(false);
  const [like, setLike] = useState(0);

  return (
    <div>
      <div
        onClick={() => {
          onClick(value.id);
          if (like) {
            setLike((like) => like - 1);
          } else {
            setLike((like) => like + 1);
          }
        }}
        className={`button ${selected ? "active" : null}`}
      >
        click {value.id}
      </div>
      <div className={`button ${like ? "like" : null}`}>{like}</div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [idSelected, setIdSelected] = useState<number | null>(null);

  return (
    <div className="App">
      <h1>useState</h1>
      <div className="box">
        {button.map((button) => {
          return (
            <Button
              value={button}
              onClick={(id) => {
                id === idSelected;
                setIdSelected(id === idSelected ? null : id);
              }}
              selected={idSelected === button.id}
            />
          );
        })}
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={`box ${idSelected ? "active" : null}`}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
