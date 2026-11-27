import { MoonStar } from "lucide-react";

function NavBar({ activeView, setActiveView }) {
  return (
    <nav className="navbar">

      {/* REM Logo */}
      <div className="nav-logo">
        <MoonStar size={100} />
        <h1>REM</h1>
      </div>

      {/* Navigation links */}
      <div className="nav-links">
        <button
          className={activeView === "dashboard" ? "active" : ""}
          onClick={() => setActiveView("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={activeView === "weekly" ? "active" : ""}
          onClick={() => setActiveView("weekly")}
        >
          Weekly Summary
        </button>
      </div>

    </nav>
  );
}

export default NavBar;

