/*   Bosganda harakatga tushadigan dastur*/
function katta(){
    almashish();
}

function kichik(){
    almashish(5);
}
/*--------------------------------------*/ 


let m = 0

document.querySelector('.besh').style.transform = 'scale(0.7)';
document.querySelector('.tort').style.transform = 'scale(1)';
document.querySelector('.uch').style.transform = 'scale(1.3)';
document.querySelector('.ikki').style.transform = 'scale(1)';
document.querySelector('.bir').style.transform = 'scale(0.7)';



function almashish(n = 0){

    let a = document.querySelector('.besh');
    let b = document.querySelector('.tort');
    let c = document.querySelector('.uch');
    let d = document.querySelector('.ikki');
    let e = document.querySelector('.bir');
    
     

    if(n === 5){
     m--;
        if(m <= 0)
            m = 5;}

    if(n === 0){
        m++;
            if(m > 5)
                m = 1;}


      
    
    if(m == 1){
        a.style.transform = 'translateX(-214px)  scale(1)';
        a.style.zIndex = '2'; 
        b.style.transform = 'translateX(-214px)  scale(1.3)';
        b.style.zIndex = '3';  
        c.style.transform = 'translateX(-214px)  scale(1)';
        c.style.zIndex = '2';  
        d.style.transform = 'translateX(-214px)  scale(0.7)';
        d.style.zIndex = '1'; 
        e.style.transform = 'translateX(856px)  scale(0.7)';
        e.style.zIndex = '1';   
    
        
    }

    if(m == 2){
        a.style.transform = 'translateX(-428px)  scale(1.3)';
        a.style.zIndex = '3'; 
        b.style.transform = 'translateX(-428px)  scale(1)';  
        b.style.zIndex = '2'; 
        c.style.transform = 'translateX(-428px)  scale(0.7)'; 
        c.style.zIndex = '1'; 
        d.style.transform = 'translateX(642px)  scale(0.7)'; 
        d.style.zIndex = '1'; 
        e.style.transform = 'translateX(642px)  scale(1)'; 
        e.style.zIndex = '2'; 
    }

    if(m == 3){
        a.style.transform = 'translateX(-642px)  scale(1)';
        a.style.zIndex = '2'; 
        b.style.transform = 'translateX(-642px)  scale(0.7)'; 
        b.style.zIndex = '1'; 
        c.style.transform = 'translateX(428px)  scale(0.7)'; 
        c.style.zIndex = '1'; 
        d.style.transform = 'translateX(428px)  scale(1)'; 
        d.style.zIndex = '2'; 
        e.style.transform = 'translateX(428px)  scale(1.3)'; 
        e.style.zIndex = '3'; 
    }

    if(m == 4){ 
        a.style.transform = 'translateX(-856px) scale(0.7)'; 
        a.style.zIndex = '1'; 
        b.style.transform = 'translateX(214px)  scale(0.7)';
        b.style.zIndex = '1'; 
        c.style.transform = 'translateX(214px)  scale(1)';
        c.style.zIndex = '2'; 
        d.style.transform = 'translateX(214px)  scale(1.3)';
        d.style.zIndex = '3'; 
        e.style.transform = 'translateX(214px)  scale(1)';
        e.style.zIndex = '2'; 
    }

    if(m == 5){
        a.style.transform ='translateX(0px) scale(0.7)';
        a.style.zIndex = '1'; 
        b.style.transform = 'translateX(0px)  scale(1)';
        b.style.zIndex = '2'; 
        c.style.transform = 'translateX(0px)  scale(1.3)';
        c.style.zIndex = '3'; 
        d.style.transform = 'translateX(0px)  scale(1)';
        d.style.zIndex = '2'; 
        e.style.transform = 'translateX(0px)  scale(0.7)';
        e.style.zIndex = '1'; 
    }
}



/* doimo harakatlanib turadigan dastur*/ 
    bir2();

    function bir2(){
        almashish();
        setTimeout(function(){
            bir2();
        },7000);
    }
 /*------------------------------------*/





