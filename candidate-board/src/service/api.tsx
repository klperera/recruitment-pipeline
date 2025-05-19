import axios from "axios";
import type { candidate } from "../components/CandidateCard";

export const create_candidate = async (data: candidate) => {
  return await axios
    .post("http://localhost:8080/candidates", data)
    .then((res) => {
      console.log("Candidate created successfully");
      return res.data.results;
    });
};

export const get_all_candidates = async () => {
  return await axios.get("http://localhost:8080/candidates").then((res) => {
    console.log("Candidates fetched successfully");
    return res.data.results;
  });
};
