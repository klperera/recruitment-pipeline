package org.example.backend.Repository;

import org.example.backend.Model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
    List<Candidate> findAllByStage(String stage);

    Optional<Candidate> findByCandidateID(int id);
    Optional<Candidate> findByName(String name);
}
