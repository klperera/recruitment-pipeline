package org.example.backend.Service;

import org.example.backend.Model.Candidate;
import org.example.backend.Model.Stage;
import org.example.backend.Repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {

    private final CandidateRepository candidateRepository;

    @Autowired
    public CandidateService(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }
    public List<Candidate> getAllCandidatesByStage(Stage stage) {
        return candidateRepository.findAllByStage(stage);
    }

    public Candidate getById(int id) {
        return candidateRepository.findById(id);
    }

    public Candidate createCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    public Candidate updateCandidate(int id, Candidate updated) {
        Candidate prevCandidate = candidateRepository.findById(id);
        updated.setId(prevCandidate.getId());
        if (updated.getName() != null) {
            prevCandidate.setName(updated.getName());
        }
        if (updated.getStage() != null) {
            prevCandidate.setStage(updated.getStage());
        }
        if (updated.getScore() != 0){
            prevCandidate.setScore(updated.getScore());
        }
        if (updated.getReferral() != null){
            prevCandidate.setReferral(updated.getReferral());
        }
        if (updated.getAssessment() != null) {
            prevCandidate.setAssessment(updated.getAssessment());
        }
        return candidateRepository.save(prevCandidate);
    }

    public void deleteCandidate(int id) {
        candidateRepository.deleteById(id);
    }

}

