import seasonLostImg from "../media/img/projects/season_lost_project.jpg";
import SeasonHauntedImg from "../media/img/projects/s17_project.jpg";
import freeToPlayImg from "../media/img/projects/free_to_play_project.jpg";
import seasonSplicerImg from "../media/img/projects/s14_project.jpg";
import spotifyCloneImg from "../media/img/projects/spotify_clone_project.jpg";
import portfolioImg from "../media/img/projects/portfolio_project.jpg";

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

export const projects: TProject[] = [
    SplicerProject, SpotifyCloneProject, PortfolioProject, SeasonHauntedProject, F2PProject
]