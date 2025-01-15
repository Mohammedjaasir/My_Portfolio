import { openLink } from "./methods";

const certifications = {
    heading: "Achievements & certifications",
    list: [
        {
            size: 1,
            title: "Fundamental AI Concepts",
            platform: "Microsoft",
            link: "", // Add the actual link here if needed
            date: "Issued Oct 2024 · No Expiration Date",
            logo: "/assets/aws.png",
            aos: "zoom-out-left"
        },
        {
            size: 1,
            title: "Artificial intelligence and Data science",
            platform: "Intellipaat",
            link: "", // Add the actual link here if needed
            date: "Issued Sep 2024 · No Expiration Date",
            logo: "/assets/docker.png",
            aos: "zoom-out-right"
        },
        {
            size: 1,
            title: "Generative AI",
            platform: "Microsoft",
            link: "", // Add the actual link here if needed
            date: "Issued Aug 2024 · No Expiration Date",
            logo: "/assets/aws.png",
            aos: "zoom-out-left"
        },
        {
            size: 1,
            title: "Certified AIML Developer",
            platform: "Coursera",
            link: "", // Add the actual link here if needed
            date: "Issued Feb 2024 · No Expiration Date",
            logo: "/assets/59830997.png", // Correct the file path to a publicly accessible one
            aos: "zoom-out-right"
        },
        {
            size: 2,
            title: "Hackathon Recognition",
            platform: "Data Sprint 2.0 | Shortlisted for the final round in a competitive hackathon held in Chennai, showcasing innovative solutions in AI and mobility",
            link: "", // Add the actual link here if needed
            date: "Issued Oct 2024 · No Expiration Date",
            logo: "/assets/jj.jpg", // Correct the file path to a publicly accessible one
            aos: "zoom-out-left"
        }
    ],
    handleIconClick: openLink
};

export default certifications;
