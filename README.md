# Simulador_Aparelho
 Simulador de Aparelho de dentes, onde poderá personalizar a cor do aparelho

## Como Instalar? 
Para Instalar primeiramente você precisa criar uma página HTML e colocar a seguinte estrutura:

```<div id="simulation">
        <h2>Simulador de Aparelho</h2>
        <!-- Aqui mostra as opção de cores -->
        <div id="option_color">
            <p><strong><span class="material-icons">description</span> instrução:</strong> Basta selecionar a cor e depois apertar na opção que deseja colorir. Você também pode escolher uma cor qualquer e depois clicar em cima do bracket para colorir a borracha do aparelho.</p>
           
            <!-- Mostrar a cor selecionada -->
            <div class="option border_option_radius option_max_width">
                <div id="color_selected" class="border_option_radius"></div>
            </div>

            <!-- Aqui irá mostrar a paleta de cores -->
            <div class="option option_max_width">
                <div class="option_buttom"><span class="material-icons">colorize</span> Selecione uma cor</div>
                <div id="palette"></div>
            </div>
            
            <!-- Aqui irá mostrar as opção que o usuário poderá colorir as borrachas -->
            <div class="option option_max_width">
                <div class="option_buttom"><span class="material-icons">apps</span> Opção de cor</div>
                <div id="tooth_appliance_region"></div>
            </div>
        </div> 

        <!-- Aqui carrega a imagens do aparelho de dente -->
        <div id="show_simulation">
            <div id="image_tooth_simulation"></div>
        </div>
    </div>
```
## Carregando o css
Para carregar o css, basta inserir o seguinte código na área header do documento HTML.
<link rel="stylesheet" href="css/simulation.css">

## Carregar o script
No final do documento, após o </body> carregue o documento de script que é responsável de dá vida ao
simulador.
<script src="js/init.js"></script>

 Veja a demontração [acessando aqui](https://danilosantana240765.github.io/Simulador_Aparelho/)