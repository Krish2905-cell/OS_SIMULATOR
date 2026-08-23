export function priorityScheduling(processes) {
    let n = processes.length;
    let completed=0;
    let currentTime=0;
    let isDone=new Array(n).fill(false);
    let result=[];

    while(completed < n ){
        let idx=-1;
        let bestPriority=Infinity;
        
        for(let i=0;i<n;i++){
            if(!isDone[i] && processes[i].arrival <= currentTime){
                if(processes[i].priority < bestPriority){
                    bestPriority=processes[i].priority;
                    idx=i;
                }
            }
        }

        if(idx === -1){
            currentTime++;
            continue;
        }

        let p = processes[idx];
        let completion = currentTime + p.burst;
        let turnaround = completion - p.arrival;
        let waiting = turnaround - p.burst;

        result.push({
            id: p.id,
            arrival: p.arrival,
            burst: p.burst,
            priority: p.priority,
            completion,
            turnaround,
            waiting
        });

        currentTime = completion;
        isDone[idx] = true;
        completed++;
    }

    return result;
}