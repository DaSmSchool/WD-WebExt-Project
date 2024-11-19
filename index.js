linkInput = document.getElementById("input-el")
saveBtn = document.getElementById("input-btn")
ulEl = document.getElementById("ul-el")

listItems = ""
myLeads = []

function updateList() {
    ulEl.innerHTML = listItems
}

function onSave() {
    myLeads.push(linkInput.value)

    console.log("Button clicked!")
    listItems += `<li>${linkInput.value}</li>`
    updateList()
}

saveBtn.addEventListener("click", function() {
    onSave()
})
