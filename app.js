var numberInput1 = document.getElementById('numberInput1')
var numberInput2 = document.getElementById('numberInput2')

const button = document.getElementById('submit')
button.addEventListener('click', handleClick)

const errordiv = document.getElementById('errordiv')
const successdiv = document.getElementById('successdiv')
const resultdiv = document.getElementById('resultdiv')

var primeoutput = ''

function handleClick() {
  if(isNaN(numberInput1.value) || isNaN(numberInput2.value) || 
  (Number(numberInput1.value) < 2 || Number(numberInput1.value) > 100) || 
  (Number(numberInput2.value) < 2 || Number(numberInput2.value) > 100))
  {
    errordiv.innerHTML = '<span> Invalid input please try again.</span>'
    successdiv.innerHTML = ''
    resultdiv.innerHTML = ''
  }
  else
  {
    errordiv.innerHTML = ''
    var icount = 0
    for (let i = Number(numberInput1.value); i <= Number(numberInput2.value); i++) {
      if(test_prime(i))      
      {
        primeoutput += i.toString() + ','
        icount++
      }
    }
    successdiv.innerHTML = '<span>There are '+ icount +' prime numbers</span>'
    resultdiv.innerHTML = '<span>' + primeoutput.substring(0, primeoutput.length - 1) + '</span>'
  }
}


function test_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}