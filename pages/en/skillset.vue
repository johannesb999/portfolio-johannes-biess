<template>
  <html>
    <main>
      <div id="rightLink">
        <nuxt-link to="about" class="custom-link">ABOUT</nuxt-link>
      </div>
      <!-- <div id="resumeLink">
        <nuxt-link to="resume" class="custom-link">PERSONAL RESUME</nuxt-link>
      </div> -->
      <div class="aboutMeText">
        <div v-for="(textArray, idx) in textArrays" :key="idx" class="mainText">
          <div>
            <span
              v-for="(letter, index) in textArray"
              :key="index"
              :class="[
                'char',
                {
                  separator: letter.isSeparator,
                  normal: !letter.isSeparator && !letter.isLink,
                },
                letter.styleClass,
              ]"
            >
              <template
                v-if="letter.isLink && letter.linkTarget.includes('mailto')"
              >
                <a
                  href="#"
                  class="custom-link"
                  @click.prevent="copyEmailToClipboard"
                  >{{ letter.current }}</a
                >
              </template>
              <template v-else-if="letter.isLink">
                <a
                  :href="letter.linkTarget"
                  class="custom-link"
                  target="_blank"
                  >{{ letter.current }}</a
                >
              </template>
              <template v-else>
                {{ letter.current }}
              </template>
            </span>
          </div>
        </div>
        <div :class="['custom-alert', { show: showAlert }]">
          EMAIL COPIED<br />
          TO CLIPBOARD
        </div>
      </div>
    </main>
  </html>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

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

const showAlert = ref(false);

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜ3260";

function getRandomChar() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function createTextArray(text) {
  let inStyledWord = false;
  let inLink = false;
  let linkTarget = null;

  return text
    .split("")
    .map((char) => {
      if (char === "[" || char === "]") {
        inStyledWord = !inStyledWord;
        return null;
      }

      if (char === "|" || char === "@" || char === "$") {
        if (!inLink) {
          inLink = true;
          switch (char) {
            case "|":
              linkTarget =
                "https://de.linkedin.com/in/johannes-biess-8464a21bb";
              break;
            case "@":
              linkTarget = "mailto:biessjohannes@gmail.com";
              break;
            case "$":
              linkTarget = "https://github.com/johannesb999";
              break;
          }
        } else {
          inLink = false;
          linkTarget = null;
        }
        return null;
      }

      return {
        target: char === " " ? getRandomChar() : char,
        current: char === " " ? getRandomChar() : char,
        isSeparator: char === " ",
        isLink: inLink,
        linkTarget: linkTarget,
        styleClass:
          inLink && inStyledWord
            ? "link-style custom-style"
            : inLink
            ? "link-style"
            : inStyledWord
            ? "custom-style"
            : "",
      };
    })
    .filter((item) => item !== null);
}

function copyEmailToClipboard() {
  const email = "biessjohannes@gmail.com";

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 2000);
      })
      .catch((err) => {
        console.error("Konnte den Text nicht kopieren: ", err);
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = email;

    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        showAlert.value = true;
        setTimeout(() => {
          showAlert.value = false;
        }, 2000);
      } else {
        console.error("Konnte den Text nicht kopieren");
      }
    } catch (err) {
      console.error("Oops, konnte den Text nicht kopieren: ", err);
    }

    document.body.removeChild(textArea);
  }
}

const textArrays = ref(texts.map(createTextArray));

watch(
  () => texts,
  (newTexts) => {
    textArrays.value = newTexts.map(createTextArray);
  }
);

onMounted(() => {
  textArrays.value = texts.map(createTextArray);
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/type.scss" as type;
html {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;

}

.char {
  width: 1rem;
  height: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

#resumeBar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

#aboutMe {
  color: black;
  @include type.L-Title-Style('-thin');
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#resumeLink {
  color: #171717;
  @include type.L-Title-Style('-bold');
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  line-height: normal;
}

#startLinkAbout {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @include type.L-Title-Style('-bold');
  right: 0;
  padding-right: 20px;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
}

.aboutMeText {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 200;
  text-align: left;
  width: 60%;
  align-items: center;
}

.separator {
  color: #0000000f;
}

.normal {
  color: #171717;
  padding-left: 1px;
}

.custom-style {
  font-weight: 700;
  padding-left: 1px;
  color: #000000;
}

.link-style {
  color: blue;
}

.custom-alert {
  position: fixed;
  top: 22rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fbfbfb;
  color: #171717;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @include type.L-Body-Style();
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.custom-alert.show {
  opacity: 0.9;
}

@media (max-width: 992px) {
  .mainText {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .char {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .custom-alert {
    top: 20rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .mainText {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .char {
    width: 1.1rem;
    height: 1.1rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .custom-alert {
    top: 18rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .mainText {
    font-size: 1rem;
    text-align: center;
    line-height: 1.4rem;
  }

  .char {
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  .custom-alert {
    top: 16rem;
    font-size: 0.7rem;
    padding: 8px 16px;
  }
}
</style>
