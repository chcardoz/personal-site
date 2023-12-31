import { Skeleton, Stack } from "@sanity/ui";
import { lazy, Suspense, useDeferredValue } from "react";
import { type ObjectInputProps } from "sanity";

const OpenGraphPreview = lazy(() => import("./OpenGraphPreview"));
const fallback = <Skeleton animated />;

export default function OpenGraphInput(props: ObjectInputProps) {
  const value = useDeferredValue(props.value);
  return (
    <Stack space={2}>
      <Suspense fallback={fallback}>
        {value ? <OpenGraphPreview {...(value as any)} /> : fallback}
      </Suspense>
      {props.renderDefault(props)}
    </Stack>
  );
}
