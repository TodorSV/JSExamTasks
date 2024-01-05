function fitnessCard(input) {
    let money = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let price = 0;
    let gymPrice = 0;
    let boxingPrice = 0;
    let yogaPrice = 0;
    let zumbaPrice = 0;
    let dancesPrice = 0;
    let pilatesPrice = 0;

    switch (sport) {
        case 'Gym':
            if (sex === 'm') {
                price = gymPrice  * 42; break;
            } else {
                price = gymPrice * 35; break;
            }
        case 'Boxing':
            if (sex === 'm') {
                price = boxingPrice * 41; break;
            } else {
                price = boxingPrice * 37; break;
            }
        case 'Yoga':
            if (sex === 'm') {
                price = yogaPrice * 45; break;
            } else {
                price = yogaPrice * 32; break;
            }
        case 'Zumba':
            if (sex === 'm') {
                price = zumbaPrice * 34; break;
            } else {
                price = zumbaPrice * 31; break;
            }
        case 'Dances':
            if (sex === 'm') {
                price = dancesPrice * 51; break;
            } else {
                price = dancesPrice * 53; break;
            }
        case 'Pilates':
            if (sex === 'm') {
                price = pilatesPrice * 39; break;
            } else {
                price = pilatesPrice * 37; break;
            }
    }
    if (age <= 19) {
        sport = price * 0.80;
    }
    if (money <= sport) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need ${(sport - money.toFixed(2))} more.`);
    }
}
fitnessCard(["50",
    "m",
    "23",
    "Gym"]);
