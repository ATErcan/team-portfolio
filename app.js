const member1 = {
  name: "F4211-Sinan",
  job: "CEO",
  about: "Half of the team's brain.",
  img: "https://avatars.githubusercontent.com/u/94994862?v=4",
};
const member2 = {
  name: "F4159-Halil",
  job: "Team-Lead",
  about: "Other half of the team's brain.",
  img: "https://avatars.githubusercontent.com/u/107351147?v=4",
};
const member3 = {
  name: "F4196-Talha",
  job: "Scrum Master",
  about: "Ok, who's next?",
  img: "https://ca.slack-edge.com/T03LBL87DA8-U03MX0ZMZDE-38580d7fc909-512",
};
const member4 = {
  name: "F4154-Mehmet",
  job: "Ant-Man",
  about: "The member who works harder and smarter.",
  img: "https://ca.slack-edge.com/T03LBL87DA8-U03MX0ZTZGQ-cffa7af04dfd-512",
};
const member5 = {
  name: "F4372-Melih",
  job: "Google-Man",
  about:
    "He's a senior level developer. How? Because he can Google everything.",
  img: "https://ca.slack-edge.com/T03LBL87DA8-U03PCFMJR8S-a0021f88efc8-512",
};
const member6 = {
  name: "F4173-Yasin",
  job: "Watchman",
  about: `"I'm here to just watch and listen, but not to learn. I already know these things." 
    -Yasin(probably)`,
  img: "https://avatars.githubusercontent.com/u/69001188?v=4",
};
const member7 = {
  name: "D1406-Mukaddes",
  job: "Freshman (or woman)",
  about: "Talk less, do more.",
  img: "https://ca.slack-edge.com/T03LBL87DA8-U0423AEJR6V-7257d920ebfa-512",
};
const member8 = {
  name: "F4191-Kemal",
  job: "Among-Us",
  about: "Talented silent member.",
  img: "https://avatars.githubusercontent.com/u/81470704?v=4",
};
const member9 = {
  name: "F4156-J.Webb",
  job: "Navigator",
  about: "It doesn't matter how slow you are, once you know your destination.",
  img: "https://avatars.githubusercontent.com/u/109618788?v=4",
};

const members = [
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
  member8,
  member9,
];

const memberImg = document.querySelector(".member-img");
const memberName = document.querySelector(".name");
const memberRole = document.querySelector(".job");
const memberInfo = document.querySelector(".about");

let currentMember = 0;

const shownMember = () => {
  memberImg.setAttribute("src", `${members[currentMember].img}`);
  memberName.textContent = members[currentMember].name;
  memberRole.textContent = members[currentMember].job;
  memberInfo.textContent = members[currentMember].about;
};

shownMember();
