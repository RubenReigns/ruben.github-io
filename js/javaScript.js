// MegaFormulario
 
function mostrar(id) {
	if (id == "españa") {
		$("#provEsp").show();
		$("#provExt").hide()
	}
	if (id == "extranjero") {
		$("#provExt").show();
		$("#provEsp").hide()
	}
	if (id == "vacio") {
		$("#provEsp").hide();
		$("#provExt").hide();
	}
}


function contarcaracteres(){
	
	var total=120;

	setTimeout(function(){
	var valor = document.getElementById("contador");
	var respuesta = document.getElementById("res");
	var cantidad = valor.value.length;

		respuesta.innerHTML = cantidad + " / " + (total - cantidad);
		if(cantidad > total){
			respuesta.style.color = "#ffffff";	
		}
		
		if(cantidad == total){
			respuesta.style.color = "#C75496"; //fuxia pastel
		}
	},10); /*buscar porque este 10*/
}