import "../css/AddCandidate.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { create_candidate } from "../service/api";

function AddCandidates() {
  const [name, setName] = useState<string>("");
  const [referred, setReffered] = useState<boolean>(false);

  const submithandel = async (e: React.FormEvent) => {
    e.preventDefault();

    const new_candidate = {
      name: name,
      referred: referred,
      appliedDate: new Date().toISOString(),
      stage: "applying" as "applying",
      score: 0,
    };

    const response = await create_candidate(new_candidate);

    if (response.status === 201) {
      alert("Candidate added successfully");
    } else {
      alert("Failed to add candidate");
    }
  };

  return (
    <div>
      <form className="add-candidate-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-check">
          <label htmlFor="referred">Referred</label>

          <label htmlFor="referred-yes">Yes</label>
          <input
            type="radio"
            className="form-check-input"
            name="referred"
            id="referred-yes"
            value={"true"}
            onChange={(e) => {
              setReffered(e.target.value === "true");
            }}
          />

          <label htmlFor="referred-no">No</label>
          <input
            type="radio"
            className="form-check-input"
            name="referred"
            id="referred-no"
            value={"false"}
            onChange={(e) => {
              setReffered(e.target.value === "true");
            }}
          />
        </div>

        <button
          onSubmit={submithandel}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
        <Link to="/" className="btn btn-secondary home-btn">
          Home page
        </Link>
      </form>
    </div>
  );
}

export default AddCandidates;
