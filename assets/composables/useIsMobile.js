import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useIsMobile(breakpoint = 480) {
  const isMobile = ref(false);

  const checkScreenSize = () => {
    isMobile.value = window.innerWidth <= breakpoint;
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
  };
}
