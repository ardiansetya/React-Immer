// import { useState } from "react";
import { useImmer } from "use-immer";

function App() {
  // Pakai useState
  // const [data, setData] = useState({
  //   title: "",
  //   task: "",
  // });

  // const handleChangeTitle = (e) => {
  //   setData({ ...data, title: e.target.value });
  // };
  // const handleChangeTask = (e) => {
  //   setData({ ...data, task: e.target.value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Submitted")
  //   console.log(data)
  // };

// Pakai UseImmer
  const [data, setData] = useImmer({
    title: "",
    task: "",
  });

  const handleChangeTitle = (e) => {
    setData(data => {
      data.title = e.target.value
    });
  };
  const handleChangeTask = (e) => {
    setData(data => {
      data.task = e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted")
    console.log(data)
  };

  return (
    <>
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
                type="text"
                value={data.title}
                className="border-2 p-2 rounded-xl"
              />
              <label className="font-bold text-xl" htmlFor="title">
                Task
              </label>
              <input
                onChange={handleChangeTask}
                type="text"
                value={data.task}
                className="border-2 p-2 rounded-xl"
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <div className="flex flex-col">
            <h1>Title: {data.title}</h1>
            <h1>Task: {data.task}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
