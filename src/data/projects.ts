import seasonLostImg from "../media/img/projects/season_lost_project.jpg";
import SeasonHauntedImg from "../media/img/projects/s17_project.jpg";
import freeToPlayImg from "../media/img/projects/free_to_play_project.jpg";
import seasonSplicerImg from "../media/img/projects/s14_project.jpg";
import spotifyCloneImg from "../media/img/projects/spotify_clone_project.jpg";
import portfolioImg from "../media/img/projects/portfolio_project.jpg";
import chessImg from "../media/img/projects/chess_project.jpg";
import lightfallImg from "../media/img/projects/lightfall_project.jpg";
import goalImg from "../media/img/projects/goal_tracker_project.jpg";

type TProject = {
    name: string;
    descLong?: string;
    descShort?: string;
    siteUrl?: string;
    repoUrl?: string;
    demoUrl?: string;
    installUrl?: string;
    image: string;
    eyebrow: string;
}

const LightfallProject = {
    name: "Destiny 2: Lightfall",
    descShort: "Product page for the new Destiny expansion, Lightfall.  Features engaging content through the usage of interactive features such as image parallaxing via both mouse and scroll events.",
    siteUrl: "https://bungie.net/Lightfall",
    image: lightfallImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const SplicerProject = {
    name: "Destiny 2: Season of the Splicer",
    descShort: "Product page for the 14th season of Destiny 2, Season of the Splicer.  Also the first page I ever built as a professional web developer.",
    siteUrl: "https://bungie.net/SeasonOfTheSplicer",
    image: seasonSplicerImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const F2PProject = {
    name: "Destiny 2: Free To Play",
    descShort: "Landing page for Destiny 2.",
    siteUrl: "https://bungie.net/7/en/Destiny/FreeToPlay",
    image: freeToPlayImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const SpotifyCloneProject = {
    name: "Spotify App Clone",
    descShort: "Clone of the original Spotify mobile app, utilizing Spotify's web API to allow users to sign in to their Spotify account and interact with their playlists, saved albums, and more.",
    demoUrl: "https://www.youtube.com/watch?v=yrsdcICGlb4",
    image: spotifyCloneImg,
    repoUrl: "https://github.com/BrandonP321/spotify-clone",
    installUrl: "https://github.com/BrandonP321/spotify-clone#app-install",
    eyebrow: "React Native, TypeScript, Redux, Express"
}

const SeasonLostProject = {
    name: "Destiny 2: Season of the Lost",
    siteUrl: "https://bungie.net/SeasonOfTheLost",
    image: seasonLostImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const SeasonHauntedProject = {
    name: "Destiny 2: Season of the Haunted",
    descShort: "Product page for the 17th season of Destiny 2.  Leverages CMS content types, which map to specific React components, to procedurally render large chunks of content with minimal additional CSS styling required.",
    siteUrl: "https://www.bungie.net/SeasonOfTheHaunted",
    image: SeasonHauntedImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const PortfolioProject = {
    name: "My Portfolio",
    descShort: "My professional web development portfolio to showcase my relevant skills.  AKA the website you are currently viewing!",
    siteUrl: "/",
    image: portfolioImg,
    repoUrl: "https://github.com/BrandonP321/personal-portfolio",
    eyebrow: "React, TypeScript, SCSS, AWS"
}

const ChessProject = {
    name: "1-2-3 Chess",
    descShort: "This was one of the first projects I built after graduating from the full-stack web development bootcamp at the University of Washington.  While it doesn't reflect my most up to date skills, it serves as a reflection of where my skills were at 2 years ago to show how much I've learned.",
    siteUrl: "https://brandonp321.github.io/chess-game",
    image: chessImg,
    repoUrl: "https://github.com/BrandonP321/chess-game",
    eyebrow: "React, Express, WebSocket, Bootstrap, Heroku"
}

const GoalsProject = {
    name: "Leaps 'n' Bounds",
    descShort: "Web app for managing and tracking your goals.  This is my most recent full-stack project, created for the purpose of demonstrating my most up-to-date skills as a full-stack developer.",
    siteUrl: "https://main.d2ygyd34acbf9c.amplifyapp.com",
    repoUrl: "https://github.com/BrandonP321/goal-tracker",
    image: goalImg,
    eyebrow: "React, SCSS, Redux, TypeScript, Express, MongoDB, AWS & Heroku, JWTs, Monorepo & Yarn Workspaces"
}

export const projects: TProject[] = [
    LightfallProject, GoalsProject, SplicerProject, SpotifyCloneProject, PortfolioProject, SeasonHauntedProject, F2PProject
]