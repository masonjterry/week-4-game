// // Health Points
// var p1HealthPoints = 120;
// var p2HealthPoints = 150;
// var p3HealthPoints = 100;
// var p4HealthPoints = 180;

// // Attak Power
// var p1AttackPower = 50;
// var p2AttackPower = 70;
// var p3AttackPower = 60;
// var p4AttackPower = 30;

// // Counter Attack Power
// var p1CounterAttackPower = 70;
// var p2CounterAttackPower = 40;
// var p3CounterAttackPower = 30;
// var p4CounterAttackPower = 60;

// // Results
// var result1;
// var result2;

// // Buttons
// var buttonClick;
// var attackButton;

// // Document ready function
// $(document).ready(function () {

// 	// Click to pick player
// 	$('.box').on('click', function() {
// 		buttonClick = $(this).attr('id');
// 		console.log('i clicked the box');

// 		if (buttonClick === 'box1') {
// 			console.log('Box 1 clicked');
// 			$('#playerLocation').append($('#box1'));
// 			$('#box1').addClass('fight');
// 			$('#box1').addClass('fight');
// 			$('#box2 #box3 #box4').addClass('opponent');
// 		} 	else if (buttonClick === 'box2') {
// 			$('#playerLocation').append($('#box2'));
// 			$('#box2').addClass('fight');
// 			$('#box1 #box2 #box4').addClass('opponent');
// 		} 	else if (buttonClick === 'box3') {
// 			console.log('Box 3 clicked');
// 			$('#playerLocation').append($('#box3'));
// 			$('#box3').addClass('fight');
// 			$('#box1 #box2 #box4').addClass('opponent');
// 		}	else if (buttonClick === 'box4') {
// 			console.log('Box 4 clicked');
// 			$('#playerLocation').append($('#box4'));
// 			$('#box4').addClass('fight');
// 			$('#box1 #box2 #box3').addClass('opponent');
// 		}

// 	});

// 		// Click to pick opponent
// 		$('.opponent').on('click', function() {
// 			buttonClick = ($(this).attr('id'));

		// if (buttonClick === 'box1') {
		// 	$('#opponentLocation').append($('#box1'));
		// 	$('#box1').attr('id', 'player1');
		// } 	else if (buttonClick === 'box2') {
		// 	$('#opponentLocation').append($('#box2'));
		// 	$('#box2').attr('id', 'player1');
		// } 	else if (buttonClick === 'box3') {
		// 	$('#opponentLocation').append($('#box3'));
		// 	$('#box3').attr('id', 'player1');
		// }	else if (buttonClick === 'box4') {
		// 	$('#opponentLocation').append($('#box4'));
		// 	$('#box4').attr('id', 'player1');
		// }

// 		var buttonElement = $('<button>' + Attack + '</button>');

// 		$(buttonElement).attr({id: 'attackButton', class: 'clickElement'});

// 		$('#buttonLocation').append(buttonElement);

// 		});

// 		// Click to attack
// 		$('#attackButton').on('click', function() {

// 			var attackButton = ($(this).attr('id');

// 			if (attackButton === '#attackButton') {
// 				result1 = player1HealthPoints - player2AttackPoints;
// 				result2 = player2HealthPoints - player1CounterAttackPoints;
// 			}

// 			if (result1 <= 0) {
// 				// game over;
// 			} else if (result2 <= 0) {
// 				// game over;
// 			}

// 		});

// });

// click function for player
// click function for opponent
// click function for attack
// click function for new game

var buttonClick;

$(document).ready( function() {

	$('.player').click(playerPick);
	$('.opponent').click(opponentPick);
	$('#attackButton').click(attack);
	$('#restart').click(restart);

	function playerPick() {

		buttonClick = ($(this).attr('id'));

		if (buttonClick === 'box1') {
			$('#playerLocation').append($('#box1'));
			$('#box1').attr('id', 'player1');
			$('#box2 #box3 #box4').addClass('opponent');
		} 	else if (buttonClick === 'box2') {
			$('#playerLocation').append($('#box2'));
			$('#box2').attr('id', 'player1');
			$('#box1 #box2 #box4').addClass('opponent');
		} 	else if (buttonClick === 'box3') {
			$('#playerLocation').append($('#box3'));
			$('#box3').attr('id', 'player1');
			$('#box1 #box2 #box4').addClass('opponent');
		}	else if (buttonClick === 'box4') {
			$('#playerLocation').append($('#box4'));
			$('#box4').attr('id', 'player1');
			$('#box1 #box2 #box3').addClass('opponent');
		}
	};

	function opponentPick() {

		buttonClick = ($(this).attr('id'));

		if (buttonClick === 'box1') {
			$('#opponentLocation').append($('#box1'));
			$('#box1').attr('id', 'player2');
		} 	else if (buttonClick === 'box2') {
			$('#opponentLocation').append($('#box2'));
			$('#box2').attr('id', 'player2');
		} 	else if (buttonClick === 'box3') {
			$('#opponentLocation').append($('#box3'));
			$('#box3').attr('id', 'player2');
		}	else if (buttonClick === 'box4') {
			$('#opponentLocation').append($('#box4'));
			$('#box4').attr('id', 'player2');
		}

	};

	function attack() {
		
		buttonClick = ($(this).attr('id'));

		if () {
			
		}


	};

	function restart() {
		location.reload();
	};
});