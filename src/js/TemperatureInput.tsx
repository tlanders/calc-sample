import React from "react";
import {TempChangeHandler} from "./Calculator";

enum ScaleNames {
    CELSIUS = 'Celsius',
    FAHRENHEIT = 'Fahrenheit'
};

type Props = {
    onTemperatureChange: TempChangeHandler,
    temperature: string,
    scale: string
};

type ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;

const TemperatureInput: React.FC<Props> = ({onTemperatureChange, temperature, scale}) => {
    const handleChange: ChangeEventHandler = (e) => {
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