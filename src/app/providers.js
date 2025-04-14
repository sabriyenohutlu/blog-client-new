"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <>
      {/* <NextThemesProvider enableSystem={true} attribute="class"> */}
        {/* <DefaultSeo {...SEO} /> */}
        {children}
      {/* </NextThemesProvider> */}
    </>
  );
}
