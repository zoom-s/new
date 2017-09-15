/**
 * Created by 灵儿丶想叮当 on 2017/9/7.
 */

function usersign() {
    var main=document.getElementById('main');
    var main01=document.getElementById('main-01');
    main.style.display='none';
    main01.style.display='block'
}
function usersign01() {
    var main=document.getElementById('main');
    var main01=document.getElementById('main-01');
    main.style.display='block';
    main01.style.display='none'
}
function userid(){
    var txt1=document.getElementById('txt1');
    var information=document.getElementById('yanzheng');
    var yanzheng=/0?(13|14|15|18|17)[0-9]{9}/
    var yanzheng01=/^\w+((-\w+)|(\.\w+))*\@[flyme]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
    if (yanzheng.test(txt1.value)||yanzheng01.test(txt1.value)){
        information.style.display='none'
    }
    else {
        information.style.display='block'
    }
}
function send() {
    var yanzheng01=document.getElementById('yanzheng01')
    var yanzheng=document.getElementById('yanzhengma').value;
    var yanzheng02=/0?(13|14|15|18|17)[0-9]{9}/
    if(yanzheng02.test(yanzheng)){

        yanzheng01.style.display='none'
    }else {
        yanzheng01.style.display='block'
    }
}
