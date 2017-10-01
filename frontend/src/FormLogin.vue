<template>
  <form class="container-fluid text-center" v-on:submit.prevent="fazerLogin">
    <div class="row content">
      <div class="col-sm-8 text-left">
        <div class="container-fluid col-md-offset-6 col-centered">
          <h2>Login</h2>
          <hr>
          <div class="form-group">
            <label for="email">Email:</label>
            <div class="input-group ra">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="text" class="form-control" v-model="login.email" placeholder="@utfpr.edu.br @alunos.utfpr.edu.br">
            </div>

          </div>
          <div class="form-group">
            <label for="senha">Senha:</label>
            <div class="input-group senha">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input type="password" class="form-control" v-model="login.senha" minlength="4" maxlength="8" size="8" placeholder="até 8 digitos">
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
  </form>
</template>
<script>
export default {
  name: 'formlogin',
  data () {
    return {
      login: {
        email: '',
        senha: ''
      },
      cadastro: {},
      recuperar: {}
    }
  },
  methods: {
    fazerLogin: function () {
      console.log(this.login)
      $.ajax({
        url: '/api/login',
        type: 'POST',
        data: this.login,
        success: function (result) {
          if (result.redirectURL) {
            window.location.href = window.location.origin + result.redirectURL
          }
        }
      })
    }
  }
}
</script>
