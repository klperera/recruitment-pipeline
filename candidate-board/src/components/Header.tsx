import "../css/Header.css";
import { useState } from "react";

function Header() {
  const [tab, settab] = useState("Candidates");

  const job = {
    status: "Open",
    position: "Software Engineer",
    location: "On-site  ",
    createdBy: "Kalpa Perera",
  };
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-top">
            <h1 className="header-title">{job.position}</h1>
            <div className="header-actions">
              <button className="btn btn-primary">
                <span>Share & Promote</span>
              </button>
            </div>
          </div>

          <div className="header-details">
            <div className="header-tag">
              <span className="status-indicator"></span>
              <span>{job.status}</span>
            </div>
            <div className="header-separator">•</div>
            <div className="header-detail">{job.position}</div>
            <div className="header-separator">•</div>
            <div className="header-detail">{job.location}</div>
            <div className="header-separator">•</div>
            <div className="header-detail">
              Created by <span className="created-by">{job.createdBy}</span>
            </div>
          </div>
        </div>

        <div className="nav-tabs">
          <button
            className={`nav-tab ${tab === "Candidates" && "active"}`}
            onClick={() => settab("Candidates")}
          >
            Candidates
          </button>
          <button
            className={`nav-tab ${tab === "Job Info" && "active"}`}
            onClick={() => settab("Job Info")}
          >
            Job Info
          </button>
          <button
            className={`nav-tab ${tab === "Calendar" && "active"}`}
            onClick={() => settab("Calendar")}
          >
            Calendar
          </button>
          <button
            className={`nav-tab ${tab === "Score Card" && "active"}`}
            onClick={() => settab("Score Card")}
          >
            Score Card
          </button>
          <button
            className={`nav-tab ${tab === "Activity" && "active"}`}
            onClick={() => settab("Activity")}
          >
            Activity
          </button>
          <button
            className={`nav-tab ${tab === "Application" && "active"}`}
            onClick={() => settab("Application")}
          >
            Application Form
          </button>
          <button
            className={`nav-tab ${tab === "Automation" && "active"}`}
            onClick={() => settab("Automation")}
          >
            Automation
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
