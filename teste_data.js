const date = new Date();

const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() retorna 0-11, por isso somamos 1
const year = date.getFullYear();

console.log(`${day}/${month}/${year}`);