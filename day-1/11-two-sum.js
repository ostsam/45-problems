const twoSum = (arr, sum) => {
    let remn = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < remn) {
            return [i, arr.indexOf(remn - arr[i])]
        }
    }
}