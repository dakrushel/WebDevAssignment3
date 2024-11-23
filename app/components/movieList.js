export default function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", actors: "Leonardo DiCaprio, Joseph Gordon-Levitt", year: 2010 },
    { id: 2, title: "The Dark Knight", actors: "Christian Bale, Heath Ledger", year: 2008 },
  ]);

  const [newMovie, setNewMovie] = useState({ title: "", actors: "", year: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentMovieId, setCurrentMovieId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.actors || !newMovie.year) {
      alert("Please fill out all fields!");
      return;
    }
    setMovies([...movies, { id: Date.now(), ...newMovie }]);
    setNewMovie({ title: "", actors: "", year: "" });
  };

  const handleEditMovie = (id) => {
    const movieToEdit = movies.find((movie) => movie.id === id);
    setNewMovie({ title: movieToEdit.title, actors: movieToEdit.actors, year: movieToEdit.year });
    setIsEditing(true);
    setCurrentMovieId(id);
  };

  const handleUpdateMovie = () => {
    setMovies(
      movies.map((movie) =>
        movie.id === currentMovieId ? { id: currentMovieId, ...newMovie } : movie
      )
    );
    setNewMovie({ title: "", actors: "", year: "" });
    setIsEditing(false);
    setCurrentMovieId(null);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Movie List</h2>
      
      {/* Add/Edit Form */}
      <div className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={newMovie.title}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="actors"
          placeholder="Actors"
          value={newMovie.actors}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={newMovie.year}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        {isEditing ? (
          <button onClick={handleUpdateMovie} className="bg-blue-500 text-white px-4 py-2">
            Update Movie
          </button>
        ) : (
          <button onClick={handleAddMovie} className="bg-green-500 text-white px-4 py-2">
            Add Movie
          </button>
        )}
      </div>

      {/* Movies List */}
      <ul className="list-disc pl-5">
        {movies.map((movie) => (
          <li key={movie.id} className="mb-4">
            <p className="font-bold">
              {movie.title} ({movie.year})
            </p>
            <p>Actors: {movie.actors}</p>
            <div className="mt-2">
              <button
                onClick={() => handleEditMovie(movie.id)}
                className="bg-yellow-500 text-white px-4 py-2 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteMovie(movie.id)}
                className="bg-red-500 text-white px-4 py-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}     
      </ul>
    </div>
  );                  
}                                                                                                                                                                                                                                 import React, { useState } from "react";

