//for , while, dowhile, forin, for of, continue, break
// for (var a=0; a<10; a++){
//     if(a==3){
//         console.log("its 3")
//         //continue; break;
//         break;
//     }
//     console.log(a)
// }

console.log("for loop start")
for(var a=0; a<10; a++)
{
    if(a==3)
    {
        console.log("Its three");
       // break; continue;
       continue;
    }
    console.log("for loop", a)
}
console.log("for loop end here")

var b=0;
while(b<10){

    console.log("this is while loop", b)
    b++
}



// var c=0;
// do{
//     console.log("Do while loop", c)
//     c++
// }
// while(c<10)

// var aq=['ram', 'sita', 'gita']
// for(const aa of aq){
//     console.log(aa)
// }
// for(const aa in aq){
//     console.log(aa)
// }