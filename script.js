//your code here
let arr = [2,1,2];
let n = arr.length;
let max = Math.floor(n/2);
let ans = 0;
let obj = {};
for ( let i = 0; i < arr.length; i++ ){
	if(obj[arr[i]] != "undefined"){
		obj[arr[i]] = obj[arr[i]] + 1;
	}
	else{
		obj[arr[i]] = 1;
	}
}

for ( let i in obj ){
	if(obj[i] > max){
		ans = obj[i];
	}
}
return ans;