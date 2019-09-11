function randomBackground() {
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    var color = "#FFF";

    switch (randomNumber) {
        case 1:
            color = "#FF9AA2";
            break;
        case 2:
            color = "#FFB7B2";
            break;

        case 3:
            color = "#FFDAC1";
            break;
        case 4:
            color = "#E2F0CB";
            break;

        case 5:
            color = "#B5EAD7";
            break;

    }

    document.body.style.backgroundColor = color;

}
randomBackground();