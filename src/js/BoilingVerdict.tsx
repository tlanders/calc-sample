import React from "react";

type Props = {
    celsius: number,
    children: JSX.Element
}

const BoilingVerdict = ({celsius, children} : Props) => {
    console.log('celsius: ', celsius);
    const message = (celsius >= 100) ? (<p>The water would boil.</p>) : (<p>The water would not boil.</p>);
    return (
        <>
            {message}
            {children}
        </>
    );
}

export default BoilingVerdict;