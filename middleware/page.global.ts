export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path) => {
    return path.split("/").filter((seg) => seg.length > 0).length;
  };

  const checkSpecialRoutes = (path) => {
    if (path.includes("/contact")) {
      return "contact";
    } else if (path.includes("/about")) {
      return "about";
    } else if (path.includes("/project") || path.includes("/resume")) {
      return "project-resume";
    } else if (path.includes("/resume")) {
      return "resume";
    }
    return null;
  };

  const checkKeywords = (path) => {
    if (
      path.includes("bosch") ||
      path.includes("hfg") ||
      path.includes("dtack")
    ) {
      return "left";
    } else if (path.includes("kbsz") || path.includes("internship")) {
      return "right";
    }
    return null;
  };

  const projectPages = [
    "projects",
    "jumpStar",
    "simpleChat",
    "drawingLight",
    "trickyTowers",
    "goEase",
  ];

  const getPageName = (path) => {
    const segments = path.split("/");
    return segments.pop() || "index";
  };

  const fromIndex = projectPages.indexOf(getPageName(from.path));
  const toIndex = projectPages.indexOf(getPageName(to.path));
  const toDepth = getDepth(to.path);
  const fromDepth = getDepth(from.path);
  const toSpecial = checkSpecialRoutes(to.path);
  const fromSpecial = checkSpecialRoutes(from.path);
  const toKeyword = checkKeywords(to.path);
  const fromKeyword = checkKeywords(from.path);

  const movingInProjectPages = fromIndex !== -1 && toIndex !== -1;

  const fromLang = from.path.match(/\/(de|en)\//);
  const toLang = to.path.match(/\/(de|en)\//);
  const languageChanged = fromLang && toLang && fromLang[1] !== toLang[1];

  if (languageChanged) {
    to.meta.pageTransition = { name: "fade" };
    from.meta.pageTransition = { name: "fade" };
    console.log("Transition name: fade");
    return;
  }

  // Prüfen, ob von einer Seite mit bestimmten Keywords auf die resume-Seite gewechselt wird
  if (
    to.path.includes("/resume") &&
    (fromKeyword || fromSpecial === "project-resume")
  ) {
    const transitionName = fromKeyword === "left" ? "page-right" : "page-left";
    to.meta.pageTransition = { name: transitionName };
    from.meta.pageTransition = { name: transitionName };
    console.log("Transition name:", transitionName);
    return;
  }

  if (toKeyword) {
    const transitionName = toKeyword === "left" ? "page-left" : "page-right";
    to.meta.pageTransition = { name: transitionName };
    from.meta.pageTransition = { name: transitionName };
    console.log("Transition name:", transitionName);
    return;
  }

  if (movingInProjectPages) {
    const lastIndex = projectPages.length - 1;
    const forward =
      (toIndex === 0 && fromIndex === lastIndex) ||
      (toIndex > fromIndex && !(fromIndex === 0 && toIndex === lastIndex));
    const backward =
      (fromIndex === 0 && toIndex === lastIndex) ||
      (toIndex < fromIndex && !(toIndex === 0 && fromIndex === lastIndex));

    if (forward) {
      to.meta.pageTransition = { name: "page-left" };
      from.meta.pageTransition = { name: "page-left" };
      console.log("Transition name: page-left");
    } else if (backward) {
      to.meta.pageTransition = { name: "page-right" };
      from.meta.pageTransition = { name: "page-right" };
      console.log("Transition name: page-right");
    }
  } else if (
    toSpecial === "project-resume" &&
    fromSpecial !== "project-resume"
  ) {
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
    console.log("Transition name: page-up");
  } else if (
    fromSpecial === "project-resume" &&
    toSpecial !== "project-resume"
  ) {
    to.meta.pageTransition = { name: "page-down" };
    from.meta.pageTransition = { name: "page-down" };
    console.log("Transition name: page-down");
  } else if (fromSpecial === "resume" && toSpecial === "about") {
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
    console.log("Transition name: page-up");
  } else if (
    toSpecial === "contact" ||
    fromSpecial === "contact" ||
    toSpecial === "about" ||
    fromSpecial === "about"
  ) {
    const reverseTransition =
      toSpecial === "contact" || fromSpecial === "contact"
        ? "page-left"
        : "page-right";
    const normalTransition =
      toSpecial === "contact" || fromSpecial === "contact"
        ? "page-right"
        : "page-left";
    to.meta.pageTransition = {
      name: toDepth > fromDepth ? reverseTransition : normalTransition,
    };
    from.meta.pageTransition = {
      name: toDepth > fromDepth ? reverseTransition : normalTransition,
    };
    console.log("Transition name:", to.meta.pageTransition.name);
  } else {
    to.meta.pageTransition = { name: "fade" };
    from.meta.pageTransition = { name: "fade" };
    console.log("Transition name: fade");
  }
});
