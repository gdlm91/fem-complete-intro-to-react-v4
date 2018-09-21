import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer as SearchConsumer } from "./SearchContext";

class SearchParams extends React.Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds: []
  };

  render() {
    return (
      <SearchConsumer>
        {searchContext => (
          <form className="search-params" onSubmit={this.props.search}>
            {/** Location */}
            <label htmlFor="location">
              Location
              <input
                onChange={searchContext.handleLocationChange}
                id="location"
                value={searchContext.location}
                placeholder="Location"
              />
            </label>

            {/** Animal */}
            <label htmlFor="animal">
              Animal
              <select
                id="animal"
                value={searchContext.animal}
                onChange={searchContext.handleAnimalChange}
                onBlur={searchContext.handleAnimalChange}
              >
                <option />
                {ANIMALS.map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>

            {/** Breed */}
            <label htmlFor="breed">
              Breed
              <select
                id="breed"
                disabled={!searchContext.breeds.length}
                value={searchContext.breed}
                onChange={searchContext.handleBreedChange}
                onBlur={searchContext.handleBreedChange}
              >
                <option />
                {searchContext.breeds.map(breed => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </label>

            <button type="submit">Submit</button>
          </form>
        )}
      </SearchConsumer>
    );
  }
}

export default SearchParams;
