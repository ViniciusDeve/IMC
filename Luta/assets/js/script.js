let log = new Log(document.querySelector('.log'))

let char = new Sorcerer('Vinicius');
let monster = new Orc();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

    stage.start();