// inputs
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
//enviar 
const btnCalcular = document.getElementById("calculate");

const resultadoInput = document.getElementById("result");
const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const diaLaboral = (findeSemana) => {
    switch (findeSemana) {
        case 1:

        case 2:

        case 3:

        case 4:

        case 5:

            return "día laboral"

            default: "fin de semana"
            break;

    }
}

const calculate = () => {
    const dd = new Date(yearInput.value, monthInput.value -1 , dayInput.value);
    const findeSemana = dd.getDay();
    resultadoInput.value = `${dias[findeSemana][0] + dias[findeSemana].slice(1)}, ${diaLaboral(findeSemana)}`

}


const fineInputs = event => {
    event.preventDefault();
    yearInput.value && monthInput.value && dayInput.value ? calculate() : alert('');
}

btnCalcular.addEventListener("click", fineInputs); 