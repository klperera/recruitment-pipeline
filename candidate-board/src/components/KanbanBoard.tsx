import "../css/KanbanBoard.css";
import KanbanColumn from "./kanbanColumn";

function KanbanBoard() {
  return (
    <>
      <div className="kanban-board">
        <KanbanColumn
          title="Applying Period"
          stage="applying"
          candidates={[]}
          count={0}
        />
        <KanbanColumn
          title="Screening"
          stage="screening"
          candidates={[]}
          count={0}
        />
        <KanbanColumn
          title="Interview"
          stage="interview"
          candidates={[]}
          count={0}
        />
        <KanbanColumn title="Test" stage="test" candidates={[]} count={0} />
      </div>
    </>
  );
}

export default KanbanBoard;
