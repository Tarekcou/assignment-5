document.getElementById('blogBtn').addEventListener('click',(e)=>{
  location.href="./file/home.html";
  document.getElementById('tab').classList.add('hidden')
})



document.getElementById('historyBtn').addEventListener('click', () => {
    document.getElementById('donationBtn').classList.remove('primary-btn')
  document.getElementById('donationBtn').classList.add('btn')
  document.getElementById('historyBtn').classList.add('primary-btn')


  document.getElementById('card').classList.add('hidden')
  document.getElementById('history').classList.add('hidden')

  document.getElementById('history').classList.remove('hidden')
  

})

document.getElementById('donationBtn').addEventListener('click',()=>{

document.getElementById('donationBtn').classList.add('primary-btn')
  document.getElementById('historyBtn').classList.remove('primary-btn')
  document.getElementById('historyBtn').classList.add('btn')


  document.getElementById('card').classList.add('hidden')
  document.getElementById('history').classList.add('hidden')
    document.getElementById('card').classList.remove('hidden')

})



function submit(input,amount)
{
  
   if( getValue(input) > 0 && typeof getValue(input) === 'number' && getText('totalBalance') >= getValue(input))
    {
      const total = getText(amount) + getValue(input)
    document.getElementById(amount).innerText = total;
    totalBalance(input);
    history(getValue(input),input)
    my_modal_4.showModal()
    
    }
    
  else
     alert("Can't Donate, Check  Input!!!")

  
  document.getElementById(input).value = "";
}


function history(amount,input)
{
  document.getElementById('noHistory').classList.add('hidden')
  let conditionText;
  if(input==='quotaInput')
    conditionText="Injured in the quota movement in Bangladesh"
    else if(input==='feniInput')
      conditionText="Flood relief in Feni, Bangladesh"
      else
      conditionText="Flood relief in Noakhali, Bangladesh "
      
  document.getElementById('history').innerHTML+=
  `
  <div
          tabindex="0"
          class="bg-base-200  border border-base-300 collapse collapse-open p-5"
        >
          <div
            id="historyTitle"
            class="font-medium text-xl collapse-title"
          >${amount} Tk is Donated For ${conditionText}</div>
          <div class="font-light collapse-content">
            <p id="historyDetails">Date: ${new Date()}</p>
          </div>
    </div>
  `

}