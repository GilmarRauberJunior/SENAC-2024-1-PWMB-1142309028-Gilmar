var marcas = ["Ferrari", "Audi", "Lamborgihni", "Aston Martin", "Masserati"];

console.log(`Marcas: ${marcas[0]} ${marcas[1]} ${marcas[2]}`); //O nome dessa parada aqui `${nome variavel}, é interploação, infinitamenete superior que a conacatenação

var carros = ["Aston Martin Valkyre", 
                "Ferrari F40", 
                "Lamborgihni Gallardo", 
                "Bugatti Bolide", 
                "Corolla AE86 - Trueno", 
                "Honda Civic 97 EXS", 
                "Subaru Impreza 22B", 
                "Mitsubishi Lancer EVO VII"
            ];

//for(let i = 0; i < carros.length; i++){
   // console.log(`Carro ${i+1}: ${carros[i]}`);
//}

carros.splice(2,4);

for(let i = 0; i < carros.length; i++){
    console.log(`Carro ${i+1}: ${carros[i]}`);
    console.log(typeof carros[i]);
}