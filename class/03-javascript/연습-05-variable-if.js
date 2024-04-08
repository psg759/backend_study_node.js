//데이터 타입, 연산자 실습
1 + 1
// 2
1 + "만원"
// '1만원'
1 + "1"
// '11'
1 - "1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || true
// true
true || false
// true
!true
// false
!false
// true

// 조건문 실습 1
if(1+1 === 2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3065:2 정답입니다
// undefined
if(true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3082:2 정답입니다
// undefined
if(!true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3085:4 틀렸습니다
// undefined
if(0){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3091:4 틀렸습니다
// undefined
if(1){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3095:2 정답입니다
// undefined
if(""){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3100:4 틀렸습니다
// undefined
if(3){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM3105:2 정답입니다

//조건문 실습 2
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
if (profile.age >= 20) {
    console.log("성인입니다")
} else if (8<=profile.age && profile.age<=19) {
    console.log("학생입니다")
} else if (0<= profile.age && profile.age <= 7) {
    console.log("어린이입니다")
}
// VM3711:4 학생입니다
// undefined
if (profile.age >= 20) {
    console.log("성인입니다")
} else if (8<=profile.age) {
    console.log("학생입니다")
} else if (0 < profile.age) {
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다")
}
    
// VM3867:4 학생입니다