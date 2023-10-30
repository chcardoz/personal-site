import { Card } from "@sanity/ui";
import { height, width } from "@/components/OpenGraphImage";
import { createIntlSegmenterPolyfill } from "intl-segmenter-polyfill";
import { Settings } from "@/lib/sanity.queries";
import { SatoriOptions } from "@/node_modules/next/dist/compiled/@vercel/og/satori";
import styled from "styled-components";

async function init(): Promise<SatoriOptions["fonts"]> {
  if (!globalThis?.Intl?.Segmenter) {
    console.debug("Polyfilling Intl.Segmenter");
    //@ts-expect-error
    globalThis.Intl = globalThis.Intl || {};
    //@ts-expect-error
    globalThis.Intl.Segmenter = await createIntlSegmenterPolyfill(
      fetch(new URL("public/break_iterator.wasm", import.meta.url))
    );
  }

  const fontData = await fetch(
    new URL("public/Inter-Bold.woff", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return [
    {
      name: "Inter",
      data: fontData,
      style: "normal",
      weight: 700,
    },
  ];
}

const fontsPromise = init();

const OpenGraphSvg = styled(Card).attrs({
  radius: 3,
  shadow: 1,
  overflow: "hidden",
})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    object-fit: cover;
    aspect-ratio: ${width} / ${height};
    object-position: center;
    height: 100%;
    width: 100%;
  }
`;

export default function OpenGraphPreview(props: Settings["ogImage"]) {
  return <OpenGraphSvg />;
}
