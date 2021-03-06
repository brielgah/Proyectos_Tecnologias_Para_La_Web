var nombre = document.getElementById('nombre');
var ap_paterno = document.getElementById('ap-paterno');
var ap_materno = document.getElementById('ap-materno');
var telefono = document.getElementById('telefono');
var celular = document.getElementById('cel');
var error = document.getElementById('error');
var boleta = document.getElementById('boleta');
var escuela = document.getElementById('esc-proc');
var email = document.getElementById('mail');
var promedio = document.getElementById('prom');
var fecha = document.getElementById('fech-nac');
var direccion = document.getElementById('direccion');
var municipio = document.getElementById('municipio');
var codigo_postal = document.getElementById('codigo_postal');
var escuela = document.getElementById('esc-proc');
var entidad = document.getElementById('entidad');
var otraEscuela = document.getElementById('otra-esc');

function resetStyles(){
	nombre.classList.remove('is-valid');
	nombre.classList.remove('is-invalid');
	document.getElementById('invalid_nombre').style.display = 'none';
	ap_paterno.classList.remove('is-valid');
	ap_paterno.classList.remove('is-invalid');
	document.getElementById('invalid_ap_paterno').style.display = 'none';
	ap_materno.classList.remove('is-valid');
	ap_materno.classList.remove('is-invalid');
	document.getElementById('invalid_ap_materno').style.display = 'none';
	boleta.classList.remove('is-valid');
	boleta.classList.remove('is-invalid');
	document.getElementById('invalid_boleta').style.display = 'none';
	curp.classList.remove('is-valid');
	curp.classList.remove('is-invalid');
	document.getElementById('invalid_curp').style.display = 'none';
	fecha.classList.remove('is-valid');
	fecha.classList.remove('is-invalid');
	document.getElementById('invalid_fecha').style.display = 'none';
	email.classList.remove('is-valid');
	email.classList.remove('is-invalid');
	document.getElementById('invalid_email').style.display = 'none';
	telefono.classList.remove('is-valid');
	telefono.classList.remove('is-invalid');
	document.getElementById('invalid_telefono').style.display = 'none';
	celular.classList.remove('is-valid');
	celular.classList.remove('is-invalid');
	document.getElementById('invalid_celular').style.display = 'none';
	direccion.classList.remove('is-valid');
	direccion.classList.remove('is-invalid');
	document.getElementById('invalid_direccion').style.display = 'none';
	municipio.classList.remove('is-valid');
	municipio.classList.remove('is-invalid');
	document.getElementById('invalid_municipio').style.display = 'none';
	codigo_postal.classList.remove('is-valid');
	codigo_postal.classList.remove('is-invalid');
	document.getElementById('invalid_codigo_postal').style.display = 'none';
	promedio.classList.remove('is-valid');
	promedio.classList.remove('is-invalid');
	document.getElementById('invalid_promedio').style.display = 'none';
	otraEscuela.classList.remove('is-valid');
	otraEscuela.classList.remove('is-invalid');
	document.getElementById('invalid_otra_esc').style.display = 'none';
	document.getElementById('modal_invalid').style.display = 'none';
}

