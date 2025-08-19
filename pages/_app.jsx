import "../styles/globals.css";
import Silk from "../components/Silk";
import SplashCursor from "../components/SplashCursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SplashCursor />
      <Silk
        speed={5}
        scale={1}
        color="#3d3c3c"
        noiseIntensity={1}
        rotation={0}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
