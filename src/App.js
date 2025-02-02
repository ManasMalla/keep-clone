import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleDown = (element) => {
    if (element.key == "Enter") {
      setList(list.concat({ todo_text: todo, checked: false }));
      setTodo("");
    }
  };
  return (
    <div className="App">
      <section className="px-32 py-16">
        <div className="pb-8">
          <div className="flex space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Google_Keep_icon_%282020%29.svg"
              className="w-8 h-8"
            />
            <h1 className="text-start text-4xl font-bold">Keep</h1>
          </div>
          <p className="text-start pt-4 w-1/2 text-gray-500">
            Exercitation adipisicing duis in cillum. Magna commodo quis mollit
            eiusmod tempor est minim laboris eiusmod adipisicing cillum dolor
            anim. Eiusmod adipisicing enim aliquip ullamco sit. In sit sunt
            exercitation irure irure sit in.
          </p>
        </div>
        <input
          type="text"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value, false);
          }}
          className="focus:outline-amber-300 w-3/4 h-16 px-8 mb-8 rounded-xl bg-gray-50 focus:bg-amber-50"
          placeholder="Take a note..."
          onKeyDown={handleDown}
        />
        <ul className=" space-y-4">
          {list.map((item, index) => (
            <li key={index}>
              <div className="flex">
                <input
                  className="accent-amber-300"
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    setList(
                      list.map((currentItem, currentIndex) => {
                        if (index == currentIndex) {
                          return {
                            todo_text: currentItem.todo_text,
                            checked: !currentItem.checked,
                          };
                        } else {
                          return currentItem;
                        }
                      })
                    );
                  }}
                />
                <p
                  className={
                    "ml-6 text-start w-max" +
                    (item.checked ? " line-through" : "")
                  }
                >
                  {item.todo_text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="border-2 py-3 px-12 rounded-full"
          onClick={() => {
            setList([]);
          }}
        >
          Clear All
        </button>
      </section>
    </div>
  );
}

export default App;
