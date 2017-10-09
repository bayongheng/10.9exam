var arr1 = ["a","1","2","b","1","3","3","a","c","b","1"];
var newArr1 = [];
for(var i = 0; i < arr1.length;i++) {
	for(var j = i+1;j < arr1.length;j++) {
		if(arr1[i]===arr1[j]){
			arr1[j]=null;
		}
	}
}
for(var m = 0;m < arr1.length;m++) {
	 if(arr1[m]){
	 	newArr1.push(arr1[m]);
	 }
}
console.log(newArr1);