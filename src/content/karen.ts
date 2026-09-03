import cover from "@/assets/karen-cover.jpg.asset.json";
import gym from "@/assets/karen-gym.jpg.asset.json";
import sideA from "@/assets/karen-side-a.jpg.asset.json";
import sideB from "@/assets/karen-side-b.jpg.asset.json";
import close from "@/assets/karen-close.jpg.asset.json";

export const photos = {
  cover: { src: cover.url, alt: "Karen in a red dress, looking off-frame" },
  firstImpression: { src: gym.url, alt: "Karen standing in a gym" },
  sideA: { src: sideA.url, alt: "Karen in a salon mirror, quiet and observant" },
  sideB: { src: sideB.url, alt: "Karen looking straight at the camera" },
  close: { src: close.url, alt: "Karen in twist braids" },
};

export const observations = ["LAID-BACK", "CURIOUS", "HARD TO READ"];

export const contrasts = {
  a: { label: "SIDE A", lines: ["Quiet.", "Soft.", "Observant."] },
  b: { label: "SIDE B", lines: ["Playful.", "Mischievous.", "Unpredictable."] },
};

export const questions = [
  "What actually makes you happy?",
  "What makes you disappear into your own world?",
  "What are you secretly very particular about?",
  "What does your ideal day look like?",
];

export const reveals = [
  {
    prompt: "You seem like someone who…",
    answer: "…has a surprisingly competitive side.",
  },
  {
    prompt: "You definitely seem like…",
    answer: "…someone who would pretend not to care and then absolutely care.",
  },
  {
    prompt: "You give the impression of someone who…",
    answer: "…has strong opinions about things nobody else notices.",
  },
  {
    prompt: "Something tells me you're the type to…",
    answer: "…be very calm right up until you're extremely not.",
  },
];

export const sections = [
  { id: "cover", label: "Cover" },
  { id: "first-impression", label: "First impression" },
  { id: "contrasts", label: "Contrasts" },
  { id: "questions", label: "Still figuring out" },
  { id: "unpredictable", label: "Unpredictable" },
  { id: "to-be-continued", label: "To be continued" },
] as const;
