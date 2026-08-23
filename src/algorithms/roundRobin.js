export function roundRobin(processes, quantum) {
    let n = processes.length;
    let completed=0;
    let currentTime=0;
    let remainingBurst = processes.map(p => p.burst);
    let result=[];
    let queue = [];
    let orderPointer=0;

    let isInQueue = new Array(n).fill(false);

    let order =[...processes].map((p,index) => ({...p, index})).sort((a,b) => a.arrival - b.arrival);

    while(orderPointer < n && order[orderPointer].arrival <=currentTime){
        queue.push(order[orderPointer].index);
        isInQueue[order[orderPointer].index] = true;
        orderPointer++;
    }
    while(completed < n){
        if(queue.length === 0){
            currentTime=order[orderPointer].arrival;

            while(orderPointer < n && order[orderPointer].arrival <=currentTime){
                queue.push(order[orderPointer].index);
                isInQueue[order[orderPointer].index] = true;
                orderPointer++;
            }
        }

        let idx=queue.shift();
        isInQueue[idx] = false;
        
        let p = processes[idx];

        let runTime= Math.min(quantum, remainingBurst[idx]);
        remainingBurst[idx] -= runTime;
        currentTime += runTime;

        while(orderPointer < n && order[orderPointer].arrival <=currentTime){
            queue.push(order[orderPointer].index);
            isInQueue[order[orderPointer].index] = true;
            orderPointer++;
        }

        if(remainingBurst[idx] > 0){
            queue.push(idx);
            isInQueue[idx] = true;
        }
        else{
            result.push({
                id: p.id,
                arrival: p.arrival,
                burst: p.burst,
                completion: currentTime,
                turnaround: currentTime - p.arrival,
                waiting: currentTime - p.arrival - p.burst
            });
            completed++;
        }
    }
    return result;
}