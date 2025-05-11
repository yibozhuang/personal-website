import { type PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Website</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/Terminal.css" />
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
      </head>
      <body>
        <Component />
      </body>
      <Footer />
    </html>
  );
}
