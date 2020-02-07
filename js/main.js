function validateForm(){
	var nombre=document.getElementById('name').value;
	var apellidos=document.getElementById('lastname').value;
	var email= document.getElementById('input-email').value;
	var pass = document.getElementById('input-password').value;

	if (nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
		alert("Ingrese nombre");
		return;
	}
	if (apellidos==null || apellidos.length==0 || /^\s+$/.test(apellidos) ) {
		alert('ingrese apellido');
		return;
	}
	if (email== null) {
		alert('ingrese su email por favor');
		return;
	}
	if (pass==null) {
		alert('ingrese pass');
		return;
	}
	if(!nombre.match(/^[a-zA-Z]+$/)){
		alert("Ingresa nombre solo con letras");
		return;
	}
	if(nombre[0]!=nombre[0].toUpperCase()){
		alert("La primera letra del nombre debe ser en mayuscula");
		return;
	}
	if(!apellidos.match(/^[a-zA-Z]+$/)){
		alert("Ingresa apellidos solo con letras");
		return;
	}
	if(apellidos[0]!=apellidos[0].toUpperCase()){
		alert("La primera letra del apellido debe ser en mayuscula");
		return;
	}
	if(! /^\w+@\w+\.\w+$/.test(email)){
		alert("Ingrese el email correcto");
		return;
	}
}