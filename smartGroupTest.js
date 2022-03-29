let init = [1, 1, 0, 0, 1, 0, 1];
// let init = [0, 0, 1, 0, 1];
// if both neighbours away or both at home then household is home
// If one is away or home then household is away
// End of street neighbours, one is assumed away.

// Iterate over array
// sum array[i-1], array[i], array[i+1]
// then array[i] === 1 or 'Home'
// Iterate as per weeks

const calcWeeklyOccupancy = (arr) => {
    const weeklyArray = [];
    console.log(weeklyArray);
    arr.map((item, index, array) => {
        if (array[1] === 0) {
            weeklyArray[0] = 1;
        } else {
            weeklyArray[0] = 0;
        }
        if (index !== arr.length - 1) {
            if (array[index - 1] + array[index + 1] === 1) {
                weeklyArray[index] = 0;
            } else {
                weeklyArray[index] = 1;
            }
        } else {
            if (array[index - 1] === 0) {
                weeklyArray[arr.length - 1] = 1;
            } else {
                weeklyArray[arr.length - 1] = 0;
            }
        }
    });
    return weeklyArray;
};
console.log(calcWeeklyOccupancy(init));

const finalOccupancy = (arr, weeks) => {
    let weeklyOccupancy = [arr];
    for (let i = 0; i < weeks; i++) {
        console.log(`This is week ${i}`);
        weeklyOccupancy[i + 1] = calcWeeklyOccupancy(weeklyOccupancy[i]);
        console.log(weeklyOccupancy[i + 1]);
    }
};

finalOccupancy(init, 3);
