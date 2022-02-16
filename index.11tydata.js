// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you start seeing {% %} and {{ }}, these are referring to
// objects in this file.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.

// These are my frequent collaborators, so let's use some variables:
const tej = "Tej Chajed";
const joe = "Joseph Tassarotti";
const frans = "Frans Kaashoek";
const nickolai = "Nickolai Zeldovich";

// authorList generates the HTML for the author list from a JS array
function authorList(authors) {
    var list = [];
    authors.forEach((name, i) => {
        if (name == tej) {
            name = '<span class="self-author">' + name + "</span>";
        }
        if (i == authors.length - 1) {
            list.push("and " + name);
        } else {
            list.push(name);
        }
    });
    return list.join(", ");
}

module.exports = {
    publications: [{
            title: "GoJournal: a verified, concurrent, crash-safe journaling system",
            authors: authorList([
                tej,
                joe,
                "Mark Theng",
                "Ralf Jung",
                frans,
                nickolai,
            ]),
            conference: "OSDI 2021",
        },
        {
            title: "Verifying concurrent, crash-safe systems with Perennial",
            authors: authorList([tej, joe, frans, nickolai]),
            conference: "SOSP 2019",
        },
    ],
};