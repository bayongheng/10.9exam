var arr = ["a","1","2","b","1","3","3","a","c","b","1"];
var newArr = [];
for(var i = 0,leng = arr.length;i < leng;i++) {
	 if(newArr.indexOf(arr[i]) == -1) {
         newArr.push(arr[i]);
	 }
}
console.log(newArr);