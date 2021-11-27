var link=document.querySelectorAll('.link')



var laod=document.querySelector('.load')




laod.style.opacity='0'


var star1=link[0]
var star2=link[1]
var star3=link[2]
var star4=link[3]
var star5=link[4]

star1.addEventListener('mouseover',()=>{
       star1.classList.add('show')

})

star1.addEventListener('mouseout',()=>{
      star1.classList.remove('show')

})


star2.addEventListener('mouseover',()=>{
       star1.classList.add('show')
       star2.classList.add('show')

})

star2.addEventListener('mouseout',()=>{
      star1.classList.remove('show')
      star2.classList.remove('show')

})


star3.addEventListener('mouseover',()=>{
       star1.classList.add('show')
       star2.classList.add('show')
        star3.classList.add('show')

})

star3.addEventListener('mouseout',()=>{
      star1.classList.remove('show')
      star2.classList.remove('show')
      star3.classList.remove('show')

})


star4.addEventListener('mouseover',()=>{
       star1.classList.add('show')
       star2.classList.add('show')
        star3.classList.add('show')
          star4.classList.add('show')

})

star4.addEventListener('mouseout',()=>{
      star1.classList.remove('show')
      star2.classList.remove('show')
      star3.classList.remove('show')
       star4.classList.remove('show')


})

star5.addEventListener('mouseover',()=>{
       star1.classList.add('show')
       star2.classList.add('show')
        star3.classList.add('show')
          star4.classList.add('show')
            star5.classList.add('show')

})

star5.addEventListener('mouseout',()=>{
      star1.classList.remove('show')
      star2.classList.remove('show')
      star3.classList.remove('show')
       star4.classList.remove('show')
        star5.classList.remove('show')


})








star1.addEventListener('click',()=>{
star1.addEventListener('mouseout',()=>{
       star1.classList.add('show')

})


    star1.classList.add('show')
    laod.style.opacity='1'
      setInterval(function(){
    location.href = "small.html";

    //  location.href = "email.html";
    
}, 1000);

})


star2.addEventListener('click',()=>{


star2.addEventListener('mouseout',()=>{
       star2.classList.add('show')
       star1.classList.add('show')
})
     star1.classList.add('show')
      star2.classList.add('show')
     laod.style.opacity='1'
      setInterval(function(){
    location.href = "small.html";

    //  location.href = "email.html";
    
}, 1000);

})

star3.addEventListener('click',()=>{

  star3.addEventListener('mouseout',()=>{
       star3.classList.add('show')
       star1.classList.add('show')
        star2.classList.add('show')
})
     star1.classList.add('show')
      star2.classList.add('show')
      star3.classList.add('show')
    
      laod.style.opacity='1'
      setInterval(function(){
    location.href = "strong.html";
   
}, 1000);

})

star4.addEventListener('click',()=>{

  
  star4.addEventListener('mouseout',()=>{
       star3.classList.add('show')
       star1.classList.add('show')
        star2.classList.add('show')
         star4.classList.add('show')
})
    star1.classList.add('show')
      star2.classList.add('show')
      star3.classList.add('show')
       star4.classList.add('show')
      laod.style.opacity='1'
      setInterval(function(){
    location.href = "strong.html";
    
}, 1000);

})

star5.addEventListener('click',()=>{

    star5.addEventListener('mouseout',()=>{
       star3.classList.add('show')
       star1.classList.add('show')
        star2.classList.add('show')
         star4.classList.add('show')
          star5.classList.add('show')
})
    star1.classList.add('show')
      star2.classList.add('show')
      star3.classList.add('show')
       star4.classList.add('show')
       star5.classList.add('show')
       laod.style.opacity='1'
      setInterval(function(){
    location.href = "strong.html";
    
}, 1000);

})


