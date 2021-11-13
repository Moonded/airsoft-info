var menutoggle = document.getElementById('menutoggle');
    menutoggle.addEventListener('click', function(){
        document.querySelector("#menu").classList.toggle('hidden');
        document.querySelector("#menu").classList.toggle('flex');
    });


var body = document.getElementById('text-n');
var imgback = document.getElementById('backdrop');
var menu = document.querySelector("#menu");

body.addEventListener('click', function(){
    menu.classList.add('hidden')
    menu.classList.remove('flex')
})

imgback.addEventListener('click', function(){
    menu.classList.add('hidden')
    menu.classList.remove('flex')
})

document.addEventListener('scroll', function(){
    menu.classList.add('hidden')
    menu.classList.remove('flex')
})

document.getElementById('warningbig').addEventListener('click',function(){
    document.getElementById('warningbig').classList.toggle('hidden');
    document.getElementById('warningsmall').classList.toggle('hidden');
})

document.getElementById('warningsmall').addEventListener('click',function(){
    document.getElementById('warningbig').classList.toggle('hidden');
    document.getElementById('warningsmall').classList.toggle('hidden');
})