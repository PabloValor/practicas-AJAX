$(document).on('ready', function() {
	$.get('logos-prueba.html', function(html) {
		$('.contenido').append(html);
	});

	$.get('usuarios.json',function(data) {
		var avatar = new Image();
		avatar.src = data.avatar;
		avatar.title = data.nombre + " " + data.apellido;
		$('.usuario').append(avatar);

		$('<p>Entrenador: '+ data.nombre + data.apellido +'</p>')
		.appendTo('.usuario');
	});
});