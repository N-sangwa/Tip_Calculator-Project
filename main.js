
const billTotalInputDiv = document.getElementById('billTotalInput')
const tipInputDiv = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let totalPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  let billAmaount = Number(billTotalInputDiv.value)  
  let tipPercentage = Number(tipInputDiv.value)/100
  let totalTipAmount =  billAmaount*tipPercentage
  let wholeTotal =   billAmaount + totalTipAmount
  let billPerPerson = wholeTotal/totalPeople
  perPersonTotalDiv.innerText = `$ ${billPerPerson.toLocaleString('en-US')}`
 }     
const increasePeople = () => {
   totalPeople +=1
  numberOfPeopleDiv.innerText = totalPeople
  
  calculateBill()
  }
const decreasePeople = () => {
  if(totalPeople <= 1 ){
  throw 'Ops! Number of people can not be less than is 1'
// return
  }

  totalPeople -= 1
numberOfPeopleDiv.innerText = totalPeople
  calculateBill()
  }
