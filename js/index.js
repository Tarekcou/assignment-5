document.getElementById('blogBtn').addEventListener('click',(e)=>{
  location.href="./file/home.html";
  document.getElementById('tab').classList.add('hidden')
})



document.getElementById('historyBtn').addEventListener('click', () => {
    document.getElementById('donationBtn').classList.remove('primary-btn')
  document.getElementById('donationBtn').classList.add('btn-outline')
  document.getElementById('historyBtn').classList.add('primary-btn')


  document.getElementById('card').classList.add('hidden')
  document.getElementById('history').classList.add('hidden')

  document.getElementById('history').classList.remove('hidden')
  

})

document.getElementById('donationBtn').addEventListener('click',()=>{

document.getElementById('donationBtn').classList.add('primary-btn')
  document.getElementById('historyBtn').classList.remove('primary-btn')
  document.getElementById('historyBtn').classList.add('btn-outline')


  document.getElementById('card').classList.add('hidden')
  document.getElementById('history').classList.add('hidden')
    document.getElementById('card').classList.remove('hidden')

})


document.getElementById('noakhaliBtn').addEventListener('click', (e) => {
 if( getValue('noakhaliInput') > 0 && typeof getValue('noakhaliInput') === 'number')
    {
      const total = getText('noakhaliAmount') + getValue('noakhaliInput')
  document.getElementById('noakhaliAmount').innerText = total
   
   console.log( getText('totalBalance'))
   document.getElementById('totalBalance').innerText = getText('totalBalance') >= 0 ?
     (getText('totalBalance') - getValue('noakhaliInput')) :
     alert("Cant Donate, Check Your Balance!!!")
   
     my_modal_4.showModal()

    }
    
  else
     alert("Cant Donate, Check  Balance!!!")

  
  document.getElementById('noakhaliInput').value = "";

  
  
})
