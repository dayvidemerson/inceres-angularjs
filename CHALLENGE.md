Estas são as estórias que devem ser feitas, cada estória dessa corresponde a uma funcionalidade no PDF. Um documento completamenta o outro.

O desafio deve ser feito em AngularJS, sinta-se livre para utilizar qualquer biblioteca. Faça um mock dos dados para simular um backend da forma que achar melhor, o objetivo do desafio é explorar as features do AngularJS.

**Estória #1**

Eu, como Consultor, preciso ver todos os apontamentos de pragas, porque preciso gerenciar a operação em campo.
	
Definições de pronto:
- DADO que estou em uma página inicial QUANDO clico em uma opção em um menu "Apontamento de Pragas" ENTÃO devo visualizar todos os apontamentos de pragas.
- DADO que estou visualizando os apontamentos ENTÃO devo ter os campos (Data/Hora, Coordenadas, Quantidade, Observações e Etiqueta)
- DADO que minha quantidade é menor que 2, ENTÃO a etiqueta do apontamento deve ser vermelha (#FF0303)
- DADO que minha quantidade é menor que 4 e maior ou igual a 2, ENTÃO a etiqueta do apontamento deve ser amarela (#FFBF00)
- DADO que minha quantidade é maior ou igual a 4, ENTÃO a etiqueta do apontamento deve ser verde (#008E09)

**Estória #2*

Eu, como Consultor, quero ver em um mapa os locais onde os apontamentos de pragas foram feitos, pois preciso validar se a distruição espacial foi feita corretamente.

Definições de pronto:
- DADO que estou na página "Lista de apontamento de pragas" QUANDO clico em "VER MAPA" ENTÃO um mapa com pins nas localizações de cada um dos apontamentos deve ser exibido.


Estória #3

Eu, como Oficial de Campo, preciso fazer um apontamento de pragas, porque avistei uma ou mais enquanto estava em campo e essa informação é importante para o consultor.

Definições de pronto:
	DADO que estou na página "Lista de apontamento de pragas" QUANDO clico em "+ Apontamento" ENTÃO uma janela com um formulário deve aparecer.
	DADO que estou na janela "Criar apontamento de praga" ENTÃO devo ter os campos latitude, longitude e quantidade.
	DADO que estou na janela "Criar apontamento de praga" QUANDO clico em "Apontar" ENTÃO o apontamento deve ser criado.
	DADO que estou na janela "Criar apontamento de praga" QUANDO clico em "Cancelar" ENTÃO o apontamento deve ser cancelado.


Estória #4

Eu, como Consultor, preciso ver todos os apontamentos de formigueiros, porque preciso gerenciar a operação em campo.

Definições de pronto:
	DADO que estou em uma página inicial QUANDO clico em uma opção em um menu "Apontamento de Formigueiros ENTÃO devo visualizar todos os apontamentos de Formigueiros.
	DADO que estou visualizando os apontamentos ENTÃO devo ter os campos (Data/Hora, Coordenadas, Quantidade, Observações e Etiqueta)
	DADO que minha quantidade é menor que 2, ENTÃO a etiqueta do apontamento deve ser vermelha (#FF0303)
	DADO que minha quantidade é menor que 4 e maior ou igual a 2, ENTÃO a etiqueta do apontamento deve ser amarela (#FFBF00)
	DADO que minha quantidade é maior ou igual a 4, ENTÃO a etiqueta do apontamento deve ser verde (#008E09)


Estória #5

Eu, como Consultor, quero ver em um mapa os locais onde os apontamentos de formigueiros foram feitos, pois preciso validar se a distruição espacial foi feita corretamente.

Definições de pronto:
	DADO que estou na página "Lista de apontamento de pragas" QUANDO clico em "VER MAPA" ENTÃO um mapa com pins nas localizações de cada um dos apontamentos deve ser exibido.


Estória #6

Eu, como Oficial de Campo, preciso fazer um apontamento de formigueiros, porque avistei um ou mais enquanto estava em campo e essa informação é importante para o consultor.

Definições de pronto:
	DADO que estou na página "Lista de apontamento de formigueiros" QUANDO clico em "+ Apontamento" ENTÃO uma janela com um formulário deve aparecer.
	DADO que estou na janela "Criar apontamento de formigueiros" ENTÃO devo ter os campos latitude, longitude e quantidade.
	DADO que estou na janela "Criar apontamento de formigueiros" QUANDO clico em "Apontar" ENTÃO o apontamento deve ser criado.
	DADO que estou na janela "Criar apontamento de formigueiros" QUANDO clico em "Cancelar" ENTÃO o apontamento deve ser cancelado.


Estória #7

Eu, como Consultor e Oficial de Campo, gostaria que o app fosse responsivo e que eu pudesse utiliza-lo no meu celular porque as vezes o tablet da empresa acaba a bateria ou preciso verificar uma informação fora da empresa.
	DADO que estou em qualquer página, ENTÃO ela deve se adequar ao dispotivio que estou utilizado (Celular ou tablet/desktop).
 