var opts = {
	lines: 12, 
	angle: 0.11, 
	lineWidth: 0.15, 
	pointer: {
		length: 1, 
		strokeWidth: 0.044,
		color: '#000000' 
	},
	limitMax: 'false', 
	colorStart: '#6FADCF',  
	colorStop: '#8FC0DA',    
	strokeColor: '#E0E0E0',   
	generateGradient: true
};

var gauge_div = document.getElementById('gauge');
var gauge = new Gauge(gauge_div).setOptions(opts);

gauge.maxValue = 1024;
gauge.animationSpeed = 50;

gauge.set(512);

