//URL de la API
const URL = 'https://jsonplaceholder.typicode.com/users';

const table = document.querySelector('#initialTable');
const divTable = document.querySelector('#divTable');
const tableContainer = document.querySelector('#table-container');

let aux = true; // variable para colocarle el fondo de color a las filas de la tabla

function createUserRow(users){
    //Creamos las filas mediante los datos de la API o de los valores introducidos por el usuario
    users.forEach(user => {
        const tdName = document.createElement('td');
        tdName.classList.add('columnData');
        tdName.innerHTML = user.name;

        const tdUsername = document.createElement('td');
        tdUsername.classList.add('columnData');
        tdUsername.innerHTML = user.username;

        const tdEmail = document.createElement('td');
        tdEmail.classList.add('columnData');
        tdEmail.innerHTML = user.email;

        const tdPhone = document.createElement('td');
        tdPhone.classList.add('columnData');
        tdPhone.innerHTML = user.phone;

        const tdWeb = document.createElement('td');
        tdWeb.classList.add('columnData');
        tdWeb.innerHTML = user.website;

        const trData = document.createElement('tr');
        //agregamos la funcion para la vista de detalles de los usuarios
        trData.addEventListener('click', () => {
            var modalEl = document.createElement('div');
            modalEl.classList.add('divDetails');
        
            mui.overlay('on', modalEl);


            //Top Section
            const xMenu = document.createElement('div');
            xMenu.classList.add('mui-col-md-6', 'x');
            const x = document.createElement('p');
            x.innerHTML = 'X';
            x.addEventListener('click', () =>{
                mui.overlay('off', modalEl);
            })

            const profile = document.createElement('div');
            profile.classList.add('mui-col-md-6', 'profile');
            profile.innerHTML = 'Perfil';

            const divTopSection = document.createElement('div');
            divTopSection.classList.add('mui-row');

            //Middle section

            const personImg = document.createElement('img');
            personImg.src = `./images/${user.username}.jpg`;
            personImg.classList.add('mui-col-md-12', 'personImg');
            personImg.setAttribute('alt', 'Imagen del Usuario')

            const personName = document.createElement('div');
            personName.innerHTML = user.name;
            personName.classList.add('mui-col-md-12', 'personName');

            const divMiddleSection = document.createElement('div');
            divMiddleSection.classList.add('mui-row');

            //Bottom section

            const personPhone = document.createElement('div');
            personPhone.classList.add('mui-col-md-4');
            const pPhone = document.createElement('p');
            pPhone.innerHTML = `${user.phone}`;

            const personEmail = document.createElement('div');
            personEmail.classList.add('mui-col-md-4');
            const pEmail = document.createElement('p');
            pEmail.innerHTML = `${user.email}`;

            const personWebsite = document.createElement('div');
            personWebsite.classList.add('mui-col-md-4');
            const pWebsite = document.createElement('p');
            pWebsite.innerHTML = `${user.website}`;

            const divBottomSection = document.createElement('div');
            divBottomSection.classList.add('mui-row');

            const divsContainer = document.createElement('div');
            divsContainer.classList.add('mui-container-fluid');

            xMenu.append(x);
            divTopSection.append(xMenu, profile);

            divMiddleSection.append(personImg, personName);

            personPhone.append(pPhone);
            personEmail.append(pEmail);
            personWebsite.append(pWebsite);
            divBottomSection.append(personPhone, personEmail, personWebsite);
            
            divsContainer.append(divTopSection, divMiddleSection, divBottomSection);
            modalEl.append(divsContainer);
        });

        //le agregamos color a la fila

        if(aux){
            trData.style.background = `#EEEEEE`;
            aux = false;
        }else{
            aux = true;
        }

        trData.append(tdName, tdUsername, tdEmail, tdPhone, tdWeb);
        table.append(trData);
        divTable.append(table);
        tableContainer.append(divTable);
    });

}

async function getUsersData(){
    //Obtenemos los valores de la API
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const users = data;

    createUserRow(users);
}

function createNewUser(){
    //Creamos un array que contenga un objeto para poder hacer funcionar el forEach a la hora de querer crear la fila del nuevo usuario
    const user = [{
        name: prompt('Name: '),
        username: prompt('Username: '),
        email: prompt('Email: '),
        phone: prompt('Phone: '),
        website: prompt('Website:'),
    }];

    createUserRow(user);
}

getUsersData();