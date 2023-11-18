function findUnsortedSubarray(arr) {
    let start = 0, end = arr.length - 1;

    while (start < end && arr[start] <= arr[start + 1]) {
        start++;
    }

    if (start === end) {
        return [0, 0];
    }

    while (end > start && arr[end] >= arr[end - 1]) {
        end--;
    }

    let subarrayMin = Math.min(...arr.slice(start, end + 1));
    let subarrayMax = Math.max(...arr.slice(start, end + 1));

    while (start >= 0 && arr[start] > subarrayMin) {
        start--;
    }

    while (end < arr.length && arr[end] < subarrayMax) {
        end++;
    }

    return [start + 1, end - 1];
}
console.log(findUnsortedSubarray([1, 2, 3, 6, 4, 4]))