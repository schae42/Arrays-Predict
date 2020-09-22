//1.
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

/*var num     value              
0               8
1               6
2               7
3               5
4               3
5               0
6               9

console
  8, 6, 7, 5, 3, 0, 9 */

//2.
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

/*var arr     value              
    0           That is odd!
    1           That is odd!
    2           8
    3           4       
    4           2
    5           0
    6           That is odd!

console
That is odd!, That is odd!, 8, 4, 2, 0, That is odd! */

//3.
var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

/*var arr     value            var newArr       value  
    0           -1                  0             -5
    1           -3                  1             -2
    2           -8                  2              -1
    3           5
    4           "Zero"
    5            2
    6            -4
    7           1


console
 arr = [-1, -3, -8, 5, "Zero", 2, -4, 1]
 newArr = [-5, -2, -1] */