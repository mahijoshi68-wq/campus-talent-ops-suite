(function () {
  const links = [
    ["index.html", "Hub"],
    ["hiring.html", "Hiring"],
    ["feedback.html", "Internships"],
    ["handholding.html", "Handholding"],
    ["exit.html", "Exit"],
    ["offers.html", "Offers"],
    ["emailer.html", "Emailer"],
  ];
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const nav = document.getElementById("nav");
  if (!nav) return;
  nav.innerHTML = links
    .map(([href, label]) => {
      const active = here === href || (here === "" && href === "index.html");
      return `<a href="${href}" class="${active ? "active" : ""}">${label}</a>`;
    })
    .join("");
})();
