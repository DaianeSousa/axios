const api = axios.create({
     baseURL: "http://localhost:3000"



});

const section = "users";
const record = [];

const $ = selector => document.querySelector(selector);

async function listar(endpoint = `/${section}`) {
    try {
        const response = await api.get(endpoint);
        


    } catch (tomate) {
     console.log("Erro na consulta: " + tomate.message)

    }
}

async function carregar() {
    record =await listar();
    console.log(record);

}

carregar();

function renderizar() {
    const isUsers = section === "users";
    $ (`#page-title`).textContent = isUsers ? "Usuários" : "Produtos";
    $(`#table-header`).innerHTML = isUsers 
    ? `<tr><th>Id</th><th>Nome</th><th>Email</th></tr>`
    : `<tr><th>Id</th><th>produto</th><th>Preço</th></tr>`;
    $(`#table-body`).innerHTML = record.map(
        item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nome} ?? "-"}</td>
            <td>${item.email} ?? item.preco}</td>
        </tr> `
    );
}