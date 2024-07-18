export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path: string) => {
    return path.split("/").filter((seg) => seg.length > 0).length;
  };

  const checkSpecialRoutes = (path: string) => {
    if (path.includes("/contact")) {
      return "contact";
    } else if (path.includes("/about")) {
      return "about";
    } else if (path.includes("/project") || path.includes("/resume")) {
      return "project-resume";
    }
    return null;
  };

  const toDepth = getDepth(to.path);
  const fromDepth = getDepth(from.path);

  const toSpecial = checkSpecialRoutes(to.path);
  const fromSpecial = checkSpecialRoutes(from.path);

  if (toSpecial === "project-resume" && fromSpecial !== "project-resume") {
    // Transition von unten nach oben, wenn zu 'project' oder 'resume' navigiert wird
    to.meta.pageTransition = { name: "page-down" };
    from.meta.pageTransition = { name: "page-down" };
  } else if (fromSpecial === "project-resume" && toSpecial !== "project-resume") {
    // Transition von oben nach unten, wenn von 'project' oder 'resume' zurück navigiert wird
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
  } else if (fromSpecial === "resume" && toSpecial === "about") {
    // Zusätzliche Bedingung für Transition von 'resume' zu 'about'
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
  } else {
    // Bestimme die horizontale Transition basierend auf 'contact' oder 'about'
    const reverseTransition = toSpecial === "contact" || fromSpecial === "contact"
      ? "page-left" : "page-right";
    const normalTransition = toSpecial === "contact" || fromSpecial === "contact"
      ? "page-right" : "page-left";
    to.meta.pageTransition = { name: toDepth > fromDepth ? reverseTransition : normalTransition };
    from.meta.pageTransition = { name: toDepth > fromDepth ? reverseTransition : normalTransition };
  }
});
