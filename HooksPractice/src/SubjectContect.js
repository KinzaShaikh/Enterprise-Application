import { createContext } from "react";

const SubjectContext = createContext();

const SubjectProvider = SubjectContext.Provider;
const subjectConsumer = SubjectContext.Consumer;

export {subjectConsumer,SubjectProvider,SubjectContext}