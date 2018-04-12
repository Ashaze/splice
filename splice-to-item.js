/**
 * split array to col sum is min
 * 将x的数组分割成和平均值相近的n个数组
 * @param  {[array]}   x  [数组]
 * @param  {[number]}   n  [分割的数组数]
 * @param  {Function} fn [回调方法]
 * 
 * @authors Hoovoi (key1045@qq.com)
 * @date    2018-04-12 15:43:41
 */
function splitArrayColMin(x,n,fn){
	this.x = x.concat();
	this.len = this.x.length;
	this.n = n;
	this.callback = fn;
	this.k = this.getSum(x)/n;
	this.colX = [];
	this.x = this.sortX();
	this.index = 0;
	this.init();
}
splitArrayColMin.prototype = {
	getSum: function(arr){
		var sum = 0;
		for(var i=0,len=arr.length;i<len;i++){
			sum+=arr[i]
		}
		return sum;
	},
	getMin: function(arr){
		var min = arr[0];
		for(var i=1,len=arr.length;i<len;i++){
			if(arr[i]<min){
				min = arr[i]
			}
		}
		arr.splice(arr.indexOf(min),1);
		return min;
	},
	sortX: function(){	//排序从小到大
		var x = this.x.concat();//复制数组
		var sortx = [];
		var that = this;
		for(var i=0;i<this.len;i++){
			sortx.push(this.getMin(x));
		}
		return sortx
	},
	createCol: function(){
		var that = this;
		if(that.x.length <=0)	{
			that.callback(that.colX);
			return
		}
		if((that.colX.length-1)<that.index){
			console.log(1,that.x);
			var minIndex = 0;
			var minSum = that.getSum(that.colX[minIndex]);
			var sum = 0;
			var len = that.colX.length;
			var alen = that.x.length;
			for(var j=0;j<alen;j++){
				minIndex = 0;
				minSum = that.getSum(that.colX[minIndex]);
				for(var i=1;i<len;i++){
					sum = that.getSum(that.colX[i]);
					if(minSum>sum){
						minIndex = i;
						minSum = sum;
					}
				}
				that.colX[minIndex].push(that.x.pop())
			}
			
			that.callback(that.colX);
			return 
		}
		var max = that.x.pop();
		var sum = that.getSum(that.colX[that.index]);
		if((max+sum)<that.k){
			that.colX[that.index].push(max);
		}else{
			that.x.push(max);
			var min = that.x.shift();
			if((min+sum)<that.k){
				that.x.push(min);
			}else{
				that.x = [min].concat(that.x);
				that.index++;
			}
		}
		that.createCol();
	},
	init: function(){
		for(var i=0;i<this.n;i++){
			var col = [];
			col.push(this.x.pop())
			this.colX.push(col);
		}
		console.log(this.k)
		this.createCol();
	}
}