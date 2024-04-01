"use client";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";

const Provider = ({ children }) => {
  const [client] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Provider;
