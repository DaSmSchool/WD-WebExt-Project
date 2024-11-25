linkInput = document.getElementById("input-el")
saveBtn = document.getElementById("input-btn")
ulEl = document.getElementById("ul-el")

listItems = ""
myLeads = []

function init() {
    if (localStorage.listItems == undefined || localStorage.myLeads == undefined) {
        initLocalStorage()
    } else {
        loadLocalStorage()
        updateList()
    }
}

function initLocalStorage() {
    localStorage.setItem("listItems", '')
    localStorage.setItem("myLeads", "[]")
    loadLocalStorage()
}

function loadLocalStorage() {
    listItems = localStorage.listItems
    myLeads = JSON.parse(localStorage.myLeads)
}

function updateLocalStorage() {
    localStorage.listItems = listItems
    localStorage.myLeads = JSON.stringify(myLeads)
}

function updateList() {
    updateLocalStorage()
    assemble = ""
    for (let i = 0; i < myLeads.length; i++) {
        assemble += `<li><a href="${myLeads[i]}" target='_blank'>${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = assemble
}

function onSave() {
    myLeads.push(linkInput.value)

    console.log("Button clicked!")
    listItems += `<li><a href="${linkInput.value}" target='_blank'>${linkInput.value}</a></li>`
    updateList()
}

saveBtn.addEventListener("click", function() {
    onSave()
    linkInput.value = ""
})

init()