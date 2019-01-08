
export default function getRandomColor(){
    const colors =[
        '#495057',
        '#f03e3',
        '#d6336c',
        '#ae3ec9',
        '#181818',
        '#494942',
        '#238129',
        '#272034',
        '#011321',
        '#772811',
        '#667103',
        '#273618',
        '#998212',
    ];

    const random =Math.floor(Math.random()*13);
    return colors[random];
}

