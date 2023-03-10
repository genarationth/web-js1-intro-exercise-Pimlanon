function ChangeName() {
    let person = prompt("What is your name", "Tinky Winky");
    console.log("The button has been clicked");
    document.getElementById("yourName")
    .innerHTML = person + "! 元気? ♡";
}


