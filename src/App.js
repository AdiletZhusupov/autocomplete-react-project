import { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      enteredLetters: "",
      matchedCharacters: []
    };
  }

  componentDidMount() {
    this.fetchDataFromApi();
  }

  fetchDataFromApi = async () => {
    const url = "https://rickandmortyapi.com/api/character?page=1";
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({ characters: data.results });
  };

  handleInputChange = (e) => {
    const { characters } = this.state;
    const inputValue = e.target.value;
    const filtered = characters.filter((character) => {
      return character.name.toLowerCase().includes(inputValue.toLowerCase());
    });
    this.setState({
      enteredLetters: inputValue,
      matchedCharacters: filtered
    });
  };
  handleListClick = (characterName) => {
    this.setState({
      enteredLetters: characterName,
      matchedCharacters: []
    });
  };
  render() {
    const { characters, enteredLetters, matchedCharacters } = this.state;
    return (
      <div className="App">
        {characters.length > 0 && (
          <>
            <Input
              handleInputChange={this.handleInputChange}
              enteredLetters={enteredLetters}
            />
            {enteredLetters.length > 0 && (
              <ul className="listOfCharacters">
                {matchedCharacters.map((character) => {
                  return (
                    <List
                      key={character.id}
                      handleListMouseOver={this.handleListMouseOver}
                      handleListClick={this.handleListClick}
                      characterName={character.name}
                      image={character.image}
                      alt={character.species}
                      enteredLetters={enteredLetters}
                    />
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;


