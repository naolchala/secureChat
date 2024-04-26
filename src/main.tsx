import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import "./index.css";
import theme from "./config/theme.config.ts";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.config.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
