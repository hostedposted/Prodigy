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

if (!window.location.href.includes("login")) {
    if (
        getCookie("username") === null ||
        getCookie("password") === null
    ) {
        window.location.href = "/login";
    }
} else {
    if (
        getCookie("username") !== null ||
        getCookie("password") !== null
    ) {
        window.location.href = "/index";
    }
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


async function load_defaults() {
    // Get player data
    const { token } = window.token;
    const playerData = await (
        await fetch(`https://prodigy-api.hostedposted.com/player/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    ).json();

    // Check for account state
    if (playerData.data === null) {
        eraseCookie("username");
        eraseCookie("password");
        await Swal.fire(
            "Error",
            "Please complete tutorial before using the dashboard.",
            "error"
        )
        return window.location.href = "/login";
    }

    // Player hacks
    document.getElementById("levelSelector").value = playerData.data?.level ?? 1;
    document.getElementById("goldSelector").value = playerData.data?.gold ?? 0;
    document.getElementById("darkTowerSelector").value = playerData.data?.tower ?? 1;
    document.getElementById("bountyPointsSelector").value = playerData.data?.bountyScore ?? 1;

    /* Currency IDs
    "Hot-Hots": 12,
    "Florans": 13,
    "Yars": 14,
    "Shivers": 15,
    "Aeros": 16,
    */

    // Currencies
    /*
    document.getElementById("Hot-Hots_Input").value = playerData.inventory?.currency[12 - 1].N ?? 0;
    document.getElementById("Florans_Input").value = playerData.inventory?.currency[13 - 1].N ?? 0;
    document.getElementById("Yars_Input").value = playerData.inventory?.currency[14 - 1].N ?? 0;
    document.getElementById("Shivers_Input").value = playerData.inventory?.currency[15 - 1].N ?? 0;
    document.getElementById("Aeros_Input").value = playerData.inventory?.currency[16 - 1].N ?? 0;
    */

    // Finishing
    document.getElementById("loading").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Name selectors
    document.getElementById("firstNameSelector").selectedIndex = Array.from(document.getElementById("firstNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.first-1].data.value);
    document.getElementById("middleNameSelector").selectedIndex = Array.from(document.getElementById("middleNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.middle-1].data.value);
    document.getElementById("lastNameSelector").selectedIndex = Array.from(document.getElementById("lastNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.name[playerData.appearance.name.last-1].data.value);
    if (playerData.appearance.name?.nick) {
        document.getElementById("nickNameSelector").selectedIndex = Array.from(document.getElementById("nickNameSelector").options).map(elem => elem.innerHTML).indexOf(window.gamedata.nickname[playerData.appearance.name.nick-1].data.value.replace("{first}", "{firstname}"));
    } else {
        document.getElementById("nickNameSelector").selectedIndex = document.getElementById("nickNameSelector").options.length - 1;
    }

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
    const submitButton = document.getElementById("submit");
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!username || !password)
        return popup(
            "Login Error",
            "Please enter a username and password!",
            "error"
        );
    submitButton.className = "fluid ui primary loading button";
    setCookie("username", username, 7);
    setCookie("password", password, 7);
    const data = await tokenify(username, password);
    if (data === false) {
        eraseCookie("username");
        eraseCookie("password");
        submitButton.className = "fluid ui primary button";
        return popup("Login Error", "Invalid username or password!", "error");
    }
    window.location.href = "/index"
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
    let option = document.createElement("option");
    option.value = "None";
    option.innerHTML = "None"
    nickNameSelector.appendChild(option);
}

async function save() {
    let saveButton = document.getElementById("save");
    let levelSelector = document.getElementById("levelSelector");
    let goldSelector = document.getElementById("goldSelector");
    let darkTowerSelector = document.getElementById("darkTowerSelector");
    let bountyPointsSelector = document.getElementById("bountyPointsSelector");
    if (levelSelector.value === "") {
        return popup(
            "Save Error",
            "Your level must be set!",
            "error"
        );
    }
    if (goldSelector.value === "") {
        return popup(
            "Save Error",
            "Your gold must be set!",
            "error"
        );
    }
    if (darkTowerSelector.value === ""){
        return popup(
            "Save Error",
            "Your Dark Tower must be set!",
            "error"
        );
    }
    if (bountyPointsSelector.value === ""){
        return popup(
            "Save Error",
            "Your bounty points must be set!",
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
    playerData.data.tower = Number(darkTowerSelector.value);
    playerData.data.bountyScore = Number(bountyPointsSelector.value);
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
    eraseCookie("username");
    eraseCookie("password");
    window.location.href = "/login";
}

async function getGameData() {
    let gameDataFetch = await fetch(
        "https://prodigy-api.hostedposted.com/gameData",
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

