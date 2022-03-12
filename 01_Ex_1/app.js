function biggestSumOfTwoElements(array) {
    if (array.length == 0) {
        return false;
    } else if (array.length == 1) {
        return array[0];
    } else {
        let max = array[0]
        let maxIndex = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
                maxIndex = i
            }
        }
        let max2 = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max2 && maxIndex != i) {
                max2 = array[i]
            }
        }
        return max + max2
    }
}

console.log(biggestSumOfTwoElements([1, 2, 3, 4])) // => 7
console.log(biggestSumOfTwoElements([])) // => false
console.log(biggestSumOfTwoElements([76])) // => 76
console.log(biggestSumOfTwoElements([23, 45, 17, 12])) // => 68