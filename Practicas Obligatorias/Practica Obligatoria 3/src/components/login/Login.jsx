import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        const input = e.target.value;
        setUsername(input);

        if (input.toLowerCase().includes('o')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleRegister = () => {
        if (username === '' || username.toLowerCase().includes('o')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('¡Usuario registrado correctamente!');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={handleChange}
            />
            <button onClick={handleRegister}>Registrarse</button>
            <p>Nombre de usuario: {username}</p>
        </div>
    );
};

export default Login;