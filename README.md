# tehnologii-web-assignments
Temele de laborator de la materia Tehnologii WEB

## Intrebari

**1. Ce este o resursa (resource) in aplicatia ta?**

O resursa este un spatiu sau serviciu disponibil pe campus (biblioteca, cantina, sala de studiu, etc.) descris prin: nume, tip, locatie, program si tag-uri.

**2. Da exemplu de un URI si explica componentele acestuia.**

`/pages/library.html#program`

- `/pages/library.html` — calea catre fisierul HTML al paginii Biblioteca
- `#program` — fragment identifier care trimite la sectiunea cu id="program" din pagina

**3. Care parti sunt statice si care sunt dinamice?**

- **Statice**: fisierele HTML (library.html, cafeteria.html, events.html)
- **Dinamice**: lista de resurse din index.html, filtrul dupa tag "studiu" si lista de taguri

**4. Este aplicatia ta document-centric sau interactive (sau ambele)? De ce?**

Este predominant document-centric, deoarece paginile contin informatii statice. Exista si un element interactiv (incarcarea si filtrarea datelor din JSON cu JavaScript), deci poate fi considerata ambele, dar majoritatea continutului este static.
