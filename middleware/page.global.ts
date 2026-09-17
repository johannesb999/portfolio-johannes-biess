import { mainProjects, playgroundProjects } from "~/composables/projects";

export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path: string) =>
    path.split("/").filter((seg) => seg.length > 0).length;

  const checkSpecialRoutes = (path: string) => {
    if (path.includes("/contact")) {
      return "contact";
    } else if (path.includes("/about")) {
      return "about";
    } else if (path.includes("/skillset")) {
      return "skillset";
    } else if (path.includes("/project") || path.includes("/resume")) {
      return "project-resume";
    } else if (path.includes("/legal")) {
      return "legal";
    }
    return null;
  };

  const checkKeywords = (path: string) => {
    if (
      path.includes("bosch") ||
      path.includes("hfg") ||
      path.includes("dtack")
    ) {
      return "right";
    } else if (path.includes("kbsz") || path.includes("internship")) {
      return "left";
    }
    return null;
  };

  // Reihenfolge fuer die Richtung der Seitenuebergaenge — dieselbe Liste,
  // die auch das Karussell bildet (composables/projects.ts)
  const projectPages = [
    ...mainProjects.map((p) => p.route),
    ...playgroundProjects.map((p) => p.route),
  ];

  const getPageName = (path: string) => {
    const segments = path
      .replace(/\/+$/, "")
      .split("/")
      .filter((seg) => seg.length > 0);
    return segments.pop() || "index";
  };

  const fromIndex = projectPages
    .map((page) => page.toLowerCase())
    .indexOf(getPageName(from.path).toLowerCase());
  const toIndex = projectPages
    .map((page) => page.toLowerCase())
    .indexOf(getPageName(to.path).toLowerCase());


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

  // (Hinweis) Spezifische Regeln für Start <-> About wurden entfernt, um ursprüngliche Richtungslogik zu bewahren

  // 1. Priorität: Sprachwechsel
  if (languageChanged) {
    to.meta.pageTransition = { name: "fade" };
    from.meta.pageTransition = { name: "fade" };
    return;
  }

  // 1.5 Start <-> About: erzwinge eindeutige Richtung (Home -> About: left, About -> Home: right)
  const isHome = (p: string) => p === "/" || /^\/(de|en)\/?$/.test(p);
  const isAboutRoute = (p: string) => /^(?:\/(de|en))\/about\/?$/.test(p);
  if (isHome(from.path) && isAboutRoute(to.path)) {
    const t = { name: "page-right" };
    to.meta.pageTransition = t;
    from.meta.pageTransition = t;
    return;
  }
  if (isAboutRoute(from.path) && isHome(to.path)) {
    const t = { name: "page-left" };
    to.meta.pageTransition = t;
    from.meta.pageTransition = t;
    return;
  }

  // 2. Priorität: Wechsel auf die /resume-Seite von speziellen Routen oder Keywords
  if (to.path.includes("/resume")) {
    if (fromKeyword || fromSpecial === "project-resume") {
      const transitionName =
        fromKeyword === "left" ? "page-right" : "page-left";
      to.meta.pageTransition = { name: transitionName };
      from.meta.pageTransition = { name: transitionName };
      return;
    }
  }

  // 3. Priorität: Wechsel zwischen Routen mit speziellen Keywords
  if (toKeyword) {
    const transitionName = toKeyword === "left" ? "page-left" : "page-right";
    to.meta.pageTransition = { name: transitionName };
    from.meta.pageTransition = { name: transitionName };
    return;
  }

  // 4. Priorität: Wechsel innerhalb der Projektseiten
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
    } else if (backward) {
      to.meta.pageTransition = { name: "page-right" };
      from.meta.pageTransition = { name: "page-right" };
    }
    return;
  }

  // Neue Transition: Wechsel zwischen /project und /details
  if (from.path.includes("/project") && to.path.includes("/details")) {
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
    return;
  } else if (from.path.includes("/details") && to.path.includes("/project")) {
    to.meta.pageTransition = { name: "page-down" };
    from.meta.pageTransition = { name: "page-down" };
    return;
  }

  // Spezifische Transition zwischen contact und legal
  if (fromSpecial === "contact" && toSpecial === "legal") {
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
    return;
  } else if (fromSpecial === "legal" && toSpecial === "contact") {
    to.meta.pageTransition = { name: "page-down" };
    from.meta.pageTransition = { name: "page-down" };
    return;
  }

  // Spezifische Transition zwischen about und skillset
  if (fromSpecial === "about" && toSpecial === "skillset") {
    to.meta.pageTransition = { name: "page-right" };
    from.meta.pageTransition = { name: "page-right" };
    return;
  } else if (fromSpecial === "skillset" && toSpecial === "about") {
    to.meta.pageTransition = { name: "page-left" };
    from.meta.pageTransition = { name: "page-left" };
    return;
  }

  // 5. Priorität: Wechsel zwischen speziellen Routen
  if (toSpecial === "project-resume" && fromSpecial !== "project-resume") {
    to.meta.pageTransition = { name: "page-up" };
    from.meta.pageTransition = { name: "page-up" };
    return;
  } else if (
    fromSpecial === "project-resume" &&
    toSpecial !== "project-resume"
  ) {
    to.meta.pageTransition = { name: "page-down" };
    from.meta.pageTransition = { name: "page-down" };
    return;
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
    return;
  }

  // 6. Standard-Transition
  to.meta.pageTransition = { name: "fade" };
  from.meta.pageTransition = { name: "fade" };
});
