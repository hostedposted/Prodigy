/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const defaults = []
const hacks = []
let saveErrors = false

function setCookie (name, value, days) {
    let expires = ""
    if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = "; expires=" + date.toUTCString()
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"
}
function getCookie (name) {
    const nameEQ = name + "="
    const ca = document.cookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === " ") c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}
function eraseCookie (name) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

class Hack {
    /**
     * @param {string} id Id of the hack
     * @param {string} name Name of the hack
    */
    constructor (id, name) {
        this.element = document.getElementById(id)
        if (!this.element) {
            throw new Error("Element not found")
        }
        this.name = name
    }

    /**
     * @param {(playerData: {}, value: string | number, index?: number | undefined) => {}} func Function to change playerData
    */
    save (func = (playerData, value) => { return playerData }) {
        const self = this
        hacks.push(playerData => {
            const element = self.element
            if (element.tagName.toLowerCase() === "input") {
                if (element.value === "") {
                    popup(
                        "Save Error",
                        `Your ${self.name} must be set!`,
                        "error"
                    )
                    throw new Error(`Your ${self.name} must be set!`)
                }
                if (self.name === "level" || self.name === "grade") {
                    if (element.value === "0") {
                        popup(
                            "Save Error",
                            `Your ${self.name} must be higher than 0!`,
                            "error"
                        )
                        throw new Error(`Your ${self.name} must be higher than 0!`)
                    }
                }
                if (self.name === "Dark Tower") {
                    if (element.value > 100) {
                        popup(
                            "Save Error",
                            "Your dark tower floor must be lower than 100!",
                            "error"
                        )
                        throw new Error(`Your ${self.name} must be lower than 100!`)
                    }
                }
                playerData = func(playerData, element.value)
            } else if (element.tagName.toLowerCase() === "select") {
                playerData = func(playerData, element.selectedIndex)
            } else if (element.tagName.toLowerCase() === "tbody") {
                const inputs = element.getElementsByTagName("input")
                for (let i = 0; i < inputs.length; i++) {
                    const input = inputs[i]
                    if (input.value === "") {
                        input.value = "0"
                    }
                    func(playerData, input.value, i)
                }
            }
            return playerData
        })
        return this
    }

    /**
     * @param {(playerData: {}, element: HTMLElement, index?: number | undefined) => {}} func Function to change playerData
    */
    load_default (func = (playerData, element) => { return playerData }) {
        const element = this.element
        defaults.push(playerData => {
            if (element.tagName.toLowerCase() === "tbody") {
                const inputs = element.getElementsByTagName("input")
                for (let i = 0; i < inputs.length; i++) {
                    const input = inputs[i]
                    playerData = func(playerData, input, i)
                }
                return playerData
            }
            return func(playerData, element)
        })
        return this
    }
}

