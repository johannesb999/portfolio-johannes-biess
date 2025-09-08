export default defineNuxtRouteMiddleware(() => {
  if (process.client && typeof navigator !== 'undefined' && !navigator.onLine) {
    return showError({ statusCode: 0, statusMessage: 'Offline' })
  }
});

