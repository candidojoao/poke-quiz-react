🎮 PokeQuiz: 1st Gen Challenge
I built this project to kick off my Full Stack journey with a real challenge. It’s not just a game; it was my playground to stop "just making things work" and start "making things right."

🧠 What I was aiming for
I built this to push myself beyond the basics of React. Here’s the "behind the scenes":

Logic over Luck: I spent a lot of time on the Stopwatch. It’s a controlled loop that handles memory properly (shoutout to clearInterval) and stops exactly when you hit that 151st Pokémon.

Death to Hard-coding (Work in Progress): I’m obsessed with scalability. I started implementing a custom "Pexis" system using global CSS variables.

Self-correction: I noticed I still have some "rebel" pixels (px) and colors scattered in the code. My next goal is to centralize every single color and spacing into variables so the entire UI can be rebranded in one click.

Clean Data Flow: I used Axios to talk to the PokéAPI and managed the state with useEffect and useState to keep the UI snappy.

🚧 What’s coming next (The Roadmap)
[ ] Full CSS Refactor: Hunt down those hard-coded px and hex colors to finish the global variable system.

[ ] Visual Rewards: Show the Pokémon’s photo as soon as you get the name right.

[ ] Don't Lose Your Progress: Adding Local Storage so a page refresh doesn't kill your run.

[ ] Leaderboard: Building a "Hall of Fame" to see who’s actually the fastest.

🛠️ Setup
If you want to try and beat my time:

Clone the repo.

npm install

npm run dev

Built with a lot of documentation reading by João Candido.