import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { UnifiedNavbar } from "@/components";

export const metadata = {
  title: "CodexCloud",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <UnifiedNavbar />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
