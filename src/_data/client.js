module.exports = {
    name: "Loanstar INC.",
    email: "loanstarinc1@gmail.com",
    phoneForTel: "718-820-2561",
    phoneFormatted: "(718) 820-2561",
    address: {
        lineOne: "62-84 Booth Street",
        city: "Rego Park",
        state: "NY",
        zip: "11374",
        country: "US",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.loanstarinc.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
