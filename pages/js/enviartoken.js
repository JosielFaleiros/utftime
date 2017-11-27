$(document).ready(function(){

    $.ajax({
        method: 'GET',
        url: '/logado',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
        success: function(result){
        }
    });

});