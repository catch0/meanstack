var _ = {
   map: function(arr, callback) {
     //code here;
     var new_arr = [];
     for(let i of arr){
      new_arr.push(i*100);
     }
     console.log('map function ' + new_arr);

// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
   },
   reduce: function(arr,callback) {
     // code here;
     var boogie = 0;
     for(i=0; i <arr.length;i++){
       boogie = boogie + i;
      }
      console.log('reduce function ' + boogie);
   },
   find: function(arr,callback) {
     // code here;
     new_arr=[];
      for(i=0; i<arr.length;i++){
        if(arr[i]%2 != 0){
         new_arr.push(arr[i]);
          }
      }
      console.log('find function ' + new_arr);
   },
   filter: function(arr, callback) {
     // code here;
     new_arr=[];
     for(i=0;i<arr.length;i++){
       if(arr[i] % 2 == 0){
         new_arr.push(arr[i]);
       }
     }
     console.log('filter function ' + new_arr);
   },
   reject: function() {
     // code here;
     
     console.log("I'm busy washing my hair that night")
   }
 }
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

var map = _.map([1,2,3,4], function(num){ console.log(num) })
var reduce = _.reduce([1,2,3,4], function(num){console.log(num)})
var find = _.find([2,4,7,8,10], function(num){console.log(num)})
var filter = _.filter([10,20,25,33], function(num){console.log(num)})