async function init () {
    try {
        window.gamedata = await getGameData()
        window.username = getCookie("username")
        window.password = getCookie("password")
        window.token = await tokenify(window.username, window.password)
        window.playerData = await (
            await fetch("https://prodigy-api.hostedposted.com/player/", {
                headers: {
                    Authorization: `Bearer ${window.token.token}`
                }
            })
        ).json()
        await load_names()
        await load_currency()
        document.getElementById("username").innerHTML = window.username
        new Hack("levelSelector", "level").save((playerData, value) => {
            playerData.data.level = parseInt(value) || 1
        }).load_default((playerData, element) => {
            element.value = playerData.data.level
        })

        new Hack("goldSelector", "gold").save((playerData, value) => {
            playerData.data.gold = parseInt(value) || 0
        }).load_default((playerData, element) => {
            element.value = playerData.data.gold
        })
        new Hack("gradeSelector", "grade").save((playerData, value) => {
            playerData.data.grade = parseInt(value) || 0
        }).load_default((playerData, element) => {
            element.value = playerData.data.grade
        })

        new Hack("darkTowerSelector", "Dark Tower").save((playerData, value) => {
            playerData.data.tower = parseInt(value) || 0
        }).load_default((playerData, element) => {
            element.value = playerData.data.tower
        })

        new Hack("bountyPointsSelector", "bounty points").save((playerData, value) => {
            playerData.data.bountyScore = parseInt(value) || 0
        }).load_default((playerData, element) => {
            element.value = playerData.data.bountyScore
        })

        new Hack("firstNameSelector", "name").save((playerData, value) => {
            playerData.appearance.name.first = value + 1
        }).load_default((playerData, element) => {
            element.selectedIndex = Array.from(element.options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.first - 1].data.value)
        })

        new Hack("middleNameSelector", "middle name").save((playerData, value) => {
            const middleNames = window.gamedata.name.filter(name => name.data.type === 1)
            playerData.appearance.name.middle = middleNames[value].ID
        }).load_default((playerData, element) => {
            element.selectedIndex = Array.from(element.options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.middle - 1].data.value)
        })

        new Hack("lastNameSelector", "last name").save((playerData, value) => {
            const lastNames = window.gamedata.name.filter(name => name.data.type === 2)
            playerData.appearance.name.last = lastNames[value].ID
        }).load_default((playerData, element) => {
            element.selectedIndex = Array.from(element.options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.last - 1].data.value)
        })

        new Hack("nickNameSelector", "nick name").save((playerData, value) => {
            playerData.appearance.name.nick = value + 1
        }).load_default((playerData, element) => {
            if (playerData.appearance.name.nick === 0) {
                element.selectedIndex = Array.from(element.options).map(elem => elem.innerHTML).indexOf(window.gamedata.nickname[playerData.appearance.name.nick - 1].data.value)
            } else {
                element.selectedIndex = element.options.length - 1
            }
        })

        new Hack("faceSelector", "face").save((playerData, value) => {
            const faces = window.gamedata.face
            playerData.appearance.face = faces[value].ID
        }).load_default((playerData, element) => {
            element.selectedIndex = Array.from(element.options).map(elem => elem.innerHTML).indexOf(window.gamedata.face[playerData.appearance.face - 1].data.name)
        })

        new Hack("currencyTableBody", "currency").save((playerData, value, index) => {
            const currencies = [...window.gamedata.currency]
            currencies.shift()
            currencies.forEach(element => {
                if (element.ID === index + 2) {
                    element.N = parseInt(value) || 0
                    let isInPlayerData = false
                    for (let i = 0; i < playerData.inventory.currency.length; i++) {
                        if (playerData.inventory.currency[i].ID === element.ID) {
                            isInPlayerData = true
                            break
                        }
                    }
                    if (isInPlayerData) {
                        playerData.inventory.currency[i].N = value
                    } else {
                        playerData.inventory.currency.push({ ID: element.ID, N: value })
                    }
                }
            })
            return playerData
        }).load_default((playerData, element, index) => {
            const currencies = playerData.inventory.currency.filter(currency => currency.ID === index + 2)
            if (currencies.length <= 0) {
                element.value = 0
                return playerData
            }
            element.value = currencies[0].N
            return playerData
        })

        document.getElementById("editPetSelector").onchange = function () {
            document.getElementById("editPetLevel").value = playerData.pets[this.selectedIndex].level
        }

        await load_defaults()
    } catch (e) {
        await Swal.fire("Load Error", `<pre><code>${e.toString()}</code></pre><br>Try logging in again. If this error is persistent, open an issue on our <a href='https://github.com/hostedposted/Prodigy/issues/new'>GitHub repo</a>!`, "error")
        eraseCookie("username")
        eraseCookie("password")
        window.location.href = "/login.html"
    }
}

async function load_defaults () {
    // Check for account state
    if (playerData.data === null) {
        eraseCookie("username")
        eraseCookie("password")
        await Swal.fire(
            "Error",
            "Please complete tutorial before using the dashboard.",
            "error"
        )
        window.location.href = "/login"
        return
    }

    defaults.forEach(func => {
        func(playerData)
    })

    // Finishing
    document.getElementById("loading").style.display = "none"
    document.getElementById("dashboard").style.display = "block"

    document.getElementById("petSelector").selectedIndex = "Peeko"
}

