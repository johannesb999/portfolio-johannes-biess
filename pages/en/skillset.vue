<template>
  <main>
    <EdgeLink position="right" to="about" label="ABOUT" />

    <div class="aboutMeText">
      <div v-for="(textArray, idx) in textArrays" :key="idx" class="mainText">
        <div>
          <span
            v-for="(letter, index) in textArray"
            :key="index"
            class="char"
            :class="[letter.styleClass, letter.isSeparator ? 'separator' : 'normal']"
          >
            <AppLink
              v-if="letter.isLink && letter.linkTarget.startsWith('mailto')"
              :label="letter.current"
              :scale="false"
              @click="copyEmailToClipboard"
            />
            <AppLink
              v-else-if="letter.isLink"
              :href="letter.linkTarget"
              :label="letter.current"
              :scale="false"
            />
            <template v-else>{{ letter.current }}</template>
          </span>
        </div>
      </div>

      <div class="custom-alert" :class="{ show: showAlert }">
        EMAIL COPIED<br />
        TO CLIPBOARD
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const EMAIL = "biessjohannes@gmail.com";
// Steuerzeichen in den Texten: [] = fett, | @ $ = LinkedIn / Mail / GitHub
const LINK_TARGETS = {
  "|": "https://de.linkedin.com/in/johannes-biess-8464a21bb",
  "@": `mailto:${EMAIL}`,
  $: "https://github.com/johannesb999",
};

const texts = [
  "                   [SKILLSET]                   ",
  "     [TECHNICAL]                                ",
  "BACKEND NODE SQL MONGODB GIT DOCKER SERVER    ",
  "FRONTEND HTML CSS JAVASCRIPT VUEJS THREEJS    ",
  "HARDWARE FUSION360 ARDUINO LASERCUTTER 3DPRINT",
  "                [CONCEPTIONAL]                  ",
  "DESIGNMETHODS         ",
  "USERRESEARCH     ",
  "                         [PERSONAL] [SKILLS]      ",
  "LANGUAGES GERMAN ENGLISH SPANISH              ",
  "      [PROJEKT] [MANAGEMENT] [SKILLS]                        ",
  "AGILE SCRUM CONFLUENCE JIRA              ",
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ3260";
const randomChar = () => alphabet[Math.floor(Math.random() * alphabet.length)];

function createTextArray(text) {
  const letters = [];
  let isStyled = false;
  let linkTarget = null;

  for (const char of text) {
    if (char === "[" || char === "]") {
      isStyled = !isStyled;
    } else if (LINK_TARGETS[char]) {
      linkTarget = linkTarget === null ? LINK_TARGETS[char] : null;
    } else {
      letters.push({
        current: char === " " ? randomChar() : char,
        isSeparator: char === " ",
        isLink: linkTarget !== null,
        linkTarget,
        styleClass: [linkTarget !== null ? "link-style" : null, isStyled ? "custom-style" : null]
          .filter(Boolean)
          .join(" "),
      });
    }
  }

  return letters;
}

const textArrays = ref(texts.map(createTextArray));
const showAlert = ref(false);

async function copyEmailToClipboard() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 2000);
  } catch {
    // Ohne Clipboard-Zugriff (kein sicherer Kontext) das Mailprogramm öffnen
    window.location.href = LINK_TARGETS["@"];
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/type" as type;
@use "@/assets/styles/breakpoints" as bp;

main {
  box-sizing: border-box;
  min-height: 100dvh;
  display: grid;
  place-content: center;
  justify-items: center;
}

.aboutMeText {
  display: grid;
  justify-items: center;
  width: 60%;
  text-align: left;
}

.char {
  width: 1rem;
  height: 1.5rem;
  font-size: var(--font__size--xxl);
  line-height: 1.75rem;
}

.separator {
  color: var(--color--gray-light);
}

.normal {
  padding-left: 1px;
  color: var(--color--black);
}

.custom-style {
  padding-left: 1px;
  color: var(--color--black);
  font-weight: var(--font__weight--bold);
}

.link-style {
  color: var(--color--primary);
  text-decoration-color: var(--color--accent);
}

.custom-alert {
  position: fixed;
  top: 22rem;
  left: 50%;
  transform: translateX(-50%);
  padding: var(--spacing--sm) var(--spacing--md);
  border-radius: var(--radius--xxs);
  background-color: var(--color--background);
  color: var(--color--primary);
  box-shadow: var(--shadow--light);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: var(--z--alert);
  @include type.text(md);

  &.show {
    opacity: 0.9;
  }
}

@include bp.below-desktop {
  .custom-alert {
    top: 20rem;
  }
}

@include bp.stacked {
  .char {
    width: 1.1rem;
    height: 1.1rem;
  }

  .custom-alert {
    top: 18rem;
  }
}

@include bp.mobile {
  .mainText {
    text-align: center;
  }

  .char {
    width: 1rem;
    height: 1rem;
  }

  .custom-alert {
    top: 16rem;
  }
}
</style>
