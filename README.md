# splice
## 将数组x通过计算分割成n组sum相近的数组
在了解瀑布分列布局的时候，思考如何元素如何能够从左到右的排列中使得每一列的高度相差高度小的产物。

### tips
* 对于负值未做绝对值换算处理
* 对于大数据处理时间久，毕竟都是基本运算，未加入算法优化

## update
* 2018-04-14 排序算法中最小值算法修改

## 使用方法
```
	new splitArrayColMin(x,n,function(res){
			res ;//返回分割后的数组
		})
```
### options
| optitons | type | default | 备注 |
|:---:|:---:|:---:|:---:|
| x | Array | |必填|
| n | Number| |必填|
|callback| Function|| 必填,获取分割数组 |
