# Advanced Javascript Task 1

Sukurti užduočių aplikaciją, kurioje galime:
Peržiūrėti visas užduotis.
Pridėti naują užduotį.
Ištrinti užduotį.
*Redaguoti užduotį.

CRUD: Create, Read, Update, Delete.

Pavyzdinius dizaino failus galime rasti /design/design-example-1.png faile.

## Tikslai

* Frontend paremtas Boostrap 5
* jQuery interakcijų valdymui ir duomenų atvaizdavimui
* Live JSON server duomenų saugojimui - https://github.com/typicode/json-server
* Duomenų struktūra - JSON



## Užduotys

* Sukurti HTML formą su duomenims
* Sukurti norimą dizainą su HTML ir CSS.
* Sukurti jQuery funkciją, kuri gauna duomenis

* Sukurti JSON serverį, kuris saugo duomenis į duomenų bazę
* Sukurti jQuery funkciją, kuri išsaugo duomenis
* Sukurti jQuery funkciją, kuri pažymi užduotį kaip atliktą
* Sukurti jQuery funkciją, užduoties ištryninimui
* Teisingas ir naudotinas atvaizdavimas mobile/tablet ir desktop versijose
** Kokie turimi breakpoints?


### Papildoma informacija
Užduoties galimi statusai: 
* inprogress - užduotis sukurta ir vykdoma
* done - užduotis atlikta


### Papildomos užduotys* 
 - Panaudoti jQuery Data Tables biblioteką.
 - Panaudoti Webpack + Saas kompiliavimui su `npm install --save bootstrap`
 - Galimybė pridėti užduoties atlikimo "deadline"
 - Pridėti CountDown Elementą prie užduoties. 
 - Pridėti klasę "done" prie užduoties, kai ji bus atlikta
 - Pridėti užduočių komentarus.
 - Ištrinti užduočių komentarus.
 - Jei užduoties deadline pasibaigs, ji bus pažymėta kaip "overdue", su raudonu fonu.
 - Užduoties sukūrimas modal lange.
 - Užduočių filtravimas pagal statusą.


### Naudingos Nuorodos

* Boostrap Getting Started Dokumentacija: https://getbootstrap.com/docs/5.2/getting-started/introduction/
* jQuery Atsisiuntimas/CDN instaliacija: https://jquery.com/download/


## JSON Server

JSON Server galime įrašyti naudodamiesi šia komanda
`npm install -g json-server`

JSON Server paleisti galime su terminalo komanda
`json-server --watch db.json`

Ir savo JSON server duombazę pasiekti per: http://localhost:3000/


Jei gauname klaida panašią į (Dirbant su Windows): 

```json-server : File C:\Users\Robertas\AppData\Roaming\npm\json-server.ps1 cannot be loaded because running
scripts is disabled on this system. For more information, see about_Execution_Policies at
````

Paleisti terminalo komandą: 
`set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

Arba paleisti PowerShell kaip administratoriui (Run as administrator)


## REST API 

Savo užduočių duomenis galime pasiekti per:
http://localhost:3000/tasks
