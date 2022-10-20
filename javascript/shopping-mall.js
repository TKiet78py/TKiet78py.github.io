var $ = document.querySelector.bind(document);
var $$ = document.querySelector.bind(document);

var get_Register = $('#register')
// console.log(get_Register)
    //* Sự kiện onclick đăng ký
    get_Register.onclick = function(){
    var get_moda = $('.moda')
    if(get_moda.style.display === "none")
    {
        get_moda.style.display = "flex"
    }else{
        get_moda.style.display = "none"
        
    }
}
var get_login = $('#login');
// console.log(get_login)
    //* sự kiện onclick đăng nhập
    get_login.onclick = function(){
        
    }
    var get_form_login = $('.all__form-login')
        console.log(get_form_login)
    