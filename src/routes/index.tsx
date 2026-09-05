import { createFileRoute } from "@tanstack/react-router";
import { StoryShell } from "@/components/story/StoryShell";

const title = "Karen — Vol. 01: Things I've noticed";
const description =
  "An interactive little world made for Karen. Things I've noticed, a few I haven't figured out, and one confession.";

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
