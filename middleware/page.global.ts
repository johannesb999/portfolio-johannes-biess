export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path) => {
    return path.split("/").filter((seg) => seg.length > 0).length;
  };

  const checkSpecialRoutes = (
    path
  ) => {
    if (path.includes("/contact")) {
      return "contact";
    } else if (path.includes("/about")) {
      return "about";
    } else if (path.includes("/project")) {
      return "project";
    }
    return null;
  };

  const getPageName = (path) => {
    const segments = path.split("/");
    return segments.pop() || "index";
  };

  const fromDepth = getDepth(from.path);
  const toDepth = getDepth(to.path);
  const toSpecial = checkSpecialRoutes(to.path);
  const fromSpecial = checkSpecialRoutes(from.path);

  const fromLang = from.path.match(/\/(de|en)\//);
  const toLang = to.path.match(/\/(de|en)\//);
  const languageChanged = fromLang && toLang && fromLang[1] !== toLang[1];

  if (languageChanged) {
    to.meta.pageTransition = { name: "fade" };
    from.meta.pageTransition = { name: "fade" };
    return;
  }

  if (to.path === '/' && fromSpecial) {
    // Transition von einer speziellen Seite zur Startseite
    to.meta.pageTransition = { name: "page-right" };
    from.meta.pageTransition = { name: "page-right" };
  } else if (from.path === '/' && toSpecial) {
    // Transition von der Startseite zu einer speziellen Seite
    to.meta.pageTransition = { name: "page-left" };
    from.meta.pageTransition = { name: "page-left" };
  } else if (
    toSpecial &&
    fromSpecial &&
    toSpecial !== fromSpecial
  ) {
    // Übergänge zwischen speziellen Seiten
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
  } else {
    // Standard-Transition
    to.meta.pageTransition = { name: "fade" };
    from.meta.pageTransition = { name: "fade" };
  }
});
