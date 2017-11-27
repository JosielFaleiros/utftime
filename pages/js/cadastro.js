$(document).ready(function(){

    $('#enviar').click(function(){

        if( $('#sel5').val() != $('#sel6').val() ){
            alert('Senha digitada errada!');
            return;
        }

        let campos = $('label').text().split(':');
        let tamanho = campos.length - 1;
        for(let i = 0; i < tamanho; ++i){
            if( $(`input[name=sel${i}]`).val() == '' ){
                alert(`Campo ${campos[i]} está vazio`);
                return;
            }
        }
        $.ajax({
            method: "POST",
            url: "/cadastro",
            contentType: 'application/json', 
            data: JSON.stringify({ 
                nome: $("input[name=sel1]").val(),
                ra: $("input[name=sel2]").val(),
                cursoId: $("input[name=sel3]").val(),
                email: $("input[name=sel4]").val(),
                senha: $("input[name=sel5]").val()
            }),
            success: function(result){
                alert(result.mensagem);
            }
        });
    });
});