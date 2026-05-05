import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0b4a3d",
          color: "#ffffff",
          display: "flex",
          fontSize: 20,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        S
      </div>
    ),
    size,
  );
}
