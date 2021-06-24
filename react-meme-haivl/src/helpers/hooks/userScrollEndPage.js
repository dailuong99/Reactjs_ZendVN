import { useEffect } from "react"

export default function userScrollEndPage(callback = () => { }, time = 1000) {
    useEffect(() => {
        const handler = (e) => {
            const scrollTop = window.scrollY;
            const heightWindow = window.innerHeight;
            const scrollheightBody = document.querySelector("body").scrollHeight;

            if (scrollTop + heightWindow >= scrollheightBody - 50) {
                callback();
            }
        }

        window.addEventListener("scroll", handler)

        return () => {
            window.removeEventListener("scroll", handler)
        }
    }, [callback]);
}