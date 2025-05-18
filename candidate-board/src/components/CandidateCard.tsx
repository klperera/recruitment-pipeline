import "../css/CandidateCard.css";

export interface candidate {
  id: number;
  name: string;
  stage: "applying" | "screening" | "interview" | "test";
  appliedDate: string;
  score: number;
  referred?: boolean;
}

function CandidateCard({ candidate }: any) {
  return (
    <>
      <div className="candidate-card">
        <div className="candidate-header">
          <div className="candidate-info">
            <h3 className="candidate-name">{candidate.name}</h3>
            <p className="candidate-applied">
              Applied at {candidate.appliedDate}
            </p>
          </div>
        </div>

        <div className="candidate-footer">
          <div className="candidate-rating">
            {candidate.score > 0 ? (
              <>
                <span className="star">★</span>
                <span>{candidate.score}Overall</span>
              </>
            ) : (
              <div className="add-assessment">
                <span>+ Add Assessment</span>
              </div>
            )}
          </div>

          {candidate.referred && (
            <div className="candidate-referred">
              <span>Referred</span>
            </div>
          )}

          <button className="candidate-menu">
            <span>...</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CandidateCard;
