
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
function q(){ 

    if( document.getElementById('hi').style.display=='none'  ){
            document.getElementById('hi').style.display='block'
            document.getElementById('b').innerText='Hide'
    }else{
        document.getElementById('hi').style.display='none'
        document.getElementById('b').innerText='Show'
    }
    
}