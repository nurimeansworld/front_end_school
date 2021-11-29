let sample = [10, 20, 30, 5, 6, 3, 100, 110, 99, 88];
let temp = sample[0];

// 최댓값
for(let i=0; i<sample.length; i++){
  if(temp < sample[i])
  temp = sample[i];
}

// 최솟값
for(let i=0; i<sample.length; i++){
  if(temp > sample[i])
  temp = sample[i];
}