function clickMenu(){
    let sanduiche = document.getElementById('menus');
    if(sanduiche.style.display == 'flex'){
        sanduiche.style.display = 'none';
    }else{
        sanduiche.style.display = 'flex';
    }
}