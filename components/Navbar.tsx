import Image from "next/image";
import Link from "next/link";

export default function Navbar(props) {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        columnGap: 10,
        borderBottom: "1px solid #eaeaea",
        padding: "10px 20px",
      }}
    >
      <img src="/static/images/logo.png" css={{ width: 30, height: 30 }} />
      <div css={{ fontSize: "1rem", fontWeight: 600 }}>Prettier Hacker News</div>
    </div>
  );
}
