function findUnsortedSubarray(arr) {
    l = arr.length

    // left boundary/position
    let start = 0

    // right boundary/position
    let end = l - 1;

    // find the left boundary of the part of the array that isnt sorted by checking whether the first index is less than or equal to the next index. If it is it will increament the start variable until the array is in ascending order
    while (start < end && arr[start] <= arr[start + 1]) {
        start++;
    }

    // return [0,0] if sorted
    if (start === end) {
        return [0, 0];
    }

    // find the right boundary of the part of the array that isnt sorted by checking whether the last index is greater than or equal to the previous index. If it is it will decreament the end variable until the array is in descending order
    while (end > start && arr[end] >= arr[end - 1]) {
        end--;
    }

    // find the minimum and maximum values within the unsorted subarray.
    // spread the entire array and slice it begining with the start index and ends at the end index(inclusive)
    // use min/max to find the max and min values in the subarr
    let subArrMin = Math.min(...arr.slice(start, end + 1));
    let subArrMax = Math.max(...arr.slice(start, end + 1));

    while (start >= 0 && arr[start] > subArrMin) {
        start--;
    }

    while (end < arr.length && arr[end] < subArrMax) {
        end++;
    }

    return [start + 1, end - 1];
}
console.log(findUnsortedSubarray([1, 2, 3, 6, 4, 4]))