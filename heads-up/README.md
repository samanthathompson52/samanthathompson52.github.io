# Heads Up Party 🎉

A free, open-source **Heads Up!**–style party guessing game that runs entirely in the
browser. Pick a deck, hold your phone to your forehead, and have friends shout clues —
**tilt down** when you guess right, **tilt up** to pass. No app store, no login, no build
step. Ships with ready-to-play card packs so you can start a round the moment it loads.

## ✨ Features

- **10 template card packs** (338+ cards) ready from the start — Animals, Movies,
  Celebrities, Charades, Food, Sports, Music, Places, Kids, and TV Shows.
- **Tilt controls** using the device motion sensor (tilt down = correct, up = pass),
  with an automatic fallback to **tap / keyboard** controls on laptops and desktops.
- **3‑2‑1 countdown**, a per-round timer (60 / 90 / 120s), live score, and green/orange
  answer flashes.
- **Results screen** listing every card you got and passed.
- **Build-your-own decks** in the app — saved to your browser, merged in automatically.
  Perfect for inside jokes, classrooms, team offsites, or bachelorette parties.
- Sound cues, haptic vibration, and a screen wake-lock so the display stays on mid-round.
- **Zero dependencies, zero build** — just static `index.html` + `packs.js`.

## 🚀 Play it

Because it's plain static files, you can play it several ways:

- **Open locally:** double-click `index.html` (tap controls work everywhere; tilt needs
  HTTPS on a real phone).
- **Serve locally:** `npx serve heads-up` or `python3 -m http.server` then open the folder.
- **Host it free:** drop the `heads-up/` folder on GitHub Pages, Netlify, or Vercel.
  Motion/tilt controls require **HTTPS**, which all of those provide.

> On iPhone the browser asks permission to use motion sensors the first time you start a
> round — tap **Allow**. If motion isn't available, the game automatically switches to tap.

## 🎴 Adding your own card packs

**In the app:** tap **➕ New Deck**, name it, pick an icon, paste one word per line, save.
Your deck is stored in that browser and appears alongside the built-ins.

**In code (to share with everyone):** open [`packs.js`](./packs.js) and add an object:

```js
{
  id: 'my-pack',            // unique slug
  name: 'My Awesome Pack',
  emoji: '🌮',
  color: '#ef4444',         // deck accent color
  desc: 'A one-line description.',
  cards: ['Word one', 'Word two', 'Another phrase', /* … */]
}
```

## 🎮 How to play

1. Split into teams (or just take turns).
2. The guesser holds the phone on their forehead, screen facing the group.
3. Teammates give clues without saying the word on screen.
4. **Tilt down** (or tap the right / press →) when the word is guessed — **tilt up**
   (tap left / press ←) to skip.
5. Rack up as many correct guesses as you can before the timer hits zero!

## 📁 Files

| File | Purpose |
| --- | --- |
| `index.html` | The entire game — UI, logic, and styling. |
| `packs.js` | The template card packs. Edit here to change the built-in decks. |

## 📜 License & credits

Released under the repository's MIT license. "Heads Up!" is a trademark of its respective
owner; this is an independent, non-commercial fan project built for fun and learning and
is **not affiliated with or endorsed by** any commercial product.
