import React from "react";

enum ScaleNames {
    CELSIUS = 'Celsius',
    FAHRENHEIT = 'Fahrenheit'
};

type Props = {
    onTemperatureChange: (temp: string) => void,
    temperature: string,
    scale: string
};

const TemperatureInput: React.FC<Props> = ({onTemperatureChange, temperature, scale}) => {
    const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>
                Enter temperature in {scale === ScaleNames.CELSIUS ? ScaleNames.CELSIUS : ScaleNames.FAHRENHEIT}:
            </legend>
            <input value={temperature}
                   onChange={handleChange} />
        </fieldset>
    );
};

export default TemperatureInput;