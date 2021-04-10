/*Fill your code */
cakeArray = [0, 0, 0, 0, 0]
layer = 1

function addCake(cake) {
    var cakePiece = document.getElementById(`layer${layer}`);
    console.log(cakePiece, layer)
    if (layer > 5) {
        alert('Max 5 items has been added ');
    }
    switch (cake) {
        case 'Chocolate':
            cakePiece.style.backgroundColor = "rgb(95,50,34)";
            cakeArray[0]++
            document.getElementById(`item-${layer++}-cost`).innerHTML = "Chocolates --- 300"
            break;
        case 'Strawberry':
            cakePiece.style.backgroundColor = "rgb(248, 101, 125)";
            document.getElementById(`item-${layer++}-cost`).innerHTML = "Strawberry --- 100"
            cakeArray[1]++
            break;
        case 'Butterscotch':
            cakePiece.style.backgroundColor = "rgb(250, 250, 136)";
            document.getElementById(`item-${layer++}-cost`).innerHTML = "Butterscotch - 200"
            cakeArray[2]++
            break;
        case 'Vannila':
            cakePiece.style.backgroundColor = "rgb(255,255,255)";
            document.getElementById(`item-${layer++}-cost`).innerHTML = "Vannila ------ 250"
            cakeArray[3]++
            break;
        case 'Redvelvet':
            cakePiece.style.backgroundColor = "rgb(246, 46, 46)";
            document.getElementById(`item-${layer++}-cost`).innerHTML = "Redvelvet ---- 350"
            cakeArray[4]++
            break;
    }
    cakePiece.style.visibility = "visible";
}

function buy() {
    let cost = cakeArray[0] * 300 + cakeArray[1] * 100 + cakeArray[2] * 200 + cakeArray[3] * 250 + cakeArray[4] * 350
    if (cost == 0) {
        alert("No items has been bought")
        return;
    }
    document.getElementById("total-cost").innerHTML = "Total cost=" + cost
    if(layer>5)
        document.getElementById("candles").style.visibility = "visible"
}

function clearItems() {
    window.location.reload();
}

/* todo

// change colors
// change fonts
// slice colors
*/