import { useState } from "react";
import { useImmer } from "use-immer";

const Array = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

  const handleChangeTitle = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((items) => {
      items.push(item);
    });
    setItem("");
    console.log(items);
  };
  return (
    <div className="container mx-auto">
      <div className="min-h-screen border-4 flex justify-center items-center flex-col gap-2">
        <form className="w-1/2 border-4 flex flex-col">
          <h1 className="text-2xl p-2 text-center font-bold">Task</h1>
          <div className="flex flex-col gap-3 p-3">
            <label className="font-bold text-xl" htmlFor="title">
              Title
            </label>
            <input
              onChange={handleChangeTitle}
              value={item}
              type="text"
              className="border-2 p-2 rounded-xl"
            />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
        <div className="flex flex-col">
          <ul >
            {items.map((data, index) => {
              return <li className="" key={index}>{data}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Array;
