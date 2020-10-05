
export const searchByText = (text, originalFilms) => {
    const filteredFilms = originalFilms.filter(film => {
        const filmTitle = film.title.toLocaleLowerCase();
        const inputTitle = text.toLocaleLowerCase();

        return filmTitle.indexOf(inputTitle) !== -1;
    });

    const result = text.length === 0 ? originalFilms : filteredFilms;

    return result;
}

export const updateFilmsArray = (state, film, property, propertyValue, type) => {
    const newFilm = { ...film, [property]: propertyValue };
    const updateFilmsArray = [...state.films];
    const index = updateFilmsArray.indexOf(film);

    switch (type) {
      case 'dis':
        newFilm.disliked = !newFilm.disliked;
        break;
      case 'like':
        newFilm.liked = !newFilm.liked;
        break;
      default:
        break;
    }

    newFilm[property] = propertyValue;
    updateFilmsArray[index] = newFilm;

    const copyModifiedFilms = [...state.originalFilms];
    copyModifiedFilms[index] = newFilm;
    
    return { updateFilmsArray, copyModifiedFilms }
  }