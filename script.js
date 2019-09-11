function randomBackground() {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var color = "#FFF";

    switch (randomNumber) {
        case 1:
            color = "#030";
            break;
        case 2:
            color = "#300";
            break;

        case 3:
            color = "#003";
            break;
        case 4:
            color = "#555";
            break;

        case 5:
            color = "#550";
            break;

    }

    document.body.style.backgroundColor = color;

}
randomBackground();