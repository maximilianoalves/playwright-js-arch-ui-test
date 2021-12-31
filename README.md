<h1 align="center"> Exemplo de estrutura para projetos utilizando playwright </h1>

## Tecnologias utilizadas:  
- [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [npm](https://www.npmjs.com/)
- [playwright](https://playwright.dev/)
- [jest](https://jestjs.io/)

## Estrutura de arquivos

📦playwright-arch-example  
 ┣ 📂allure-results  
 ┃ ┣ 📜2094b072-0e34-4f06-856b-8ef4bd346faa-testsuite.xml  
 ┃ ┗ 📜783b98b6-c65f-473d-9bd6-c785ed393d69-testsuite.xml  
 ┣ 📂tests  
 ┃ ┣ 📂pages  
 ┃ ┃ ┣ 📜Base.page.js  
 ┃ ┃ ┣ 📜CreateAccount.page.js  
 ┃ ┃ ┣ 📜Home.page.js  
 ┃ ┃ ┣ 📜MyAccount.page.js  
 ┃ ┃ ┗ 📜SignIn.page.js  
 ┃ ┣ 📂specs  
 ┃ ┃ ┣ 📜createUser.spec.js  
 ┃ ┃ ┗ 📜login.spec.js  
 ┃ ┗ 📂utils  
 ┃ ┃ ┗ 📜Utils.js  
 ┣ 📜.gitignore  
 ┣ 📜README.md  
 ┣ 📜jest-playwright.config.js  
 ┣ 📜jest.config.js  
 ┣ 📜jest.setup.js  
 ┣ 📜package-lock.json  
 ┗ 📜package.json  

## Exemplos de execução:

- Instalar as dependencias: ```npm i```
- Executar os testes: ```npm run test```
- Abrir o relatório: ```npm run report:open```  
  - _se a task não for executada corretamente instala a dependencia do allure-commandline e o allure de forma global: ```npm i -g allure-commandline allure```_  

![Allure report](docs/imgs/report.png)
