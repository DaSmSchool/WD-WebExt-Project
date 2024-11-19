linkInput = document.getElementById("input-el")
saveBtn = document.getElementById("input-btn")
ulEl = document.getElementById("ul-el")

myLeads = []

function onSave() {
    myLeads.push(linkInput.value)

    console.log("Button clicked!")
    ulEl.innerHTML += `<li>${linkInput.value}</li>`
    
}

saveBtn.addEventListener("click", function() {
    onSave()
})
