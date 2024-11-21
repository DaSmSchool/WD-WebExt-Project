linkInput = document.getElementById("input-el")
saveBtn = document.getElementById("input-btn")
ulEl = document.getElementById("ul-el")

listItems = ""
myLeads = []

function init() {
    if (localStorage.listItems == undefined) {
        initLocalStorage()
    } else {
        loadLocalStorage()
    }
}

function initLocalStorage() {
    localStorage.setItem("listItems", '')
    loadLocalStorage()
}

function loadLocalStorage() {
    listItems = loadLocalStorage.listItems
}

function updateLocalStorage() {
    localStorage.listItems = listItems
}

function updateList() {
    updateLocalStorage()
    ulEl.innerHTML = listItems
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