<template>
  <div class="custom-cursor" ref="customCursor"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const customCursor = ref(null);

const updateCursorPosition = (e) => {
  if (customCursor.value) {
    customCursor.value.style.left = `${e.pageX}px`;
    customCursor.value.style.top = `${e.pageY}px`;
  }
};

const handleMouseEnter = () => {
  if (customCursor.value) {
    customCursor.value.classList.add("hover");
  }
};

const handleMouseLeave = () => {
  if (customCursor.value) {
    customCursor.value.classList.remove("hover");
  }
};

const addHoverEffect = () => {
  document.querySelectorAll(".custom-link, .custom-button").forEach((el) => {
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
  });
};

onMounted(() => {
  customCursor.value = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", updateCursorPosition);
  addHoverEffect();
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", updateCursorPosition);
  document.querySelectorAll(".custom-link, .custom-button").forEach((el) => {
    el.removeEventListener("mouseenter", handleMouseEnter);
    el.removeEventListener("mouseleave", handleMouseLeave);
  });
});
</script>

<style scoped>
html,
body {
  cursor: none;
}

.custom-cursor {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fbfbfbb3;
  backdrop-filter: blur(2px);
  border: solid 1px #171717;
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transition: background-color 0.1s ease;
}

.custom-cursor.hover {
  background-color: rgb(0, 0, 0);
}
</style>
