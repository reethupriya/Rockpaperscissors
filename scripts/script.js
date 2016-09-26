
var possibles = ['paper','scissor','rock']
var wons = loss = tie = parseInt(0);

function clickedOn(clicked){
	var userSelected = clicked;
	var systemSelected = getRandomValue();
	$('#boatSel').html(systemSelected);
	updateWinner( userSelected, systemSelected);
}

function getRandomValue(){
	return possibles[parseInt(Math.random()*(possibles.length))];
}
function updateWinner(us,cs){
	if(us == cs){
		tie++;
		$('#tie').html(tie);
	}
	else if(us == 'rock'){
		if(cs=='scissor'){
			wons++;
			$('#won').html(wons);
		}else{
			loss++;
			$('#loss').html(loss);
		}
	}
	else if(us == 'scissor'){
		if(cs=='paper'){
			wons++;
			$('#won').html(wons);
		}else{
			loss++;
			$('#loss').html(loss);
		}
	}
	else if(us == 'paper'){
		if(cs=='rock'){
			wons++;
			$('#won').html(wons);
		}else{
			loss++;
			$('#loss').html(loss);
		}
	}

}	

function resetCounter(){
	wons = loss = tie = parseInt(0);	
	$('#scoreList').hide();
	$('#btn-list').hide();
	$('#won, #loss, #tie, #minits, #seconds').html(0);
	$('#minits, #seconds').val(0);
	clearInterval(interval);
	$('#err,#timer,#countdown,#boatSel').html('');
}
function timeUp(){
	clearInterval(interval);
	$('#scoreList').show();
	$('#btn-list').hide();
	$('#minits, #seconds').val(0);
	$('#err,#timer,#countdown,#boatSel').html('');
}

function startTimer(){
	wons = loss = tie = parseInt(0);	
	$('#scoreList').hide();
	$('#won, #loss, #tie').html(0);
	$('#err,#timer,#countdown,#boatSel').html('');
	

	minutes = $('#minits').val();
	seconds = $('#seconds').val();
	
	if(isNaN(minutes) || !minutes || !seconds || isNaN(seconds)){
		$('#err').html('Please Enter Integer values');
		return false;
	}
		$('#btn-list').show();
		interval = setInterval(function(){
		var element = $('#countdown');
		
		if(seconds == 0){
			if(minutes == 0){
				element.html('<span>countdown Over</span>');
				clearInterval(interval);
					timeUp();
				return;
			}else{
				minutes--;
				seconds = 60;
			}
		}

			if(minutes < 1 ){
				if(seconds < 11){
					var sec_txt = seconds + (seconds > 1 ? 'Seconds' : 'Second');
					element.html ( sec_txt+' '+' remaining');
				}

			}else{
				var sec_txt = '';
			}

		$('#timer').html(minutes +' : '+ seconds);

		seconds --;
	},1000);


}