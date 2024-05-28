var clicksHistory = document.getElementById('clicks-history')
var input = document.getElementById('userInput')


function addRecord() {
    var li = `<li> <span>${input.value} </span> 
    <button onclick="editThis(this)"> Edit</button>
    <button onclick="deleteThis(this)"> Del</button> </li>`

    clicksHistory.innerHTML += li
    clicksHistory.style.color="white"
    clicksHistory.style.fontSize="40px"
    clicksHistory.style.listStyle="none"
}

function deleteThis(currentElement) {
    currentElement.parentElement.remove()
}

function editThis(currentElement) {

    var newTxt = prompt('Edit jo krna he wo likh do', currentElement.parentElement.firstElementChild.innerText)

    currentElement.parentElement.firstElementChild.innerText = newTxt

}