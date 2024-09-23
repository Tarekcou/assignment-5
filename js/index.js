document.getElementById('blogBtn').addEventListener('click',(e)=>{
  location.href="./file/home.html";
  document.getElementById('tab').classList.add('hidden')
})



document.getElementById('historyBtn').addEventListener('click',()=>{
  document.getElementById('historyBtn').classList.add('primary-btn')
  document.getElementById('donationBtn').classList.remove('primary-btn')
  document.getElementById('donationBtn').classList.add('btn-outline')

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
