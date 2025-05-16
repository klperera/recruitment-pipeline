package org.example.backend.Controller;

import org.example.backend.Model.Candidate;
import org.example.backend.Model.Stage;
import org.example.backend.Service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/candidates")
@CrossOrigin(origins = "")
public class CandidateController {

    private final CandidateService candidateService;

    @Autowired
    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping
    public List<Candidate> getAllCandidates(@RequestBody(required = false)Stage stage) {
        return stage == null? candidateService.getAllCandidates() : candidateService.getAllCandidatesByStage(stage);
    }

    @GetMapping("/{id}")
    public Candidate getById(@RequestBody int id) {
        return candidateService.getById(id);
    }

    @PostMapping
    public Candidate createCandidate(@RequestBody Candidate candidate) {
        return candidateService.createCandidate(candidate);
    }

    @PutMapping("/{id}")
    public Candidate updateCandidate(@RequestBody Long id, @RequestBody Candidate updated) {
        return candidateService.updateCandidate(id, updated);
    }

    @DeleteMapping("/{id}")
    public void deleteCandidate(@RequestBody Long id) {
        candidateService.deleteCandidate(id);
    }

}
