import { prisma } from "./index";

const getBooks = async () => {
  return await prisma.book.findMany();
};
const getBookById = async (_, { id }) => {
  return await prisma.book.findUnique({ where: { id } });
};
const getLibraries = async () => {
  return await prisma.library.findMany();
};
const getLibraryById = async (_, { id }) => {
  return await prisma.library.findUnique({ where: { id } });
};
const getCities = async () => {
  return await prisma.city.findMany();
};
const getCityById = async (_, { id }) => {
  return await prisma.city.findUnique({ where: { id } });
};
const addBook = async (_, { data }) => {
  return await prisma.book.create({ data });
};
const addLibrary = async (_, { data }) => {
  console.log(data);
  return await prisma.library.create({ data });
};
const addCity = async (_, { data }) => {
  return await prisma.city.create({ data });
};

const resolvers = {
  Query: {
    getBooks,
    getBookById,
    getLibraries,
    getLibraryById,
    getCities,
    getCityById,
  },
  Mutation: {
    addBook,
    addLibrary,
    addCity,
  },
};

export default resolvers;
