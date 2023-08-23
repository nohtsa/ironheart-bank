	async function test(x) {
	
	
	
	
	
    const act = document.querySelector('#act-'+x).value;
    const char = document.querySelector('#char-'+x).value;
    const tc = document.querySelector('#tc-'+x).value;
    const vari = document.querySelector('#vari-'+x).value;
    const amt = parseFloat(document.querySelector('#amt-'+x).value);
	
	
    dict = {}
	dict['account'] = act
	dict['character'] = char
	dict['treasurecard'] = tc
	dict['variation'] = vari
	dict['amount'] = amt
    
    const matchingPosts = tcjson.filter(post =>
        post.account.includes(act) &&
        post.character.includes(char) &&
        post.treasurecard.includes(tc) &&
        post.variation === vari
    );
	
	

    if (matchingPosts.length > 0) {
       null
    } else {
        
        newRow();
    }

    for (const post of matchingPosts) {
        const tcamt = parseFloat(post.amount);
        post.amount = tcamt + amt;
    }

    makeTable();
}

function timeBlock(x,y) {
			if (y==0) {
				document.getElementById("time-"+x).value = null;
			};
			if (y==1) {
				document.getElementById("time-"+x).value = Date();
			};
		};
function changeImage(x) {
			const tcValues = [
				document.querySelector('#tc-1').value,
				document.querySelector('#tc-2').value,
				document.querySelector('#tc-3').value,
				document.querySelector('#tc-4').value
			];

			const tcBoxElements = [
				document.getElementById('tc-box-1'),
				document.getElementById('tc-box-2'),
				document.getElementById('tc-box-3'),
				document.getElementById('tc-box-4')
			];

		if (x >= 1 && x <= 4) {
			const tcValue = tcValues[x - 1];
			const tcBoxElement = tcBoxElements[x - 1];

			if (tcValue !== "") {
				tcBoxElement.setAttribute('src', `https://www.wizard101central.com/wiki/File:(Treasure_Card)_${tcValue}.png`);
			} else {
				tcBoxElement.setAttribute('src', "");
			}
		}
		}
async function clearX(x,y) {
				if (y == 0) {
					alert("test");
				};
				if (y == 1) {
					document.getElementById("amt-"+x).disabled = true;
					document.querySelector("#amt-"+x).value = null
				};
				if (y == 2) {
					document.getElementById("amt-"+x).disabled = true;
					document.querySelector("#amt-"+x).value = null
					document.getElementById("tc-"+x).disabled = true;
					document.querySelector("#tc-"+x).value = null
					document.getElementById("vari-"+x).disabled = true;
					document.querySelector("#vari-"+x).value = null
				};
				if (y == 3) {
					document.getElementById("amt-"+x).disabled = true;
					document.querySelector("#amt-"+x).value = null
					document.getElementById("tc-"+x).disabled = true;
					document.querySelector("#tc-"+x).value = null
					document.getElementById("vari-"+x).disabled = true;
					document.querySelector("#vari-"+x).value = null
					document.getElementById("char-"+x).disabled = true;
					document.querySelector("#char-"+x).value = null
					document.getElementById("act-"+x).disabled = true;
					document.querySelector("#act-"+x).value = null
				};
				
				if (y == 4) {
					document.getElementById("amt-"+x).disabled = true;
					document.querySelector("#amt-"+x).value = null
				};
				if (y == 5) {
					document.getElementById("tc-"+x).disabled = true;
					document.querySelector("#tc-"+x).value = null
				};
				if (y == 6) {
					document.getElementById("vari-"+x).disabled = true;
					document.querySelector("#vari-"+x).value = null
				};
				if (y == 7) {
					document.getElementById("char-"+x).disabled = true;
					document.querySelector("#char-"+x).value = null
				};
				if (y == 8) {
					document.getElementById("act-"+x).disabled = true;
					document.querySelector("#act-"+x).value = null
				};
				
				if (y == 9) {
					document.querySelector("#amt-"+x).value = null
				};
				if (y == 10) {
					document.querySelector("#tc-"+x).value = null
				};
				if (y == 11) {
					document.querySelector("#vari-"+x).value = null
				};
				if (y == 12) {
					document.querySelector("#char-"+x).value = null
				};
				if (y == 13) {
					document.querySelector("#act-"+x).value = null
				};
				
				if (y == 14) {
					document.getElementById("tc-box-"+x).setAttribute('src', "")
				};
				
				if (y == 15) {
					document.querySelector('#act-4').value = null
					document.querySelector('#char-4').value = null
				};
				if (y == 16) {
					document.querySelector('#act-4').value = null
					document.querySelector('#char-4').value = null
					document.querySelector('#act-3').value = null
					document.querySelector('#char-3').value = null
				};
				if (y == 17) {
					document.querySelector('#act-4').value = null
					document.querySelector('#char-4').value = null
					document.querySelector('#act-3').value = null
					document.querySelector('#char-3').value = null
					document.querySelector('#act-2').value = null
					document.querySelector('#char-2').value = null
				};
				
				if (y == 18) {
					document.getElementById("tc-box-2").setAttribute('src', "")
					document.getElementById("tc-box-3").setAttribute('src', "")
				};
				if (y == 19) {
					document.getElementById("tc-box-3").setAttribute('src', "")
					document.getElementById("tc-box-4").setAttribute('src', "")
				};
				if (y == 20) {
					document.getElementById("tc-box-2").setAttribute('src', "")
					document.getElementById("tc-box-3").setAttribute('src', "")
					document.getElementById("tc-box-4").setAttribute('src', "")
				};
				if (y == 21) {
					document.getElementById("tc-box-1").setAttribute('src', "")
					document.getElementById("tc-box-2").setAttribute('src', "")
					document.getElementById("tc-box-3").setAttribute('src', "")
					document.getElementById("tc-box-4").setAttribute('src', "")
				};
				
			};
