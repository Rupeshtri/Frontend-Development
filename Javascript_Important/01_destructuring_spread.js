// Spread operator and destructuring
arr = [1, 2, 3, 6, 32 ]
function avg(a,b,c){
    return a+b+c/3
}
//let a = avg(...arr)
//let a = [4, 7, ...arr, 65]  /*  => [4,7,1,2,3,6,32,65]  -- spread operator le array lai khulauxa. */
//let a = [...arr]; /* arr arry ko copy  banako */
//let a2 = [8, 9, 7]
//let a = [ ...arr, ...a2] /* => [1,2,3,6,32,8,9,7]         --2 ta arry concatination gareko */
//console.log(a);

let obj1 = {
    name1 : "Rupesh",
    class1: "7b",
    favLang : "Javascript"
}
// let obj2 = {} /* makeing obj2 same name and same class but different favLang */
// obj2.name = obj1.name;
// obj2.class = obj1.name;
// obj2.favLang = "Python";
// console.log(obj2);
/* but we can change fabLang easily like below using spread operator*/
/* let obj2 = {...obj1, favLang : "python"};
console.log(obj2); */

let {name1, class1, favLang} = obj1; //destructuring
console.log(name1, class1, favLang);


