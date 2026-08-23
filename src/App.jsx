import { useState } from "react";
import FCFS from "./components/FCFS";
import SJF from "./components/SJF";
import Priority from "./components/Priority";
import RoundRobin from "./components/RoundRobin";
import "./App.css";

function App() {
  const [activeModule, setActiveModule] = useState("home");
  const [schedulingOpen, setSchedulingOpen] = useState(true);

  const schedulingAlgos = [
    {
      key: "fcfs",
      label: "FCFS",
      icon: "→",
      description: "First Come First Serve",
      type: "Non-preemptive",
    },
    {
      key: "sjf",
      label: "SJF",
      icon: "◈",
      description: "Shortest Job First",
      type: "Non-preemptive",
    },
    {
      key: "priority",
      label: "Priority",
      icon: "★",
      description: "Priority Scheduling",
      type: "Non-preemptive",
    },
    {
      key: "rr",
      label: "Round Robin",
      icon: "↻",
      description: "Time Quantum Based",
      type: "Preemptive",
    },
  ];

  const activeAlgorithm = schedulingAlgos.find(
    (algo) => algo.key === activeModule
  );

  const handleAlgorithmClick = (key) => {
    setActiveModule(key);
    setSchedulingOpen(true);
  };

  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        <div className="logo-section">
          <div className="logo-icon">OS</div>

          <div>
            <h2>OS Simulator</h2>
            <span>Operating Systems Lab</span>
          </div>
        </div>

        <div className="sidebar-divider"></div>

        {/* Dashboard */}
        <button
          className={`nav-item ${activeModule === "home" ? "active" : ""}`}
          onClick={() => setActiveModule("home")}
        >
          <span className="nav-icon">⌂</span>
          <span>Dashboard</span>
        </button>

        {/* Scheduling */}
        <div className="sidebar-section">

          <button
            className="section-header"
            onClick={() => setSchedulingOpen(!schedulingOpen)}
          >
            <div>
              <span className="nav-icon">⚙</span>
              <span>CPU Scheduling</span>
            </div>

            <span className="arrow">
              {schedulingOpen ? "⌄" : "›"}
            </span>
          </button>

          {schedulingOpen && (
            <div className="algorithm-list">

              {schedulingAlgos.map((algo) => (
                <button
                  key={algo.key}
                  className={`algorithm-item ${
                    activeModule === algo.key ? "selected" : ""
                  }`}
                  onClick={() => handleAlgorithmClick(algo.key)}
                >
                  <span className="algorithm-icon">
                    {algo.icon}
                  </span>

                  <div className="algorithm-info">
                    <span className="algorithm-name">
                      {algo.label}
                    </span>

                    <span className="algorithm-type">
                      {algo.type}
                    </span>
                  </div>
                </button>
              ))}

            </div>
          )}

        </div>

        {/* Other Modules */}
        <div className="sidebar-section other-section">

          <div className="section-label">
            OTHER MODULES
          </div>

          <button className="nav-item disabled">
            <span className="nav-icon">🔒</span>
            <span>Banker's Algorithm</span>
            <span className="coming-soon">Soon</span>
          </button>

          <button className="nav-item disabled">
            <span className="nav-icon">🔒</span>
            <span>Page Replacement</span>
            <span className="coming-soon">Soon</span>
          </button>

          <button className="nav-item disabled">
            <span className="nav-icon">🔒</span>
            <span>Disk Scheduling</span>
            <span className="coming-soon">Soon</span>
          </button>

        </div>

        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">

          <div className="system-status">
            <span className="status-dot"></span>

            <div>
              <strong>Simulator Ready</strong>
              <span>All systems operational</span>
            </div>
          </div>

          <div className="version">
            OS Simulator v1.0
          </div>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}
      <main className="main">

        {/* Top Bar */}
        <header className="topbar">

          <div>
            <span className="breadcrumb">
              OS Simulator
            </span>

            {activeAlgorithm && (
              <>
                <span className="breadcrumb-separator">
                  /
                </span>

                <span className="breadcrumb-current">
                  {activeAlgorithm.label}
                </span>
              </>
            )}
          </div>

          <div className="topbar-right">

            <div className="status-pill">
              <span className="status-dot"></span>
              Simulator Online
            </div>

            <div className="avatar">
              K
            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}
        <div className="content">

          {/* HOME */}
          {activeModule === "home" && (
            <div className="dashboard">

              <section className="hero">

                <div className="hero-content">

                  <div className="hero-badge">
                    <span>●</span>
                    Interactive Operating Systems Lab
                  </div>

                  <h1>
                    CPU Scheduling
                    <br />
                    <span>Simulator</span>
                  </h1>

                  <p>
                    Visualize how operating system scheduling algorithms
                    manage processes, calculate waiting time, turnaround
                    time, and determine execution order.
                  </p>

                  <button
                    className="primary-button"
                    onClick={() => handleAlgorithmClick("fcfs")}
                  >
                    Start Simulation
                    <span>→</span>
                  </button>

                </div>

                <div className="hero-visual">

                  <div className="cpu-circle">
                    <div className="cpu-inner">
                      CPU
                    </div>
                  </div>

                  <div className="process-card process-one">
                    <span>P1</span>
                    <small>Running</small>
                  </div>

                  <div className="process-card process-two">
                    <span>P2</span>
                    <small>Ready</small>
                  </div>

                  <div className="process-card process-three">
                    <span>P3</span>
                    <small>Waiting</small>
                  </div>

                </div>

              </section>


              {/* Stats */}
              <section className="stats-grid">

                <div className="stat-card">
                  <div className="stat-icon purple">⚙</div>

                  <div>
                    <span className="stat-label">
                      Algorithms
                    </span>

                    <strong>4</strong>

                    <small>
                      CPU scheduling methods
                    </small>
                  </div>
                </div>


                <div className="stat-card">
                  <div className="stat-icon blue">▣</div>

                  <div>
                    <span className="stat-label">
                      Process Metrics
                    </span>

                    <strong>4+</strong>

                    <small>
                      Execution calculations
                    </small>
                  </div>
                </div>


                <div className="stat-card">
                  <div className="stat-icon green">✓</div>

                  <div>
                    <span className="stat-label">
                      Simulation
                    </span>

                    <strong>Live</strong>

                    <small>
                      Interactive execution
                    </small>
                  </div>
                </div>

              </section>


              {/* Algorithms */}
              <section className="section">

                <div className="section-title">

                  <div>
                    <h2>Scheduling Algorithms</h2>

                    <p>
                      Select an algorithm to start experimenting
                    </p>
                  </div>

                  <span className="algorithm-count">
                    4 Available
                  </span>

                </div>


                <div className="algorithm-cards">

                  {schedulingAlgos.map((algo) => (
                    <button
                      key={algo.key}
                      className="algorithm-card"
                      onClick={() => handleAlgorithmClick(algo.key)}
                    >

                      <div className="card-icon">
                        {algo.icon}
                      </div>

                      <div className="card-content">

                        <div className="card-title-row">

                          <h3>
                            {algo.label}
                          </h3>

                          <span>
                            →
                          </span>

                        </div>

                        <p>
                          {algo.description}
                        </p>

                        <small>
                          {algo.type}
                        </small>

                      </div>

                    </button>
                  ))}

                </div>

              </section>


              {/* How it works */}
              <section className="how-section">

                <div className="section-title">

                  <div>
                    <h2>How the Simulator Works</h2>

                    <p>
                      Follow the scheduling process step by step
                    </p>
                  </div>

                </div>


                <div className="steps">

                  <div className="step">
                    <div className="step-number">01</div>

                    <div>
                      <h3>Enter Processes</h3>

                      <p>
                        Provide process ID, arrival time and burst time.
                      </p>
                    </div>
                  </div>


                  <div className="step">
                    <div className="step-number">02</div>

                    <div>
                      <h3>Select Algorithm</h3>

                      <p>
                        Choose FCFS, SJF, Priority or Round Robin.
                      </p>
                    </div>
                  </div>


                  <div className="step">
                    <div className="step-number">03</div>

                    <div>
                      <h3>Run Simulation</h3>

                      <p>
                        Execute the algorithm and calculate metrics.
                      </p>
                    </div>
                  </div>


                  <div className="step">
                    <div className="step-number">04</div>

                    <div>
                      <h3>Analyze Results</h3>

                      <p>
                        Study completion, waiting and turnaround time.
                      </p>
                    </div>
                  </div>

                </div>

              </section>

            </div>
          )}


          {/* ALGORITHM PAGES */}
          {activeModule !== "home" && activeAlgorithm && (

            <div className="simulation-page">

              {/* Algorithm Header */}
              <section className="simulation-header">

                <div>

                  <div className="page-badge">
                    CPU SCHEDULING
                  </div>

                  <h1>
                    {activeAlgorithm.label} Scheduling
                  </h1>

                  <p>
                    Simulate {activeAlgorithm.description.toLowerCase()}
                    and analyze process execution metrics.
                  </p>

                </div>

                <div className="algorithm-status">

                  <span className="status-dot"></span>

                  Ready to Run

                </div>

              </section>


              {/* Info Cards */}
              <section className="info-grid">

                <div className="info-card">

                  <span className="info-card-icon">
                    ◈
                  </span>

                  <div>
                    <span>Algorithm Type</span>
                    <strong>{activeAlgorithm.type}</strong>
                  </div>

                </div>


                <div className="info-card">

                  <span className="info-card-icon">
                    ⏱
                  </span>

                  <div>
                    <span>Primary Metric</span>
                    <strong>Waiting Time</strong>
                  </div>

                </div>


                <div className="info-card">

                  <span className="info-card-icon">
                    ▣
                  </span>

                  <div>
                    <span>Output</span>
                    <strong>Process Timeline</strong>
                  </div>

                </div>

              </section>


              {/* Algorithm Component */}
              <section className="simulator-card">

                <div className="simulator-card-header">

                  <div>

                    <span className="live-label">
                      ● LIVE SIMULATION
                    </span>

                    <h2>
                      Process Execution
                    </h2>

                  </div>

                  <div className="execution-badge">
                    Ready
                  </div>

                </div>

                <div className="algorithm-component">
                  {activeModule === "fcfs" && <FCFS />}

                  {activeModule === "sjf" && <SJF />}

                  {activeModule === "priority" && <Priority />}

                  {activeModule === "rr" && <RoundRobin />}
                </div>

              </section>


              {/* Learning section */}
              <section className="learning-card">

                <div className="learning-icon">
                  💡
                </div>

                <div>

                  <h3>
                    Understanding {activeAlgorithm.label}
                  </h3>

                  <p>
                    The simulator calculates the execution order of
                    processes and displays completion time, turnaround
                    time and waiting time. Use different process inputs
                    to observe how scheduling decisions affect system
                    performance.
                  </p>

                </div>

              </section>

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default App;
