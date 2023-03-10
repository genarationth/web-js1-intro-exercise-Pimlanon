function ChangeName() {
    let text;
    let person = prompt("What is your name", "Lak");
    console.log("The button has been clicked");
    document.getElementById("demo")
    .innerHTML = person;
    
    // document.getElementById("demo").style.display = "block";
}


