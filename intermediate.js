//Part1
//function star_string(n){
//        return "*".repeat(n);
//}
//let stars = star_string(8);
//console.log(stars);

//Part2
//function star_string(array){
//    for(i=0; i<array.length;i++){
//        console.log( "*".repeat(array[i]));
//    }
//}
//let x = [4,6,1,3,5,7,25]
//console.log(star_string(x));

//Part3
function star_string(array){
    for(i=0; i<array.length;i++){
        if(array[i].constructor == Number){
        console.log( "*".repeat(array[i]));
        }
        else if(array[i].constructor ==String){
//        console.log(array[i].repeat(array[i].length));
          console.log(array[i].charAt(0).repeat(array[i].length).toLowerCase())          
        }
    }
}
let x = [4, "Tom ", 1, "Michael ", 5, 7, "Jimmy Smith "]
console.log(star_string(x))