// Carregando a div para colocar as opcao de cores 
let div_option_color = document.querySelector("#palette");
let div_tooth_appliance_region = document.querySelector("#tooth_appliance_region");

// Criando objeto para manipular a canvas do HTML
var DrawToothAppliance = {
    width: 400,
    height: 200,
    canvas: undefined, // Guarda o elemento canvas para a criação dos eventos
    context:  undefined, //document.getElementById("tooth_face").getContext("2d"), // Salva o tipo de contexo de desenho
    sourceImg: "img/aparelho.png", // O nome da imagens que representa o aparelho de dente
    imgObject: new Image(), // O Objeto de Imagens para auxiliar no desenho da imagem

    coords_rubber: {

        // Coordenada e opção de cor das borrchada do canto superior
        higher: {
            rubber1: {
                x: 30,
                y: 20,
                w: 20,
                h: 30,
                color: "#000000"
            },

            rubber2: {
                x: 53,
                y: 29,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber3: {
                x: 90,
                y: 46,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber4: {
                x: 143,
                y: 48,
                w: 40,
                h: 40,
                color: "#000000"
            },

            rubber5: {
                x: 200,
                y: 48,
                w: 40,
                h: 40,
                color: "#000000"
            },

            rubber6: {
                x: 250,
                y: 40,
                w: 40,
                h: 40,
                color: "#000000"
            },

            rubber7: {
                x: 300,
                y: 35,
                w: 25,
                h: 25,
                color: "#000000"
            },

            rubber8: {
                x: 325,
                y: 30,
                w: 20,
                h: 20,
                color: "#000000"
            }
        },

        // Coordenada e opção de cor das borrchada do canto inferior
        bottom: {
            rubber9: {
                x: 86,
                y: 80,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber10: {
                x: 120,
                y: 90,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber11: {
                x: 158,
                y: 95,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber12: {
                x: 203,
                y: 95,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber13: {
                x: 243,
                y: 90,
                w: 30,
                h: 30,
                color: "#000000"
            },

            rubber14: {
                x: 280,
                y: 80,
                w: 30,
                h: 30,
                color: "#000000"
            }
        }
    },

    // Criando o elemento canva do HTML tooth_face
    createCanvas(){
        let image_tooth_simulation = document.getElementById("image_tooth_simulation");
        image_tooth_simulation.innerHTML = "";
        let canvas = MySimulator.interface.addElements("canvas", image_tooth_simulation, {
            width: DrawToothAppliance.width,
            height: DrawToothAppliance.height,
            id: "tooth_face"
        });
        
        return canvas;
    },

    // Metodo para carregar o desenho
    prepare(){
        DrawToothAppliance.canvas = DrawToothAppliance.createCanvas(); // Pegando o elemento canva criado

        DrawToothAppliance.context = DrawToothAppliance.canvas.getContext("2d");

        DrawToothAppliance.imgObject.onload = () => {

            // Fazendo os desenho das borrachas da parte superior
            let higher_coords = DrawToothAppliance.coords_rubber.higher;
            for(rubber in higher_coords){
                DrawToothAppliance.context.fillStyle = higher_coords[rubber].color;
                DrawToothAppliance.context.fillRect(higher_coords[rubber].x, higher_coords[rubber].y, higher_coords[rubber].w, higher_coords[rubber].h);
            }

            // Fazendo os desenho das borrachas da parte inferior
            let bottom_coords = DrawToothAppliance.coords_rubber.bottom;
            for(rubber in bottom_coords){
                DrawToothAppliance.context.fillStyle = bottom_coords[rubber].color;
                DrawToothAppliance.context.fillRect(bottom_coords[rubber].x, bottom_coords[rubber].y, bottom_coords[rubber].w, bottom_coords[rubber].h);
            }

             // Desenhando a imagem da modela com aparelho de dente
             DrawToothAppliance.context.drawImage(DrawToothAppliance.imgObject, 0, 0, DrawToothAppliance.width, DrawToothAppliance.height);
            
            // Aplicando o desenho no canva
            DrawToothAppliance.context.stroke();
        };

        // Carregando a Imagem
        DrawToothAppliance.imgObject.src = DrawToothAppliance.sourceImg;
    },


    // Metodo para colorir as borrachas
    setColorRubbers(regions_tooth, color, even = false, odd = false){
        let tot_rubber = 1;
        if(!even && !odd){ // Caso não seja nem PAR e nem IMPAR
            for(region_tooth in regions_tooth){
                regions_tooth[region_tooth].color = color;
            }
        } else if (even && !odd){ // Caso for PAR
            for(region_tooth in regions_tooth){
                if(tot_rubber % 2 == 0){
                    regions_tooth[region_tooth].color = color;
                }
                tot_rubber++;
            }
        }else { // Caso for IMPAR
            for(region_tooth in regions_tooth){
                if(tot_rubber % 2 == 1){
                    regions_tooth[region_tooth].color = color;
                }
                tot_rubber++;
            }
        }
    },

    // Metodo para colorir as borrachas da parte superior
    setColorHigher(color, even = false, odd = false){
        DrawToothAppliance.setColorRubbers(DrawToothAppliance.coords_rubber.higher, color, even, odd);
    },

    // Metodo para colorir as borrachas da parte inferior
    setColorBottom(color, even = false, odd = false){
        DrawToothAppliance.setColorRubbers(DrawToothAppliance.coords_rubber.bottom, color, even, odd);
    },

    // Metodo modificadores
    setWidth(width){
        DrawToothAppliance.width = width;
    },

    setHeight(height){
        DrawToothAppliance.height = height;
    },

    getWidth(){
        return DrawToothAppliance.width;
    },

    getHeight(){
        return DrawToothAppliance.height;
    },

    // Evento para manipular a cor da borracha de forma  personazada pelo usuario
    onclickCanvas(){
        DrawToothAppliance.canvas.onclick = (evt) => {
            let recNav = DrawToothAppliance.canvas.getBoundingClientRect();

            // Capturando o click do usuario
            posClick = {
                x: evt.clientX - recNav.left,
                y: evt.clientY - recNav.top
            };

            // Pegando o tamanho do elementos que aumenta dinamicamente
            let tooth_face = document.getElementById("tooth_face");
            let widthElement = tooth_face.clientWidth;
            let heightElement = tooth_face.clientHeight;

            /*
            * A variável pctX e pctY fica responsável por guardar a porcentagem relativa
            * a mudança de tamanho do elemento canvas. Isso é, o algoritmo indentifica se o plano
            * carteseano X e Y da imagens foi mudada e com isso permite que a cor seja aplicada da forma correta.
            * Basicamente esse algoritmo identifica onde está a borracha do aparelho de dentes.
            */
            let pctX =  widthElement * 100 / DrawToothAppliance.width;
            let pctY =  heightElement * 100 / DrawToothAppliance.height;

            
            console.log("Monstrando logs...");
            // Verificando e quais borrachas a cor pode ser atendida
            for(region in DrawToothAppliance.coords_rubber){
                // Percorrendo as superficies, tanto de cima como na parte de baixo
                for(rubbers in DrawToothAppliance.coords_rubber[region]){

                    // Variável para auxiliar na manipulação da cor
                    let rubber = DrawToothAppliance.coords_rubber[region][rubbers];
                    
                    /*
                    * O objeto "calc" faz o calculo para calcular a quantidade de mundança que houve em relação
                    * ao valor x e y definido inicialmente. Isso permite identificar o local exato onde o usuário irá clicar 
                    * e calcular a diferência de mudança.
                    */
                    calc = {
                        x: rubber.x * pctX / 100,
                        y: rubber.y * pctY / 100,
                        w: rubber.w * pctX / 100,
                        h: rubber.h * pctY / 100
                    }

                    console.log(posClick);
                    console.log(calc);
                    console.log("\n");

                    if(posClick.x >= calc.x && posClick.x <= calc.x + calc.w && posClick.y >= calc.y && posClick.y <= calc.y + calc.h){
                        rubber.color = MySimulator.selected_color;
                        DrawToothAppliance.draw();
                    }
                    
                }

            }

            console.log("-----------------------------------------------\n");
        };
    },

    // Metodo para cerragar todas configuração
    draw(){
        // Carregando o simulador
        DrawToothAppliance.prepare();

        // DrawToothAppliance.prepare();
        DrawToothAppliance.onclickCanvas();
    }


}


// Criando os objeto para a manipulacao do simulador
var MySimulator = {

    // Atributos
    selected_color: undefined,
    lists_color: {
        yellow: "#FFEA02", // Amarelo
        lilac: "#c8a2c8", // Lilás
        orange: "#FF5100", // Laranja
        rose: "#FF86B7", // Rosa
        purple: "#993399", // Roxo 
        grape: "#CE27BD", // Uva
        green: "#2FB15D", // Verde
        pearl_green: "#0A705C", // Verde Perola
        green_lemon: "#B6E908", // Verde Limão
        grey: "#72756B", // Cinza
        blue: "#008FE9", // Azul
        white: "#FFFFFF", // Branco
        red: "#FF0101", // Vermelho
        black: "#000000" // Preto
    },
    tooth_appliance_region: [ 
        "Todas",
        "Superiores",
        "Inferiores",
        "Pares",
        "Impares"
    ],

    // Manipulação da interface
    interface: { 
        // Metodo responsavel por carregar as cores na DIV
        loadColor(){
            /*
            * Aqui irá manipular a DOM do HTML para que possar colocar as colores dinamicamente
            */
            let pos_div = 0; // Variável para contar as posição da divs

            for(list_color in MySimulator.lists_color){
               let div = MySimulator.interface.addElements("div", div_option_color, {
                   class: "color_bracket",
                   onclick: `MySimulator.action.selectColor('${list_color}', ${pos_div})`,
               });
              
               // Mudando a propriedade style da tag
               div.style.background = MySimulator.lists_color[list_color]; 

               pos_div++;
            }
        },

        // Metodo responsável por mostrar as opção onde a cor será aplicada
        loadToothApplianceRegion(){
            for(region in MySimulator.tooth_appliance_region){

                let div_region_option = MySimulator.interface.addElements("div", div_tooth_appliance_region, {
                    class: "region_tooth",
                    onclick: `MySimulator.action.buttom('${region}')`
                });

                div_region_option.innerHTML = MySimulator.tooth_appliance_region[region];

            }
        },

        // Metodo para criar elementos e adicionar na DOM
        addElements(element, tagDad, atrributes = []){
            let child = document.createElement(element);
            // Adicionando os atributos na tags quando for necessarios
            for(atrribute in atrributes){
                child.setAttribute(atrribute, atrributes[atrribute]);
            }
            tagDad.appendChild(child);

            return child;
        },

    },

    action: {

        // Metodo que irá controlar os botao
        buttom(posRegion){
            switch(MySimulator.tooth_appliance_region[posRegion]){
                case "Todas":
                    MySimulator.action.all();
                break;
                case "Superiores":
                    MySimulator.action.higher();
                break;
                case "Inferiores":
                    MySimulator.action.bottom();
                break;
                case "Pares":
                    MySimulator.action.even()
                break;
                case "Impares":
                    MySimulator.action.odd();

            }
        },

        // Colocar cor em todos as borrachas
        all(){
            DrawToothAppliance.setColorHigher(MySimulator.selected_color);
            DrawToothAppliance.setColorBottom(MySimulator.selected_color);
            DrawToothAppliance.draw();
        },
        
        // Metodo para colorir a parte superior do aparelho
        higher(even = false, odd = false){
            DrawToothAppliance.setColorHigher(MySimulator.selected_color);
            DrawToothAppliance.draw();
        },

        // Metodo para colorir a parte inferir o aparelho
        bottom(even = false, odd = false){
            DrawToothAppliance.setColorBottom(MySimulator.selected_color);
            DrawToothAppliance.draw();
        },

        // Metodo para colorir a borracha par
        even(){
            DrawToothAppliance.setColorHigher(MySimulator.selected_color, true);
            DrawToothAppliance.setColorBottom(MySimulator.selected_color, true);
            DrawToothAppliance.draw();
        },
        
        // Metodo para colorir a borracha impar
        odd(){
            DrawToothAppliance.setColorHigher(MySimulator.selected_color, false, true);
            DrawToothAppliance.setColorBottom(MySimulator.selected_color, false, true);
            DrawToothAppliance.draw();
        },

        // Metodo para selecionar a cor
        selectColor(posColor, posDiv){
            let div_color_bracket =  document.querySelectorAll(".color_bracket");
            let border;

            for(let pos = 0; pos < div_color_bracket.length; pos++){
                
                if(pos == posDiv){
                    border = "4px dashed #25e7e7";
                }else {
                    border = "1px solid rgba(0, 0, 0, 0.219)";
                }

                div_color_bracket[pos].style.border = border;
            }

            MySimulator.selected_color = MySimulator.lists_color[posColor];

        }
    },

    // Metodo para carregar a aplicação
    init(){
        // Carregar a paleta de cor
        MySimulator.interface.loadColor();

        // Carregar as opções de colorir a região do aparelho de dente
        MySimulator.interface.loadToothApplianceRegion();

        // Carregando o desenho
        DrawToothAppliance.draw();
        
    }
}

// Apos o carregamento do documento carregar aplicação
document.addEventListener("DOMContentLoaded", () => {
    MySimulator.init();
});
