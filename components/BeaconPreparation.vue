<!-- Archived draft: the extracted PDF screens are not used. Awaiting matching original mobile mockups. -->
<template>
  <div class="preparation">
    <div class="preparation__text">
      <p>{{ copy.body }}</p>
      <ul><li v-for="point in copy.points" :key="point">{{ point }}</li></ul>
    </div>
    <figure class="preparation__figure">
      <div class="preparation__screens">
        <img src="/img/beacon/onboarding-identity.png" :alt="copy.identity" loading="lazy" />
        <img src="/img/beacon/onboarding-guidelines.png" :alt="copy.guidelines" loading="lazy" />
      </div>
      <figcaption>{{ copy.caption }}</figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
// Original screens from the documentation, printed pages 198–199.
const copy = computed(() => route.path.startsWith('/de/') ? {
  body: 'Vertrauen beginnt vor dem Hilferuf. Eine Identitätsprüfung, begrenzte Sichtbarkeit und klare Verhaltensregeln sind Teil des Konzepts. Helfende erhalten überschaubare Aufgaben und sollen sich nicht selbst in Gefahr bringen.',
  points: ['Eine Demo macht mit dem Ablauf vertraut.', 'Haptisches Feedback bestätigt die Bedienung.', 'Die Identitätsprüfung schafft Verbindlichkeit; Missbrauchsschutz bleibt eine eigenständige Aufgabe.'],
  identity: 'Beacon-Onboarding: Identität per Post-Ident oder Banküberweisung bestätigen',
  guidelines: 'Beacon-Onboarding: Verhaltensregeln vor der ersten Nutzung bestätigen',
  caption: 'Identitätsprüfung und Verhaltensregeln vor dem ersten Hilferuf.',
} : {
  body: 'Trust starts before a request for help. Identity verification, limited visibility and clear rules of conduct are part of the concept. Helpers receive manageable tasks and should not put themselves at risk.',
  points: ['A demo introduces the interaction.', 'Haptic feedback confirms the action.', 'Identity verification creates accountability; preventing misuse remains a task in its own right.'],
  identity: 'Beacon onboarding: verify identity using Post-Ident or a bank transfer',
  guidelines: 'Beacon onboarding: acknowledge the rules of conduct before first use',
  caption: 'Identity verification and rules of conduct before the first request for help.',
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;
.preparation {
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--project__media--gap);
  align-items: start;
}
.preparation__text {
  grid-area: text;
  @include type.text(xl, light, alt, big);
  p { margin: 0 0 var(--spacing--md); }
  ul { margin: 0; padding-left: var(--spacing--md-lg); }
  li + li { margin-top: var(--spacing--xs); }
}
.preparation__figure {
  grid-area: image;
  justify-self: end;
  width: min(100%, var(--accordion__image--width));
  margin: 0;
  figcaption { margin-top: var(--spacing--sm); @include type.text(lg, normal, alt, big); }
}
.preparation__screens {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing--lg);
  aspect-ratio: var(--accordion__image--ratio);
  img {
    width: 32%;
    max-height: 90%;
    object-fit: contain;
    border: none;
    border-radius: 0;
    &:first-child { transform: rotate(-5deg); }
    &:last-child { transform: rotate(5deg); }
  }
}
@include bp.stacked {
  .preparation { grid-template-areas: 'text' 'image'; grid-template-columns: minmax(0, 1fr); }
  .preparation__figure { justify-self: center; }
}
</style>