function validar(){
	resetStyles();
	//console.log('validando');
	var valido = true;
	if(nombre.value === ''){
		nombre.classList.add('is-invalid');
		document.getElementById('invalid_nombre').style.display = 'block';
		document.getElementById('invalid_nombre').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu nombre';
		valido = false;
	}
	else if(hasNumber(nombre.value)){
		nombre.classList.add('is-invalid');
		document.getElementById('invalid_nombre').style.display = 'block';
		document.getElementById('invalid_nombre').getElementsByTagName('p')[0].innerHTML = 'El nombre no puede contener números';
		valido = false;
	}
	else{
		nombre.classList.add('is-valid');
	}
	if(ap_paterno.value === ''){
		ap_paterno.classList.add('is-invalid');
		document.getElementById('invalid_ap_paterno').style.display = 'block';
		document.getElementById('invalid_ap_paterno').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu apellido paterno';
		valido = false;
	}
	else if(hasNumber(ap_paterno.value)){
		ap_paterno.classList.add('is-invalid');
		document.getElementById('invalid_ap_paterno').style.display = 'block';
		document.getElementById('invalid_ap_paterno').getElementsByTagName('p')[0].innerHTML = 'El apellido paterno no puede contener números';
		valido = false;
	}
	else{
		ap_paterno.classList.add('is-valid');
	}
	if(ap_materno.value === ''){
		ap_materno.classList.add('is-invalid');
		document.getElementById('invalid_ap_materno').style.display = 'block';
		document.getElementById('invalid_ap_materno').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu apellido materno';
		valido = false;
	}
	else if(hasNumber(ap_materno.value)){
		ap_materno.classList.add('is-invalid');
		document.getElementById('invalid_ap_materno').style.display = 'block';
		document.getElementById('invalid_ap_materno').getElementsByTagName('p')[0].innerHTML = 'El apellido materno no puede contener números';
		valido = false;
	}
	else{
		ap_materno.classList.add('is-valid');
	}
	if(boleta.value === ''){
		boleta.classList.add('is-invalid');
		document.getElementById('invalid_boleta').style.display = 'block';
		document.getElementById('invalid_boleta').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu número de boleta';
		valido = false;
	}
	else if(!validarBoleta(boleta.value)){
		boleta.classList.add('is-invalid');
		document.getElementById('invalid_boleta').style.display = 'block';
		document.getElementById('invalid_boleta').getElementsByTagName('p')[0].innerHTML = 'La boleta no es válida';
		valido = false;
	}
	else{
		boleta.classList.add('is-valid');
	}
	if(curp.value === ''){
		curp.classList.add('is-invalid');
		document.getElementById('invalid_curp').style.display = 'block';
		document.getElementById('invalid_curp').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu CURP';
		valido = false;
	}
	else if(!validarCurp(curp.value)){
		curp.classList.add('is-invalid');
		document.getElementById('invalid_curp').style.display = 'block';
		document.getElementById('invalid_curp').getElementsByTagName('p')[0].innerHTML = 'Ingresa un CURP válida';
		valido = false;
	}
	else{
		curp.classList.add('is-valid');
	}
	if(fecha.value === ''){
		fecha.classList.add('is-invalid');
		document.getElementById('invalid_fecha').style.display = 'block';
		document.getElementById('invalid_fecha').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu fecha de nacimiento';
		valido = false;
	}
	else if(!validarFecha(fecha.value)){
		fecha.classList.add('is-invalid');
		document.getElementById('invalid_fecha').style.display = 'block';
		document.getElementById('invalid_fecha').getElementsByTagName('p')[0].innerHTML = 'Ingresa una fecha de nacimiento válida';
		valido = false;
	
	}
	else{
		fecha.classList.add('is-valid');
	}
	if(email.value === ''){
		email.classList.add('is-invalid');
		document.getElementById('invalid_email').style.display = 'block';
		document.getElementById('invalid_email').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu correo electrónico';
		valido = false;
		
	}
	else if(!validarEmail(email.value)){
		email.classList.add('is-invalid');
		document.getElementById('invalid_email').style.display = 'block';
		document.getElementById('invalid_email').getElementsByTagName('p')[0].innerHTML = 'Ingresa un correo electrónico válido';
		valido = false;
	}
	else{
		email.classList.add('is-valid');
	}
	if(telefono.value === ''){
		telefono.classList.add('is-invalid');
		document.getElementById('invalid_telefono').style.display = 'block';
		document.getElementById('invalid_telefono').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu número telefónico';
		valido = false;
		
	}
	else if(telefono.value.length != 10 || isNaN(telefono.value)){
		telefono.classList.add('is-invalid');
		document.getElementById('invalid_telefono').style.display = 'block';
		document.getElementById('invalid_telefono').getElementsByTagName('p')[0].innerHTML = 'Ingresa un número telefónico válido, no utilices guiones o espacios';
		valido = false;
	}
	else{
		telefono.classList.add('is-valid');
	}
	if(celular.value === ''){
		celular.classList.add('is-invalid');
		document.getElementById('invalid_celular').style.display = 'block';
		document.getElementById('invalid_celular').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu número de celular';
		valido = false;
		
	}
	else if(celular.value.length != 10 || isNaN(celular.value)){
		celular.classList.add('is-invalid');
		document.getElementById('invalid_celular').style.display = 'block';
		document.getElementById('invalid_celular').getElementsByTagName('p')[0].innerHTML = 'Ingresa un número de celular válido, no utilices guiones o espacios';
		valido = false;
	}
	else{
		celular.classList.add('is-valid');
	}
	if(direccion.value === ''){
		direccion.classList.add('is-invalid');
		document.getElementById('invalid_direccion').style.display = 'block';
		document.getElementById('invalid_direccion').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu dirección';
		valido = false;
	
	}
	else{
		direccion.classList.add('is-valid');
	}
	if(municipio.value === ''){
		municipio.classList.add('is-invalid');
		document.getElementById('invalid_municipio').style.display = 'block';
		document.getElementById('invalid_municipio').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu municipio o delegación';
		valido = false;
	
	}
	else{
		municipio.classList.add('is-valid');
	}
	if(codigo_postal.value === ''){
		codigo_postal.classList.add('is-invalid');
		document.getElementById('invalid_codigo_postal').style.display = 'block';
		document.getElementById('invalid_codigo_postal').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu código postal';
		valido = false;
		
	}
	else if(isNaN(codigo_postal.value)){
		codigo_postal.classList.add('is-invalid');
		document.getElementById('invalid_codigo_postal').style.display = 'block';
		document.getElementById('invalid_codigo_postal').getElementsByTagName('p')[0].innerHTML = 'Ingresa un código postal válido';
		valido = false;
	}
	else{
		codigo_postal.classList.add('is-valid');
	}
	if(promedio.value === ''){
		promedio.classList.add('is-invalid');
		document.getElementById('invalid_promedio').style.display = 'block';
		document.getElementById('invalid_promedio').getElementsByTagName('p')[0].innerHTML = 'Ingresa tu promedio, solo 2 decimales';
		valido = false;
	
	}
	else if(!validarPromedio(promedio.value)){
		promedio.classList.add('is-invalid');
		document.getElementById('invalid_promedio').style.display = 'block';
		document.getElementById('invalid_promedio').getElementsByTagName('p')[0].innerHTML = 'Ingresa un promedio válido, solo 2 decimales';
		valido = false;
	
	}
	else{
		promedio.classList.add('is-valid');
	}
	if(escuela.value === 'otra'){
		if(otraEscuela.value === ''){
			otraEscuela.classList.add('is-invalid');
			document.getElementById('invalid_otra_esc').style.display = 'block';
			document.getElementById('invalid_otra_esc').getElementsByTagName('p')[0].innerHTML = 'Ingresa el nombre de tu escuela';
			valido = false;
		}
		else{
			otraEscuela.classList.add('is-valid');
		}
	}
	rellenarDatos();
	return valido;
}

