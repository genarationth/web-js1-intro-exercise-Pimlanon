function ChangeName() {
    let person = prompt("What is your name", "Lak");
    console.log("The button has been clicked");
    document.getElementById("yourName")
    .innerHTML = person;

    
}


