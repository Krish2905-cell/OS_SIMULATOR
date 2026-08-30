import { useState } from "react";
import { bankersAlgorithm } from "../algorithms/bankers";

function Bankers() {
    const [processes, setProcesses] = useState([
        { id: 'P0', allocation: [0, 1, 0], max: [7, 5, 3] },
        { id: 'P1', allocation: [2, 0, 0], max: [3, 2, 2] },
        { id: 'P2', allocation: [3, 0, 2], max: [9, 0, 2] }
    ]);
    const [available, setAvailable] = useState([3, 3, 2]);
    const [result, setResult] = useState(null);

    const [newId, setNewId] = useState("");
    const [newAllocation, setNewAllocation] = useState("");
    const [newMax, setNewMax] = useState("");

    const [availableInput, setAvailableInput] = useState(available.join(','));

    function parseCommaList(text) {
        return text.split(',').map(item => Number(item.trim()));
    }

    function handleAddProcess() {
        const newProcess = {
            id: newId,
            allocation: parseCommaList(newAllocation),
            max: parseCommaList(newMax)
        };
        setProcesses([...processes, newProcess]);
        setNewId("");
        setNewAllocation("");
        setNewMax("");
    }

    function handleUpdateAvailable() {
        setAvailable(parseCommaList(availableInput));
    }

    function handleRun() {
        const output = bankersAlgorithm(processes, available);
        setResult(output);
    }

    return (
        <div style={styles.container}>

            <h2 style={styles.title}>Banker's Algorithm</h2>

            <div style={styles.panel}>
                <label style={styles.label}>Available (comma-separated)</label>
                <div style={styles.row}>
                    <input
                        style={styles.input}
                        type="text"
                        value={availableInput}
                        onChange={(e) => setAvailableInput(e.target.value)}
                        placeholder="e.g. 3,3,2"
                    />
                    <button style={styles.secondaryButton} onClick={handleUpdateAvailable}>
                        Update Available
                    </button>
                </div>
                <p style={styles.current}>Current Available: [{available.join(', ')}]</p>
            </div>

            <div style={styles.panel}>
                <label style={styles.label}>Add Process</label>
                <div style={styles.row}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Process ID (e.g. P3)"
                        value={newId}
                        onChange={(e) => setNewId(e.target.value)}
                    />
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Allocation (e.g. 1,2,0)"
                        value={newAllocation}
                        onChange={(e) => setNewAllocation(e.target.value)}
                    />
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Max (e.g. 5,3,2)"
                        value={newMax}
                        onChange={(e) => setNewMax(e.target.value)}
                    />
                    <button style={styles.secondaryButton} onClick={handleAddProcess}>
                        Add Process
                    </button>
                </div>
            </div>

            <button onClick={handleRun} style={styles.button}>
                Check Safety
            </button>

            {processes.length > 0 && (
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Process ID</th>
                                <th style={styles.th}>Allocation</th>
                                <th style={styles.th}>Max</th>
                            </tr>
                        </thead>
                        <tbody>
                            {processes.map((p) => (
                                <tr key={p.id}>
                                    <td style={styles.td}>{p.id}</td>
                                    <td style={styles.td}>[{p.allocation.join(', ')}]</td>
                                    <td style={styles.td}>[{p.max.join(', ')}]</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {result && (
                <div style={result.safe ? styles.resultSafe : styles.resultUnsafe}>
                    {result.safe
                        ? `✅ System is SAFE. Safe sequence: ${result.sequence.join(' → ')}`
                        : '❌ System is UNSAFE. No safe sequence exists.'}
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
        marginBottom: "16px"
    },
    panel: {
        background: "#1e293b",
        border: "1px solid #475569",
        borderRadius: "10px",
        padding: "18px 20px",
        marginBottom: "18px"
    },
    label: {
        display: "block",
        fontSize: "13px",
        color: "#94a3b8",
        marginBottom: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center"
    },
    input: {
        flex: "1",
        minWidth: "160px",
        padding: "10px 14px",
        borderRadius: "8px",
        border: "1px solid #475569",
        background: "#0f172a",
        color: "#e2e8f0",
        fontSize: "15px"
    },
    current: {
        marginTop: "12px",
        fontSize: "14px",
        color: "#94a3b8"
    },
    secondaryButton: {
        padding: "10px 18px",
        borderRadius: "8px",
        border: "1px solid #475569",
        background: "#334155",
        color: "#e2e8f0",
        cursor: "pointer",
        fontSize: "15px",
        whiteSpace: "nowrap"
    },
    button: {
        padding: "10px 20px",
        marginTop: "6px",
        marginBottom: "25px",
        borderRadius: "8px",
        border: "none",
        background: "#4f46e5",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    },
    tableContainer: {
        width: "100%",
        overflowX: "auto"
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
    },
    resultSafe: {
        marginTop: "20px",
        padding: "16px 20px",
        borderRadius: "10px",
        background: "rgba(34, 197, 94, 0.1)",
        border: "1px solid rgba(34, 197, 94, 0.4)",
        color: "#4ade80",
        fontSize: "16px",
        fontWeight: "500"
    },
    resultUnsafe: {
        marginTop: "20px",
        padding: "16px 20px",
        borderRadius: "10px",
        background: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.4)",
        color: "#f87171",
        fontSize: "16px",
        fontWeight: "500"
    }
};

export default Bankers;