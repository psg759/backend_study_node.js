let make_number = () => {
    const code = String(Math.floor( Math.random() * 1000000 )).padStart(6,"0")
    document.getElementById("number").innerText = code
    document.getElementById("number").style.color= "#"+code
}



