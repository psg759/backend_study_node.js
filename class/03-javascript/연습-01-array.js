let classmates = ["영희", "철수", "훈이"]
// undefined
classmates
// (3) ['영희', '철수', '훈이']
classmates[0]
// '영희'
classmates[1]
// '철수'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['영희', '철수', '훈이']
let developer = ["끈기", "열정", "습관", "창의", "호기심"]
// undefined
developer[0]
// '끈기'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['끈기', '열정', '습관', '창의', '호기심', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
// undefined
result
// (8) ['끈기', '열정', '습관', '창의', '호기심', '커리어점프', '성공', '할수있다']