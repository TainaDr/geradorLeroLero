function copiarTexto() {
    navigator.clipboard.writeText(listaCopiar);
}

var listaCopiar = '';

function lerolero() {

    var quantParagrafo = document.getElementById("numeroParagrafos").value;
    var nome = document.getElementById("nome").value;
    var titulo = document.getElementById("titulo").value;
    var data = document.getElementById("data").value;
    // var databr = data.split('-').reverse().join('/');
    

    if (nome != "") {
        document.getElementById("nomeUsuario").innerHTML = nome;
    }
    if (data != "") {
    document.getElementById("dataInformada").innerHTML = data;
    }
    if (titulo != "") {  
    document.getElementById("tituloInformado").innerHTML = titulo;
    }

    let leroum = [
        "Caros colegas",
        "Por outro lado",
        "Assim mesmo",
        "Não podemos esquecer que",
        "Do mesmo modo",
        "A prática mostra que",
        "Nunca é demais insistir, uma vez que",
        "A experiência mostra que",
        "É fundamental ressaltar que",
        "O incentivo ao avança tecnológico, assim como",
    ];
    let lerodois = [
        "a execução deste processo",
        "a complexidade dos estudos efectuados",
        "a expansão de nossa atividade",
        "a actual estrutura da organização",
        "o novo modelo estrutural aqui preconizado",
        "o desenvolvimento de formas distintas de actuação",
        "a constante divulgação das informações",
        "a consolidação das estruturas",
        "a análise dos diversos resultados",
        "o início do programa de formação de atitudes",
    ];
    let lerotres = [
        "obriga-nos à análise",
        "cumpre um papel essencial de formação",
        "exige a precisão e a definição",
        "auxilia a preparação e a definição",
        "contribui para a correcta determinação",
        "assumo importante posição na definição",
        "facilita a definição",
        "prejudica a percepção da importância",
        "oferece uma oportunidade de verificação",
        "acarreta um processo",
    ];
    let leroquatro = [
        "das nossas opções de desenvolvimento no futuro.",
        "das nossas metas financeiras e administrativas.",
        "dos conceitos de participação geral.",
        "das atitudes e das atribuições da diretoria.",
        "das novas proposições.",
        "das opções básicas para o sucesso do programa.",
        "do nosso sistema de formação de quadros.",
        "das condições apropriadas para os negócios.",
        "dos Índices pretendidos.",
        "de reformulação das formas de acção.",
    ];

    for (let l = 0; l < quantParagrafo; l++) {


        var paragrafoLista = [];


        for (let i = 0; i <= 4; i++) {

    
            function aleatorio() {
                var sort = Math.floor(Math.random() * 10);
                return sort;
            }

            var sortum = leroum[aleatorio()];
            var sortdois = lerodois[aleatorio()];
            var sorttres = lerotres[aleatorio()];
            var sortquatro = leroquatro[aleatorio()];

            paragrafoLista.push(sortum + " " +sortdois + " " + sorttres + " " + sortquatro);
        }

        var Lerolero = document.getElementById("Lerolero").innerHTML;
        let text = "<p>";
        for (let j = 0; j < paragrafoLista.length; j++) {
            text += paragrafoLista[j] + " ";

            listaCopiar += paragrafoLista[j] + " ";
        }
        text += "</p>";

        document.getElementById("Lerolero").innerHTML = Lerolero + text;
        
    }
}


function imprimir(){
    var imprimirtudo = document.getElementById("impressao").innerHTML;
    var a = window.open('', '', 'height=1000, width=1000');
    a.document.write('<html>');
    a.document.write('<body>');
    a.document.write(imprimirtudo);
    a.document.write('</body></html>');
    a.document.write('<body>');
    a.document.close();
    a.print();
}






















