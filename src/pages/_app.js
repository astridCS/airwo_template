import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { NotificationContainer } from "react-notifications";
import { NotificationProvider, useNotification } from "./NotificationProvider";


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NotificationProvider> {/* j'entoure mon application avec le fournisseur de messages */}
        <Component {...pageProps} />
        <NotificationContainer />
      </NotificationProvider>
    </ThemeProvider>
  );
}
