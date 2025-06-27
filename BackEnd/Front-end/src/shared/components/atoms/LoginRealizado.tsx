
function LoginRealizado() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <>
      <h2>Bem-vindo, {user.name} {user.surname}!</h2>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>
    </>
  );
}

export default LoginRealizado;