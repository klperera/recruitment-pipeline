import "./css/App.css";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  return (
    <>
      <Header></Header>
      <ToolBar></ToolBar>
      <KanbanBoard></KanbanBoard>
    </>
  );
}

export default App;
