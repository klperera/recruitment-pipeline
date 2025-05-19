import "../css/ToolBar.css";
import { Link } from "react-router-dom";

function ToolrBar() {
  return (
    <>
      <div className="toolbar">
        <div className="toolbar-left">
          <div className="search-bar">
            <input type="text" placeholder="Search here" />
          </div>

          <div className="filter-group">
            <button className="filter-btn">
              <span>Data Range</span>
            </button>
            <button className="filter-btn">
              <span>Score Range</span>
            </button>
            <button className="filter-btn">
              <span>Advance Filter</span>
            </button>
          </div>
        </div>

        <div className="toolbar-right">
          <Link to="/addCandidates" className="btn btn-secondary">
            Add Candidate
          </Link>
          <button className="filter-btn">
            <span>Filter People</span>
          </button>
          <button className="filter-btn">
            <span>Filter setting</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ToolrBar;
