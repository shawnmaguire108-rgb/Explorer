import "./globals.css";

export const metadata = {
  title: "Explorer Medical Supplies",
  description: "Auto accident recovery equipment intake portal"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
