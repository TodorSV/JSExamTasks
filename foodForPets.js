function foodForPets(input) {
    let countDays = Number(input[0]);
    let amountFoodForDays = Number(input[1]);

    let eatFoodByDogSum = 0;
    let eatFoodByCatSum = 0;
    let daysCounter = 0;
    let biscuitCounter = 0;

    for (let index = 2; index < input.length; index += 2) {
        daysCounter++;
        let dogFood = Number(input[index]);
        eatFoodByDogSum += dogFood;

        let catFood = Number(input[index + 1]);
        eatFoodByCatSum += catFood;

        if (daysCounter % 3 === 0) {
            biscuits = ((catFood + dogFood) * 0.10);
            biscuitCounter += biscuits;
        }
        if (daysCounter === countDays) {
            break;
        }
    }
    let totalFood = eatFoodByCatSum + eatFoodByDogSum;

    console.log(`Total eaten biscuits: ${Math.round(biscuitCounter)}gr.`);
    console.log(`${(totalFood / amountFoodForDays * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(eatFoodByDogSum / totalFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(eatFoodByCatSum / totalFood * 100).toFixed(2)}% eaten from the cat.`);

}

foodForPets(["3", "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]);
