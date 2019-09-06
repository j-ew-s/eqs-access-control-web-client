# EQS Client API Project

Projecto utilizado para avaliação da UnoDigital (eqs-global). Para fins de registro existe um projeto de API utilizando .Net Core 2.0 e pode ser encontrado neste [Link](https://github.com/j-ew-s/eqs-access-control-api).

This Project is in use for positions  at UnoDigital (eqs-global). There is another project API project in .Net Core 2.0 that can be found in this [Link](https://github.com/j-ew-s/eqs-access-control-api).


### Tecnologias utilizadas / Tech stack
* Angular (5.2)
* Angular-cli 1.7.0
* Jquery 3.3.1
* Bootstrap 3.3.7
* [Multiselector](https://github.com/softsimon/angular-2-dropdown-multiselecton/)
* [Infinity Scroll](https://github.com/orizens/ngx-infinite-scroll)
* [JWT](https://github.com/auth0/angular2-jwt)


### Estrutura do projeto / Project structure
##### [Components](https://github.com/j-ew-s/eqs-access-control-web-client/tree/master/EQS.AccessControl.Web/src/app/components)
* Components e seus respectivos módulos / Components and its modules

##### [Service](https://github.com/j-ew-s/eqs-access-control-web-client/tree/master/EQS.AccessControl.Web/src/app/service)
* Chamadas as APIS do projeto / Calls to Web API (Rest) project
* Validações de Token / Token Validation
* Controle de acesso / Access Control

##### [Shared](https://github.com/j-ew-s/eqs-access-control-web-client/tree/master/EQS.AccessControl.Web/src/app/shared)
* Entidades / Entities
* Tratamentos genéricos / Generic handlers
* Enumeradores / Enumerators
* Validações / Validations


### Observação / Observation

O projeto deve ser executado utilizando a porta 13001. Caso utilize outra porta, deverá acessar o [projet api](https://github.com/j-ew-s/eqs-access-control-api). e trocar o Audience para executar o consumo correto das APIS.

This project should use the port 13001. If you decide to change its port, you must change  the Audience on Web API project projet api](https://github.com/j-ew-s/eqs-access-control-api).



