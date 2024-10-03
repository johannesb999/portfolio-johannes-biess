<template>
  <div class="custom-cursor" ref="customCursor"></div>
</template>

// CustomCursor.vue

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const customCursor = ref(null);

const updateCursorPosition = (e) => {
  if (customCursor.value) {
    customCursor.value.style.left = `${e.pageX}px`;
    customCursor.value.style.top = `${e.pageY}px`;
  }
};

const handleMouseOver = (e) => {
  if (e.target.closest(".custom-link, .custom-button, .content .detailsLink")) {
    if (customCursor.value) {
      customCursor.value.classList.add("hover");
    }
  }
};

const handleMouseOut = (e) => {
  if (e.target.closest(".custom-link, .custom-button, .content .detailsLink")) {
    if (customCursor.value) {
      customCursor.value.classList.remove("hover");
    }
  }
};

onMounted(() => {
  document.addEventListener("mousemove", updateCursorPosition);
  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseout", handleMouseOut);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", updateCursorPosition);
  document.removeEventListener("mouseover", handleMouseOver);
  document.removeEventListener("mouseout", handleMouseOut);
});
</script>


<style>
:global(*) {
  cursor: none !important;
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
  transform: translate(-50%, -50%);
}

.custom-cursor.hover {
  background-color: rgb(0, 0, 0);
  width: 45px;
  height: 45px;
}
</style>
