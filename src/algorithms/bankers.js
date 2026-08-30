export function bankersAlgorithm(processes, available) {
    let n=processes.length;
    let resourceCount=available.length;

    let need=[];
    for(let i=0;i<n;i++){
        let processNeed=[];
        for(let j=0;j<resourceCount;j++){
            processNeed.push([processes[i].max[j]-processes[i].allocation[j]])
        }
        need.push(processNeed);
    }
    let work=[...available];

    let finished=new Array(n).fill(false);
    let safeSequence=[];
    let completedCount=0;

    while(completedCount<n){
        let foundOne=false;
        for(let i=0;i<n;i++){
            if(finished[i]) continue;

            let canRun=true;
            for(let j=0;j<resourceCount;j++){
                if(need[i][j]>work[j]){
                    canRun=false;
                }
            }
            
            if(canRun){
                for(let j=0;j<resourceCount;j++){
                    work[j]+=processes[i].allocation[j];
                }
                safeSequence.push(processes[i].id);
                finished[i]=true;
                completedCount++;
                foundOne=true;
            }
        }
        if (foundOne === false) {
            // went through everyone, nobody could run -> unsafe
            return { safe: false, sequence: [] };
        }
    }
    return { safe: true, sequence: safeSequence };
}