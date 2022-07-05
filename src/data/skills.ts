/* FRONT END LOGOS */
import BootstrapLogo from "../media/img/skills/frontend/bootstrap.png"
import GraphqlLogo from "../media/img/skills/frontend/graphql.png"
import materialUILogo from "../media/img/skills/frontend/material-ui.png"
import reactLogo from "../media/img/skills/frontend/react.png"
import reactNativeLogo from "../media/img/skills/frontend/react-native.png"
import reduxLogo from "../media/img/skills/frontend/redux.png"
import sassLogo from "../media/img/skills/frontend/sass.png"
import tsLogo from "../media/img/skills/frontend/ts.png"

/* BACK END LOGOS */
import NodeLogo from "../media/img/skills/backend/node.png";
import awsLogo from "../media/img/skills/backend/aws.png";
import expressLogo from "../media/img/skills/backend/express.png";
import jwtLogo from "../media/img/skills/backend/jwt.png";
import mongoLogo from "../media/img/skills/backend/mongodb.png";
import sqlLogo from "../media/img/skills/backend/sql.png";
import websocketLogo from "../media/img/skills/backend/websocket.png";

/* DESIGN LOGOS */
import aiLogo from "../media/img/skills/design/ai.png";
import psLogo from "../media/img/skills/design/ps.png";
import xdLogo from "../media/img/skills/design/xd.png";

/* VCS LOGOS */
import gitLogo from "../media/img/skills/vcs/git.png";
import gitlabLogo from "../media/img/skills/vcs/gitlab.png";
import perforceLogo from "../media/img/skills/vcs/perforce.png";

export type TSkillGroup = {
    name: string;
    skillImages: { name: string; img: string }[];
}

const frontendSkillGroup: TSkillGroup = {
    name: "Front-End",
    skillImages: [
        { img: reactLogo, name: "React" }, 
        { img: tsLogo, name: "TypeScript" },
        { img: reduxLogo, name: "Redux" },
        { img: GraphqlLogo, name: "GraphQL" },
        { img: reactNativeLogo, name: "React Native" },
        { img: BootstrapLogo, name: "Bootstrap" },
        { img: materialUILogo, name: "Material UI" },
        { img: sassLogo, name: "SASS" }
    ]
}

const backendSkillGroup: TSkillGroup = {
    name: "Back-End",
    skillImages: [
        { img: NodeLogo, name: "Node.js" },
        { img: expressLogo, name: "Express" },
        { img: sqlLogo, name: "SQL" },
        { img: awsLogo, name: "AWS" },
        { img: jwtLogo, name: "JSON Web Tokens" },
        { img: mongoLogo, name: "MongoDB" },
        { img: websocketLogo, name: "Web Sockets" },
    ]
}

const designSkillGroup: TSkillGroup = {
    name: "Design",
    skillImages: [
        { img: psLogo, name: "Adobe Photoshop" }, 
        { img: aiLogo, name: "Adobe Illustrator" }, 
        { img: xdLogo, name: "Adobe XD" }, 
    ]
}

const vcsSkillGroup: TSkillGroup = {
    name: "VCS",
    skillImages: [
        { img: gitLogo, name: "Git & GitHub" }, 
        { img: gitlabLogo, name: "GitLab" }, 
        { img: perforceLogo, name: "Perforce" }, 
    ]
}

export const SkillGroups: TSkillGroup[] = [
    frontendSkillGroup, backendSkillGroup, designSkillGroup, vcsSkillGroup
]