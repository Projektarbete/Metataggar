function randomBackground() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var color = "#FFF";

    switch (randomNumber) {
        case 1:
            color = #030;
            break;
        case 2:
            color = #300;
            break;
    }

    document.body.style.backgroundColor = color;
}