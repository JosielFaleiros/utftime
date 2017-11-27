$(document).ready(function(){

    $('#enviar').click(function(){

        let campos = $('label').text().split(':');
        let tamanho = campos.length - 1;
        for(let i = 0; i < tamanho; ++i){
            if( $(`input[name=sel${i+1}]`).val() == '' ){
                alert(`Campo ${campos[i].toLowerCase()} está vazio`);
                return;
            }
        }

        if( !/^[a-z0-9]*@alunos\.utfpr\.edu\.br$/.test( $("input[name=sel1]").val()) ){
            alert(`Email inválido!`);
            return;
        }

        $.ajax({
            method: 'GET',
            url: "/login",
            contentType: 'application/json', 
            data: JSON.stringify({ 
                email: $("input[name=email").val(),
                senha: $("input[name=senha").val()
            }),
            success: function(result){
                alert(result.mensagem);
            }
        });

    });
});