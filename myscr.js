/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-12-26 10:17:56
 * @version $Id$
 */
 window.onload = function(){
 	/*echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成一个简单的柱状图*/
	var myChar = echarts.init(document.getElementById('main'));
	var option = {
		title: {
			text: 'first Echarts'
		},
		tooltip: {},
		legend: {
			data: ['销量']
		},
		xAxis: {
			data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
		},
		yAxis: {},
		series: [{
			name: '销量',
			type: 'bar',
			data: [3, 20, 5, 30, 3, 9]
		}]
	};
	myChar.setOption(option);
	var a = document.getElementById('a');
	a.src = "http://192.168.30.222:8080/CoreBusinessServer/files/acquisitionFile/20181224/E67904D3D2424D51831C3F7A211CF728/347ED0A3A72E4CAFBF17BA59CE041E8E/checkpoint/1-101_机柜2_电流表1-1-1.jpg?t=1547020092381"
	a.onerror = function(){
		console.log(11);
	}
 }
