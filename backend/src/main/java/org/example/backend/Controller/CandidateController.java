package org.example.backend.Controller;

import org.example.backend.Model.Candidate;
import org.example.backend.Model.Response;
import org.example.backend.Service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/candidates")
public class CandidateController {

    private final CandidateService candidateService;

    @Autowired
    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping("/system")
    public String candidateSystem() {
        return "Candidate System";
    }

    @GetMapping
    public ResponseEntity<Response> getAllCandidates(@RequestParam(required = false)String stage) {
        if (stage.equalsIgnoreCase("Applying") ||  stage.equalsIgnoreCase("Screening") || stage.equalsIgnoreCase("Interview") || stage.equalsIgnoreCase("Test")) {
            return candidateService.getAllCandidatesByStage(stage.toLowerCase());
        }
        else {
            return candidateService.getAllCandidates();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getById(@RequestBody int id) {
        return candidateService.getById(id);
    }

    @PostMapping
    public ResponseEntity<Response> createCandidate(@RequestBody Candidate candidate) {
        candidate.setStage(candidate.getStage().toLowerCase());
        return candidateService.createCandidate(candidate);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> updateCandidate(@RequestBody int id, @RequestBody Candidate updated) {
        return candidateService.updateCandidate(id, updated);
    }

    @DeleteMapping("/{id}")
    public void deleteCandidate(@RequestBody int id) {
        candidateService.deleteCandidate(id);
    }

}
