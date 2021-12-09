// 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)
// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

let value = [1, 3, 4, 8, 13, 17, 20];
let temp = value[1] - value[0]

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        console.log(value[i + 1], value[i])
        result = value[i + 1], value[i];
    }
}
// 10점 만점에 6점 정도의 코드


// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];  // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);

// // 1번째 순회(i==0, temp=3, result=0)
// for (let i = 0; i < 8; i++) {
//     if (3 > 3){
//         temp = value[i+1] - value[i];
//         result = i;
//     }
// }

// // 2번째 순회(i==1, temp=2, result=1)
// for (let i = 0; i < 8; i++) {
//     if (3 > 2){
//         temp = 2;
//         result = 1;
//     }
// }

// // 3번째 순회(i==2, temp=2, result=1)
// for (let i = 0; i < 8; i++) {
//     if (2 > 2){
//         temp = value[i+1] - value[i];
//         result = i;
//     }
// }
