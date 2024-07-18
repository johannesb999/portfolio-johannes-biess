<template>
  <main>
    <div id="aboutMe">ÜBER MICH</div>
    <div id="startLinkAbout">
      <nuxt-link to="/de" class="custom-link">START</nuxt-link>
    </div>
    <div id="resumeLink">
      <nuxt-link to="resume" class="custom-link">LEBENSLAUF</nuxt-link>
    </div>
    <div class="aboutMeText">
      <SplitFlapText
        :texts="[
          'ÜBER MICH      WERTE      ',
          'TEAMWORK  VERTRAUEN       ',
          '  ANPASSUNGSFÄHIGKEIT     ',
          ' PÜNKTLICHKEIT FAIRNESS   ',
          'KREATIVITÄT  GENAUIGKEIT  ',
        ]"
      />
    </div>

    <div class="picture">
      <img
        style="border-radius: 10px"
        src="https://via.placeholder.com/220x380"
        alt="profilpicture"
      />
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
  width: 100%;
}

main {
  height: 90vh;
  width: 100%;
}

#aboutMe {
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

#startLinkAbout {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
}

#startLinkAbout {
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

.aboutMeText {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 200;
  text-align: left;

  #line1 {
    font-weight: 700;
  }
  #line2 {
    font-weight: 300;
  }
  #line3 {
    font-weight: 300;
  }
  #line4 {
    font-weight: 300;
  }
  #line5 {
    font-weight: 300;
  }
  #line6 {
    font-weight: 300;
  }
}

.picture {
  position: absolute;
  top: 50%;
  left: 0;
  padding-left: 10rem;
  transform: translateY(-50%);
}
</style>
