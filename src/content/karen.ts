import cover from "@/assets/karen-cover.jpg.asset.json";
import gym from "@/assets/karen-gym.jpg.asset.json";
import sideA from "@/assets/karen-side-a.jpg.asset.json";
import sideB from "@/assets/karen-side-b.jpg.asset.json";
import close from "@/assets/karen-close.jpg.asset.json";
import bonnet from "@/assets/karen-bonnet.jpg.asset.json";
import pink from "@/assets/karen-pink.jpg.asset.json";

export const photos = {
  cover: { src: cover.url, alt: "Karen in a red dress, looking off-frame" },
  gym: { src: gym.url, alt: "Karen standing in a gym" },
  sideA: { src: sideA.url, alt: "Karen in a salon mirror, quiet and observant" },
  sideB: { src: sideB.url, alt: "Karen looking straight at the camera" },
  close: { src: close.url, alt: "Karen in twist braids" },
  bonnet: { src: bonnet.url, alt: "Karen at home, unguarded, in a bonnet" },
  pink: { src: pink.url, alt: "Karen in a pink dress at an event" },
};

export type Observation = {
  id: string;
  photo: keyof typeof photos;
  focus: string;
  label: string;
  statement: string;
  detail: string;
  quote?: string;
};

export const observations: Observation[] = [
  {
    id: "notice-1",
    photo: "cover",
    focus: "object-[60%_30%]",
    label: "Laid-back",
    statement: "You seem very comfortable just being yourself.",
    detail:
      "Relaxed, playful, unforced. No performance, no effort to be interesting — which is inconveniently the most interesting part.",
  },
  {
    id: "notice-2",
    photo: "close",
    focus: "object-center",
    label: "Family is a big deal",
    statement: "That sentence required more processing than you intended.",
    quote: "I literally have 15 other siblings.",
    detail:
      "Said casually, like a weather update. I'm still recalculating. Family clearly sits at the centre of your world, even when you mention it in passing.",
  },
  {
    id: "notice-3",
    photo: "gym",
    focus: "object-center",
    label: "Playfully unpredictable",
    statement: "Getting you from A to B may require its own logistics department.",
    quote: "Money is always a deal breaker.",
    detail:
      "The park was far. Then it wasn't happening. Then it was. I have learned to treat any plan involving your transport as a developing situation.",
  },
  {
    id: "notice-4",
    photo: "bonnet",
    focus: "object-[55%_30%]",
    label: "There's more underneath",
    statement:
      "You can make something serious sound casual. I don't think that means it isn't important to you.",
    detail:
      "The heavy things arrive in the same tone as the light ones. I noticed. I didn't push. I did write it down.",
  },
];

export const indexRows = [
  { label: "Laid-back", value: 9 },
  { label: "Family gravity", value: 10 },
  { label: "Playfully unpredictable", value: 8 },
  { label: "Predictability", value: 2 },
  { label: "Still figuring you out", value: null },
];

export const chatThreads = [
  {
    id: "chat-1",
    label: "Chat 01",
    messages: ["You know what that means"],
    note: "This was approximately where I realised there was significantly more going on underneath the calm exterior.",
  },
  {
    id: "chat-2",
    label: "Chat 02",
    messages: ["I literally have 15 other siblings"],
    note: "I still don't know whether to laugh or ask for a family tree.",
  },
  {
    id: "chat-3",
    label: "Chat 03 · the transport saga",
    messages: [
      "The park is really far from my house",
      "Well I guess this is not happening",
      "Money is always a deal breaker",
    ],
    note: "Operational complexity: unnecessarily high.",
  },
  {
    id: "chat-4",
    label: "Chat 04",
    messages: ["Lol please say it", "Don't tiptoe"],
    note: "Noted. Permanently.",
  },
  {
    id: "chat-5",
    label: "Chat 05",
    messages: [
      "Being present",
      "I like to talk about every little detail",
      "And I think that's one way to build something",
    ],
    note: "You said that lightly. I wrote it down.",
  },
  {
    id: "chat-6",
    label: "Chat 06",
    messages: [
      "And I didn't tell my dad before leaving o",
      "Maybe my sisters will come up with something",
    ],
    note: "Family logistics, handled with alarming confidence.",
  },
];

export const theories = [
  {
    id: "theory-1",
    think: "You seem very laid-back.",
    but: "But I suspect you're considerably more complicated than you let people see.",
  },
  {
    id: "theory-2",
    think: "You mention family in passing.",
    but: "But it matters to you far more than the tone suggests.",
  },
  {
    id: "theory-3",
    think: "You look like the calm one in the room.",
    but: "There is a playful, mildly chaotic streak in there and I have evidence.",
  },
  {
    id: "theory-4",
    think: "You know exactly who you are.",
    but: "Except for the parts you're still working out — and you'd rather nobody decided them for you.",
  },
];

export const versus = {
  karen: [
    "Laid-back",
    "Playful",
    "Hard to completely read",
    "Unexpectedly serious",
    "Still figuring things out",
  ],
  jarius: [
    "Overthinks",
    "Builds things instead of saying things",
    "Pays attention to tiny details",
    "Pretends he's being rational",
    "Definitely made a website instead of simply saying he likes you",
  ],
};

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
  { id: "notice-4", label: "Observation 04" },
  { id: "index", label: "Observation 05" },
  { id: "chat", label: "Things you actually said" },
  { id: "theories", label: "I have a theory" },
  { id: "versus", label: "Karen vs Jarius" },
  { id: "one-thing", label: "One thing" },
  { id: "vol-02", label: "Vol. 02" },
  { id: "close", label: "Close" },
] as const;

export const STORAGE_KEY = "karen-vol-01";
