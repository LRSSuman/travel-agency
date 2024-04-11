import { useState } from 'react';
import './Input.css';
const Input = () => {
    const [data, setData] = useState();
    return (
        <div className='input'>
            <input
                type='text'
                placeholder='search here'
                onChange={(e) => {
                    setData(e.target.value);
                }}
            />
            <div className='tt'>{data}</div>
        </div>
    );
};

export default Input;