function rellenarDatos(valido){
//	console.log('rellenando...');
	document.getElementById('tabla_nombre').innerHTML = nombre.value;
	document.getElementById('tabla_ap_paterno').innerHTML = ap_paterno.value;
	document.getElementById('tabla_ap_materno').innerHTML = ap_materno.value;
	document.getElementById('tabla_boleta').innerHTML = boleta.value;
	document.getElementById('tabla_fec_nac').innerHTML = fecha.value;
	document.getElementById('tabla_curp').innerHTML = curp.value;
	document.getElementById('tabla_entidad').innerHTML = entidad.value;
	document.getElementById('tabla_email').innerHTML = email.value;
	document.getElementById('tabla_telefono').innerHTML = telefono.value;
	document.getElementById('tabla_celular').innerHTML = celular.value;
	document.getElementById('tabla_direccion').innerHTML = direccion.value + ' ' + entidad.value + ' CP. ' + codigo_postal.value;
	if(escuela.value === 'otra'){
		document.getElementById('tabla_escuela').innerHTML = otraEscuela.value;
	}
	else{
		document.getElementById('tabla_escuela').innerHTML = escuela.value;
	}
	document.getElementById('tabla_promedio').innerHTML = promedio.value;
}

function validarFecha(fecha){
//	console.log(fecha);
	var fechaN = fecha.split('-');
	var dia = fechaN[2];
	var mes = fechaN[1];
	var ano = fechaN[0];
	var fechaAct = new Date();
//	console.log(fechaAct.getFullYear());
	if(ano >  fechaAct.getFullYear()) return false;
	if(ano == fechaAct.getFullYear() && mes-1 > fechaAct.getMonth()) return false;
	if((ano-0) < 1920) return false;
	return true;
}

function validarEmail(email){
	var arr = email.indexOf('@');
	var dot = email.lastIndexOf('.');
	if(arr == -1 || dot == -1) return false;
	return arr < dot;	
}

function validarBoleta(boleta){
	if(boleta.length != 10) return false;
	if(isNaN(boleta)){
		if(boleta[0] === 'P'){
			if(boleta[1] === 'E' || boleta[1] === 'P'){
				return !isNaN(boleta.substr(2,8));
			}
			return false;
		}
		return false;
	}
	return  true;
}

function hasNumber(element){
	for(var i=0; i<element.length; i++){
		if(element[i] >= '0' && element[i] <= '9')
			return true;
	}
	return false;
}

function validarPromedio(promedio){
	if(isNaN(promedio)) return false;
	var num = parseInt(promedio,10);
	if(num < 0 || num > 10) return false;
//	console.log(/^[0-9]+(\.[0-9]{1,2})?$/.test(promedio));
	return /^[0-9]+(\.[0-9]{1,2})?$/.test(promedio);
}

function validarCurp(curp){
	console.log(curp.length);
	if(curp.length != 18) return false;
	if(hasNumber(curp.substr(0,4))) return false;
	if(isNaN(curp.substr(4,6))) return false;
	if(hasNumber(curp.substr(10,6))) return false;
	return true;
}