function lock(x) {
	document.getElementById(x).disabled = true;
			};
		function lockForm(x) {
			document.getElementById("tc-"+x).readonly = true;
			document.getElementById("vari-"+x).readonly = true;
			document.getElementById("amt-"+x).readonly = true;
			document.getElementById("char-"+x).readonly = true;
			document.getElementById("act-"+x).readonly = true;
		};
		function unlockForm(x) {
			document.getElementById("tc-"+x).readonly = false;
			document.getElementById("vari-"+x).readonly = false;
			document.getElementById("amt-"+x).readonly = false;
			document.getElementById("char-"+x).readonly = false;
			document.getElementById("act-"+x).readonly = false;
		};
		function unlock(x) {
			document.getElementById(x).disabled = false;
		};
		
		function clearForm1() {
			document.querySelector("#amt-1").value = null
			document.querySelector("#tc-1").value = null
			document.querySelector("#vari-1").value = null
		};
		function clearForms() {
			clearX(1,2)
			clearX(1,12)
			//clearX(1,7)
			if (!document.querySelector('#amt-1')== null){
				unlock("char-1")
			}
			
			
			clearX(2,3)
			clearX(3,3)
			clearX(4,3)
		}
		async function autoForm() {
			var am1 = document.querySelector('#amt-1').value;
			var ac1 = document.querySelector('#act-1').value;
			var ch1 = document.querySelector('#char-1').value;
			var tc1 = document.querySelector('#tc-1').value;
			var vr1 = document.querySelector('#vari-1').value;
			//
			var am2 = document.querySelector('#amt-2').value;
			var ac2 = document.querySelector('#act-2').value;
			var ch2 = document.querySelector('#char-2').value;
			var tc2 = document.querySelector('#tc-2').value;
			var vr2 = document.querySelector('#vari-2').value;
			//
			var am3 = document.querySelector('#amt-3').value;
			var ac3 = document.querySelector('#act-3').value;
			var ch3 = document.querySelector('#char-3').value;
			var tc3 = document.querySelector('#tc-3').value;
			var vr3 = document.querySelector('#vari-3').value;
			//
			var am4 = document.querySelector('#amt-4').value;
			var ac4 = document.querySelector('#act-4').value;
			var ch4 = document.querySelector('#char-4').value;
			var tc4 = document.querySelector('#tc-4').value;
			var vr4 = document.querySelector('#vari-4').value;

	
			function submitCheck() {
				if ((am1 && ch1 && tc1 && !tc2 && !vr2)||(am2 && ch2 && tc2 && !tc3 && !vr3)||(am3 && ch3 && tc3 && !tc4 && !vr4)||(am4 && ch4 && tc4)) {
					document.getElementById("submitButton").style.display = "block";
				}
				//
				else {
					document.getElementById("submitButton").style.display = "none";
				}
				//if ((am1 && (tc2 || vr2) && (!am2||am2 == 0))||(am2 && (tc3 || vr3) && (!am3||am3 == 0))||(am3 && (tc4 || vr4) && (!am4||am4 == 0))||((tc4 || vr4) && (am4 == 0||!am4))) {
					//document.getElementById("submitButton").style.display = "none";
				//};
			};
			submitCheck()
			
			function actFill(x) {
				document.querySelector("#act-"+x).value = ac1
				document.querySelector("#char-"+x).value = ch1
			};
			
			
			
			if (!ac1) {
				clearX(1,2)
				clearX(1,7)
				clearX(2,2)
				clearX(3,2)
				clearX(4,2)
				clearX(0,21)
			}
			if (ac1) {
				submitCheck()
				unlock("char-1")
				if (ch1) {
					unlock("tc-1")
					unlock("vari-1")
					if (tc1) {
						unlock("amt-1")
						if (am1 && (am1 > 0||am1 < 0)) {
							unlock("tc-2")
							unlock("vari-2")
							timeBlock(1,1)
							if (tc2) {
								actFill(2)
								unlock("amt-2")
								if (am2 && (am2 > 0||am2 < 0)) {
									unlock("tc-3")
									unlock("vari-3")
									timeBlock(2,1)
									if (tc3) {
										actFill(3)
										unlock("amt-3")
										if (am3 && (am3 > 0||am3 < 0)) {
											unlock("tc-4")
											unlock("vari-4")
											timeBlock(3,1)
											if (tc4) {
												actFill(4)
												unlock("amt-4")
												if (am4) {
													timeBlock(4,1)
												};
												if (!am4 || (am4==0)) {
													timeBlock(4,0)
												};
											};
											if (!tc4) {
												//clear4(0)
												clearX(4,1)
												clearX(4,13)
												clearX(4,12)
												clearX(4,14)
												submitCheck()
											};
										};
										if (!am3 || (am3 == 0)) {
											clearX(4,2)
											clearX(4,14)
											clearX(0,15)
											timeBlock(3,0)
											submitCheck()
										};
									};
									if (!tc3) {
										clearX(3,1)
										clearX(4,2)
										clearX(3,13)
										clearX(3,12)
										clearX(3,14)
										submitCheck()
									};
								};
								if (!am2 || (am2 == 0)) {
									clearX(3,2)
									clearX(4,2)
									clearX(0,19)
									clearX(0,16)
									timeBlock(2,0)
									submitCheck()
								};
							};
							if (!tc2) {
								clearX(2,1)
								clearX(3,2)
								clearX(4,2)
								clearX(2,13)
								clearX(2,12)
								submitCheck()
							};
						};
						if (!am1 || (am1 == 0)) {
							
							clearX(2,2)
							clearX(3,2)
							clearX(4,2)
							clearX(0,20)
							clearX(0,17)
							submitCheck()
						};
					};
					if (!tc1) {
						clearX(1,1)
						clearX(2,2)
						clearX(3,2)
						clearX(4,2)
						submitCheck()
					}
				}
				if (!ch1) {
					clearX(1,2)
					clearX(2,2)
					clearX(3,2)
					clearX(4,2)
					clearX(1,14)
					document.getElementById("submitButton").style.display = "none";
				};
				
			}			
		}

