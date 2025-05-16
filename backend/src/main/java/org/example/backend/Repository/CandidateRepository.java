package org.example.backend.Repository;

import org.example.backend.Model.Candidate;
import org.example.backend.Model.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
    List<Candidate> findAllByStage(Stage stage);

    Candidate findCandidateById(int id);
}
