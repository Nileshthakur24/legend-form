function move() {
    if (a.value == "" || b.value == "") {
        logic()
        document.getElementById("a").style.border = "3px solid red"
        document.getElementById("b").style.border = "3px solid red"
        bt.value = "Pahila data tak"
    }
    else {
        document.getElementById("a").style.border = "3.7px solid green"
        document.getElementById("b").style.border = "3.7px solid green"
        bt.value = "Ha thik ahe ata"
        bt.style.left = "150px";
    }
}
flag = 1
function logic() {
    if (flag == 1) {
        bt.style.left = "240px"
        flag = 2
    }
    else if (flag == 2) {
        bt.style.left = "80px"
        flag = 1
    }
}