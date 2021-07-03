function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (!window.location.href.includes("login.html")) {
    if (
        getCookie("username") === null ||
        getCookie("password") === null
    ) {
        window.location.href = "/login.html";
    }
} else {
    if (
        getCookie("username") !== null ||
        getCookie("password") !== null
    ) {
        window.location.href = "/index.html";
    }
}

async function load_defaults() {
    const { token } = window.token;
    const playerData = await (
        await fetch(`https://prodigy-api.hostedposted.com/player/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    ).json();
    document.getElementById("levelSelector").value = playerData.data.level;
    document.getElementById("goldSelector").value = playerData.data.gold;
    document.getElementById("loading").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("firstNameSelector").selectedIndex = Array.from(document.getElementById("firstNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.first-1].data.value);
    document.getElementById("middleNameSelector").selectedIndex = Array.from(document.getElementById("middleNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.middle-1].data.value);
    document.getElementById("lastNameSelector").selectedIndex = Array.from(document.getElementById("lastNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.last-1].data.value);
    document.getElementById("nickNameSelector").selectedIndex = Array.from(document.getElementById("nickNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.nickname[playerData.appearance.name.nick-1].data.value.replace("{first}", "{firstname}"));
}

async function tokenify(username, password) {
    const response = await fetch(
        `https://prodigy-api.hostedposted.com/token/`,
        {
            headers: {
                authorization: btoa(`${username}:${password}`),
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua":
                    '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
            },
        }
    );
    const data = await response.text();
    if (data.startsWith("Internal")) return false;
    return JSON.parse(data);
}

async function login(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!username || !password)
        return popup(
            "Login Error",
            "Please enter a username and password!",
            "error"
        );
    setCookie("username", username, 7);
    setCookie("password", password, 7);
    const data = await tokenify(username, password);
    if (data === false) {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        return popup("Login Error", "Invalid username or password!", "error");
    }
    window.location.href = "/index.html";
}

async function load_names() {
    let firstNameSelector = document.getElementById("firstNameSelector");
    let firstNames = window.gamedata.name;
    for (let i = 0; i < firstNames.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = firstNames[i].data.name;
        firstNameSelector.appendChild(option);
    }
    let middleNameSelector = document.getElementById("middleNameSelector");
    let middleNames = window.gamedata.name.filter(name => name.data.type === 1);
    for (let i = 0; i < middleNames.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = middleNames[i].data.name;
        middleNameSelector.appendChild(option);
    }
    let lastNameSelector = document.getElementById("lastNameSelector");
    let lastNames = window.gamedata.name.filter(name => name.data.type === 2);
    for (let i = 0; i < lastNames.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = lastNames[i].data.name;
        lastNameSelector.appendChild(option);
    }
    let nickNameSelector = document.getElementById("nickNameSelector");
    let nickNames = window.gamedata.nickname;
    for (let i = 0; i < nickNames.length; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = nickNames[i].data.value.replace("{first}", "{firstname}");
        nickNameSelector.appendChild(option);
    }
}

async function save() {
    let saveButton = document.getElementById("save");
    let levelSelector = document.getElementById("levelSelector");
    let goldSelector = document.getElementById("goldSelector");
    if (!Number(levelSelector.value)){
        return popup(
            "Save Error",
            "Your level must be set and be a number!",
            "error"
        );
    }
    if (levelSelector.value < 0) {
        return popup(
            "Save Error",
            "Your level must be a positive number!",
            "error"
        );
    }
    if (!Number(goldSelector.value)) {
        return popup(
            "Save Error",
            "Your gold must be set and be a number!",
            "error"
        );
    }
    if (goldSelector.value < 0) {
        return popup(
            "Save Error",
            "Your gold must be a positive number!",
            "error"
        );
    }
    saveButton.className = "ui teal loading button";
    const { token } = window.token;
    const playerRequest = await fetch(`https://prodigy-api.hostedposted.com/player/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const playerData = await playerRequest.json();
    let middleNames = window.gamedata.name.filter(name => name.data.type === 1);
    let lastNames = window.gamedata.name.filter(name => name.data.type === 2);
    playerData.data.level = Number(levelSelector.value);
    playerData.data.gold = Number(goldSelector.value);
    playerData.appearance.name.first = document.getElementById("firstNameSelector").selectedIndex + 1;
    playerData.appearance.name.middle = middleNames[document.getElementById("middleNameSelector").selectedIndex].ID;
    playerData.appearance.name.last = lastNames[document.getElementById("lastNameSelector").selectedIndex].ID;
    playerData.appearance.name.nick = document.getElementById("nickNameSelector").selectedIndex + 1;
    await fetch(
        `https://prodigy-api.hostedposted.com/player/`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "content-type": "application/json",
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
            },
            body: JSON.stringify(playerData)
        }
    );
    popup("Success!", "Your changes have been saved!", "success");
    saveButton.className = "ui teal button";
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login.html";
}

async function getGameData() {
    let gameFetch = await fetch(
        "https://prodigy-api.hostedposted.com/proxy/play.prodigygame.com/play",
        {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua":
                    '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
            },
            cache: "no-cache",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "omit",
        }
    );
    let gameStatus = JSON.parse(
        (await gameFetch.text()).match(/(?<=gameStatusDataStr = ').+(?=')/)[0]
    );
    let gameDataVersion = gameStatus.prodigyGameFlags.gameDataVersion;
    let gameDataFetch = await fetch(
        "https://prodigy-api.hostedposted.com/proxy/cdn.prodigygame.com/game/data/production/" +
            gameDataVersion +
            "/data.json",
        {
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua":
                    '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
            },
            cache: "no-cache",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "omit",
        }
    );
    return await gameDataFetch.json();
}

function popup(title, desc, status) {
    Swal.fire(title, desc, status);
}

async function init() {
    window.gamedata = await getGameData();
    await load_names();
    window.username = getCookie("username");
    window.password = getCookie("password");
    window.token = await tokenify(window.username, window.password);
    document.getElementById("username").innerHTML = window.username;
    await load_defaults();
}

function login_init() {
    document.getElementById("form").addEventListener("submit", login);
}
