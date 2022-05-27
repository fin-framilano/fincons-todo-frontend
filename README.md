# Front-end Esercitazione Finale

## Descrizione
Struttura di front-end sviluppata con Angular per l'applicazione di esercitazione TODO.
Il progetto prevede due moduli principali, home e sign. Il primo consente di visualizzare il proprio spazio utente, fornendo la possibilità di creare, eliminare e ricercare dei promemoria, il secondo permette la registrazione e il login da parte del cliente.

Le route raggiungibili sono:
- http://localhost:4200/sign/in
- http://localhost:4200/sign/up
- http://localhost:4200/home/:id/list
- http://localhost:4200/home/:id/form
- http://localhost:4200/home/:id/search

## Istruzioni per l'utilizzo
Per poter lanciare l'applicazione è necessario installare le dipendenze necessarie con:

```npm install```

Per lanciare l'applicazione:

```ng serve```
## Visualizzazione grafica dei moduli, componenti e servizi principali
![diagramma classi e moduli](https://i.imgur.com/LmBD8EZ.png)

### Ambiguità
1. È stato aggiunto un selector manuale per lo stato del promemoria, mentre probabilmente un servizio separato dovrebbe aggiornare (in base alla data odierna) lo stato di ciascuno di essi.
2. Non è stata implementata la Lambda function in AWS dato il poco tempo per "digerire" l'argomento trattato meno di 24 ore prima della prova, in una modalità prettamente teorica
3. È stato aggiunto un sistema di login e registrazione per gli utenti, nonostante non fosse propriamente esplicitato nella traccia

### Strumenti
- [Visual Studio Code](https://code.visualstudio.com/)
- [Json-Server](https://github.com/typicode/json-server) per il debugging e il testing

### Dipendenze
- [Angular@Core / Angular@CLI 13.3.6](https://angular.io/cli)
- [ts-md5](https://www.npmjs.com/package/ts-md5) per cifrare in MD5

### Project Management
- [NPM 8.10.0](https://www.npmjs.com/)
- [Node 16.15.0](https://nodejs.org/en/download/)

