var ef=0.0;
var efLoco=0.0;
var efDiet=0.0;
var efHouse=0.0;
var efHealth=0.0;
var efHolidays=0.0;
var efTrash=0.0;
var efCountry=0.0;
var efOthers=0.0;
var efplanets=0.0;
function showAbout() {
	document.getElementById("ecological_footprint").hidden="hidden";
	document.getElementById("calcButton").style.backgroundColor="black";
	document.getElementById("calcButton").disabled="disabled";
	document.getElementById("about").hidden="";
	if(screen.width<600){
		scrollTo(0,document.body.scrollHeight);
	}
}
function pageload() {
	document.getElementById("about").hidden="hidden";
	document.getElementById("calcButton").disabled="";
	myFunction();
}
function hideAbout() {
	document.getElementById("about").hidden="hidden";
	document.getElementById("calcButton").style.backgroundColor="#00b200";
	document.getElementById("calcButton").disabled="";
	document.getElementById("ecological_footprint").hidden="";
}
function myFunction() {
				var gh=document.getElementById("gh");
				var country=document.getElementById("country");
				var loco=document.getElementById("loco");
				var holidays=document.getElementById("holidays");
				var house_type=document.getElementById("house_type");
				var house_share=document.getElementById("house_share");
				var house_utilities=document.getElementById("house_utilities");
				var house_renewables=document.getElementById("house_renewables");
				var house_conservation=document.getElementById("house_conservation");
				var diet_animals=document.getElementById("diet_animals");
				var diet_cooking=document.getElementById("diet_cooking");
				var trash=document.getElementById("trash");
				var recycling=document.getElementById("recycling");
				gh.innerHTML ="";
				
				
				if(loco.value=="0"){efLoco=1.0;}
				if(loco.value=="1"){efLoco=2.0}
				if(loco.value=="2"){efLoco=0.65}
				if(loco.value=="3"){efLoco=0.2}
				if(loco.value=="4"){efLoco=0.0}
				if(loco.value=="5"){efLoco=0.5}
				efLoco*=0.13;
				
				if(diet_animals.value=="0"){efDiet=1.0;}
				if(diet_animals.value=="1"){efDiet=0.7;}
				if(diet_animals.value=="2"){efDiet=1.35;}
				if(diet_animals.value=="3"){efDiet=0.55;}
				if(diet_animals.value=="4"){efDiet=0.35;}
				
				if(diet_cooking.value=="0"){efDiet*=1.0;}
				if(diet_cooking.value=="1"){efDiet*=0.95;}
				if(diet_cooking.value=="2"){efDiet*=1.05;}
				efDiet*=0.29;
				
				if(house_type.value=="0"){efHouse=1.25;}				
				if(house_type.value=="1"){efHouse=1.0;}				
				if(house_type.value=="2"){efHouse=0.75;}				
				if(house_type.value=="3"){efHouse=0.5;}				
				if(house_type.value=="4"){efHouse=0.0;}
				                           
				if(house_share.value=="0"){efHouse*=1.0;}				
				if(house_share.value=="1"){efHouse*=0.5;}				
				if(house_share.value=="2"){efHouse*=0.3333333;}				
				if(house_share.value=="3"){efHouse*=0.25;}				
				if(house_share.value=="4"){efHouse*=0.2;}				
				if(house_share.value=="5"){efHouse*=0.166666667;}				
				if(house_share.value=="6"){efHouse*=0.142857143;}				
				if(house_share.value=="7"){efHouse*=0.125;}				
				                            
				if(house_utilities.value=="0"){efHouse*=1.0;}				
				if(house_utilities.value=="1"){efHouse*=1.4;}				
				if(house_utilities.value=="2"){efHouse*=0.6;}				
				
				if(house_renewables.value=="0"){efHouse*=1.0;}				
				if(house_renewables.value=="1"){efHouse*=0.0;}		
				                                 
				if(house_conservation.value=="0"){efHouse*=1.0;}				
				if(house_conservation.value=="1"){efHouse*=0.6;}
				efHouse*=0.16;
				
				efHealth=0.02;
				
				if(holidays.value=="0"){efHolidays=1.0;}
				if(holidays.value=="1"){efHolidays=8.0;}
				if(holidays.value=="2"){efHolidays=26.0;}
				efHolidays*=0.04;
				
				if(trash.value=="0"){efTrash=1.0;}
				if(trash.value=="1"){efTrash=0.75;}
				if(trash.value=="2"){efTrash=1.25;}
				if(trash.value=="3"){efTrash=0.5;}
				
				if(recycling.value=="0"){efTrash*=1.0;}
				if(recycling.value=="1"){efTrash*=0.5;}
				efTrash*=0.216;
				efTrash*=0.9;
				
				efOthers=0.9*0.18;
				ef=efLoco+efDiet+efHouse+efHealth+efHolidays+efTrash+efOthers;
				
				if(country.value=="0"){ef*=5.65;}
				if(country.value=="1"){ef*=0.9841;}
				if(country.value=="2"){ef*=4.575;}
				if(country.value=="3"){ef*=5.265;}
				if(country.value=="4"){ef*=2.747;}
				if(country.value=="5"){ef*=4.156;}
				if(country.value=="6"){ef*=4.815;}
				if(country.value=="7"){ef*=9.101;}
				if(country.value=="8"){ef*=7.22;}
				if(country.value=="9"){ef*=3.15;}
				if(country.value=="10"){ef*=0.77777778;}
				
				gh.innerHTML = ef.toFixed(2) + " global hectares";
				efplanets=ef/1.7978;
				planets.innerHTML = efplanets.toFixed(1) + " planets"
				ef=0.0;
}
