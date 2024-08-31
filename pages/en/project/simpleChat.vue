<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/" class="custom-link">START</nuxt-link>
      </div>
      <div id="projectLinkNext">
        <nuxt-link to="/en/project/portfolio" class="custom-link"
          >THIS WEBSITE
        </nuxt-link>
      </div>
      <div id="projectLinkBefore">
        <nuxt-link to="/en/project/jumpStar" class="custom-link"
          >JUMPSTAR
        </nuxt-link>
      </div>

      <div class="projectFlap">
        <SplitFlapText
          :texts="[
            '       [SIMPLECHAT]       ',
            '   FIGMA      PROTOTYPE   ',
            'WIREFRAMES   USERCENTERED ',
            '   VOICE OF THE CUSTOMER  ',
            '     USER INTERVIEWS      ',
            'FIGMA      DESIGN THINKING',
          ]"
        />
      </div>

      <div class="wrapper">
        <div class="picture">
          <img
            style="border: 1px solid black; border-radius: 10px"
            src="public\img\sc\sc (3).svg"
            alt="SimpleChat"
          />
        </div>
        <div class="projectDescription">
          <p>
            The aim of the project was to redesign and rethink the the currently
            used Chatroom by my School Slack. The goal was to create a more
            user-centered and intuitive platform to improve the communication
            beetween school, students and alumnis... <br />
          </p>
        </div>
      </div>
      <NuxtLink to="/en/project/details/SimpleChat" class="detailsLink"
        >DETAILS
      </NuxtLink>
    </main>
  </html>
</template>

<script setup></script>

<style src="assets/project.css" scoped></style>
