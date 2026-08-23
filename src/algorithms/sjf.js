export function sjf(processes){
    let n = processes.length; // Number of processes
    let completed=0; // Number of completed processes
    let currentTime=0; // Current time in the simulation
    let isDone=new Array(n).fill(false); // Array to track completed processes
    let result=[];


    while( completed < n){
        let idx=-1; // number of the process with the shortest burst time
        let minBurst=Number.MAX_VALUE; // Minimum burst time found so far

        for(let i=0;i<n;i++){
            if(!isDone[i] && processes[i].arrival <= currentTime){ // check if the process is not done and has arrived and arrival time is less than currentTime
                if(processes[i].burst < minBurst){
                    minBurst=processes[i].burst;
                    idx=i;
                }
            }
        }

        if(idx === -1){ // if no process is found, increment the current time and continue to the next iteration until the process with arrival time less than currentTime is found
            currentTime++;
            continue;
        }

        let p=processes[idx]; // Get the process with the shortest burst time
        let completion=currentTime + p.burst;
        let turnaround=completion - p.arrival;
        let waiting=turnaround - p.burst;

        result.push({
            id: p.id,
            arrival: p.arrival,
            burst:p.burst,
            completion,
            turnaround,
            waiting
        });

        currentTime=completion;
        isDone[idx]=true;
        completed++;

    }

    return result;
}