var b=document.querySelector('.fundo')


var focus=document.querySelector('.nome')



var btn=document.querySelector('.submit')


focus.addEventListener('focus', function(){
  b.classList.add('focus')
  
  window.scrollTo({ top: 300, behavior: 'smooth' });
})


