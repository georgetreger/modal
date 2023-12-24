 const openBt = document.querySelector('.openBtn')
 const closeBt = document.querySelector('.closeBtn')
 const modalEl = document.querySelector('.modal')



   openBt.addEventListener('click', ()=>{
      modalEl.style.display ='block'
   })
   closeBt.addEventListener('click', ()=>{
      modalEl.style.display ='none'
   })

