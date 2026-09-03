import { createFileRoute } from "@tanstack/react-router";
import { StoryShell } from "@/components/story/StoryShell";

const title = "Karen, in a few frames — Vol. 01";
const description =
  "A six-frame visual story made for Karen. Still figuring you out.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <StoryShell />;
}
