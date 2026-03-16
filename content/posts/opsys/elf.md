+++
date = '2026-03-13T19:11:37-06:00'
draft = false
tags = ["test", "blog"]
categories = ["notes"]
title = 'Destripando ELF'
description = 'Explotando elf!'

cover.image ="/images/elf.jpg"
+++
## Introduccion
Elf o ejecutable, es el archivo de tipo ejecutable en los sistemas operativos tipo Unix.
Aprenderas las unidades elementales de es tipo de archivo, llegando al punto de poder "explotarlo" si sabes a que parte pertenece que cosa. 

## Que es un ejecutable?
Antes del proceso, hubo un programa. y antes del programa, hubo codigo y datos. Elf o elf es el tipo estandar ejecutable de SO's tipo Unix, (el .exe, para los windowBros).
Cuando Nosotros escribimos un programa fuente,ejemplo, hola.c

```c
#include <stdio.h>

int main(){
  printf("Kernelizados!");
  return 0;
}
```


A nuestros ojos este es un sencillo programa que escribe en la salida un simple mensaje. Tiene la ventaja de que es legible para nosotros. La gran pregunta es: El sistema operativo lo entiende?, la respuesta corta es un no. Para nuestra computadora este es un tipo de archivo sin mas, no es especial y no puede hacer nada interesante con el y esa es la principal idea, un archivo legible y entendible para nosotros. 

## La comoputadora como una maquina multinivel
Hace algunos anios un gran ingeniero del que seguramente has escuchado hablar o leido alguna vez, definio la maquina como un sistema multinivel.

| nivel 1 |
| ------------- |
| Nivel 0 |
| nivel 1 |
| nivel |
| Item1 |
| Item1 |
