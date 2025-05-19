package org.example.backend.Repository;

import org.example.backend.Model.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {

    Page<Candidate> findAllByStage(String stage, Pageable pageable);

    Optional<Candidate> findByName(String name);
}
