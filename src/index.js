/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var arr = preferences;
  var triangles = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== -1){
      var trio = [];
      trio.push(arr[i]);
      trio.push(arr[trio[0]-1]);
      trio.push(arr[trio[1]-1]);
      if((trio[2]-1) == i && trio[0] != trio[1] && trio[1] != trio[2]){
        triangles++;
        arr[i] = -1;
        arr[trio[0]-1] = -1;
        arr[trio[1]-1] = -1;
      }
      
    }
  }
 
  return triangles;
};
