function encriptar() {
	let texto = document.getElementById('texto').value;
	let tituloMensaje = document.getElementById('titulo-mensaje');
	let parrafo = document.getElementById('parrafo');
	let munieco = document.getElementById('munieco');

	let textoCifrado = texto
		.replace(/e/gi, 'enter')
		.replace(/i/gi, 'imes')
		.replace(/a/gi, 'ai')
		.replace(/o/gi, 'ober')
		.replace(/U/gi, 'ufat');

	if (document.getElementById('texto').value.length != 0) {
		document.getElementById('texto').value = textoCifrado;
		tituloMensaje.textContent = 'Texto encriptado con éxito';
		parrafo.textContent = 'BIEN HECHO';
		munieco.src = './imagenes/cifrado.png';
	} else {
		munieco.src = './imagenes/muñeco.png';
		tituloMensaje.textContent = '';
		parrafo.textContent =
			'Ingresa el texto que deseas encriptar o desencriptar';
		swal('Ooops', 'No se encontró algún mensaje', 'warning');
	}
}

function desencriptar() {
	let texto = document.getElementById('texto').value;
	let tituloMensaje = document.getElementById('titulo-mensaje');
	let parrafo = document.getElementById('parrafo');
	let munieco = document.getElementById('munieco');

	let textoCifrado = texto
		.replace(/enter/gi, 'e')
		.replace(/imes/gi, 'i')
		.replace(/ai/gi, 'a')
		.replace(/ober/gi, 'o')
		.replace(/ufat/gi, 'u');

	if (document.getElementById('texto').value.length != 0) {
		document.getElementById('texto').value = textoCifrado;
		tituloMensaje.textContent = 'Texto desencriptado con éxito';
		parrafo.textContent = 'BIEN HECHO';
		munieco.src = './imagenes/descifrado.png';
	} else {
		munieco.src = './imagenes/muñeco.png';
		tituloMensaje.textContent = '';
		parrafo.textContent =
			'Ingresa el texto que deseas encriptar o desencriptar';
		swal('Ooops', 'No se encontró algún mensaje', 'warning');
	}
}
