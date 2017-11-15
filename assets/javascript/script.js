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
var playerResult;
var opponentResult;

// Buttons
var playerClick;
var opponentClick;
var attackButton;

var player;
var opponent;

var playerPicked = false;

$(document).ready( function() {

	$('.player').click(playerPick);
	$('.opponent').click(opponentPick);
	$('#attackButton').click(attack);
	$('#restart').click(restart);

	function playerPick() {

		playerClick = ($(this).attr('id'));

		if (playerClick === 'box1') {
			$('#playerLocation').append($('#box1'));
			$('#box1').attr('id', 'player');
			$('#box2 #box3 #box4').addClass('opponent');
			$('#box2 #box3 #box4').removeClass('player');
			playerPicked = true;
		} 	else if (playerClick === 'box2') {
			$('#playerLocation').append($('#box2'));
			$('#box2').attr('id', 'player');
			$('#box1 #box2 #box4').addClass('opponent');
			$('#box1 #box3 #box4').removeClass('player');
			playerPicked = true;
		} 	else if (playerClick === 'box3') {
			$('#playerLocation').append($('#box3'));
			$('#box3').attr('id', 'player');
			$('#box1 #box2 #box4').addClass('opponent');
			$('#box1 #box2 #box4').removeClass('player');
			playerPicked = true;
		}	else if (playerClick === 'box4') {
			$('#playerLocation').append($('#box4'));
			$('#box4').attr('id', 'player');
			$('#box1 #box2 #box3').addClass('opponent');
			$('#box1 #box2 #box3').removeClass('player');
			playerPicked = true;
		}

	};

	if (playerPicked) {

		function opponentPick() {

			opponentClick = ($(this).attr('class'));

			if (opponentClick === 'box1') {
				$('#opponentLocation').append($('#box1'));
				$('#box1').attr('id', 'opponent');
			} 	else if (opponentClick === 'box2') {
				$('#opponentLocation').append($('#box2'));
				$('#box2').attr('id', 'opponent');
			} 	else if (opponentClick === 'box3') {
				$('#opponentLocation').append($('#box3'));
				$('#box3').attr('id', 'opponent');
			}	else if (opponentClick === 'box4') {
				$('#opponentLocation').append($('#box4'));
				$('#box4').attr('id', 'opponent');
			}

		};

	}


// attack function
	// if player or opponent hp is = to or below 0 they lose
	function attack() {
		
		buttonClick = ($(this).attr('id'));

		// if (buttonClick === 'attack') {
		// 	playerResult -= playerHealthPoints
		// }


	};

	if (p1HealthPoints >= 0) {
		$('#opponentHeader').text('You opponent defeated you!');
	} else if (p2HealthPoints >= 0) {
		$('#playerHeader').text('You defeated your opponent!');
	} 

	function restart() {
		location.reload();
	};

	var newP = $('<p>' + p1HealthPoints + '</p>')

	$('#box1').append(newP);
});