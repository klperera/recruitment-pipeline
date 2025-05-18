import "../css/Header.css";

function Header() {
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
            <button className="btn-back"></button>
            <h1 className="header-title">Job Title</h1>
            <div className="header-page-indicator"></div>
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
          <button className="nav-tab active">Candidates</button>
          <button className="nav-tab">Job Info</button>
          <button className="nav-tab">Calendar</button>
          <button className="nav-tab">Score Card</button>
          <button className="nav-tab">Activity</button>
          <button className="nav-tab">Application Form</button>
          <button className="nav-tab">Automation</button>
        </div>
      </div>
    </>
  );
}

export default Header;
