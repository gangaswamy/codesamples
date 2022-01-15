//Selection sort
//This algorithm divides the input array into two sublists - a sorted and unsorted sublist. 
//The sorted list is located at the start of the collection, and all elements to the right of the final sorted element are considered unsorted.
//
function selectionSort(arr) { 
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}

let Arr = [5, 2, 4, 6, 1, 3];
selectionSort(Arr);
console.log(Arr);
