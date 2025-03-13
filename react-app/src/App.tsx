import Card, { Cardbody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = [];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      <Cardbody title="Holi" text="Esto va bien creo" />
      {list.length !== 0 ? (
        <List data={list} oneSelect={handleSelect}/>
      ) : (
        "No hay contenido"
      )}
    </Card>
  );
}

export default App;
