// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// Facts follow the owner's Privacy Policy and Terms of Use (received 2026-11-11).

export const site = {
  // Brand as in the owner's documents; used with the rights holder's authorization (Terms §1, §7)
  brand: "Synthesia",
  email: "dominikceo@kistner.click",
  year: new Date().getFullYear(),
  operator: "Dominik Kistner",
  address: "Stallschreiberstraße 17, 10179 Berlin, Germany",
  city: "Berlin",
  tagline: "AI avatar videos from a script, made on your iPhone.",
  // wording follows Terms of Use §1
  disclaimer: "The Synthesia name and related branding are used pursuant to authorization from the rights holder. The App is operated by Dominik Kistner.",
  url: "https://synthesia.casa/",
};

export const app = {
  id: "6827178858",
  url: "https://apps.apple.com/app/id6827178858",
  // The App Store listing isn't live yet (lookup returns 0 results, 2026-11-11), so only
  // facts from the owner's documents are shown. After release, add iOS version, category,
  // languages and size from https://itunes.apple.com/lookup?id=6827178858&country=us
  age: "16+",
  price: "Auto-renewable subscriptions via the App Store",
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
  { tag: "History", n: "Kept", text: "Name your avatar once and it stays in your templates. Finished videos wait in History, on your iPhone." },
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
  { icon: "app", title: "Get the app", text: "Download Synthesia from the App Store on your iPhone." },
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
  ["Developer", `${site.operator}, ${site.city}`],
  ["Compatibility", "iPhone"],
  ["Age", app.age],
  ["Account", "Not required"],
  ["Internet", "Needed to generate videos"],
  ["Price", app.price],
];

export const principles = [
  { title: "Three screens, not thirty", text: "Avatar, script, voice. If a step does not change the video, it is not in the app." },
  { title: "Access only when you ask", text: "The camera is used only when you take a photo for an avatar, and Photos only to save a finished video." },
  { title: "Your work stays at hand", text: "Named avatars return to your templates and every video waits in History." },
];

/** Support: picking a question plays its answer as subtitles over the avatar. */
export const faq = [
  { chip: "How do I make my first video?", short: "My first video", q: "How do I make my first video?", a: "Open the Generate tab, tap a template or Create Avatar, write your script in the field below and tap the arrow. Choose a voice and language, and the app starts generating." },
  { chip: "Can I use my own photo?", short: "Use my own photo", q: "Can I use my own photo as the avatar?", a: "Yes. Switch to Create Avatar, tap Select Image and add your photo. Give the avatar a name and it is saved to your templates. Use only photos you have the right to use." },
  { chip: "How do I pick a voice?", short: "Pick a voice", q: "How do I pick a voice and language?", a: "On Select voice, switch between Male and Female and press play to hear a sample. Voices are ready-made; the app doesn’t clone voices. Tap Continue, then choose the language." },
  { chip: "Where do my videos go?", short: "Where videos go", q: "Where do my videos go?", a: "Every video lands in the History tab with its name and date, stored on your iPhone: videos from templates and from your own avatars are in two separate lists. Open one to watch, download or share it." },
  { chip: "Camera or saving won’t work", short: "Camera won’t open", q: "The camera won’t open or videos won’t save", a: "Access was probably declined. Camera is used when you take a photo for an avatar, Photos (Add Photos Only) when you save a video. Open Settings on your iPhone, find Synthesia and allow both." },
  { chip: "Where are my photos processed?", short: "Where photos go", q: "What happens to my photo and script?", a: "To make the video, your photo, script and settings are sent to HeyGen, the AI service that renders it. Your avatars, videos and history are stored on your iPhone. Details are in the Privacy Policy." },
  { chip: "Do I need an account?", short: "Account", q: "Do I need an account?", a: "No. There is no registration or sign-in. Some features need an active subscription, and generating videos needs an internet connection." },
  { chip: "How do I cancel my subscription?", short: "Cancel subscription", q: "How do I cancel my subscription?", a: "Subscriptions are billed by Apple. Open Settings on your iPhone, tap your name, then Subscriptions, choose Synthesia and tap Cancel Subscription. Deleting the app doesn’t cancel it." },
  { chip: "Restore a purchase", short: "Restore a purchase", q: "How do I restore a purchase on a new iPhone?", a: "Sign in with the same Apple ID you bought with, open the paywall in the app and tap Restore in the top corner." },
];

export const topics = ["Feedback", "Bug", "Idea", "My data"];
