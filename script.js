function exec() { 
    
    var material1 = document.getElementById("material1").value;
    var depth1 = document.getElementById("depth1").value/1000;
    
    var material2 = document.getElementById("material2").value;
    var depth2 = document.getElementById("depth2").value/1000;
    
    var material3 = document.getElementById("material3").value;
    var depth3 = document.getElementById("depth3").value/1000;
    
    var material4 = document.getElementById("material4").value;
    var depth4 = document.getElementById("depth4").value/1000;
    
    var material5 = document.getElementById("material5").value;
    var depth5 = document.getElementById("depth5").value/1000;
    
    var insidetemp = document.getElementById("insidetemp").value;
    var outsidetemp = document.getElementById("outsidetemp").value;
    
    
    var materials = new Array(material1, material2, material3, material4, material5);
    var depths = new Array(depth1, depth2, depth3, depth4, depth5);
    
    var resi = [];
    
    for(var i=0; i<materials.length; i++){
    
    	if(materials[i]=="木材"){
    	var tc = 0.179;
    	var r = depths[i] / tc;
    	}
    	
    	else if(materials[i]=="グラスウール"){
    	var tc = 0.044;
    	var r = depths[i] / tc;
    	}
    	
    	else if(materials[i]=="空気層"){
    	var tc = 12.048;
    	var r = 1 / tc;
    	}
    	
    	else if(materials[i]=="コンクリート"){
    	var tc = 1.637;
    	var r = depths[i] / tc;
    	}
    	
    	else if(materials[i]=="モルタル"){
    	var tc = 1.087;
    	var r = depths[i] / tc;
    	}
    	
    	else{
    	break;
    	}
    	resi.push(r);
    }
    var sum = 0;
    for(var i=0;i<resi.length;i++){
    sum += resi[i];
    }
    var resistance = sum + 1/9 + 1/23;
    var heatflowrate = 1/resistance;
    var tempi = insidetemp - heatflowrate / 9 * (insidetemp - outsidetemp);
	var tempo = outsidetemp + heatflowrate / 23 * (insidetemp - outsidetemp);
	
	var n = 3 ;	// 小数点第n位まで残す
	heatflowrate = Math.floor( heatflowrate * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
	tempi = Math.floor( tempi * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
	tempo = Math.floor( tempo * Math.pow( 10, n ) ) / Math.pow( 10, n ) ;
	
	var comment = "";
	
	if(heatflowrate <0.5){
	comment = "断熱性高い";
	}
	
	else if(heatflowrate >=0.5 && heatflowrate <=1.5){
	comment = "断熱性まあまあ";
	}
	
	else{
	comment = "断熱性なさげ";
	}
	
    var elem1 = document.getElementById("output1");
    elem1.innerHTML = heatflowrate+" [W/m2・K]";
    var elem4 = document.getElementById("output4");
    elem4.innerHTML = comment;
    
    var elem2 = document.getElementById("output2");
    elem2.innerHTML = "室内壁面温度"+tempi+" [℃]";
    
    var elem3 = document.getElementById("output3");
    elem3.innerHTML = "外気側壁面温度"+tempo+" [℃]";
    
    

    

}
