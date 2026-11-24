import { ImageResponse } from "next/og"

export const alt = "Mourad EL OUATIK — Consultant Cybersécurité & GRC"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b1120 0%, #101a33 100%)",
          color: "#f4f7fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 22,
              border: "2px solid #5b8def",
              background: "rgba(91,141,239,0.14)",
              color: "#7aa2f7",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            ME
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: "#6ee7b7" }}>
            <div style={{ width: 14, height: 14, borderRadius: 14, background: "#34d399" }} />
            Disponible dès février 2027
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>Mourad</div>
          <div style={{ fontSize: 108, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, color: "#7aa2f7" }}>
            EL OUATIK
          </div>
          <div style={{ marginTop: 28, fontSize: 36, color: "#a9b6cf" }}>Consultant Cybersécurité & GRC · ISO 27001 · Zero Trust</div>
        </div>
      </div>
    ),
    size,
  )
}
