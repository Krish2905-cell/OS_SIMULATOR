export function fcfs(processes) {
    let sorted = [...processes].sort((a, b) => a.arrival - b.arrival);
    let currentTime = 0;
    let result = [];

    for (let i = 0; i < sorted.length; i++) {
        let p = sorted[i];
        if (currentTime < p.arrival) {
            currentTime = p.arrival;
        }
        let completion = currentTime + p.burst;
        let turnaround = completion - p.arrival;
        let waiting = turnaround - p.burst;

        result.push({
            id: p.id,
            arrival: p.arrival,
            burst: p.burst,
            completion,
            turnaround,
            waiting
        });
        currentTime = completion;
    }
    return result;
}