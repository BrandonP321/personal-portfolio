import seasonLostImg from "../media/img/projects/season_lost_project.jpg";
import SeasonHauntedImg from "../media/img/projects/s17_project.jpg";
import freeToPlayImg from "../media/img/projects/free_to_play_project.jpg";
import seasonSplicerImg from "../media/img/projects/s14_project.jpg";
import spotifyCloneImg from "../media/img/projects/spotify_clone_project.jpg";
import portfolioImg from "../media/img/projects/portfolio_project.jpg";

type TProject = {
    name: string;
    descLong: string;
    descShort?: string;
    siteUrl?: string;
    repoUrl?: string;
    image: string;
    eyebrow: string;
}

const SplicerProject = {
    name: "Destiny 2: Season of the Splicer",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Product page for the 14th season of Destiny 2, Season of the Splicer.  Also the first page I ever built as a professional web developer.",
    siteUrl: "https://bungie.net/SeasonOfTheSplicer",
    image: seasonSplicerImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const F2PProject = {
    name: "Destiny 2: Free To Play",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Landing page for Destiny 2.",
    siteUrl: "https://bungie.net/7/en/Destiny/FreeToPlay",
    image: freeToPlayImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const SpotifyCloneProject = {
    name: "Spotify App Clone",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Clone of the original Spotify mobile app, utilizing Spotify's web API to allow users to sign in to their Spotify account and interact with their playlists, saved albums, and more.",
    // siteUrl: "https://bungie.net/WitchQueen",
    image: spotifyCloneImg,
    repoUrl: "https://github.com/BrandonP321/spotify-clone",
    eyebrow: "React Native, TypeScript, Redux, Express"
}

const SeasonLostProject = {
    name: "Destiny 2: Season of the Lost",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    // descShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    siteUrl: "https://bungie.net/SeasonOfTheLost",
    image: seasonLostImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const SeasonHauntedProject = {
    name: "Destiny 2: Season of the Haunted",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Product page for the 17th season of Destiny 2.  Leverages CMS content types, which map to specific React components, to procedurally render large chunks of content with minimal additional CSS styling required.",
    siteUrl: "https://www.bungie.net/SeasonOfTheHaunted",
    image: SeasonHauntedImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const PortfolioProject = {
    name: "My Portfolio",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "My professional web development portfolio to showcase my relevant skills.  AKA the website you are currently viewing!",
    siteUrl: "/",
    image: portfolioImg,
    repoUrl: "https://github.com/BrandonP321/personal-portfolio",
    eyebrow: "React, TypeScript, SCSS, AWS"
}

export const projects: TProject[] = [
    SplicerProject, SpotifyCloneProject, PortfolioProject, SeasonHauntedProject, F2PProject
]