import { gql } from "apollo-server";
import { readFileSync } from "fs";
import path from "path";

const typeDefs = gql`
  ${readFileSync(path.resolve(__dirname, "schema.graphql"), "utf-8")}
`;

export default typeDefs;
