var array_persons = [];

//Функция при нажатии на кнопку
function str_rand() {
        let result = '';
        let words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let max_position = words.length - 1;
            for( i = 0; i < 5; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
        return result;
}

function User(email, password){
    this.email = email;
    this.password = password;
}

function add_user(email, password){
    if(email == ""){
        alert("Ошибка отправки формы. Почта не введена");
    }
    else if(password == ""){
        alert("Ошибка отправки формы. Пароль не введен");
    }
    else{
        let user = new User(email, password);
        array_persons.push(user);
        alert("Добавлен пользователь " + user.email + " с паролем " + user.password);
    }
    alert(isEmpty(user));
}

let btn = document.querySelector(".btn"); 

btn.addEventListener("click", function () {
    let str1 = str_rand();
    let num1 = Math.ceil(Math.random() * 10);
    let num2 = Math.ceil(Math.random() * 10);
    let res = num1 + num2;
    let str1_res = prompt(str1);
    if (str1_res == str1){
        let str_e = document.querySelector(".str_e").value;  
        let str_p = document.querySelector(".str_p").value; 
        add_user(str_e, str_p);        
    }
    else{
        str1_res = prompt(`${num1} + ${num2} = `);
        if (res == str1_res){
            let str_e = document.querySelector(".str_e").value;  
            let str_p = document.querySelector(".str_p").value;            
            add_user(str_e, str_p);
        }
        else{
            alert("Невозможно выполнить вход");
            alert("Невозможно выполнить вход");
        }
    }            
});
//Конец функции при нажатии на кнопку


