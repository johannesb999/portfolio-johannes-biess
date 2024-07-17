export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path: string) => {
    return path.split("/").filter((seg) => seg.length > 0).length;
  };

  const checkSpecialRoutes = (path: string) => {
    if (path.includes("/contact")) {
      return "contact";
    } else if (path.includes("/about")) {
      return "about";
    }
    return null;
  };

  const toDepth = getDepth(to.path);
  const fromDepth = getDepth(from.path);

  const toSpecial = checkSpecialRoutes(to.path);
  const fromSpecial = checkSpecialRoutes(from.path);

  if (toSpecial || fromSpecial) {
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
  } else {
    to.meta.pageTransition = {
      name: toDepth > fromDepth ? "page-right" : "page-left",
    };
    from.meta.pageTransition = {
      name: toDepth > fromDepth ? "page-right" : "page-left",
    };
  }
});
