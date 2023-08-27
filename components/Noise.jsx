export default function Noise() {
  return (
    <svg
      className="noise"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="2"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>

      <rect width="100%" height="100dvh" filter="url(#noiseFilter)" />
    </svg>
  );
}
