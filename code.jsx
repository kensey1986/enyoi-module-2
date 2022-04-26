function Saludando(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Saludando name="Sara" />;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);