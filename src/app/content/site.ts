// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data
// (operator and dates come from the Privacy Policy / Terms of Use).

export const site = {
  brand: "Synth AI Avatar",
  email: "dominikceo@kistner.click",
  year: new Date().getFullYear(),
  // PLACEHOLDER — company name from the owner’s Privacy Policy / Terms of Use
  operator: "OPERATOR",
  tagline: "AI avatar videos from a script, made on your iPhone.",
  url: "https://synthesia.casa/",
};

export const app = {
  id: "6827178858",
  url: "https://apps.apple.com/app/id6827178858",
  // App isn’t live yet (iTunes lookup returns 0 results, 2026-11-10).
  // Refresh from https://itunes.apple.com/lookup?id=6827178858&country=us after release.
  minIOS: "PLACEHOLDER",
  category: "PLACEHOLDER",
  languages: "PLACEHOLDER",
  size: "PLACEHOLDER",
  price: "Free, offers in-app purchases",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

/** Template avatars as they are named in the app. */
export const cast = [
  { name: "Temi", img: "/images/cast-temi.webp" },
  { name: "Valeria", img: "/images/cast-valeria.webp" },
  { name: "Natasha", img: "/images/cast-natasha.webp" },
  { name: "Marcus", img: "/images/cast-marcus.webp" },
  { name: "Sarah", img: "/images/cast-sarah.webp" },
  { name: "Krish", img: "/images/cast-krish.webp" },
  { name: "Noa", img: "/images/cast-noa.webp" },
  { name: "Milo", img: "/images/cast-milo.webp" },
  { name: "Mira", img: "/images/cast-mira.webp" },
];

// Names below are the labels used in the app itself.
export const strip = ["Templates", "Create Avatar", "Write your script", "Select voice", "Select language", "Download"];

export const gains = [
  { tag: "Avatar", n: "2 ways", text: "to get an avatar: pick one from Templates or upload a photo from Photos or Camera." },
  { tag: "History", n: "Kept", text: "Name your avatar once and it stays in your templates. Finished videos wait in History." },
];

export const modes = [
  {
    tag: "Templates",
    title: "Ready avatars, one tap to preview",
    text: "Temi, Valeria, Natasha, Marcus and the rest play a short sample, so you hear and see them before you choose.",
    img: "/images/phone-templates.webp",
  },
  {
    tag: "Create Avatar",
    title: "Your photo becomes the speaker",
    text: "Upload an image from Photos or take a new one with the camera. The avatar is built from it.",
    img: "/images/phone-photo.webp",
  },
];

export const flow = [
  { title: "Write your script", text: "Type the words your avatar will say right under the avatar you picked.", img: "/images/phone-script.webp" },
  { title: "Select voice and language", text: "Switch between Male and Female, play a sample, then choose the language.", img: "/images/phone-voice.webp" },
  { title: "Watch and download", text: "Play the finished video, download it to your iPhone or share it.", img: "/images/phone-result.webp" },
];

export const demo = {
  script: "Hi everyone! Here is a short update on this week’s launch and what comes next.",
  avatars: ["Natasha", "Krish", "Valeria", "Milo"],
};

export const steps = [
  { icon: "app", title: "Get the app", text: "Download Synth AI Avatar from the App Store on your iPhone." },
  { icon: "face", title: "Choose a face", text: "Tap a template or Create Avatar and upload your photo." },
  { icon: "pen", title: "Write and generate", text: "Add the script, pick a voice and let the video render." },
];

export const screens = [
  { title: "Templates", text: "The Generate tab opens on a grid of template avatars, each with a play icon.", img: "/images/phone-templates.webp" },
  { title: "Script", text: "The script field sits right under the avatar you picked.", img: "/images/phone-script.webp" },
  { title: "Select voice", text: "Male and Female filters, with a sample for every voice.", img: "/images/phone-voice.webp" },
  { title: "History", text: "Videos made from templates and from your own avatars sit in two tabs, with names and dates.", img: "/images/phone-history.webp" },
  { title: "Your Video", text: "Open any video from History to watch it again, download or share it.", img: "/images/phone-video.webp" },
  { title: "Result", text: "When the video is ready, play it right away and download it.", img: "/images/phone-result.webp" },
];

export const scenarios = [
  { img: "/images/cast-sarah.webp", title: "Training and how-tos", text: "Explain a process once and send the same clear video to everyone." },
  { img: "/images/cast-krish.webp", title: "Product and team updates", text: "Turn release notes or a weekly summary into a short spoken clip." },
  { img: "/images/selfie.webp", title: "Posts with your own face", text: "Use a selfie as the avatar and share the result straight from the app." },
];

/** App page: one chapter per tab of the app’s own tab bar. */
export const tabs = {
  generate: {
    steps: [
      { title: "Templates", hint: "Pick a ready avatar", img: "/images/phone-templates.webp" },
      { title: "Create Avatar", hint: "Upload your photo", img: "/images/phone-photo.webp" },
      { title: "Write your script", hint: "What the avatar says", img: "/images/phone-script.webp" },
      { title: "Select voice", hint: "Male or Female, with a sample", img: "/images/phone-voice.webp" },
      { title: "Name your Avatar", hint: "Save it for next time", img: "/images/phone-name.webp" },
    ],
  },
  // Settings rows exactly as in the app; on the site each one opens its page.
  settings: [
    { label: "Rate Us", action: "App Store", href: app.url },
    { label: "Feedback", action: "Contact", to: "/feedback" },
    { label: "Share with friend", action: "Copy link", share: true },
    { label: "Privacy Policy", action: "Read", to: "/privacy" },
    { label: "Terms of use", action: "Read", to: "/terms" },
  ],
};

export const storeShots = ["/images/aso-2.webp", "/images/aso-3.webp", "/images/aso-4.webp", "/images/aso-5.webp"];

export const specs: [string, string][] = [
  ["Developer", site.operator],
  ["Category", app.category],
  ["Compatibility", `iPhone, iOS ${app.minIOS} or later`],
  ["Languages", app.languages],
  ["Size", app.size],
  ["Price", app.price],
];

export const principles = [
  { title: "Three screens, not thirty", text: "Avatar, script, voice. If a step does not change the video, it is not in the app." },
  { title: "Access only when you ask", text: "Camera and Photos are requested only when you choose to upload your own image." },
  { title: "Your work stays at hand", text: "Named avatars return to your templates and every video waits in History." },
];

/** Support: picking a question plays its answer as subtitles over the avatar. */
export const faq = [
  { chip: "How do I make my first video?", short: "My first video", q: "How do I make my first video?", a: "Open the Generate tab, tap a template or Create Avatar, write your script in the field below and tap the arrow. Choose a voice and language, and the app starts generating." },
  { chip: "Can I use my own photo?", short: "Use my own photo", q: "Can I use my own photo as the avatar?", a: "Yes. Switch to Create Avatar, tap Select Image and pick a photo from Photos or take one with the camera. Give the avatar a name and it is saved to your templates." },
  { chip: "How do I pick a voice?", short: "Pick a voice", q: "How do I pick a voice and language?", a: "On Select voice, switch between Male and Female and press play to hear a sample. Tap Continue, then choose the language for the video." },
  { chip: "Where do my videos go?", short: "Where videos go", q: "Where do my videos go?", a: "Every video lands in the History tab with its name and date: videos from templates and from your own avatars are in two separate lists. Open one to watch, download or share it." },
  { chip: "Photos or camera won’t open", short: "Photos won’t open", q: "The app can’t open my photos or camera", a: "Access was probably declined. Open Settings on your iPhone, find Synth AI Avatar and allow Photos and Camera, then try Select Image again." },
  { chip: "How do I cancel my subscription?", short: "Cancel subscription", q: "How do I cancel my subscription?", a: "Subscriptions are billed by Apple. Open Settings on your iPhone, tap your name, then Subscriptions, choose Synth AI Avatar and tap Cancel Subscription." },
  { chip: "Restore a purchase", short: "Restore a purchase", q: "How do I restore a purchase on a new iPhone?", a: "Sign in with the same Apple ID you bought with, open the paywall in the app and tap Restore in the top corner." },
];

export const topics = ["Feedback", "Bug", "Idea", "My data"];
