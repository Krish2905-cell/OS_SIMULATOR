import { useState } from "react";
import { roundRobin } from "./../algorithms/roundRobin";

function RoundRobin() {
    const [processes, setProcesses] = useState([
        { id: 1, arrival: 0, burst: 5 },
        { id: 2, arrival: 1, burst: 3 },
        { id: 3, arrival: 2, burst: 8 }
    ]);

    const [quantum, setQuantum] = useState(2);
    const [results, setResults] = useState([]);

    function handleRun() {
        const output = roundRobin(processes, Number(quantum));
        setResults(output);
    }

    return (
        <div style={styles.container}>

            <h2 style={styles.title}>
                Round Robin Scheduling
            </h2>

            <p style={styles.subtitle}>
                Preemptive scheduling • Processes are executed using a fixed time quantum
            </p>

            {/* Time Quantum Section */}
            <div style={styles.quantumSection}>

                <div>
                    <h3 style={styles.sectionTitle}>
                        Time Quantum
                    </h3>

                    <p style={styles.description}>
                        Set the maximum amount of CPU time given to each process.
                    </p>
                </div>

                <div style={styles.quantumControls}>

                    <input
                        type="number"
                        min="1"
                        value={quantum}
                        onChange={(e) => setQuantum(e.target.value)}
                        style={styles.quantumInput}
                    />

                    <button
                        onClick={handleRun}
                        style={styles.runButton}
                    >
                        Run Round Robin
                    </button>

                </div>

            </div>

            {/* Current Processes */}
            <div style={styles.processSection}>

                <h3 style={styles.sectionTitle}>
                    Processes
                </h3>

                <div style={styles.processList}>

                    {processes.map((p) => (
                        <div key={p.id} style={styles.processCard}>

                            <span style={styles.processId}>
                                P{p.id}
                            </span>

                            <span>
                                Arrival: <strong>{p.arrival}</strong>
                            </span>

                            <span>
                                Burst: <strong>{p.burst}</strong>
                            </span>

                        </div>
                    ))}

                </div>

            </div>

            {/* Results */}
            {results.length > 0 && (
                <div style={styles.tableContainer}>

                    <h3 style={styles.resultsTitle}>
                        Scheduling Results
                    </h3>

                    <table style={styles.table}>

                        <thead>
                            <tr>
                                <th style={styles.th}>Process ID</th>
                                <th style={styles.th}>Arrival Time</th>
                                <th style={styles.th}>Burst Time</th>
                                <th style={styles.th}>Completion Time</th>
                                <th style={styles.th}>Turnaround Time</th>
                                <th style={styles.th}>Waiting Time</th>
                            </tr>
                        </thead>

                        <tbody>
                            {results.map((p) => (
                                <tr key={p.id}>

                                    <td style={styles.td}>
                                        P{p.id}
                                    </td>

                                    <td style={styles.td}>
                                        {p.arrival}
                                    </td>

                                    <td style={styles.td}>
                                        {p.burst}
                                    </td>

                                    <td style={styles.td}>
                                        {p.completion}
                                    </td>

                                    <td style={styles.td}>
                                        {p.turnaround}
                                    </td>

                                    <td style={styles.td}>
                                        {p.waiting}
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>
            )}

        </div>
    );
}

const styles = {

    container: {
        width: "100%",
        padding: "0 4px"
    },

    title: {
        fontSize: "32px",
        marginBottom: "4px"
    },

    subtitle: {
        marginTop: "0",
        marginBottom: "25px",
        color: "#94a3b8",
        fontSize: "15px"
    },

    quantumSection: {
        width: "100%",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "12px",
        background: "#151b27",
        border: "1px solid #293244",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap"
    },

    sectionTitle: {
        marginTop: "0",
        marginBottom: "6px",
        fontSize: "18px",
        color: "#e2e8f0"
    },

    description: {
        margin: "0",
        color: "#94a3b8",
        fontSize: "14px"
    },

    quantumControls: {
        display: "flex",
        alignItems: "center",
        gap: "12px"
    },

    quantumInput: {
        width: "90px",
        padding: "12px 14px",
        borderRadius: "8px",
        border: "1px solid #374151",
        background: "#0f141d",
        color: "#ffffff",
        fontSize: "16px",
        textAlign: "center",
        outline: "none",
        boxSizing: "border-box"
    },

    runButton: {
        padding: "12px 20px",
        borderRadius: "8px",
        border: "none",
        background: "#4f46e5",
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer"
    },

    processSection: {
        marginBottom: "30px"
    },

    processList: {
        display: "flex",
        gap: "12px",
        flexWrap: "wrap"
    },

    processCard: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 18px",
        borderRadius: "10px",
        background: "#151b27",
        border: "1px solid #293244",
        color: "#94a3b8",
        fontSize: "14px"
    },

    processId: {
        color: "#818cf8",
        fontWeight: "700",
        fontSize: "16px"
    },

    tableContainer: {
        width: "100%",
        overflowX: "auto"
    },

    resultsTitle: {
        fontSize: "20px",
        marginBottom: "15px",
        color: "#e2e8f0"
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
        fontSize: "17px",
        textAlign: "center"
    },

    th: {
        padding: "16px 20px",
        background: "#1e293b",
        color: "#ffffff",
        border: "1px solid #475569",
        fontWeight: "600"
    },

    td: {
        padding: "15px 20px",
        border: "1px solid #475569",
        color: "#e2e8f0"
    }
};

export default RoundRobin;