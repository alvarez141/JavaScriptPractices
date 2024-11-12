# Funciones en JavaScript

Una función es un bloque de código **reutilizable** que realiza una tarea en particular.

- **Una función puede tener parámetros de entrada** y también puede devolver un valor de salida.
- Estos valores de entrada y salida son _opcionales_.

## Ejemplo

```javascript
function imprimir(numero) { // numero es un parámetro
    console.log(numero);
}

let variable = 100; // variable es un argumento
imprimir(variable); 
```
## Procedimiento: no regresa ningun valor
```javascript
    funcion imprimir(numero) {
        console.log(numero);
    }
```
## Función: regresa un valor
```javascript
    funcion sumar(numero1, numero2) {
        return numero1 + numero2;
    }
    let a = 2 , b= 3 , c;
    c = sumar(a,b);
    console.log(c);
```

