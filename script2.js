//Рисование сердечек
const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
const ctx = canvas.getContext("2d")


//Изменить ID картинки
function pos(e){
     var img=document.getElementById("photo");
     ctx.drawImage(img,e.pageX,e.pageY,25,20);
}
function init2(){
    ctx.clearRect(0, 0, 2000, 1000);
}
function init(){
    if(document.getElementById("label1").style.color=="red"){
        document.getElementById("label1").style.color="rgb(129, 129, 129)";
        removeEventListener('mousemove', pos, false);        
    }
    else{
        document.getElementById("label1").style.color="red";
        addEventListener('mousemove', pos, false);
    }
}
//Конец рисования сердечек


function Count(stValue) {
  this.value = stValue;
  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  }
};


function addNumber() {
  count.read();
  alert(count.value);
};

let count = new Count(0);
