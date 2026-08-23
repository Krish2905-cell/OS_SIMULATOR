import { useState } from "react"; // this is a React hook that allows you to add state to functional components
import { fcfs } from "./../algorithms/fcfs"; // this imports the fcfs function from the algorithms folder

function FCFS() { // this is the main function that defines the FCFS component
    const [processes, setProcesses] = useState([ //this is a state variable that holds the list of processes
        { id: 1, arrival: 0, burst: 5 },
        { id: 2, arrival: 1, burst: 3 },
        { id: 3, arrival: 2, burst: 8 }
    ]);

    const [results, setResults] = useState([]); // this is a state variable that holds the results of the scheduling algorithm

    function handleRun() { // this function is called when the user clicks the "Run FCFS" button
        const output = fcfs(processes); // this calls the fcfs function with the list of processes and stores the output in a variable
        setResults(output); // this updates the results state variable with the output of the fcfs function
    }

    return (
        <div style={styles.container}>

            <h2 style={styles.title}>FCFS Scheduling</h2>

            <button onClick={handleRun} style={styles.button}>
                Run FCFS
            </button>

            {results.length > 0 && (
                <div style={styles.tableContainer}>

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

    button: {
        padding: "10px 20px",
        marginTop: "10px",
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
    }
};

export default FCFS;