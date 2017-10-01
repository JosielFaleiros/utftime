<template>
    <div class="container-fluid text-center">
        <div class="row content">
            <div class="col-sm-8 text-left">
                <div class="container-fluid col-md-offset-6 col-centered">
                    <h2>Login Aluno</h2>
                    <hr>
                    <div class="form-group">
                        <label for="sel1">RA:</label>
                        <div class="input-group ra">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input type="text" class="form-control" id="sel1" placeholder="Somente números">
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="sel2">Senha:</label>
                        <div class="input-group senha">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input type="password" class="form-control" id="sel5" minlength="4" maxlength="8" size="8" placeholder="até 8 digitos">
                        </div>
                    </div>
                    <p>Se você não tem uma conta, crie uma <a href="#">aqui</a>
                    </p>
                    <div class="form-group">
                        <button type="submit" class="btn mybtn btn-lg">Entrar</button>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'formlogin'
}
</script>
