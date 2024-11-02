//imprimir los numeros del uno al 10 usado las tres formas , for , while , do while


//ciclo FOR
for(i=1;i <= 10 ; i+=3){
    console.log(i);
}

for(i=1;i >= -10 ; i-=3){
    console.log(i);
}

//ciclo WHILE
let i_ = 1,  repeticiones = 10;

while(i_ <= repeticiones){
    console.log(i_);
    i_+=3;
}

//ciclo DO WHILE

let _i = 1, repeticiones_ = 10;
do{
    console.log(_i);
    _i+=3;
}while(_i <= repeticiones_);