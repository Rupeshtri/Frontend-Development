var a;
a= document.all;
console.log(a);
a=document.title='RUpes';
console.log(a)
a=document.getElementsByClassName('h')[0].innerText = 'Hallo';
console.log(a);
a=document.getElementsByTagName('h2')[0].innerText = 'Tripathi';
console.log(a);

a=document.images;
console.log(a);
a=document.links[1].href='twitter.np';
console.log(a);
a=document.links[0].innerText ='Facebook Nepal'
a=document.links[1].innerText ='Twiter Nepal'
console.log(a)
a=document.images[2].src = '../image/ban-1.png'
console.log(a);
a=document.images[2].style.width = '200px'
a=document.images[2].style.borderRadius = '50px '
a=document.images[2].style.border = '1px solid red'
a=document.images[1].style.border = '1px solid red'
a=document.images[1].style.borderRadius = '50px '

a=document.images[0].style.border = '1px solid red'
a=document.images[0].style.borderRadius = '50px '

//function of button Menu
function cc(){
    if(document.getElementById('j').style.display=='none'){
        document.getElementById('j').style.display='flex'
        document.getElementById('cb').innerText='Hide'

    } else {
        document.getElementById('j').style.display='none'
        document.getElementById('cb').innerText='Menu'
    }
  
}








        