import { ImageResponse } from "next/og";
import { importacionesMeta } from "@/lib/importaciones";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${importacionesMeta.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ImportacionesOpenGraphImage() {
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
          {siteConfig.name}
        </p>
        <h1
          style={{
            color: "#F2F2F2",
            fontSize: 72,
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.95,
            marginTop: 28,
            marginBottom: 0,
            maxWidth: 900,
          }}
        >
          Importación
          <br />
          <span style={{ color: "#BF1725" }}>de Vehículos</span>
        </h1>
        <p
          style={{
            color: "#8C8C8C",
            fontSize: 26,
            marginTop: 36,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Documentación, trámites aduaneros y entrega en Asunción, Paraguay
        </p>
      </div>
    ),
    { ...size }
  );
}
