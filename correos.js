
let correos =[

    "fabian.serna@upb.edu.co",
    "fabianserna2013@gmail.com",
    "andres@upb.edu.co",
    "julian@upb.edu.co",
    "sebas@upb.edu.co",
    "sebas@gmail.com",
    "sebas2@gmail.com",
]

correosFiltrados = correos.filter(correo => correo.includes("@upb.edu.co"));
 console.log(correosFiltrados); 