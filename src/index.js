/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    const arr = preferences;
    let triangles = 0;
    const length = arr.length;
    
  for(let i = 0; i < length; i++){
    let firstValue = arr[i];
    let secondValue = arr[firstValue-1];
    let thirdValue = arr[secondValue-1];

    if(firstValue != secondValue && thirdValue === i+1){
      triangles++;
    }
  }
 
  return triangles/3;
};
