import "./App.css";
import TaskCard from "./component/TaskCard";

function App() {
  return (
    <>
      <TaskCard title="i do something" id={"bus-1"} points={"123"} />
      <TaskCard title="i do nothing" id={"bus-2"} points={"23"} />
    </>
  );
}

export default App;
