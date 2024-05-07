//타이머가 작동중인지 아닌지를 별도의 상태로 저장
//카운트다운이 끝나도 setInterval 함수가 계속 작동할 수도 있으니까 초기화시켜줘야함
let isStarted = false;

let timer_start = () => {

    if (isStarted === false) {
        //타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("finish").disabled = false

        let time = 10
        let timer

        let number = String(Math.floor(Math.random()*100000)).padStart(6,"0")
        document.getElementById("number").innerText = number

        timer = setInterval(function(){

            let min = Math.floor(time/60)
            let sec = String(time%60).padStart(2,"0")
            if (time >= 0){
                document.getElementById("timer").innerText = min+":"+sec
                time = time - 1
            }
            else {
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        }, 1000)

    } else {
        //타이머가 작동중일때
    }

}