const addressbtn =document.querySelector('#address-form')
const addressclose =document.querySelector('#address-close')
addressbtn.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "none"
})

const loginbtn =document.querySelector('#login-form')
const loginclose =document.querySelector('#login-close')
loginbtn.addEventListener("click",function(){
    document.querySelector('.login-form').style.display = "flex"
})
loginclose.addEventListener("click",function(){
    document.querySelector('.login-form').style.display = "none"
})
//slider-------------------------
var i=1;
function up(){
    i++;
    if(i>5){
        i=1;
    }
    hienthi(i);
}
function down(){
    i--;
    if(i<1){
        i=5;
    }
    hienthi(i);
}


function hienthi(i){
    var bang='';
    var unit = 5;
    switch(i){
        case 1: {bang='<a href=""><img src="images/slider 1.webp" alt=""></a>'; break;}
        case 2: {bang='<a href=""><img src="images/slider 2.webp" alt=""></a>'; break;}
        case 3: {bang='<a href=""><img src="images/slider 3.webp" alt=""></a>'; break;}
        case 4: {bang='<a href=""><img src="images/slider 4.webp" alt=""></a>'; break;}
        case 5: {bang='<a href=""><img src="images/slider 5.webp" alt=""></a>'; break;}
    }
    document.getElementById('showhere').innerHTML = bang;
}
//Dangnhap
function dangnhap(){
let r=document.getElementById('role').value;
let u=document.getElementById('user').value;
let p=document.getElementById('pass').value;
if(r==1 && u=="darkvn2005" && p=="test"){
    document.querySelector('.login-form').style.display = "none"
    alert('Đăng nhập thành công!');
    document.getElementById('login-form').innerHTML = '<a style="color: white;">Xin chào, Anh Dark !</a>';
}
else if(r==2 && u=="nv4901103" && p=="ok"){
    document.querySelector('.login-form').style.display = "none"
    alert('Đăng nhập thành công!');
    document.getElementById('login-form').innerHTML = '<a style="color: white;">Xin chào, Bạn Quỳnh !</a>';
    document.getElementById('chg').innerHTML = '<a href="">Tư vấn</a>';
}
else if(r==3 && u=="admin" && p=="admin"){
    alert('Đăng nhập thành công!');
    window.location="admin.html";
}
else{
    alert('Sai thông tin tài khoản hoặc mật khẩu. Hãy nhập lại nhé!');
}
}