async function tokenify (username, password) {
    const response = await fetch(
        "https://prodigy-api.hostedposted.com/token/",
        {
            headers: {
                authorization: btoa(`${username}:${password}`),
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua":
                    "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            }
        }
    )
    const data = await response.text()
    if (data.startsWith("Internal")) return false
    return JSON.parse(data)
}

async function login (event) {
    const submitButton = document.getElementById("submit")
    event.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    if (!username || !password) {
        return popup(
            "Login Error",
            "Please enter a username and password!",
            "error"
        )
    }
    submitButton.className = "fluid ui primary loading button"
    setCookie("username", username, 7)
    setCookie("password", password, 7)
    const data = await tokenify(username, password)
    if (data === false) {
        eraseCookie("username")
        eraseCookie("password")
        submitButton.className = "fluid ui primary button"
        return popup("Login Error", "Invalid username or password!", "error")
    }
    window.location.href = "/index.html"
}

async function load_names () {
    const firstNameSelector = document.getElementById("firstNameSelector")
    const firstNames = window.gamedata.name
    for (let i = 0; i < firstNames.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = firstNames[i].data.name
        firstNameSelector.appendChild(option)
    }
    const middleNameSelector = document.getElementById("middleNameSelector")
    const middleNames = window.gamedata.name.filter(name => name.data.type === 1)
    for (let i = 0; i < middleNames.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = middleNames[i].data.name
        middleNameSelector.appendChild(option)
    }
    const lastNameSelector = document.getElementById("lastNameSelector")
    const lastNames = window.gamedata.name.filter(name => name.data.type === 2)
    for (let i = 0; i < lastNames.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = lastNames[i].data.name
        lastNameSelector.appendChild(option)
    }
    const nickNameSelector = document.getElementById("nickNameSelector")
    const nickNames = window.gamedata.nickname
    for (let i = 0; i < nickNames.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = nickNames[i].data.value.replace("{first}", "{firstname}")
        nickNameSelector.appendChild(option)
    }
    const petSelector = document.getElementById("petSelector")
    const pets = window.gamedata.pet
    for (let i = 0; i < pets.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = pets[i].data.name
        petSelector.appendChild(option)
    }
    const editPetSelector = document.getElementById("editPetSelector")
    const playerPets = playerData.pets
    for (let i = 0; i < playerPets.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = window.gamedata.pet[playerPets[i].ID - 1].data.name
        editPetSelector.appendChild(option)
    }
    const faceSelector = document.getElementById("faceSelector")
    const faces = window.gamedata.face
    for (let i = 0; i < faces.length; i++) {
        const option = document.createElement("option")
        option.value = i
        option.innerHTML = faces[i].data.name
        faceSelector.appendChild(option)
    }
    document.getElementById("editPetLevel").value = playerData.pets[0].level
    const option = document.createElement("option")
    option.value = "None"
    option.innerHTML = "None"
    nickNameSelector.appendChild(option)
}

async function load_currency () {
    const currencyTableBody = document.getElementById("currencyTableBody")
    const currencies = gamedata.currency
    for (let i = 1; i < currencies.length; i++) {
        const row = document.createElement("tr")
        currencyTableBody.appendChild(row)
        const rowTitle = document.createElement("td")
        rowTitle.innerHTML = currencies[i].name
        row.appendChild(rowTitle)
        const rowDescription = document.createElement("td")
        row.appendChild(rowDescription)
        const rowDiv = document.createElement("div")
        rowDiv.className = "ui input"
        rowDescription.appendChild(rowDiv)
        const rowInput = document.createElement("input")
        rowInput.type = "number"
        rowInput.min = "0"
        rowInput.oninput = function () { this.value = !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null }
        rowInput.style.padding = "1%"
        rowInput.style.border = "none"
        rowDiv.appendChild(rowInput)
    }
}

async function save () {
    const saveButton = document.getElementById("save")
    saveButton.className = "ui teal loading button"
    const { token } = window.token
    const playerRequest = await fetch("https://prodigy-api.hostedposted.com/player/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const playerData = await playerRequest.json()

    hacks.forEach(hack => {
        try {
            hack(playerData)
        } catch (e) {
            console.log(e)
            saveErrors = true
        }
    })

    if (saveErrors === true) {
        saveErrors = false
        saveButton.className = "ui teal button"
        return
    }

    await fetch(
        "https://prodigy-api.hostedposted.com/player/",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9"
            },
            body: JSON.stringify(playerData)
        }
    )
    popup("Success!", "Your changes have been saved!", "success")
    saveButton.className = "ui teal button"
}

function logout () {
    eraseCookie("username")
    eraseCookie("password")
    window.location.href = "/login"
}

