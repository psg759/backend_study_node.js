//phonenum1 3자리인 경우 커서 이동 함수
const move_cursor1 = () => {
    let phonenum1 = document.getElementById("phonenum1").value

    if (phonenum1.length === 3) {
        document.getElementById("phonenum2").focus()
    }
}

//phonenum2 4자리인 경우 커서 이동 함수
const move_cursor2 = () => {
    let phonenum2 = document.getElementById("phonenum2").value

    if (phonenum2.length === 4) {
        document.getElementById("phonenum3").focus()
    }
}

//phonenum3 4자리 입력시 인증번호 전송 버튼 활성화 함수
const check_phonenum = () => {
    let phonenum3 = document.getElementById("phonenum3").value

    //phonenum3이 4자리인 경우 인증번호 전송 버튼 활성화
    if(phonenum3.length === 4) {
        document.getElementById("send_authnum").disabled = false
        document.getElementById("send_authnum").style = "color : #0068ff; background-color : white; cursor : pointer;"
    } 
    //phonenum3이 4자리가 아닌 경우 인증번호 전송 비활성화
    else {
        document.getElementById("send_authnum").disabled = true
        document.getElementById("send_authnum").style = "color : initial; background-color:initial;"
    }
}

//인증번호 전송 버튼을 누르는 순간 인증번호 생성 / 카운트 다운 / 인증 확인 버튼 활성화 함수
const make_authnum = () => {
    //인증번호 생성
    let authnum = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("authnum").innerText = authnum
    document.getElementById("send_authnum").disabled = true
    document.getElementById("send_authnum").style = "color : initial; background-color:initial;"
    //타이머 카운트 다운 & 인증 확인 버튼 활성화
    start_timer(179)

}

//3분 타이머 함수
let isStarted = false
let isClicked = false
const start_timer = (time) => {
    //타이머가 작동중이 아닐때
    if (isStarted === false) {
        isStarted = true
        //인증 확인 버튼 활성화
        document.getElementById("check_authnum").disabled = false
        document.getElementById("check_authnum").style = "cursor : pointer; color : white; background-color : #0068ff"
        let timer

        //타이머 가동
        timer = setInterval(function(){
            let min = Math.floor(time/60)
            let sec = String(time%60).padStart(2,"0")

            if(time > 0) {
                //남은 시간 표시
                document.getElementById("left_time").innerText = min+":"+sec
                time = time - 1
                
                //인증 확인 버튼을 눌렀을 경우 인증 완료로 변경
                if(isClicked) {
                    clearInterval(timer)
                    document.getElementById("check_authnum").disabled = true
                    document.getElementById("check_authnum").innerText = "인증완료"
                    document.getElementById("check_authnum").style = "color : initial; background-color:initial;"

                }
            }else {
                //타이머 시간이 다 지난 경우 초기 상태로 되돌리기
                document.getElementById("check_authnum").disabled = true
                document.getElementById("check_authnum").style = "color : initial; background-color:initial;"
                document.getElementById("authnum").innerText = "000000"
                document.getElementById("left_time").innerText = "3:00"
                document.getElementById("send_authnum").disabled = false
                document.getElementById("send_authnum").style = "color : #0068ff; background-color : white; cursor : pointer;"
                isStarted = false
                clearInterval(timer)
            }
        }, 1000)

    } 
}

//인증완료 버튼을 누르는 순간 타이머 중지 / 가입하기 버튼 활성화
const pass_authnum = () => {
    alert("인증이 완료되었습니다.")
    document.getElementById("submit").disabled = false
    document.getElementById("submit").style = "cursor : pointer; color : #0068ff; background-color : white; border : 1px solid #0068ff;"
    isClicked = true
} 

//가입하기 버튼을 눌렀을 경우 input
const check_wrapper = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let location = document.getElementById("location").value
    let gender__w = document.getElementById("gender__w").checked
    let gender__m = document.getElementById("gender__m").checked

    let isValid = true

    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }


    if(name === "") {
        document.getElementById("error__name").innerText = "이름을 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__name").innerText = ""
    }

    if(pw1 === "") {
        document.getElementById("error__pw1").innerText = "비밀번호를 입력해 주세요"
        isValid = false
    } else {
        document.getElementById("error__pw1").innerText = ""
    }

    if(pw2 === "") {
        document.getElementById("error__pw2").innerText = "비밀번호를 입력해 주세요"
        isValid = false
    } else {
        document.getElementById("error__pw2").innerText = ""
    }

    if(pw1 !== pw2) {
        console.log('different')
        document.getElementById("error__pw1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__pw2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }

    if(location !== "서울" && location !== "경기" && location !== "인천") {
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if(gender__w === false && gender__m === false) {
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(isValid === true) {
        document.getElementById("error__email").innerText = ""
        document.getElementById("error__name").innerText = ""
        document.getElementById("error__pw1").innerText = ""
        document.getElementById("error__pw2").innerText = ""
        document.getElementById("error__location").innerText = ""
        document.getElementById("error__gender").innerText = ""
        alert("코드캠프 가입을 축하합니다.")
    }
}