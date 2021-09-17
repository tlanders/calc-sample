import React from "react";

type Props = {
    celsius: number,
}

const BoilingVerdict = ({celsius} : Props) => {
    console.log('celsius: ', celsius);
    if (celsius >= 100) {
        return <p>The water would boil.</p>;
    } else {
        return <p>The water would not boil.</p>;
    }
}

export default BoilingVerdict;