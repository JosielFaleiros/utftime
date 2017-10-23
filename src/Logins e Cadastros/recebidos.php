<!DOCTYPE html>
<html lang="pt-br">
<head>
  <title>Horas complementares</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .rowTable:hover {
      cursor: pointer;
      background: aliceblue;
      transition: 0.5s;

    }
    
    .rowTable:active {
      background: lightblue;
    }
    .mybtn {
      position: relative;
      border: 1px solid powderblue;
      background-color: aliceblue;
      margin-left: 345px;
    
    }
    .btn-file {
      position: relative;
      overflow: hidden;
     
    }
    .mybtn:hover {
      background-color: skyblue;
    }
    .mybtn:active {
      background-color: lightblue;
    }
    .btn-file input[type=file] {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 100%;
      min-height: 100%;
      font-size: 100px;
      text-align: right;
      filter: alpha(opacity=0);
      opacity: 0;
      outline: none;
      background: white;
      cursor: inherit;
      display: block;
    }
    .rowTable:active {
      background: lightblue;
    }
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    .form-control {
      width: 50%;
    }
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 120%;
    }
 
    .navbar-right {
    	margin-right: 20px;
    }
    h1, h2 {
    	text-align: center;
    	color: lightblue;
    }
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    .ative {
      /*background-color: greenyellow;*/
      background-color: hsla(240, 60%, 70%, 0.3);
      padding: 5%;
      border: 1px solid lightgray;
    }
    .ative:active {
      background-color:aqua;
    }
    .aprovado, .devolvido {
      padding: 4%;
      border: 1px solid lightgray;
    }
    .devolvido {
      background-color: hsla(360,100%,70%,0.9);
    }
    .devolvido:active {
      background-color:aqua;
    }
    .aprovado {
      background-color: hsla(120, 60%, 70%, 0.3);
    }
    .aprovado:active {
      background-color: aqua;
    }
    .aprovado:active {

    }
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;}
      .cont {
      	height: 360px;
      } 
  }
  </style>
</head>
<body>


<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-8 text-left"> 
    <div class="container-fluid cont">
             
                    <hr>
                  <table class="table">
                  <thead>
                    <tr>
                      <th>Grupo</th>
                      <th>Ítem</th>
                      <th>Pontos</th>
                      <th>Aprovar</th>
                      <th>Devolver</th>
                      <th>Abrir</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--Conexão com o banco-->
                    <?php
					$count = 0;
                    $conn = new PDO("mysql:dbname=web;host=localhost", "root", "lichiking");
                    $stmt = $conn->prepare("SELECT * FROM documentos");
                    $stmt->execute();
                    
                    while($result = $stmt->fetch(PDO::FETCH_ASSOC)):
                    ?>
                    <!--Construção da tabela com os dados do bd-->

                    <tr class="rowTable">
                    <td><?= $result["grupo"]?></td>
                    <td><?= $result["item"]?></td>
                    <td><?= $result["pontos"]?></td>
                    <td onclick="document.getElementsByClassName('rowTable')[<?= $count?>].style.display = 'none'"><i class="glyphicon glyphicon-ok-circle aprovado"></i></td>
                    <td onclick="document.getElementsByClassName('rowTable')[<?= $count++?>].style.display = 'none'"><i class="glyphicon glyphicon-remove-circle devolvido"></i></td>
                      <td><i class="glyphicon glyphicon-save ative"></i></td>
                    </tr>
					
                    <?php endwhile ?>
                     
                  </tbody>
                </table>
              </script>
    </div>
    </div>
  </div>
 
</div>


<!--<script type="text/javascript" src="teste.js"></script>-->
</body>
</html>