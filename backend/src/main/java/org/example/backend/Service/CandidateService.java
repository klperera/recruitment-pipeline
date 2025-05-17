package org.example.backend.Service;

import org.example.backend.Model.Candidate;

import org.example.backend.Model.Response;
import org.example.backend.Repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidateService {

    private final CandidateRepository candidateRepository;

    @Autowired
    public CandidateService(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    public List<Candidate> getAllCandidates() {
        System.out.println("Getting all candidates");
        return candidateRepository.findAll();
    }
    public List<Candidate> getAllCandidatesByStage(String stage) {
        System.out.println("stage is " + stage);
        return candidateRepository.findAllByStage(stage);
    }

    public Candidate getById(int id) {
        if (candidateRepository.existsById(id)) {
            return candidateRepository.findByCandidateID(id).get();
        }
        else {
            return new Candidate();
        }
    }

    public ResponseEntity<Response> createCandidate(Candidate user) {
        System.out.println(user);
        Optional<Candidate> candidate = candidateRepository.findByName(user.getName());
        if (candidate.isPresent()) {
            Response response = new Response(candidate.get(),"Candidate already exists");
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(response);
        }
        else{
            candidateRepository.save(user);
            Response response = new Response(user,"Candidate registered successfully.");
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(response);
        }
    }

    public Candidate updateCandidate(int id, Candidate updated) {
        Optional<Candidate> prevCandidate = candidateRepository.findById(id);
        if (updated.getName() != null) {
            prevCandidate.get().setName(updated.getName());
        }
        if (updated.getStage() != null) {
            prevCandidate.get().setStage(updated.getStage());
        }
        if (updated.getScore() != 0){
            prevCandidate.get().setScore(updated.getScore());
        }
        if (updated.getReferral() != null){
            prevCandidate.get().setReferral(updated.getReferral());
        }
        if (updated.getAssessment() != null) {
            prevCandidate.get().setAssessment(updated.getAssessment());
        }
        return candidateRepository.save(prevCandidate.get());
    }

    public void deleteCandidate(int id) {
        candidateRepository.deleteById(id);
    }

}

