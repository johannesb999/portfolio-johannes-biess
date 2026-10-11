<template>
  <div class="prototype">
    <p class="prototype__intro">{{ copy.intro }}</p>

    <ol class="prototype__flow" :aria-label="copy.flowLabel">
      <li v-for="(step, index) in copy.steps" :key="step.title" :class="`prototype__step--${index + 1}`" class="prototype__step">
        <span class="prototype__number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.body }}</p>
      </li>
    </ol>

    <figure class="prototype__example">
      <figcaption>{{ copy.exampleLabel }}</figcaption>
      <div class="prototype__speech">
        <p class="prototype__label">{{ copy.inputLabel }}</p>
        <p class="prototype__utterance">{{ copy.utterance }}</p>
      </div>
      <svg class="prototype__arrow" viewBox="0 0 48 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12h42M34 3l10 9-10 9" /></svg>
      <div class="prototype__receipt">
        <p class="prototype__label">{{ copy.outputLabel }}</p>
        <dl class="prototype__order">
          <div v-for="item in copy.items" :key="item.name">
            <dt>{{ item.name }}</dt>
            <dd>{{ item.detail }}</dd>
          </div>
        </dl>
      </div>
    </figure>

    <p class="prototype__learning">{{ copy.learning }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{ language?: 'de' | 'en' }>(), { language: 'de' });
const content = {
  de: {
    intro: 'Mit einem Funktionsprototyp prüften wir, ob sich gesprochene Bestellungen schnell in strukturierte Bestelldaten übertragen lassen. GPT-4o und die Realtime API machten die Bestellaufnahme praktisch erprobbar; die ausgearbeiteten UI-Entwürfe zeigen den weiteren Serviceablauf.',
    flowLabel: 'Verarbeitung im Sprachprototyp',
    steps: [
      { title: 'Sprache aufnehmen', body: 'Der Prototyp verarbeitet das Mikrofonsignal und zeigt die erkannte Bestellung im Live-Transkript.' },
      { title: 'Speisekarte zuordnen', body: 'Die Speisekarte ist als Kontext hinterlegt. Systemanweisungen begrenzen die Ausgabe auf Gerichte und ihre Bestelldaten.' },
      { title: 'Positionen ausgeben', body: 'Gerichte und Extras erscheinen als strukturierte Daten und als einzelne, sichtbare Bestellpositionen.' },
    ],
    exampleLabel: 'Veranschaulichung mit Bestellpositionen aus dem Prototyp',
    inputLabel: 'Gesprochene Bestellung (Beispiel)',
    utterance: 'Ein Schnitzel mit Pommes und Käsespätzle mit extra vielen Röstzwiebeln, bitte.',
    outputLabel: 'Erkannte Bestellpositionen',
    items: [
      { name: 'Schnitzel mit Pommes', detail: 'Gericht' },
      { name: 'Käsespätzle', detail: 'Extra: extra viele Röstzwiebeln' },
    ],
    learning: 'Die Bestellaufnahme funktionierte im Test schnell und überwiegend fehlerfrei. Nachträgliche Änderungen machten deutlich, wie wichtig die Zuordnung zur richtigen Person und Bestellposition ist. Im UI bleiben Positionen deshalb sichtbar und gezielt bearbeitbar.',
  },
  en: {
    intro: 'We built a functional prototype to test whether spoken orders could be quickly translated into structured order data. GPT-4o and the Realtime API made order capture available for practical testing; the detailed UI designs show the subsequent service workflow.',
    flowLabel: 'Processing in the speech prototype',
    steps: [
      { title: 'Capture speech', body: 'The prototype processes microphone input and shows the recognised order in a live transcript.' },
      { title: 'Use the menu as context', body: 'The menu provides context. System instructions limit the output to dishes and their order data.' },
      { title: 'Output order items', body: 'Dishes and extras appear as structured data and as individual, visible order items.' },
    ],
    exampleLabel: 'Illustration using order items from the prototype',
    inputLabel: 'Spoken order (example)',
    utterance: 'A schnitzel with fries and cheese spaetzle with extra fried onions, please.',
    outputLabel: 'Recognised order items',
    items: [
      { name: 'Schnitzel with fries', detail: 'Dish' },
      { name: 'Cheese spaetzle', detail: 'Extra: plenty of fried onions' },
    ],
    learning: 'Order capture was fast and mostly accurate during testing. Later modifications showed how important it is to assign changes to the right person and order item. The UI therefore keeps items visible and allows staff to edit them individually.',
  },
};
const copy = computed(() => content[props.language]);
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;

.prototype {
  display: grid;
  gap: var(--spacing--xxl);
  @include type.text(xl, light, alt, big);

  p { margin: 0; }
}

.prototype__intro,
.prototype__learning { max-width: 75ch; }

.prototype__flow {
  display: grid;
  grid-template-areas: 'speech' 'context' 'output';
  grid-template-columns: minmax(0, 1fr);
  gap: var(--spacing--lg);
  margin: 0;
  padding: 0;
  list-style: none;
}

.prototype__step {
  padding-top: var(--spacing--md);
  border-top: var(--border__size) solid var(--color--gray-light);

  h3 {
    margin: var(--spacing--xs) 0 var(--spacing--sm);
    @include type.text(xxl, bold, alt, big);
  }
}

.prototype__step--1 { grid-area: speech; }
.prototype__step--2 { grid-area: context; }
.prototype__step--3 { grid-area: output; }
.prototype__number { color: var(--kai__color--interactive); }

.prototype__example {
  display: grid;
  grid-template-areas: 'caption' 'speech' 'arrow' 'order';
  grid-template-columns: minmax(0, 1fr);
  gap: var(--spacing--lg);
  margin: 0;
  padding-block: var(--spacing--xl);
  border-top: var(--border__size) solid var(--border__color);
  border-bottom: var(--border__size) solid var(--border__color);
  align-items: center;
  figcaption { grid-area: caption; @include type.text(lg, normal, alt, big); }
}
.prototype__speech { grid-area: speech; }
.prototype__label { @include type.text(lg, normal, alt, big); }
.prototype p.prototype__utterance {
  margin-top: var(--spacing--md);
  @include type.text(big, light, alt, big);
  font-size: max(var(--font__size--section-minimum), var(--font__size--big));
}
.prototype__arrow {
  grid-area: arrow;
  justify-self: center;
  width: var(--spacing--xxl);
  height: var(--spacing--xxl);
  transform: rotate(90deg);
  color: var(--kai__color--interactive);
}
.prototype__receipt {
  grid-area: order;
  padding: var(--spacing--lg);
  border: var(--border__size) solid var(--border__color);
  border-radius: var(--radius--xs);
  background: var(--color--gray-light);
}
.prototype__order {
  display: grid;
  gap: var(--spacing--md);
  margin: var(--spacing--lg) 0 0;
  > div + div { border-top: var(--border__size) solid var(--border__color); padding-top: var(--spacing--md); }
  dt { font-weight: var(--font__weight--bold); }
  dd { margin: var(--spacing--xxs) 0 0; @include type.text(lg, normal, alt, big); }
}

@include bp.side-by-side {
  .prototype__flow {
    grid-template-areas: 'speech context output';
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--spacing--xxl);
  }

  .prototype__arrow { transform: none; }

  .prototype__example {
    grid-template-areas: 'caption caption caption' 'speech arrow order';
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  }
}
</style>
