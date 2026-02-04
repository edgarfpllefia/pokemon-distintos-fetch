import { useState } from "react";
import { Cards } from "./components/Cards";
import { useEffect } from "react";
import { Button } from "./components/Button";
import "./index.css";

function App() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  const [carga, setCarga] = useState(0);
  const [carga1, setCarga1] = useState(0);
  const [carga2, setCarga2] = useState(0);

  useEffect(() => {
    primerBoton();
  }, []);

  function primerBoton() {
    setArrayPokemon([]);
    let listaCopia = [];
    const start = Date.now();
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then((data) => {
        listaCopia.push(data);
        fetch("https://pokeapi.co/api/v2/pokemon/2")
          .then((response) => response.json())
          .then((data) => {
            listaCopia.push(data);
            fetch("https://pokeapi.co/api/v2/pokemon/3")
              .then((response) => response.json())
              .then((data) => {
                listaCopia.push(data);
                fetch("https://pokeapi.co/api/v2/pokemon/4")
                  .then((response) => response.json())
                  .then((data) => {
                    listaCopia.push(data);
                    fetch("https://pokeapi.co/api/v2/pokemon/5")
                      .then((response) => response.json())
                      .then((data) => {
                        listaCopia.push(data);
                        fetch("https://pokeapi.co/api/v2/pokemon/6")
                          .then((response) => response.json())
                          .then((data) => {
                            listaCopia.push(data);
                            fetch("https://pokeapi.co/api/v2/pokemon/7")
                              .then((response) => response.json())
                              .then((data) => {
                                listaCopia.push(data);
                                fetch("https://pokeapi.co/api/v2/pokemon/8")
                                  .then((response) => response.json())
                                  .then((data) => {
                                    listaCopia.push(data);
                                    fetch("https://pokeapi.co/api/v2/pokemon/9")
                                      .then((response) => response.json())
                                      .then((data) => {
                                        listaCopia.push(data);
                                        fetch(
                                          "https://pokeapi.co/api/v2/pokemon/10",
                                        )
                                          .then((response) => response.json())
                                          .then((data) => {
                                            listaCopia.push(data);
                                            fetch(
                                              "https://pokeapi.co/api/v2/pokemon/11",
                                            )
                                              .then((response) =>
                                                response.json(),
                                              )
                                              .then((data) => {
                                                listaCopia.push(data);
                                                fetch(
                                                  "https://pokeapi.co/api/v2/pokemon/12",
                                                )
                                                  .then((response) =>
                                                    response.json(),
                                                  )
                                                  .then((data) => {
                                                    listaCopia.push(data);
                                                    setArrayPokemon(listaCopia);
                                                    const end = Date.now();
                                                    setCarga(end - start);
                                                  });
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  }

  async function segundoBoton() {
    setArrayPokemon([]);
    let listaCopia = [];
    const start = Date.now();
    await fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/3")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/4")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/5")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/6")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/7")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/8")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/9")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/10")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/11")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    await fetch("https://pokeapi.co/api/v2/pokemon/12")
      .then((response) => response.json())
      .then((data) => listaCopia.push(data));
    setArrayPokemon(listaCopia);
    const end = Date.now();
    setCarga1(end - start);
  }

  function tercerBoton() {
    setArrayPokemon([]);
    const start = Date.now();
    const urls = [
      "https://pokeapi.co/api/v2/pokemon/1",
      "https://pokeapi.co/api/v2/pokemon/2",
      "https://pokeapi.co/api/v2/pokemon/3",
      "https://pokeapi.co/api/v2/pokemon/4",
      "https://pokeapi.co/api/v2/pokemon/5",
      "https://pokeapi.co/api/v2/pokemon/6",
      "https://pokeapi.co/api/v2/pokemon/7",
      "https://pokeapi.co/api/v2/pokemon/8",
      "https://pokeapi.co/api/v2/pokemon/9",
      "https://pokeapi.co/api/v2/pokemon/10",
      "https://pokeapi.co/api/v2/pokemon/11",
      "https://pokeapi.co/api/v2/pokemon/12",
    ];
    const promesas = urls.map((url) =>
      fetch(url).then((response) => response.json()),
    );
    Promise.all(promesas).then((pokemons) => {
      setArrayPokemon(pokemons);
      const end = Date.now();
      setCarga2(end - start);
    });
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Comparación de Métodos Fetch
        </h1>

        {/* Botones */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Button onClick={primerBoton} carga={carga}>
            Callback Hell
          </Button>
          <Button onClick={segundoBoton} carga={carga1}>
            Await Secuencial
          </Button>
          <Button onClick={tercerBoton} carga={carga2}>
            Promise.all
          </Button>
        </div>

        {/* Grid Pokemon */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">
            Pokemon: {arrayPokemon.length}/12
          </h2>

          <div className="grid grid-cols-6 gap-4">
            {arrayPokemon.map((pokemon) => (
              <Cards key={pokemon.name} data={pokemon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
