import SeasonHauntedImg from "../media/img/projects/s17_project.jpg";
import freeToPlayImg from "../media/img/projects/free_to_play_project.jpg";
import seasonSplicerImg from "../media/img/projects/s14_project.jpg";
import spotifyCloneImg from "../media/img/projects/spotify_clone_project.jpg";
import portfolioImg from "../media/img/projects/portfolio_project.jpg";
import lightfallImg from "../media/img/projects/lightfall_project.jpg";
import goalImg from "../media/img/projects/goal_tracker_project.jpg";
import SeasonHauntedImgWebp from "../media/img/projects/s17_project.webp";
import freeToPlayImgWebp from "../media/img/projects/free_to_play_project.webp";
import seasonSplicerImgWebp from "../media/img/projects/s14_project.webp";
import spotifyCloneImgWebp from "../media/img/projects/spotify_clone_project.webp";
import portfolioImgWebp from "../media/img/projects/portfolio_project.webp";
import lightfallImgWebp from "../media/img/projects/lightfall_project.webp";
import goalImgWebp from "../media/img/projects/goal_tracker_project.webp";
import personaverseProjectImg from "../media/img/projects/personaverse_project.jpg";
import personaverseProjectImgWebp from "../media/img/projects/personaverse_project.webp";
import utkProjectImg from "../media/img/projects/utk_project.jpg";
import utkProjectImgWebp from "../media/img/projects/utk_project.webp";

type TProject = {
  name: string;
  descLong?: string;
  descShort?: string;
  siteUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  installUrl?: string;
  image: string;
  webpImage: string;
  eyebrow: string;
};

const UtkProject: TProject = {
  name: "Project UTK (Startup)",
  eyebrow:
    "React, TypeScript, Express.js, AWS, Yarn Workspaces MonoRepo, Redux, SCSS, JWTs",
  image: utkProjectImg,
  webpImage: utkProjectImgWebp,
  repoUrl: "https://github.com/BrandonP321/project-utk",
  descShort:
    "This startup aimed to be the Zillow for wedding vendors, helping engaged couples easily find and book services for their big day. Although the project wasn't fully developed and has been set aside for now, it reflects my entrepreneurial spirit and drive to create innovative solutions.",
};

const LightfallProject = {
  name: "Destiny 2: Lightfall",
  descShort:
    "Product page for the new Destiny expansion, Lightfall.  Features engaging content through the usage of interactive features such as image parallaxing via both mouse and scroll events.",
  siteUrl: "https://bungie.net/Lightfall",
  image: lightfallImg,
  webpImage: lightfallImgWebp,
  repoUrl: "",
  eyebrow: "React, TypeScript, SCSS",
};

const SplicerProject = {
  name: "Destiny 2: Season of the Splicer",
  descShort:
    "Product page for the 14th season of Destiny 2, Season of the Splicer.  Also the first page I ever built as a professional web developer.",
  siteUrl: "https://bungie.net/SeasonOfTheSplicer",
  image: seasonSplicerImg,
  webpImage: seasonSplicerImgWebp,
  repoUrl: "",
  eyebrow: "React, TypeScript, SCSS",
};

const F2PProject = {
  name: "Destiny 2: Free To Play",
  descShort: "Landing page for Destiny 2.",
  siteUrl: "https://bungie.net/7/en/Destiny/FreeToPlay",
  image: freeToPlayImg,
  webpImage: freeToPlayImgWebp,
  repoUrl: "",
  eyebrow: "React, TypeScript, SCSS",
};

const SpotifyCloneProject = {
  name: "Spotify App Clone",
  descShort:
    "Clone of the original Spotify mobile app, utilizing Spotify's web API to allow users to sign in to their Spotify account and interact with their playlists, saved albums, and more.",
  demoUrl: "https://www.youtube.com/watch?v=yrsdcICGlb4",
  image: spotifyCloneImg,
  webpImage: spotifyCloneImgWebp,
  repoUrl: "https://github.com/BrandonP321/spotify-clone",
  installUrl: "https://github.com/BrandonP321/spotify-clone#app-install",
  eyebrow: "React Native, TypeScript, Redux, Express",
};

const SeasonHauntedProject = {
  name: "Destiny 2: Season of the Haunted",
  descShort:
    "Product page for the 17th season of Destiny 2.  Leverages CMS content types, which map to specific React components, to procedurally render large chunks of content with minimal additional CSS styling required.",
  siteUrl: "https://www.bungie.net/SeasonOfTheHaunted",
  image: SeasonHauntedImg,
  webpImage: SeasonHauntedImgWebp,
  repoUrl: "",
  eyebrow: "React, TypeScript, SCSS",
};

const PortfolioProject = {
  name: "My Portfolio",
  descShort:
    "This portfolio showcases my work, skills, and accomplishments as a frontend engineer. Browse through my projects to see how I've leveraged technologies like React, TypeScript, and AWS to build innovative solutions.",
  siteUrl: "/",
  image: portfolioImg,
  webpImage: portfolioImgWebp,
  repoUrl: "https://github.com/BrandonP321/personal-portfolio",
  eyebrow: "React, TypeScript, SCSS, AWS",
};

const GoalsProject = {
  name: "Leaps 'n' Bounds",
  descShort: "Web app for managing and tracking your goals.  ",
  repoUrl: "https://github.com/BrandonP321/goal-tracker",
  image: goalImg,
  webpImage: goalImgWebp,
  eyebrow:
    "React, SCSS, Redux, TypeScript, Express, MongoDB, AWS & Heroku, JWTs, Monorepo & Yarn Workspaces",
};

const PersonaVerseProject: TProject = {
  image: personaverseProjectImg,
  webpImage: personaverseProjectImgWebp,
  name: "PersonaVerse",
  descShort:
    "Ever wondered what it would be like to chat with Einstein or your favorite book character? This project used the Chat GPT API to let users have those engaging conversations. Although it's no longer active, you can still visit the home page to see what it was all about.",
  eyebrow:
    "React, TypeScript, Stripe API, SCSS, AWS, JWTs, Yarn Workspaces MonoRepo, Express, Redux",
  siteUrl: "https://personaverse.com",
  repoUrl: "https://github.com/BrandonP321/celeb-chat",
};

export const projects: TProject[] = [
  UtkProject,
  LightfallProject,
  PersonaVerseProject,
  SplicerProject,
  SpotifyCloneProject,
  PortfolioProject,
];
