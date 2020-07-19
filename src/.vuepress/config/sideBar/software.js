module.exports = [
  "",
  "editor",
  {
    title: "VS Code",
    icon: "vscode",
    collapsable: false,
    prefix: "vscode/",
    children: [
      "",
      "install",
      "get-started",
      "shortcutKey",
      "settings",
      "extension",
    ],
  },
  "Chrome",
  {
    title: "Git",
    icon: "git",
    collapsable: false,
    prefix: "git/",
    children: [
      "",
      "install",
      "intro",
      "create-repo",
      "status",
      "recall",
      "reset",
      "working-directory",
      "change",
      "remote",
      "branch",
      "tag",
      "ignore",
      "working",
      "custom",
    ],
  },
  {
    title: "Github",
    icon: "Github",
    collapsable: false,
    prefix: "git/github/",
    children: ["", "github-pages", "actions", "deploy"],
  },
  {
    title: "COMSOL",
    icon: "app",
    collapsable: false,
    prefix: "comsol/",
    children: [
      "",
      "intro",
      "install",
      "get-started",
      "geometry",
      "view-geometry",
      "build-geometry",
      "select",
      "material",
      "physic-field",
      "mesh",
      "mesh-intro",
      "study",
      "result",
      "app",
    ],
  },
  "Apache",
  "nginx",
];
