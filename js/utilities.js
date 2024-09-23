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