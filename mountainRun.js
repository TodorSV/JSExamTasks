function mountainRun (input){
    let recordInSecond = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsPerMeter = Number(input[2]);

    let targetClimbing = distanceInMeters * timeInSecondsPerMeter;
    let slowing = Math.floor(distanceInMeters / 50) * 30;
   
    let totalTime = targetClimbing + slowing;

    if (recordInSecond <= totalTime) {
        let secondsNeeded = totalTime - recordInSecond;
        console.log(`No! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    } else if (totalTime < recordInSecond) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    }
}

mountainRun(["5554.36",
"1340",
"3.23"]);