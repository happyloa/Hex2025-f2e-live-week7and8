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
          "4.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h1: [
          "3rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h2: [
          "2.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h3: [
          "2rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h4: [
          "1.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
        title: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        subtitle: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "700",
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        body2: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        tiny: [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
      },
      maxWidth: {
        container: "1296px",
      },
      boxShadow: {
        button: "0 4px 12px 0 #00000026",
        card: "0 4px 40px 0 #0000001A",
        section: "0 8px 80px 0 #00000014",
      },
    },
  },
};
