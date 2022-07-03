import seasonLostImg from "../media/img/projects/season_lost_project.jpg";
import witchQueenImg from "../media/img/projects/wq_project.jpg";
import annivImg from "../media/img/projects/anniv_project.jpg";
import freeToPlayImg from "../media/img/projects/free_to_play_project.jpg";
import seasonSplicerImg from "../media/img/projects/s14_project.jpg";
import spotifyCloneImg from "../media/img/projects/spotify_clone_project.jpg";

type TProject = {
    name: string;
    descLong: string;
    descShort: string;
    siteUrl?: string;
    repoUrl?: string;
    image: string;
    eyebrow: string;
}

const SplicerProject = {
    name: "Destiny 2: Season of the Splicer",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    siteUrl: "https://bungie.net/SeasonOfTheSplicer",
    image: seasonSplicerImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const F2PProject = {
    name: "Destiny 2: Free To Play",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    siteUrl: "https://bungie.net/7/en/Destiny/FreeToPlay",
    image: freeToPlayImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const SpotifyCloneProject = {
    name: "Spotify App Clone",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // siteUrl: "https://bungie.net/WitchQueen",
    image: spotifyCloneImg,
    repoUrl: "https://github.com/BrandonP321/spotify-clone",
    eyebrow: "React Native, TypeScript, Express"
}

const SeasonLostProject = {
    name: "Destiny 2: Season of the Lost",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    siteUrl: "https://bungie.net/SeasonOfTheLost",
    image: seasonLostImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

const WQProject = {
    name: "Destiny 2: The Witch Queen",
    descLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    descShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    siteUrl: "https://bungie.net/WitchQueen",
    image: witchQueenImg,
    repoUrl: "",
    eyebrow: "React, TypeScript, SCSS"
}

export const projects: TProject[] = [
    SplicerProject, SpotifyCloneProject, F2PProject, SeasonLostProject, WQProject
]