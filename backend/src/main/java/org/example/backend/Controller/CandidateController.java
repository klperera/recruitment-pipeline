package org.example.backend.Controller;

import org.example.backend.Model.Candidate;
import org.example.backend.Model.Response;
import org.example.backend.Service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Response> getAllCandidates(
            @RequestParam(required = false)String stage,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "candidateID") String sortBy
    ) {
        if (stage == null) {
            return candidateService.getAllCandidates(page, size, sortBy);
        } else if (stage.equalsIgnoreCase("Applying") ||  stage.equalsIgnoreCase("Screening") || stage.equalsIgnoreCase("Interview") || stage.equalsIgnoreCase("Test")) {
            return candidateService.getAllCandidatesByStage(stage.toLowerCase(), page, size, sortBy);
        }else {
            Response response = new Response("Invalid stage.");
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(response);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getById(@PathVariable int id) {
        return candidateService.getById(id);
    }

    @PostMapping
    public ResponseEntity<Response> createCandidate(@RequestBody Candidate candidate) {
        candidate.setStage(candidate.getStage().toLowerCase());
        return candidateService.createCandidate(candidate);

    }

    @PutMapping
    public ResponseEntity<Response> updateCandidate(@RequestBody Candidate updated) {
        return candidateService.updateCandidate(updated.getCandidateID(), updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteCandidate(@PathVariable int id) {
        return candidateService.deleteCandidate(id);
    }

}
