let persons = [
    {name: "철수", age : 17},
    {name: "딸기", age : 24},
    {name: "영희", age : 23},
    {name: "도우너", age : 43},
    {name: "또치", age : 3}
    ]
// undefined
for(let count = 0;count < persons.length;count++) {
    if (persons[count].age >= 19) {
        console.log("성인입니다.")
    } else {
        console.log("미성년자입니다.") 
    }
}
                
// VM4859:5 미성년자입니다.
// 3VM4859:3 성인입니다.
// VM4859:5 미성년자입니다.
// undefined
for(let count = 0;count < persons.length;count++) {
    if (persons[count].age >= 19) {
        console.log(persons[count].name+"님은 성인입니다.")
    } else {
        console.log(persons[count].name+"님은 미성년자입니다.") 
    }
}
                
// VM4931:5 철수님은 미성년자입니다.
// VM4931:3 딸기님은 성인입니다.
// VM4931:3 영희님은 성인입니다.
// VM4931:3 도우너님은 성인입니다.
// VM4931:5 또치님은 미성년자입니다.

let fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "신청딸기" },
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"}
   ];
// undefined

for (let i = 0; i < fruits.length;i++) {
    console.log(fruits[i].number+" "+fruits[i].title)
}
// VM5228:2 1 레드향
// VM5228:2 2 샤인머스켓
// VM5228:2 3 신청딸기
// VM5228:2 4 한라봉
// VM5228:2 5 사과
// VM5228:2 6 애플망고
// VM5228:2 7 딸기
// VM5228:2 8 천혜향
// VM5228:2 9 과일선물세트
// VM5228:2 10 귤
// undefined

for (let i = 0; i < fruits.length;i++) {
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}
// VM5255:2 1 레드향
// VM5255:2 2 샤인머스켓
// VM5255:2 3 신청딸기
// VM5255:2 4 한라봉
// VM5255:2 5 사과
// VM5255:2 6 애플망고
// VM5255:2 7 딸기
// VM5255:2 8 천혜향
// VM5255:2 9 과일선물세트
// VM5255:2 10 귤