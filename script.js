const botao = document.getElementById('botaoMensagem');
const caixaMensagem = document.getElementById('caixaMensagem');

const frases = [
    "Com dedicação e esforço, todo sonho pode se tornar realidade.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Nunca pare de aprender, crescer e buscar ser o melhor.",
    "Não espere por oportunidades, crie-as.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "Continue firme. O esforço de hoje é o sucesso amanhã.",
    "A jornada de mil milhas começa com um único passo.",
    "Faça de cada dia a sua obra-prima.",
    "Tudo começa com coragem, foco, vontade e muita determinação diária.",
    "Boas-vindas! Que essa jornada traga crescimento, força e evolução."
];

botao.addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const mensagem = frases[indiceAleatorio];
    caixaMensagem.textContent = mensagem;

});
