import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          "120": "#2B211C",
          DEFAULT: "#4A3830",
          "80": "#886658",
          "60": "#A37F71",
          "40": "#CBB6AF",
          "10": "#F3EEEC",
        },
        neutral: {
          "80": "#4B4B4B",
          "60": "#909090",
          "40": "#ECECEC",
          "10": "#F9F9F9",
        },
        success: {
          "120": "#48970F",
          DEFAULT: "#7CD31F",
          "20": "#DDFAA5",
          "10": "#F0FCD1",
        },
        info: {
          "120": "#1566B5",
          DEFAULT: "#2AAFFC",
          "20": "#A9EFFE",
          "10": "#D4F9FE",
        },
        danger: {
          "120": "#B71D4F",
          DEFAULT: "#FF3A55",
          "20": "#FFBBB0",
          "10": "#FFE0D7",
        },
      },
      fontSize: {
        display: [
          "4.375rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        h1: [
          "3rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        h4: [
          "1.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        title: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        subtitle: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
            letterSpacing: "2px",
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
            letterSpacing: "2px",
          },
        ],
        body2: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
            letterSpacing: "2px",
          },
        ],
        tiny: [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
            letterSpacing: "2px",
          },
        ],
      },
      maxWidth: {
        container: "1296px",
      },
      boxShadow: {
        shadow: "0 4px 40px 0 #0000001A",
      },
    },
  },
};
