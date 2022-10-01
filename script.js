// inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
//enviar 
const btnCalcular = document.getElementById("calculate");

const resultadoInput = document.getElementById("result");
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const diaLaboral = (findesemana) => {
    switch (findesemana) {
        
        case `1`:

        case `2`:

        case `3`:

        case `4`:

        case `5`:

        return "día laboral"
           
        default: 
        return"descanso"
        break;

    }
}

const calculate = () => {
    const dd = new Date(yearInput.value, monthInput.value -1, dayInput.value);
    const findesemana = dd.getDay()
    resultadoInput.value = `${dias[findesemana][0] + dias[findesemana].slice(1)}, ${diaLaboral(findesemana)}`;

}


const fineInputs = () => {  
    yearInput.value && monthInput.value && dayInput.value ? calculate() : alert('Inputs');
}

btnCalcular.addEventListener("click", fineInputs); 