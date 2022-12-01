function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkTheme() {
    let theme = getCookie("theTheme");
    if (theme != "") {
        alert("theme " + theme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            setCookie("theTheme", theme, 30);
            darkmode()
        }
        else {
            // blind mode
            lightmode()
        }
    }
}

checkTheme()
console.log("idk")



function darkmode(){
    console.log("darkmode")
    setCookie("theTheme", 0, 30);
    document.getElementById('themelightdark').outerHTML = '<link rel="stylesheet" href="theme_dark.css" id="themelightdark">'
}
function lightmode(){
    console.log("ohh im blinded by the light")
    setCookie("theTheme", 1, 30);
}