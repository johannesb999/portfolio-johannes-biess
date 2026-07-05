import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useDeviceType() {
  const isMobile = ref(false);
  const isTablet = ref(false);
  const isDesktop = ref(false);

  // Muss zum Breakpoint-Raster in assets/styles/_breakpoints.scss passen
  const checkScreenSize = () => {
    const width = window.innerWidth;
    isMobile.value = width <= 480;
    isTablet.value = width >= 481 && width <= 768;
    isDesktop.value = width > 768;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
