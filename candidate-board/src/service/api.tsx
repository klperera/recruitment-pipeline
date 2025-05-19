import axios from "axios";
import type { candidate } from "../components/CandidateCard";

export const create_candidate = async (data: candidate) => {
  return await axios
    .post("http://localhost:8080/candidates", data)
    .then((res) => {
      console.log("Candidate created successfully");
      return res.data;
    })
    .catch((err) => {
      console.error("Error creating candidate", err);
    });
};