var tcjson = []
	var dict = {}
	var baseLength = 0
	var maintab = document.getElementById("mytab");
	var maintotal = document.getElementById("mytotal");
	
	async function loadFile(file) {
		let json = await file.text();
		tcjson = JSON.parse(json)
		baseLength = tcjson.length
		
		
		
		if (file.name.includes("PUBLIC")) {
			clearX(1,3)
		}
		else {
			document.getElementById("act-1").disabled = false;
		}
		
		makeTable()

		

		};
		
	function reapJson() {
		for(var i=0; i<tcjson.length; i++){
			if (tcjson[i].amount==0) {
				console.log(tcjson[i])
				tcjson -= tcjson[i]
				console.log(tcjson)
			}
		}
	}
	
	function clearJson() {
		tcjson = []
	}
	
	
	async function newRow() {
		tcjson.push(dict)
		baseLength = tcjson.length
		makeTable()
	}
	
	
	async function sortData() {
		tcjson = tcjson.sort((a, b) => {
			if (a.character < b.character) {
				return -1;
			}
		});
	}
  
  function downloadSave() {
	sortData()
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var formatTime = today.getHours()
	var ampm
	if (formatTime>=12) {
		formatTime -= 12
		var ampm = "PM"
	}
	else {
		var ampm = "AM"
	}
	var time = formatTime + "-" + today.getMinutes() + ampm;
	var dateTime = date+'_'+time;
	
    const content = JSON.stringify(tcjson);
    var name = document.querySelector("#saveName").value
		
	var fileName
	if (name == "") {
		fileName = "tc_("+dateTime+").bank"
	}
	else {
		fileName = name+"_("+dateTime+").bank"
	}
    const contentType = 'text/plain';

    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

  function downloadPublicSave() {
	sortData()
	
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var formatTime = today.getHours()
	var ampm
	if (formatTime>=12) {
		formatTime -= 12
		var ampm = "PM"
	}
	else {
		var ampm = "AM"
	}
	var time = formatTime + "-" + today.getMinutes() + ampm;
	var dateTime = date+' '+time;
	
	var publicData = tcjson
	for(var i=0; i<publicData.length; i++){
		publicData[i].account = "N/A"
	}
	
    const content = JSON.stringify(publicData);
	var name = document.querySelector("#saveName").value
		
	var fileName
	if (name == "") {
		fileName = "tc(PUBLIC).bank"
	}
	else {
		fileName = name+"(PUBLIC).bank"
	}
	
    const contentType = 'text/plain';

    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

var subButton = document.getElementById("submitButton");
	subButton.addEventListener("click", e => {
		document.getElementById("submitButton").style.display = "none";
		lockForm(1)
		lockForm(2)
		lockForm(3)
		lockForm(4)
		//
		test(1)
		clearX(1,1)
		clearX(1,4)
		clearX(1,10)
		clearX(1,11)
		clearX(1,14)
		if (document.querySelector("#amt-2").value) {
			
			test(2)
		}
		clearX(2,3)
		clearX(2,14)
		if (document.querySelector("#amt-3").value) {
			
			test(3)
		}
		clearX(3,3)
		clearX(3,14)
		if (document.querySelector("#amt-4").value) {
			
			test(4)
		}
		unlockForm(1)
			unlockForm(2)
			unlockForm(3)
			unlockForm(4)
			clearX(4,14)
			clearX(4,3)
	});
	
	async function makeTable() {
		
		for(var i = 1;i<maintab.rows.length;){
            maintab.deleteRow(i);
        }
		for(var i = 1;i<maintotal.rows.length;){
            maintotal.deleteRow(i);
        }
		dup = []
		for(var i=0; i<tcjson.length; i++){

			if (!tcjson[i].amount==0) {
				maintab.innerHTML += "<tr> <td>"+ tcjson[i].account + "</td><td>" + tcjson[i].character + "</td><td><a target=\"_blank\" href=\"https://www.wizard101central.com/wiki/TreasureCard:" + tcjson[i].treasurecard+"\">"+tcjson[i].treasurecard+"</a></td> <td>"+tcjson[i].variation+"</td> <td>"+tcjson[i].amount+"</td> <tr>";
				count = 0
				filtered = tcjson.filter(item => item.treasurecard === tcjson[i].treasurecard);
				if (!dup.includes(tcjson[i].treasurecard)) {
					for(var b=0; b<filtered.length;b++){
					count += filtered[b].amount
				}
				dup.push(tcjson[i].treasurecard)
				maintotal.innerHTML += "<tr> <td><a target=\"_blank\" href=\"https://www.wizard101central.com/wiki/TreasureCard:"+tcjson[i].treasurecard + "\">"+tcjson[i].treasurecard+"</a></td><td>" + count + "</td></tr>";

			}
				
			}
			
		}
		
		
	};