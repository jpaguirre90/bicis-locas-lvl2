function validateForm(){
	function alertar(mensaje,elem){	//funcion dentro de otra funcion, para crear mensajes en html
		var span=elem.parentNode.children[2];
		if(!span){
			var span=document.createElement('span');
		}
		span.innerHTML=mensaje;
		elem.parentNode.appendChild(span);
	}
	function eliminar_span(elem){
		var span=elem.parentNode.children[2];
		if(!span){
			return;
		}
		elem.parentNode.removeChild(span);
	}
	var nombre=document.getElementById('name');
	var apellidos=document.getElementById('lastname');
	var email= document.getElementById('input-email');
	var pass = document.getElementById('input-password');
	var bicicleta=document.getElementsByTagName('select')[0];

	if (nombre.value==null || nombre.value.length==0 || /^\s+$/.test(nombre.value)){
		alertar('Ingrese nombre',nombre);
		}else if(!nombre.value.match(/^[a-zA-Z]+$/)){
			alertar('Ingresa nombre solo con letras',nombre);
		}else if(nombre.value[0]!=nombre.value[0].toUpperCase()){
			alertar('La primera letra del nombre debe ser en mayuscula',nombre);
	}else{
		eliminar_span(nombre);
	}
	if (apellidos.value==null || apellidos.value.length==0 || /^\s+$/.test(apellidos.value) ) {
		alertar('ingrese apellido',apellidos);
		}else if(!apellidos.value.match(/^[a-zA-Z]+$/)){
			alertar('Ingresa apellidos solo con letras',apellidos);
		}else if(apellidos.value[0]!=apellidos.value[0].toUpperCase()){
			alertar('La primera letra del apellido debe ser en mayuscula',apellidos);
	}else{
		eliminar_span(apellidos);
	}
	if (email== null) {
		alertar('ingrese su email por favor',email);
		}else if(! /^\w+@\w+\.\w+$/.test(email.value)){
			alertar('Ingrese el email correcto',email);
	}else{
		eliminar_span(email);
	}
	if (pass=='') {
		alertar('Ingrese una contraseña',pass);
		}else if(pass.value.length<6){
			alertar('Ingrese contraseña mayor a 6 caracteres',pass)
		}else if (pass.value=='password' || pass.value=='123456' || pass.value=='654321'){
			alertar('La contraseña no puede ser password, ni 123456 o 654321',pass)
	}else{
		eliminar_span(pass);
	}
	if (bicicleta.value=='0') {
		alertar('Selecciona tipo de bicicleta',bicicleta);
	}else{
		var span=bicicleta.parentNode.children[1];
		if(!span){
			return;
		}
		bicicleta.parentNode.removeChild(span);
	}
}