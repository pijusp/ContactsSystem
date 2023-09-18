/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            red: "#A61A11",
            "dark-red": "#850606",
            "dark-blue": "#1F3F77",
            blue: "#0054A6",
            "gray-dark": "#414042",
            white: "#FFFFFF",
            "gray-light": "#F1F2F4",
            black: "#000000",
            gray: "#21212114",
            "gray-input": "#ffffff00",
            zinc: " rgb(113 113 122)",
        },
        extend: {
            maxWidth: {
                405: "405px",
                449: "449px",
                200: "200px",
                1152: "1152px",
            },
            lineHeight: {
                18: "72px",
                14: "56px",
            },
            width: {
                449: "28rem",
                750: "46rem",
            },
        },
    },
    plugins: [],
};
