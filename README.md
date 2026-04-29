🎮 PokeQuiz: 1st Gen Challenge
I built this project to kick off my Full Stack journey with a real challenge. It’s not just a game; it was my playground to stop "just making things work" and start "making things right."

🧠 What I was aiming for
I wanted to push myself beyond the basics of React. Here’s what I focused on:

Logic over Luck: I spent a lot of time on the Stopwatch. It’s not just a timer; it’s a controlled loop that handles memory properly (shoutout to clearInterval) and stops exactly when you hit that 151st Pokémon.

Death to Hard-coding: One of my biggest goals was scalability. I built a custom CSS scale (my "Pexis" system) using global variables. If I want to change the padding or the theme of the whole app tomorrow, I change one line, not fifty.

Clean Data Flow: I used Axios to talk to the PokéAPI and managed the state with useEffect and useState to keep the UI snappy and responsive as you type.

🚧 What’s coming next (The Roadmap)
The MVP is done, but the engineer in me wants more:

[ ] Visual Rewards: Show the Pokémon’s photo as soon as you get the name right.

[ ] Don't Lose Your Progress: Adding Local Storage so a page refresh doesn't kill your run.

[ ] Leaderboard: Building a "Hall of Fame" (Ranking) to see who’s actually the fastest.

[ ] Live Link: Getting this deployed so anyone can play.

🛠️ Setup
If you want to try and beat my time:

Clone the repo.

npm install

npm run dev

Built with a lot of documentation reading by João Candido.