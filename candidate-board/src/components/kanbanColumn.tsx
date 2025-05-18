import "../css/KanbanColumn.css";
import CandidateCard, { type candidate } from "./CandidateCard";

interface KanbanColumnProps {
  title: string;
  stage: "applying" | "screening" | "interview" | "test";
  candidates: candidate[];
  count: number;
}

function KanbanColumn({ title, stage, candidates, count }: KanbanColumnProps) {
  return (
    <>
      <div className={`kanban-column ${stage}`}>
        <div className="column-header">
          <div className={`column-title ${stage}`}>
            <span>{title}</span>
            <span className="column-count">{count}</span>
          </div>
          <button className="column-detail">Details</button>
        </div>

        <div className="column-content">
          {candidates.map((candidate) => (
            <CandidateCard candidate={candidate} />
          ))}
        </div>
      </div>
    </>
  );
}

export default KanbanColumn;
