function getValue(id)
{
  const value = parseFloat(document.getElementById(id).value);
  console.log(value);
  return value
}

function getText(id)
{
  const value = parseFloat(document.getElementById(id).innerText);
  console.log(value);
  return value
}

function totalBalance(id)
{

  document.getElementById('totalBalance').innerText = 
  (getText('totalBalance') >= 0  )  ?
     (getText('totalBalance') - getValue(id)) :
     (alert("Can't Donate, Invalid Donation Amoun!!!")
    
    )
}