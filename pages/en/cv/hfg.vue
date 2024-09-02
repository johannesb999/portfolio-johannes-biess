<template>
  <main>
    <div id="resumeLinkHfg">
      <nuxt-link to="/en/resume" class="custom-link"
        >CV</nuxt-link
      >
    </div>
    <h1 class="project-title">
      <span>UZHJHASGSAIRAJUDAUD</span>HFG<span>HGBBVSAIHJTJGEJAUDFG</span>
    </h1>

    <div class="outerWrapper">
      <div class="wrapperUp">
        <div class="hfgText">
          <SplitFlapText
            :texts="[
              '        [LEARNINGS]         ',
              'FIGMA   UX        UI    ',
              'PROTOTYPING  USABILITY  ',
              '     DESIGNTHINKING         ',
              ' USER CENTERED  LEANDESIGN    ',
              'FULLSTACK DEVELOPMENT   ',
            ]"
          />
        </div>
        <div class="picture">
          <img src="public\img\cv\hfgbuilding.jpeg" alt="plantmonit" />
        </div>
      </div>

      <div class="wrapper">
        <div class="textLeft">
          The University of Design (HfG) has really shaped my skills in design
          and development. At this well-known university in Germany, I didn’t
          just learn theory, but also got hands-on experience that has prepared
          me for the working world. The practical, project-based teaching gave
          me early insights into real-world work processes. What stood out to me
          the most was the focus on teamwork, which helped me improve my skills
          in a collaborative setting. Thanks to the iterative approach in
          teaching, I was able to learn all the steps from the initial concept
          to the finished prototype.
        </div>

        <div class="textRight">
          During my time at HfG, I worked on
          <nuxt-link to="/en/project/projects" class="custom-link"
            >projects</nuxt-link
          >
          that were practical from the start.<br />
          I was encouraged to dive deep into fundamental questions like: What’s
          worth developing? How can I make sure it meets user needs? What
          technologies are necessary, and how do I use them effectively? HfG
          created an inspiring learning environment where I could not only build
          up my design and tech skills, but also learn how to apply them in
          real-world projects.
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style scoped>
#resumeBar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

main {
  height: 100%;
  width: 100%;
}

#hfg {
  color: black;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#resumeLink {
  color: #171717;
  font-weight: 700;
  font-size: 2rem;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  line-height: normal;
}

#resumeLinkHfg {
  position: absolute;
  top: 50%;
  right: 2.3%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

#resumeLinkHfg {
  right: 0;
  padding-right: 20px;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

.outerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 2rem 4rem;
}

.wrapperUp {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  gap: 2rem;
}

.hfgText {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: 200;
  text-align: left;
}

.picture {
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
}

.picture img {
  width: 100%;
  height: auto;
}

.textLeft {
  display: flex;
  flex-direction: column;
  max-width: 550px;
  padding-right: 6rem;
}

.textRight {
  display: flex;
  flex-direction: column;
  max-width: 600px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 80%;
  gap: 2rem;
}

.project-title {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 10px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
}

span {
  font-weight: 200;
  color: #0000000f;
}
</style>
