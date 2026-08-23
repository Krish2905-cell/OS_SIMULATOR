import { useState } from "react";
import { priorityScheduling } from "./../algorithms/priority";

function Priority() {
    const [processes, setProcesses] = useState([
        { id: 1, arrival: 0, burst: 5, priority: 2 },
        { id: 2, arrival: 1, burst: 3, priority: 1 },
        { id: 3, arrival: 2, burst: 8, priority: 3 }
    ]);

    const [results, setResults] = useState([]);

    const [newArrival, setNewArrival] = useState("");
    const [newBurst, setNewBurst] = useState("");
    const [newPriority, setNewPriority] = useState("");

    function handleAddProcess() {
        if (newArrival === "" || newBurst === "" || newPriority === "") {
            return;
        }

        const newProcess = {
            id: processes.length + 1,
            arrival: Number(newArrival),
            burst: Number(newBurst),
            priority: Number(newPriority)
        };

        setProcesses([...processes, newProcess]);

        setNewArrival("");
        setNewBurst("");
        setNewPriority("");
    }

    function handleRun() {
        const output = priorityScheduling(processes);
        setResults(output);
    }

    return (
        <div style={styles.container}>

            <h2 style={styles.title}>
                Priority Scheduling
            </h2>

            <p style={styles.subtitle}>
                Non-Preemptive • Lower priority number = Higher priority
            </p>

            {/* Add Process Section */}
            <div style={styles.inputSection}>

                <h3 style={styles.sectionTitle}>
                    Add Process
                </h3>

                <div style={styles.inputRow}>

                    <input
                        type="number"
                        placeholder="Arrival Time"
                        value={newArrival}
                        onChange={(e) => setNewArrival(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        type="number"
                        placeholder="Burst Time"
                        value={newBurst}
                        onChange={(e) => setNewBurst(e.target.value)}
                        style={styles.input}
                    />

                    <input
                        type="number"
                        placeholder="Priority"
                        value={newPriority}
                        onChange={(e) => setNewPriority(e.target.value)}
                        style={styles.input}
                    />

                    <button
                        onClick={handleAddProcess}
                        style={styles.addButton}
                    >
                        + Add Process
                    </button>

                </div>

            </div>

            {/* Current Processes */}
            <div style={styles.processSection}>

                <h3 style={styles.sectionTitle}>
                    Current Processes
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

                            <span>
                                Priority: <strong>{p.priority}</strong>
                            </span>

                        </div>
                    ))}

                </div>

            </div>

            {/* Run Button */}
            <button
                onClick={handleRun}
                style={styles.runButton}
            >
                Run Priority Scheduling
            </button>

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
                                <th style={styles.th}>Priority</th>
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
                                        {p.priority}
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

    inputSection: {
        width: "100%",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "12px",
        background: "#151b27",
        border: "1px solid #293244",
        boxSizing: "border-box"
    },

    sectionTitle: {
        marginTop: "0",
        marginBottom: "15px",
        fontSize: "18px",
        color: "#e2e8f0"
    },

    inputRow: {
        display: "flex",
        gap: "12px",
        flexWrap: "wrap"
    },

    input: {
        flex: "1",
        minWidth: "160px",
        padding: "12px 14px",
        borderRadius: "8px",
        border: "1px solid #374151",
        background: "#0f141d",
        color: "#ffffff",
        fontSize: "15px",
        outline: "none",
        boxSizing: "border-box"
    },

    addButton: {
        padding: "12px 18px",
        borderRadius: "8px",
        border: "none",
        background: "#334155",
        color: "#ffffff",
        fontSize: "15px",
        cursor: "pointer"
    },

    processSection: {
        marginBottom: "20px"
    },

    processList: {
        display: "flex",
        gap: "12px",
        flexWrap: "wrap"
    },

    processCard: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px 16px",
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

    runButton: {
        padding: "12px 22px",
        marginBottom: "30px",
        borderRadius: "8px",
        border: "none",
        background: "#4f46e5",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer"
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

export default Priority;