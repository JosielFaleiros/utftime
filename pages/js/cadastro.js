(document).ready(function(){

    $.ajax({
            url: `http://localhost:3000/cadastro`,
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ 
                'email':$("input[name=sel1]").val(),
                'nome': $("input[name=sel2]").val(), 
                'ra': $("input[name=sel3]").val(), 
                'cursoId': $("input[name=sel4]").val(),
                'senha': $("input[name=sel5]").val()
            }),
            success: function(result) {
                if(!result.erro){
                } else {
                    $("#cepInvalido").css("display", "block");
                }
            }
    });


    $("input[name=rua]").val("");
    $("input[name=cidade]").val("");
    $("input[name=uf]").val("");
    $("input[name=bairro]").val("");
    $("input[name=cep]").css("border-color", "#ff8383");

    $("#enviar").submit(function(event){
        event.preventDefault();
    });
});

