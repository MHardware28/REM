
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";

function App() {
  // Keep track of the current page
  const [activeView, setActiveView] = useState("dashboard");

  // Store all sleep and study entries
  const [entries, setEntries] = useState([]);

  return (
    <div className="app">

      {/* Main navigation */}
      <NavBar
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main>

        {/* Display the selected page */}
        {activeView === "dashboard" && (
          <Dashboard
            entries={entries}
            setEntries={setEntries}
          />
        )}

        {activeView === "weekly" && (
          <WeeklySummary entries={entries} />
        )}

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>REM | Created by Makayla Hardware</p>

        <p>
          REM helps college students balance their sleep
          and study habits to avoid becoming overwhelmed.
        </p>

        <p>Sleep better. Study smarter. Find your balance.</p>
      </footer>

    </div>
  );
}

// Main dashboard
function Dashboard({ entries, setEntries }) {
  return (
    <section>
      <h2>Welcome to your dashboard!</h2>

      <p>Track your sleep and study habits here.</p>

      {/* Statistics */}
      <div className="box">
        <h2>Statistics</h2>
      </div>

      {/* Sleep and study form */}
      <div className="box">
        <h2>Log Your Day</h2>
      </div>

      {/* Recent entries */}
      <div className="box">
        <h2>Recent Entries</h2>
        <p>
          {entries.length === 0
            ? "No entries yet, log your first one!"
            : `You have ${entries.length} entries.`}
        </p>
      </div>

      {/* Break quiz */}
      <div className="box">
        <h2>Take a Study Break</h2>
      </div>
    </section>
  );
}

// Weekly summary page
function WeeklySummary({ entries }) {
  return (
    <section className="box">
      <h2>Your Weekly Summary</h2>
      <p>View your sleep and study statistics.</p>
      <p>Total entries: {entries.length}</p>
    </section>
  );
}

export default App;
