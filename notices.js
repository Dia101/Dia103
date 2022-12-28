var numb = 1;



function add_notices(cont = numb){
    numb+=1;
    let a = document.createElement('a');
    let b = document.createElement('button');
    b.innerHTML = "&#10006";
    b.className = "button_notice";
    a.className = "alert";
    a.innerHTML = cont;

    document.querySelector('.dropdown-content').append(b);
    document.querySelector('.dropdown-content').append(a);
    document.getElementById('notice').src = "image/notice1.png";
};

function delay(){
    notices = setInterval(add_notices, 3000);
}

function stop(){
    clearInterval(notices);
    setTimeout(delay, 7000);
}

let notices = setInterval(add_notices, 3000);

document.querySelector(".dropdown-content").onclick = function(event) {
    if (event.target.className != 'button_notice') return;
    let pane = event.target.closest('.button_notice');        
    pane.nextSibling.remove();
    pane.remove();
    if(document.querySelector(".dropdown-content").childElementCount <= 1){
        document.getElementById('notice').src = "image/notice0.png";
    }
};