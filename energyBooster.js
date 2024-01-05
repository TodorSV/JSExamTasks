function energyBooster(input) {
    let fruit = input[[0]];
    let size = input[1];
    let countSetsOrdered = Number(input[2]);
    let price = 0;
    let sumOrder = 0;

    switch (fruit) {
        case "Watermelon":
            switch (size) {
                case "big": price = 5 * 28.70; break;
                case "small": price = 2 * 56; break;
            }
    }
    switch (fruit) {
        case "Mango":
            switch (size) {
                case "big": price = 5 * 19.60; break;
                case "small": price = 2 * 36.66; break;
            }
    }
    switch (fruit) {
        case "Pineapple":
            switch (size) {
                case "big": price = 5 * 24.80; break;
                case "small": price = 2 * 42.10; break;
            }
    }
    switch (fruit) {
        case "Raspberry":
            switch (size) {
                case "big": price = 5 * 15.20; break;
                case "small": price = 2 * 20; break;
            }
    }
    sumOrder = countSetsOrdered * price;
    if (sumOrder >= 400 && sumOrder <= 1000) {
        sumOrder *= 0.85;
    } else if (sumOrder > 1000) {
        sumOrder *= 0.50;
    }
    console.log(`${sumOrder.toFixed(2)} lv.`);
}

energyBooster(["Watermelon",
    "big",
    "4"]);
