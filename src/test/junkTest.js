const list = [
    {
        id:1,
        value:"un"
    },
    {
        id:2,
        value:"deux"
    },
    {
        id:3,
        value:"trois"
    }
];

function find(id){
    return list.find( element => element.id === id);
}

let chiffre = find(1);

console.log('### before');
console.log(list);

chiffre.value = 'One';

console.log('### after');
console.log(list);
