// Merge sort uses the concept of divide-and-conquer to sort the given list of elements.
// It breaks down the problem into smaller subproblems until they become simple enough to solve directly.
function merge(left, right) {
    let arr = []
    while (left.length && right.length) { 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2
  if(array.length < 2){
    return array 
  }
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}


array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));
