const buttonOpening = document.querySelectorAll("#button");
const response = document.querySelectorAll(".response");
const imgArrow = document.querySelectorAll(".img");
const boldText = document.querySelectorAll(".boldTexting");
const buttonArray = new Array(buttonOpening.length);

function openClose(place){
    if(buttonArray[place] == 1){
        response[place].classList.add("response");
        imgArrow[place].classList.remove("imgArrow");
        boldText[place].classList.remove("bold");
        buttonArray[place] = 0;
    } else {
        response[place].classList.remove("response");
        imgArrow[place].classList.add('imgArrow');
        boldText[place].classList.add("bold");
        buttonArray[place] = 1;
    }
}
console.log(openClose)
    for(let i = 0; i < buttonOpening.length; i++) {
        buttonArray[i] = 0;
        buttonOpening[i].addEventListener('click', function() {
            openClose(i);
        });
    }