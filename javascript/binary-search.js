function test(arr, val){
    
    let start=0, end=arr.length-1; 
    while (start<=end){
        let mid=Math.floor((start + end)/2);  
        if (arr[mid]===val) return mid;
        else if (arr[mid] < val)
             start = mid + 1;
        else
             end = mid - 1;
    }  
    return -1;
}


var A = [1,2,3,4,5,6,7];
console.log(test(A, 5));
