function toggleBulb(checkbox) {
    const container = checkbox.parentElement; 
    const offBulb = container.querySelector('.off-bulb');
    const onBulb = container.querySelector('.on-bulb');

    if (checkbox.checked) {
        offBulb.style.visibility = 'hidden';
        onBulb.style.visibility = 'visible';
    } else {
        offBulb.style.visibility = 'visible';
        onBulb.style.visibility = 'hidden';
    }
}
const start = document.getElementById("Start");
const off = document.getElementsByClassName("bulb");
function toggleAllBulbs() {

    

        for (let i = 0; i < off.length; i++) {
            off[i].style.visibility = "visible";
        }

    start.style.visibility = "hidden"
}