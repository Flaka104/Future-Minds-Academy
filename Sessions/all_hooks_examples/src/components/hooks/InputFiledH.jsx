import React, { useState } from 'react';

function InputFieldH() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => setInputValue(e.target.value);

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default InputFieldH;