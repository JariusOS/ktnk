import cover from "@/assets/karen-cover.jpg.asset.json";
import gym from "@/assets/karen-gym.jpg.asset.json";
import sideA from "@/assets/karen-side-a.jpg.asset.json";
import sideB from "@/assets/karen-side-b.jpg.asset.json";
import close from "@/assets/karen-close.jpg.asset.json";

export const photos = {
  cover: { src: cover.url, alt: "Karen in a red dress, looking off-frame" },
  gym: { src: gym.url, alt: "Karen standing in a gym" },
  sideA: { src: sideA.url, alt: "Karen in a salon mirror, quiet and observant" },
  sideB: { src: sideB.url, alt: "Karen looking straight at the camera" },
  close: { src: close.url, alt: "Karen in twist braids" },
};

export type Observation = {
  id: string;
  photo: keyof typeof photos;
  focus: string;
  statement: string;
  detail: string;
  asksAccurate: boolean;
};

export const observations: Observation[] = [
  {
    id: "notice-1",
    photo: "cover",
    focus: "object-[60%_30%]",
    statement: "You have a very particular kind of calm.",
    detail:
      "You somehow manage to look completely unbothered while clearly having opinions about everything.",
    asksAccurate: true,
  },
  {
    id: "notice-2",
    photo: "gym",
    focus: "object-center",
    statement: "You don't announce things. You just do them.",
    detail:
      "No build-up, no commentary. One day it's simply already handled, which is mildly unfair to the rest of us.",
    asksAccurate: true,
  },
  {
    id: "notice-3",
    photo: "sideA",
    focus: "object-center",
    statement: "You notice more than you let on.",
    detail:
      "You go quiet, and it is never because you missed something. It's usually because you caught all of it.",
    asksAccurate: true,
  },
];

export const indexRows = [
  { label: "Calm", value: 9 },
  { label: "Mischief", value: 8 },
  { label: "“I'll decide later” energy", value: 10 },
  { label: "Predictability", value: 2 },
  { label: "Still figuring you out", value: null },
];

export const twoSides = [
  {
    think: "You seem laid-back.",
    but: "I suspect there's a much more deliberate person underneath.",
    photo: "sideA" as const,
  },
  {
    think: "You seem independent.",
    but: "But I haven't figured out what makes you feel genuinely cared for.",
    photo: "sideB" as const,
  },
  {
    think: "You seem playful.",
    but: "I have absolutely no idea how much trouble that could become.",
    photo: "sideB" as const,
  },
];

export const yourTurnQuestions = [
  "What's something about you people usually get wrong?",
  "What's something you're secretly very particular about?",
  "What's something we should probably do together?",
];

export const imagineCards = [
  "A conversation that accidentally lasts until 3am.",
  "A questionable adventure.",
  "Finding out who's actually more competitive.",
  "Doing absolutely nothing and somehow making it an event.",
  "Something neither of us planned.",
  "Your idea.",
];

export const volTwoOptions = [
  { key: "A", label: "A proper conversation" },
  { key: "B", label: "A questionable adventure" },
  { key: "C", label: "You continue confusing me" },
];

export const chapters = [
  { id: "open", label: "Open" },
  { id: "notice-1", label: "Observation 01" },
  { id: "notice-2", label: "Observation 02" },
  { id: "notice-3", label: "Observation 03" },
  { id: "index", label: "The Karen Index" },
  { id: "two-sides", label: "Two sides" },
  { id: "your-turn", label: "Your turn" },
  { id: "imagine", label: "Imagine" },
  { id: "one-thing", label: "One thing" },
  { id: "vol-02", label: "Vol. 02" },
  { id: "close", label: "Close" },
] as const;

export const STORAGE_KEY = "karen-vol-01";
