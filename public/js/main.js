window.addEventListener('resize', function(){
    if(window.innerWidth <= 768){
        document.querySelector('.swipe-up').addEventListener('click', function(){
            document.querySelector('#element').classList.add("swipe-active");
        });
    
        document.querySelector('.swipe-down').addEventListener('click', function(){
            document.querySelector('#element').classList.remove("swipe-active");
        });
    }else{
        document.querySelector('.swipe-up').removeEventListener('click', function(){
            document.querySelector('#element').classList.add("swipe-active");
        });
    
        document.querySelector('.swipe-down').removeEventListener('click', function(){
            document.querySelector('#element').classList.remove("swipe-active");
        });
        document.querySelector('#element').classList.remove("swipe-active");
    }
});
