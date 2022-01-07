//constante para armazenar o endereço da API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
//constante do botão da interação com o DOM
const catBtn = document.getElementById('change-cat');
// pegando a imagem 
const catImg =  document.getElementById('cat');

//função para carregar os gatos
const  getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        //converte dados recebidos em json
        const json = await data.json();

        return json.webpurl;
    }
    //caso apresente erro, mostra mensagem do erro
    catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    //coloca a URL que recebe do getCats dentro da imagem
    catImg.src = await getCats();
}

//incluíndo evento listener no botão
catBtn.addEventListener('click', loadImg);

//para a página já inicializar com uma imagem
loadImg();