async function getGameData () {
    const gameDataFetch = await fetch(
        "https://prodigy-api.hostedposted.com/gameData",
        {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua":
                    "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            cache: "no-cache",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "omit"
        }
    )
    return await gameDataFetch.json()
}
async function addPet () {
    const value = document.getElementById("petSelector").value
    if (!document.getElementById("petLevel").value) return popup("Pet Error", "You must set a level for this pet!", "error")
    const addButton = document.getElementById("addPetsSave")
    addButton.className = "ui teal loading button"
    const { token } = window.token
    const playerRequest = await fetch("https://prodigy-api.hostedposted.com/player/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const playerData = await playerRequest.json()
    playerData.pets.push({ level: document.getElementById("petLevel").value, levelCaught: document.getElementById("petLevel").value, ID: parseInt(value) + 1, catchDate: Date.now(), foreignSpells: [window.gamedata.pet[value].data.foreignSpellPools[0][0], window.gamedata.pet[value].data.foreignSpellPools[1][0]] })
    await fetch(
        "https://prodigy-api.hostedposted.com/player/",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9"
            },
            body: JSON.stringify(playerData)
        }
    )
    popup("Success!", "Added the pet!", "success")
    addButton.className = "ui teal button"
}

async function getAllPets () {
    const value = document.getElementById("petSelector").value
    if (!document.getElementById("petLevel").value) return popup("Pet Error", "You must set a level for these pets!", "error")
    const addButton = document.getElementById("getAllPets")
    addButton.className = "ui teal loading button"
    const { token } = window.token
    const playerRequest = await fetch("https://prodigy-api.hostedposted.com/player/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const playerData = await playerRequest.json()
    playerData.encounters.pets = []
    for (i = 0; i < window.gamedata.pet.length; i++) {
        const pet = {
            ID: window.gamedata.pet[i].ID,
            catchDate: Date.now(),
            levelCaught: document.getElementById("petLevel").value,
            level: document.getElementById("petLevel").value,
            foreignSpells: [window.gamedata.pet[i].data.foreignSpellPools[0][0], window.gamedata.pet[i].data.foreignSpellPools[1][0]]
        }
        playerData.pets.push(pet)
        playerData.encounters.pets.push({
            firstSeenDate: Date.now(),
            ID: window.gamedata.pet[i].ID,
            timesBattled: 9e9,
            timesRescued: 9e9
        })
    }
    await fetch(
        "https://prodigy-api.hostedposted.com/player/",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9"
            },
            body: JSON.stringify(playerData)
        }
    )
    popup("Success!", "Got all pets!", "success")
    addButton.className = "ui teal button"
}

async function editPet () {
    const editButton = document.getElementById("editPetsSave")
    editButton.className = "ui teal loading button"
    const { token } = window.token
    const playerRequest = await fetch("https://prodigy-api.hostedposted.com/player/", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const playerData = await playerRequest.json()
    const pet = document.getElementById("editPetSelector").selectedIndex
    const petLevel = document.getElementById("editPetLevel").value
    if (!petLevel) {
        editButton.className = "ui teal button"
        popup("Pet Error", "You must set a level for this edited pet!", "error")
        return
    }
    playerData.pets[pet].level = petLevel
    await fetch(
        "https://prodigy-api.hostedposted.com/player/",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9"
            },
            body: JSON.stringify(playerData)
        }
    )
    popup("Success!", "Edited the pet!", "success")
    editButton.className = "ui teal button"
}

function setAllCurrencies () {
    const setCurrencyInput = document.getElementById("setCurrencyInput")
    const currencyTableBody = document.getElementById("currencyTableBody")
    const currencyTableInputs = currencyTableBody.getElementsByTagName("input")
    if (!Number(setCurrencyInput.value)) {
        popup("Set Currency Error", "The amount of currency must be a number and set!", "error")
        return
    }
    for (let i = 0; i < currencyTableInputs.length; i++) {
        currencyTableInputs[i].value = setCurrencyInput.value
    }
}

function popup (title, desc, status) {
    Swal.fire(title, desc, status)
}

if (!window.location.href.includes("login")) {
    if (
        getCookie("username") === null ||
        getCookie("password") === null
    ) {
        window.location.href = "/login"
    }
} else {
    if (
        getCookie("username") !== null ||
        getCookie("password") !== null
    ) {
        window.location.href = "/index"
    }
}
