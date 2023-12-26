import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />;
      <footer>
        <p>© 2023 Mateus</p>
      </footer>
    </div>
  );
}

export default MyApp;
