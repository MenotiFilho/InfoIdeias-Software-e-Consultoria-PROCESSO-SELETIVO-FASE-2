function adicionarOpcoes(bairros) {
	const select = document.querySelector("#bairroInteresse");
	bairros.forEach((bairro) => {
		const option = document.createElement("option");
		option.value = bairro;
		option.textContent = bairro;
		select.appendChild(option);
	});
}

const bairros = [
	"Aeroporto",
	"Aldeia",
	"Alto do Sol",
	"Arco-Íris",
	"Baixa dos Sapos",
	"Balneário",
	"Barra do Céu",
	"Belas Artes",
	"Bosque dos Eucaliptos",
	"Brilhantes",
	"Cachoeira",
	"Café com Leite",
	"Cajueiro",
	"Caminho do Sol",
	"Campo Alegre",
	"Campo Belo",
	"Campo Grande",
	"Campo Limpo",
	"Candelária",
	"Cantareira",
	"Canto do Rio",
	"Canto do Sol",
	"Capim Limão",
	"Capivari",
	"Caraíbas",
	"Casa Branca",
	"Casa Verde",
	"Castelo Branco",
	"Catamarã",
	"Caxangá",
	"Centro",
	"Chácara Flora",
	"Chácara das Flores",
	"Chácara dos Pássaros",
	"Cidade Jardim",
	"Cidade Nova",
	"Coqueiral",
	"Costa Azul",
	"Costa Verde",
	"Costeira",
	"Cuiabá",
	"Curuzu",
	"Diamantina",
	"Dois Irmãos",
	"Eldorado",
	"Encantado",
	"Engenho Velho",
];

adicionarOpcoes(bairros);
