const getBooks = () => 1;
const getBookById = () => 1;
const getLibraries = () => 1;
const getLibraryById = () => 1;
const getCities = () => 1;
const getCityById = () => 1;

const resolvers = {
  Query: {
    getBooks,
    getBookById,
    getLibraries,
    getLibraryById,
    getCities,
    getCityById,
  },
};

export default resolvers;
