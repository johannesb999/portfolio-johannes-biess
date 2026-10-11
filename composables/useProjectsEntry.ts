import { computed } from "vue";
import { useRoute } from "vue-router";
import { useRuntimeConfig } from "#imports";

/**
 * Pfad, auf den jeder "Projekte"-Link zeigen soll.
 *
 * Standardmaessig die erste Station des Karussells; nur im ausdruecklich
 * aktivierten Baustellen-Modus die Construction-Seite. Festgelegt wird das in nuxt.config.ts
 * (runtimeConfig.public.projectsEntry), damit es zu den Weiterleitungen passt.
 *
 * composables/projects.ts bleibt bewusst frei von Nuxt-Imports — die Datei wird
 * auch von nuxt.config.ts geladen.
 */
export function useProjectsEntry() {
  const route = useRoute();
  const entry = useRuntimeConfig().public.projectsEntry;

  return computed(() => {
    const locale = route.path.startsWith("/de") ? "de" : "en";
    return `/${locale}/project/${entry}`;
  });
}
