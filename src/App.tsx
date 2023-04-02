import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Game, Splash } from "./ui/pages";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Splash />} />
            <Route path="game" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
