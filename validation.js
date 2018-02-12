$(document).ready(function(){
	//Walidacja name
	$('#name').on('blur', function(){
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 4 && name_length <= 12){
			input.next('.komunikat').text("Poprawna nazwa").removeClass("blad").addClass('positive');
		}
		else {
			input.next('.komunikat').text("Imię musi mieć od 3 do 13 znaków ").removeClass('positive').addClass('blad');
		}
	});
	//Walidacja lastName
		$('#lastName').on('blur', function(){
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 4 && name_length <= 12){
			input.next('.komunikat').text("Poprawna nazwa").removeClass("blad").addClass('positive');
		}
		else {
			input.next('.komunikat').text("Zbyt krótka nazwa ").removeClass('positive').addClass('blad');
		}
	});



// Walidacja emaila

	$('#email').on('blur', function(){
		var input = $(this);
		var regexp_email=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = regexp_email.test(input.val());
		if(is_email){
			input.next('.komunikat').text("Poprawny email").removeClass("blad").addClass('positive');
		}
		else {
			input.next('.komunikat').text("Wprowadź poprawną nazwę email ").removeClass('positive').addClass('blad');
		}
	});
	/*
	$('#submit input').click(function(){
		var name = $('#name');
		var email = $("#email");
		var lastName = $("#lastName");
		if(name.hasClass('positive') && email.hasClass('positive') && lastName.hasClass('positive')) {
			alert("Pomyślnie wysłano formularz")
		}
		else {
			event.preventDefault();
			alert("Uzupełnij wszystkie pola")
		}
	})*/
});