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

    public ResponseEntity<Response> getAllCandidates() {
        Response response = new Response(candidateRepository.findAll(), "Getting all candidates");
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }
    public ResponseEntity<Response> getAllCandidatesByStage(String stage) {
        Response response = new Response(candidateRepository.findAllByStage(stage), "Getting all " + stage +" candidates");
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

    public ResponseEntity<Response> getById(int id) {
        Optional<Candidate> candidate = candidateRepository.findById(id);
        Response response;
        if (candidate.isPresent()) {
            response = new Response(candidate.get(), "Getting ID: " + candidate.get().getCandidateID() +" candidate");
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(response);
        }
        else {
            response = new Response(new Candidate(), "ID: " + id + " candidate not found");
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(response);
        }
    }

    public ResponseEntity<Response> createCandidate(Candidate user) {
        Optional<Candidate> candidate = candidateRepository.findByName(user.getName());
        Response response;
        if (candidate.isPresent()) {
            response = new Response(candidate.get(),"Candidate already exists");
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(response);
        }
        else{
            candidateRepository.save(user);
            response = new Response(user,"Candidate registered successfully.");
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

