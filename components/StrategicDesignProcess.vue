<!-- Retained design draft; the CV pages use the original image and split-flap layout. -->
<template>
  <figure class="strategy-process">
    <div class="strategy-process__fields" :aria-label="language === 'de' ? 'Perspektiven' : 'Perspectives'">
      <span v-for="field in content.fields" :key="field">{{ field }}</span>
    </div>
    <ol class="strategy-process__steps">
      <li v-for="(step, index) in content.steps" :key="step.title">
        <span class="strategy-process__number" aria-hidden="true">{{ index + 1 }}</span>
        <div>
          <h2>{{ step.title }}</h2>
          <p>{{ step.question }}</p>
        </div>
      </li>
    </ol>
    <figcaption>{{ content.caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ language: 'de' | 'en' }>();

const copy = {
  de: {
    fields: ['Gestaltung', 'Forschung', 'Management'],
    steps: [
      { title: 'Zusammenhänge verstehen', question: 'Wer ist beteiligt, was beeinflusst die Situation?' },
      { title: 'Das Problem rahmen', question: 'Wo lohnt es sich, anzusetzen?' },
      { title: 'Richtungen entwerfen', question: 'Welche Alternativen sind denkbar?' },
      { title: 'Annahmen prüfen', question: 'Was lässt sich sichtbar und testbar machen?' },
    ],
    caption: 'Ein Denkrahmen für mein Studium. Neue Erkenntnisse können den Blick auf das Problem und den Entwurf verändern.',
  },
  en: {
    fields: ['Design', 'Research', 'Management'],
    steps: [
      { title: 'Understand the context', question: 'Who is involved, and what shapes the situation?' },
      { title: 'Frame the problem', question: 'Where is it worth intervening?' },
      { title: 'Explore directions', question: 'Which alternatives could work?' },
      { title: 'Test assumptions', question: 'What can be made visible and testable?' },
    ],
    caption: 'A thinking framework for my studies. New findings can change both the view of the problem and the design.',
  },
};

const content = computed(() => copy[props.language]);
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;

.strategy-process {
  display: grid;
  grid-template-areas:
    'fields'
    'steps'
    'caption';
  grid-template-columns: minmax(0, 1fr);
  gap: var(--spacing--xl);
  width: 100%;
  margin: var(--spacing--none);
  color: var(--color--primary);
}

.strategy-process__fields {
  grid-area: fields;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing--sm) var(--spacing--lg);
  padding-bottom: var(--spacing--lg);
  border-bottom: var(--border__size) solid var(--color--primary);
  @include type.text(lg, bold);
}

.strategy-process__steps {
  grid-area: steps;
  display: grid;
  gap: var(--spacing--xl);
  list-style: none;
  margin: var(--spacing--none);
  padding: var(--spacing--none);

  li {
    display: grid;
    grid-template-areas: 'number content';
    grid-template-columns: auto minmax(0, 1fr);
    gap: var(--spacing--lg);
    align-items: start;
  }

  li > div {
    grid-area: content;
  }

  h2 {
    margin: var(--spacing--none);
    @include type.text(xxl, light);
  }

  p {
    margin: var(--spacing--xs) 0 0;
    @include type.text(lg, light, alt, big);
  }
}

.strategy-process__number {
  grid-area: number;
  color: var(--color--primary-translucent);
  @include type.text(xxl, light);
}

figcaption {
  grid-area: caption;
  padding-top: var(--spacing--lg);
  border-top: var(--border__size) solid var(--color--secondary);
  @include type.text(lg, light, alt, big);
}
</style>
