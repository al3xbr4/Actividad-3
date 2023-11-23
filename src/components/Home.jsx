// Este componente define la pantalla principal después de iniciar sesión.
// Utiliza Redux para acceder al estado global de autenticación y realiza operaciones como logout.

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginActions } from '../redux/storelogin';

function Home() {
  const user = useSelector((state) => state.login); // Selector para acceder al estado de autenticación.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Efecto para redirigir a la página de inicio si el usuario no está autenticado.
  useEffect(() => {
    if (!user || !user.isAutenticated) {
      navigate('/');
    }
  }, [user, navigate]);

  // Manejador para logout.
  const handleLogout = () => {
    dispatch(loginActions.logout());
    navigate('/');
  };

  // Efecto para imprimir en la consola los datos del usuario.
  useEffect(() => {
    console.log('Datos del usuario:', user);
  }, [user]);

  // Estructura visual del componente.
  return (
    <div>
      {user && user.isAutenticated ? (
        <>
          <h1>Domingo Alexandre Bordón Rosa</h1>
          <h2>{`Usuario: ${user.userName}, Rol: ${user.userRol}`}</h2>
          <button onClick={handleLogout}>Salir</button>
        </>
      ) : null}
    </div>
  );
}

export default Home;
