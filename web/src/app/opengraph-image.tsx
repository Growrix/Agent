import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(120deg, #082647 0%, #0f3a66 55%, #1f5b90 100%)",
          color: "#f8f6f1"
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>Summit Ridge Roofing</div>
        <div style={{ marginTop: 24, fontSize: 32, opacity: 0.92 }}>Inspection-first roofing with storm response and warranty confidence.</div>
      </div>
    ),
    size
  );
}



