const array = [12, 67, 34, 33.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubbleSorting(array) {
    let n = array.length;

    for (let i = 0; i < n; i++) {
        let shifted = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];

                array[j] = array[j + 1];

                array[j + 1] = temp

                shifted = true;
            }
        }

        if(!shifted) {
            break;
        }
    }

    return array
}

console.log(bubbleSorting(array))
