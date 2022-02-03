function authorList(authors) {
  var list = [];
  authors.forEach((name, i) => {
    if (name == "Tej Chajed") {
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
  name: "Tej Chajed",
  email: "tchajed@mit.edu",
  publications: [
    {
      title: "GoJournal: a verified, concurrent, crash-safe journaling system",
      authors: authorList([
        "Tej Chajed",
        "Joseph Tassarotti",
        "Mark Theng",
        "Ralf Jung",
        "Frans Kaashoek",
        "Nickolai Zeldovich",
      ]),
      conference: "OSDI 2021",
    },
    {
      title: "Verifying concurrent, crash-safe systems with Perennial",
      authors: authorList([
        "Tej Chajed",
        "Joseph Tassarotti",
        "Frans Kaashoek",
        "Nickolai Zeldovich",
      ]),
      conference: "SOSP 2019",
    },
  ],
};
