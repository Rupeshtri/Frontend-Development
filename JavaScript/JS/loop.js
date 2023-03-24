//for , while, dowhile, forin, for of, continue, break
// for (var a=0; a<10; a++){
//     if(a==3){
//         console.log("its 3")
//         //continue; break;
//         break;
//     }
//     console.log(a)
// }


var c=0;
do{
    console.log("Do while loop", c)
    c++
}
while(c<10)

var aq=['ram', 'sita', 'gita']
for(const aa of aq){
    console.log(aa)
}
for(const aa in aq){
    console.log(aa)
}