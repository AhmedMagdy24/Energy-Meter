
const amountRange = document.getElementById('energy')
const amountNumber = document.getElementById('input')
let emojHtml = document.getElementById("emoj")



amountRange.addEventListener('input', syncCharacterAmount)
amountNumber.addEventListener('input', syncCharacterAmount)

  
  function syncCharacterAmount(e) {
    const value = e.target.value
    amountRange.value = value
    amountNumber.value = value

    if (amountRange.value <= 7){
        emojHtml.innerHTML = "&#128528"
    } if (amountRange.value <= 4){
        emojHtml.innerHTML = "&#128555"
    } 
  }


  