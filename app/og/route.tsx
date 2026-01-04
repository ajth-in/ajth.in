import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const badge = searchParams.get("badge") || "BLOG POST";
  const title = searchParams.get("title");
  const subtitle =
    searchParams.get("subtitle") ||
    "(ajth.in) • Ajith Kumar P M • Software Engineer";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#030712",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #111827 0%, #030712 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "rgba(255, 255, 255, 0.06)",
            filter: "blur(120px)",
            borderRadius: "100%",
          }}
        />

        <div
          style={{
            display: "flex",
            padding: "8px 16px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#e5e7eb",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {badge}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "80px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {title?.slice(0, 40)}...
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#9ca3af",
            lineHeight: 1.5,
            maxWidth: "800px",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </div>

        {/* chalk underline */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            width: "120px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(to right, #f9fafb, #6b7280)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
