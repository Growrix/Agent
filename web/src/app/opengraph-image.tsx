import { ImageResponse } from "next/og";
import { allContent } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b4a3d, #14532d)",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>{allContent.brand.name}</div>
        <div style={{ fontSize: 34, marginTop: 24 }}>{allContent.brand.tagline}</div>
      </div>
    ),
    size,
  );
}
