import MarkdownIt from 'markdown-it';

let md = MarkdownIt();

let result = md.render(`# Manuel Pérez Regalado
### Desarrollador Junior Full-Stack

El Paso (La Palma)  
15/10/1992  
perezregaladomanuel@gmail.com

![](https://i.ibb.co/mXNKkNp/programacion.png) [manuelperezregalado.com](http://manuelperezregalado.com/)  - 
![](https://i.ibb.co/vDzx1Fr/github-1.png) [Pandacore](https://pandacore.github.ioPandacore) - 
![](https://i.ibb.co/S78xVfn/linkedin.png) [Manuel Pérez Regalado](https://www.linkedin.com/in/manuel-perez-regalado/) 

## Education

---

> 2020

**Ciclo Formativo de Grado Superior de Desarrollo Multiplataforma**, CIFP César Manrique. Santa Cruz de Tenerife.

> 2017

**Ciclo Formativo de Grado Superior de Administración de Sistemas Informáticos**, IES José María Pérez Pulido. Los Llanos de Aridane.

## Formación complementaria

---

> 2020

**Cursando actualmente. Curso FullStack**, Escuela de Organización Industrial (EOI). Santa Cruz de Tenerife. 335 horas. Contenidos:
- Front-end (HTML/CSS avanzado, Flexbox, Grid CSS, LESS, SASS, TailWind).
- Programación (Análisis, métodos, optimización y buenas prácticas).
- Back-end (Javascript, Node.js, Go).
- Bases de datos (SQL: SQLite, MariaDB, NoSQL: MongoDB).
- Creación de APIs públicas en el back-end y consumo en el cliente.
- Sistemas/DevOps (Terminal, Linux, Git, GitHub Actions, Cloud Computing...).
- Servidores web (Apache, NGINX).
- Frameworks SPA y React.

> 2017

**DITEC - Formación en Competencias Digitales y Emprendedoras**, Centro de Negocios Dyrecto, Santa Cruz de Tenerife, 180 horas.

## Idiomas

---

- Español nativo.
- Inglés B1. Sin acreditar.

## Experiencia

---

> Marzo 2020 - Junio 2020

**Desarrollador Multiplataforma (Prácticas del CFGS). [LeanMind.](href="https://leanmind.es/es/)** Teletrabajo. Funciones: Realización de proyecto de código abierto sobre voluntariado “Huella positiva” como desarrollador backend (Java y Springboot).

> Junio 2017 - Enero 2018

**Administrador de Sistemas (Prácticas del CFGS). [Demase.](http://www.demasesl.com/)** El Paso. Funciones: Atención a clientes. Gestión de incidencias y servicio técnico.(Java y Springboot).


## Personal

---

Permiso de conducir.

[Inscrito en el Programa de Garantía Juvenil.](https://empresas.infoempleo.com/hrtrends/garantia-juvenil-que-beneficios-obtienen-las-empresas-por-la-contratacion-de-jovenes) 

Last update: November 2020`);

document.body.innerHTML = result
