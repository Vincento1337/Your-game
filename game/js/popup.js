$(document).ready(function() {

	var overlay = $('.overlay'),
		questionPopup = $('.modal-question-block'),
		catPopup = $('.modal-cat-block'),
		checkPopup = $('.modal-check-block'),

		questionText = $('.modal-question-text'),

		showAnswer = $('.show-answer'),
		catLink = $('.cat-link'),

		answerContent = $('.modal-answer'),
		answerText = $('.modal-answer-text'),


		closeQuestion = $('.close-modal'),
		closeEsc = $(document);

	// cat-true element show and close start
	$('.row-questions__element[data-cat="true"]').on('click', function(event) {

		var thisElemBg = $(this);
		var thisElemPic = $(this).children('img');

		$('.modal-question-text').text($(this).attr('data-question'));
		$('.modal-answer-text').text($(this).attr('data-answer'));

		catPopup.show();
		overlay.show();
		answerContent.hide();
		answerText.hide();

		catLink.on('click', function(event) {
			catPopup.hide();
			questionPopup.show();

		});

		showAnswer.on('click', function(event) {
			answerContent.show();
			answerContent.css('display', 'flex');
			answerText.show();
		});

		closeQuestion.on('click', function(event) {
			overlay.hide();
			answerContent.hide();
			answerText.hide();
			questionPopup.hide();

			thisElemBg.css('backgroundColor', 'rgba(30, 239, 48, 0.5)');
			thisElemPic.attr('src', 'img/verified.png');
		});
	});
	// cat-true element show and close end

	// cat-false element show and close start
	$('.row-questions__element[data-cat="false"]').on('click', function(event) {

		var thisElemBg = $(this);
		var thisElemPic = $(this).children('img');

		$('.modal-question-text').text($(this).attr('data-question'));
		$('.modal-answer-text').text($(this).attr('data-answer'));

		overlay.show();
		questionPopup.show();
		answerContent.hide();
		answerText.hide();

		showAnswer.on('click', function(event) {
			answerContent.show();
			answerContent.css('display', 'flex');
			answerText.show();
		});

		closeQuestion.on('click', function(event) {
			overlay.hide();
			answerContent.hide();
			answerText.hide();
			questionPopup.hide();

			thisElemBg.css('backgroundColor', 'rgba(30, 239, 48, 0.5)');
			thisElemPic.attr('src', 'img/verified.png');
		});
	});

	
	// cat-false element show and close end

	// escape close start
	closeEsc.keydown(function(event) {
		if ( event.which == 27) {
			overlay.hide();
			questionPopup.hide();
			catPopup.hide();
			answerContent.hide();
			answerText.hide();
		}
	});
	// escape close end
});