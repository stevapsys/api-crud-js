const url = 'http://localhost:3000/posts';
const divResult = document.getElementById('divResult');




async function sendName(e) {
    e.preventDefault();

    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const jobTitle = document.getElementById('job_title').value;
    
    const user = {
        first_name: firstName,
        last_name: lastName,
        job_title: jobTitle
    }

    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers(
            {
                'Content-Type': 'application/json'
            }
        )
    })

    const response = await fetch(request);
    const result = await response.json();
    console.log(response);
    console.log(result);

    divResult.innerHTML = '';
    getNames();
}

async function editName(id) {
    const url_delete = `http://localhost:3000/posts/${id}`;

    
    const user = {
        first_name: firstName,
        last_name: lastName,
        job_title: jobTitle
    }

    const request = new Request(url_delete, {
        method: 'DELETE',
        body: JSON.stringify(user),
        headers: new Headers(
            {
                'Content-Type': 'application/json'
            }
        )
    })

    const response = await fetch(request);
    const result = await response.json();
    console.log(response);
    console.log(result);

    divResult.innerHTML = '';
    getNames();
}

async function deleteName(id) {
    const url_delete = `http://localhost:3000/posts/${id}`;
    
    const user = {
        first_name: '',
        last_name: '',
        job_title: ''
    }

    const request = new Request(url_delete, {
        method: 'DELETE',
        body: JSON.stringify(user),
        headers: new Headers(
            {
                'Content-Type': 'application/json'
            }
        )
    })

    const response = await fetch(request);
    const result = await response.json();
    console.log(response);
    console.log(result);

    divResult.innerHTML = '';
    getNames();
}

async function getNames(){
    const response = await fetch(url)
    const result =  await response.json();

    result.forEach(element => {
        divResult.insertAdjacentHTML('beforeend', `
        <li>
          <p>${element.first_name}</p>
          <p>${element.last_name}</p>
          <p>${element.job_title}</p>
          <button onclick="deleteName(${element.id})">Deletar</button>
        </li>
      `)
      });
}

getNames();

//Feito com json server
//Dar os comandos npm init para inicializar 
//npm install -g json-server para instalar e criar a pasta db.json
//json-server --watch db.json para inicializar 

