const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
});

(async () => {
  await sequelize.sync({ force: true });

  try {
    const movieInstances = await Promise.all([
      Movie.create({
        title: "Toy Story",
      }),
      Movie.create({
        title: "The Incredibles",
      }),
    ]);
    const moviesJSON = movieInstances.map((movie) => movie.toJSON());
    console.log(moviesJSON);
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
})();
