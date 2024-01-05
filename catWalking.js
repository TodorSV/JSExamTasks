function catWallking(input) {
  let minutesWalkPerDay = Number(input[0]);
  let countWalkingsDaily = Number(input[1]);
  let caloriesPerDay = Number(input[2]);

  let totalCatWalkingDaily = minutesWalkPerDay * countWalkingsDaily;
  let totalBurnedCalories = totalCatWalkingDaily * 5;

  let percentageCalories = caloriesPerDay / 2;

  if (totalBurnedCalories >= percentageCalories) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnedCalories}.`
    );
  } else if (totalBurnedCalories < caloriesPerDay) {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${totalBurnedCalories}.`
    );
  }
}

catWallking(["30", "3", "600"]);
