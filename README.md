# Simulador_Aparelho
 Simulador de Aparelho de dentes, onde poderá personalizar a cor do aparelho

 > Como Instalar?
Para Instalar primeiramente você precisa criar uma página HTML e colocar a seguinte estrutura:

"""
<!-- Aqui mostra as opção de cores -->
<div id="option_color">

<!-- Aqui irá mostrar a paleta de cores -->
<div class="option">
    <div id="palette"></div>
</div>

<!-- Aqui irá mostrar as opção que o usuário poderá colorir as borrachas -->
<div class="option">
    <div id="tooth_appliance_region"></div>
</div>

</div> 

<!-- Aqui carrega a imagens do aparelho de dente -->
<p>Basta selecionar a cor e depois apertar nas opção que deseja colorir</p>
<div id="image_tooth_simulation"></div>

"""

> Carregando o css
Para carregar o css, basta inserir o seguinte código na área header do documento HTML.
<link rel="stylesheet" href="css/simulation.css">

> Carregar o script
No final do documento, após o </body> carregue o documento de script que é responsável de dá vida ao
simulador.
<script src="js/init.js"></script>

 Veja a demontração [acessando aqui](https://danilosantana240765.github.io/Simulador_Aparelho/)