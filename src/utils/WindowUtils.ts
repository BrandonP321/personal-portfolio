export class WindowUtils {
    public static LockScroll = (mediumOnly?: boolean) => {
        // set <body/> width to (window width - vw) to to avoid body shifting in size when scroll gets locked
        document.body.style.width = `calc(100vw - ${window.innerWidth - document.body.clientWidth}px)`;
        document.body.classList.add(mediumOnly ? "medium-scroll-lock" : "scroll-lock");
    }

    public static UnlockScroll = () => {
        document.body.style.width = "initial";
        document.body.classList.remove("scroll-lock", "medium-scroll-lock");
    }
}