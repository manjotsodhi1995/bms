import { createContext } from "react";
import { Root } from "./root";

export const rootContext=createContext({root:new Root()})