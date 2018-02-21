# Projeto API EQS

Este projeto é parte do teste apresentado pela EQS. A primeira parte é um projeto de API utilizando .Net Core 2.0 e pode ser encontrado neste [Link](https://github.com/j-ew-s/eqs-access-control-api).

### Tecnologias utilizadas 
* Angular (5.2)
* Angular-cli 1.7.0
* Jquery 3.3.1
* Bootstrap 3.3.7
* [Multiselector](https://github.com/softsimon/angular-2-dropdown-multiselecton/)
* [Infinity Scroll](https://github.com/orizens/ngx-infinite-scroll)
* [JWT](https://github.com/auth0/angular2-jwt)


### Organização do projeto
##### [Components](https://github.com/j-ew-s/eqs-access-control-web-client/tree/master/EQS.AccessControl.Web/src/app/components)
* Components e seus respectivos módulos

##### [Service](https://github.com/j-ew-s/eqs-access-control-web-client/tree/master/EQS.AccessControl.Web/src/app/service)
* Chamadas as APIS do projeto
* Validações de Token
* Controle de acesso

##### [Shared](https://github.com/j-ew-s/eqs-access-control-web-client/tree/master/EQS.AccessControl.Web/src/app/shared)
* Entidades
* Tratamentos genéricos
* Enumeradores
* Validações


### Observação

O projeto deve ser executado utilizando a porta 13001. Caso utilize outra porta, deverá acessar o [projet api](https://github.com/j-ew-s/eqs-access-control-api). e trocar o Audience para executar o consumo correto das APIS.



