import React from 'react';


import '../FilmInfo/filminfo.scss';
import './form-edit.scss';

export function FilmEdit(props) {
    const { viewed, insertFilmInfo, setChangedFilm } = props;

    const id = +props.match.params.id;

    insertFilmInfo(id);

    const prepareData = (e) => {
        e.preventDefault();
        console.log(e.target);
        const editedFilm = {
            id,
            title: e.target.title.value,
            posterUrl: e.target.image.value,
            genres: e.target.genres.value.split(', '),
            actorsIds: e.target.actors.value.split(',').map(el => +el),
            director: e.target.director.value,
            description: e.target.description.value,
            likes: viewed.likes,
            stars: viewed.stars,
            liked: viewed.liked
        }
        console.log(editedFilm)
        setChangedFilm(editedFilm);

        props.history.push(`/film/${id}`);
    }

    // console.log(films,id, film);
    return (
        <React.Fragment>
            {viewed ? (
                <React.Fragment>
                    <form action="" className="formEdit" onSubmit={prepareData}>
                        <label>
                            <span>Title</span>
                            <input type="text" name="title" defaultValue={viewed.title}/>
                        </label>
                        <label>
                            <span>Image src</span>
                            <input type="text" name="image" defaultValue={viewed.posterUrl}/>
                        </label>
                        <label>
                            <span>Director</span>
                            <input type="text" name="director" defaultValue={viewed.director}/>
                        </label>
                        <label>
                            <span>Actors (type with commas ',')</span>
                            <input type="text" name="actors" defaultValue={viewed.actorsIds}/>
                        </label>
                        <label>
                            <span>Genres (type with commas ',')</span>
                            <input type="text" name="genres" defaultValue={viewed.genres.join(', ')}/>
                        </label>
                        <label>
                            <span>Description</span>
                            <textarea name="description" defaultValue={viewed.description}/>
                        </label>
                        <button>Save</button>
                    </form>
                    
                </React.Fragment>
            ) : <h3>Выберите фильм</h3>}
        </React.Fragment>
    )
}

