
export const searchByText = (text, originalFilms) => {
    let filteredFilms = originalFilms.filter(film => {
        const filmTitle = film.title.toLocaleLowerCase();
        const inputTitle = text.toLocaleLowerCase();

        return filmTitle.indexOf(inputTitle) !== -1 ? true : false
    });

    if (text.length === 0) {
        filteredFilms = originalFilms;
    }
    return filteredFilms;
    
}
export const updateFilmsArray = (state, film, property, propertyValue, type) => {
    const { films, originalFilms } = state;

    const newFilm = { ...film, [property]: propertyValue };
    const updateFilmsArray = [...films];
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

    const copyModifiedFilms = [...originalFilms];
    copyModifiedFilms[index] = newFilm;
    
    return {
      updateFilmsArray,
      copyModifiedFilms
    }
  }