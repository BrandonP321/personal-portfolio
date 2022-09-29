import { useEffect, useState } from "react"

/** Returns status of whether browser supports webp images */
export const useWebp = () => {
    const [supportsWebp, setSupportsWebp] = useState(true);

    useEffect(() => {
        const testImg = "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
        const img = new Image();

        img.onload = () => setSupportsWebp((img.width > 0) && (img.height > 0));
        img.onerror = () => setSupportsWebp(false);

        img.src = "data:image/web;base64," + testImg;
    }, []);

    return supportsWebp;
}