const Contador = () => {
  const [contador, setContador] = React.useState(0);
  const Aumentar = () => setContador(contador + 1);
  const Disminuir = () => setContador(contador - 1);
  return (
    <div>
      <h1 className={contador < 0 ? "menor" : "mayor"}>Contador: {contador}</h1>
      <hr></hr>
      <button onClick={Aumentar}>Aumentar</button>
      <button onClick={Disminuir}>Disminuir</button>
    </div>
  );
};
