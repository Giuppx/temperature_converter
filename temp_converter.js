function tempConverter(event) {
    let inputName = event.target.name;

    console.log(inputName)

    let tCelsius;
    let tFahrenheit;
    let tKelvin;

    const celsiusInput = document.getElementById('input-celsius');
    const fahrenheitInput = document.getElementById('input-fahrenheit');
    const kelvinInput = document.getElementById('input-kelvin');

    if (event.key === 'Enter') {

        if (event.target.value === '') {
            alert('please, insert a value');
            return;
        }

        switch (inputName) {
            case 'celsius':

                tCelsius = celsiusInput.value;
                tFahrenheit = celsiusToFahrenheit(tCelsius).toFixed(2);
                tKelvin = celsiusToKelvin(tCelsius).toFixed(2);

                fahrenheitInput.value = tFahrenheit;
                kelvinInput.value = tKelvin;

                break;

            case 'fahrenheit':

                tFahrenheit = fahrenheitInput.value;
                tCelsius = fahrenheitToCelsius(tFahrenheit).toFixed(2);
                tKelvin = fahrenheitToKelvin(tFahrenheit).toFixed(2);

                celsiusInput.value = tCelsius;
                kelvinInput.value = tKelvin;

                break;

            case 'kelvin':
                tKelvin = kelvinInput.value;
                tCelsius = kelvinToCelsius(tKelvin).toFixed(2);
                tFahrenheit = kelvinToFahrenheit(tKelvin).toFixed(2);

                celsiusInput.value = tCelsius;
                fahrenheitInput.value = tFahrenheit;

                break;

            default:
                break;
        }
    }

}


function celsiusToFahrenheit(tCelsius) {
    return (tCelsius * 1.8) + 32;

}

function celsiusToKelvin(tCelsius) {
    return +tCelsius + 273.15;
}

function fahrenheitToCelsius(tFahrenheit) {
    return (tFahrenheit - 32) / 1.8;

}

function fahrenheitToKelvin(tFahrenheit) {
    return (tFahrenheit - 32) / 1.8 + 273.15;
}

function kelvinToCelsius(tKelvin) {
    return tKelvin - 273.15;
}

function kelvinToFahrenheit(tKelvin) {
    return (tKelvin - 273.15) * 1.8 + 32;
}