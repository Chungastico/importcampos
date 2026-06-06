import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0D0D0D",
          padding: "80px 96px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 6,
            backgroundColor: "#BF1725",
          }}
        />
        <p
          style={{
            color: "#BF1725",
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontWeight: 700,
            margin: 0,
          }}
        >
          El arte de la restauración
        </p>
        <h1
          style={{
            color: "#F2F2F2",
            fontSize: 88,
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.92,
            marginTop: 28,
            marginBottom: 0,
          }}
        >
          De Cero
          <br />
          <span style={{ color: "#BF1725" }}>a Perfecto.</span>
        </h1>
        <p
          style={{
            color: "#8C8C8C",
            fontSize: 28,
            marginTop: 36,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Importación, enderezado y pintura de vehículos en Paraguay
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, rgba(191,23,37,0.6) 0%, rgba(191,23,37,0.15) 50%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
