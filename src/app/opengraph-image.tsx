import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Harsh Singh — Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(ellipse at top left, #2a2a2e 0%, #050505 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#2dd4bf" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#34d399" }} />
          Open to Data Analyst & Business Analyst roles
        </div>
        <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -4, marginTop: 30 }}>Harsh Singh</div>
        <div style={{ fontSize: 110, fontWeight: 700, letterSpacing: -4, color: "rgba(255,255,255,0.35)" }}>
          — Data Analyst
        </div>
        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.6)", marginTop: 36 }}>
          SQL · Python · Power BI · Excel · A/B Testing · n8n
        </div>
      </div>
    ),
    size,
  );
}
