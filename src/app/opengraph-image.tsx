import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Akshat Patel — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#3b82f6",
              letterSpacing: "0.04em",
            }}
          >
            akshatpatel555.github.io
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 82,
              fontWeight: 700,
              color: "#ededed",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Akshat Patel
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 46,
              color: "#3b82f6",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Software Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 4,
              background: "#3b82f6",
              marginBottom: 28,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#9ca3af",
              lineHeight: 1.4,
            }}
          >
            Production software · AI-enabled apps · Cloud-native AWS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
