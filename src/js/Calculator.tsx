import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export type TempChangeHandler = (temp: string) => void;
export type TempConverterFunction = (temp: number) => number;

const Calculator: React.FC<Object> = () => {
    const handleCelsiusChange: TempChangeHandler = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange: TempChangeHandler = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const [scale, setScale] = useState('c');
    const [temperature, setTemperature] = useState('');

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />

            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />

            <BoilingVerdict
                celsius={parseFloat(celsius)} />
        </div>
    );
}

const toCelsius: TempConverterFunction = (fahrenheit: number) => {
    return (fahrenheit - 32) * 5 / 9;
}

const toFahrenheit: TempConverterFunction = (celsius: number) => {
    return (celsius * 9 / 5) + 32;
}

const tryConvert = (temperature: string, convert: TempConverterFunction) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator;