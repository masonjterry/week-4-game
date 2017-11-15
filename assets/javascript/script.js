// Health Points
var p1HealthPoints = 120;
var p2HealthPoints = 150;
var p3HealthPoints = 100;
var p4HealthPoints = 180;

// Attak Power
var p1AttackPower = 50;
var p2AttackPower = 70;
var p3AttackPower = 60;
var p4AttackPower = 30;

// Counter Attack Power
var p1CounterAttackPower = 70;
var p2CounterAttackPower = 40;
var p3CounterAttackPower = 30;
var p4CounterAttackPower = 60;

// Results
var result1;
var result2;

// Buttons
var playerClick;
var opponentClick;
var attackButton;

$(document).ready( function() {

	$('.player').click(playerPick);
	$('.opponent').click(opponentPick);
	$('#attackButton').click(attack);
	$('#restart').click(restart);

	function playerPick() {

		playerClick = ($(this).attr('id'));

		if (playerClick === 'box1') {
			$('#playerLocation').append($('#box1'));
			$('#box1').attr('id', 'player1');
			$('#box2 #box3 #box4').addClass('opponent');
		} 	else if (playerClick === 'box2') {
			$('#playerLocation').append($('#box2'));
			$('#box2').attr('id', 'player1');
			$('#box1 #box2 #box4').addClass('opponent');
		} 	else if (playerClick === 'box3') {
			$('#playerLocation').append($('#box3'));
			$('#box3').attr('id', 'player1');
			$('#box1 #box2 #box4').addClass('opponent');
		}	else if (playerClick === 'box4') {
			$('#playerLocation').append($('#box4'));
			$('#box4').attr('id', 'player1');
			$('#box1 #box2 #box3').addClass('opponent');
		}

	};

	function opponentPick() {

		opponentClick = ($(this).attr('class'));

		if (opponentClick === 'box1') {
			$('#opponentLocation').append($('#box1'));
			$('#box1').attr('id', 'player2');
		} 	else if (opponentClick === 'box2') {
			$('#opponentLocation').append($('#box2'));
			$('#box2').attr('id', 'player2');
		} 	else if (opponentClick === 'box3') {
			$('#opponentLocation').append($('#box3'));
			$('#box3').attr('id', 'player2');
		}	else if (opponentClick === 'box4') {
			$('#opponentLocation').append($('#box4'));
			$('#box4').attr('id', 'player2');
		}

	};

	function attack() {
		
		buttonClick = ($(this).attr('id'));

		if (buttonClick === 'attack') {
			$('').
		}


	};

	if (p1HealthPoints >= 0) {
		$('#opponentHeader').text('You opponent defeated you!');
	} else if (p2HealthPoints >= 0) {
		$('#playerHeader').text('You defeated your opponent!');
	} 

	function restart() {
		location.reload();
	};
});