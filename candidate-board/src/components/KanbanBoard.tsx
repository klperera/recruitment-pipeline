import "../css/KanbanBoard.css";
import KanbanColumn from "./kanbanColumn";
import { candidates } from "../data/candidates";

function KanbanBoard() {
  const applyingCandidates = candidates.filter((c) => c.stage === "applying");
  const screeningCandidates = candidates.filter((c) => c.stage === "screening");
  const interviewCandidates = candidates.filter((c) => c.stage === "interview");
  const testCandidates = candidates.filter((c) => c.stage === "test");
  return (
    <>
      <div className="kanban-board">
        <KanbanColumn
          title="Applying Period"
          stage="applying"
          candidates={applyingCandidates}
          count={applyingCandidates.length}
        />
        <KanbanColumn
          title="Screening"
          stage="screening"
          candidates={screeningCandidates}
          count={screeningCandidates.length}
        />
        <KanbanColumn
          title="Interview"
          stage="interview"
          candidates={interviewCandidates}
          count={interviewCandidates.length}
        />
        <KanbanColumn
          title="Test"
          stage="test"
          candidates={testCandidates}
          count={testCandidates.length}
        />
      </div>
    </>
  );
}

export default KanbanBoard;
