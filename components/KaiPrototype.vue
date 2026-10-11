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
        <p class="prototype__label prototype__input-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11v1a6 6 0 0 0 12 0v-1M12 18v3M9 21h6" /></svg>
          {{ copy.inputLabel }}
        </p>
        <blockquote class="prototype__utterance">{{ copy.utterance }}</blockquote>
        <p class="prototype__context">{{ copy.context }}</p>
      </div>
      <svg class="prototype__arrow" viewBox="0 0 48 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12h42M34 3l10 9-10 9" /></svg>
      <div class="prototype__receipt">
        <div class="prototype__receipt-heading">
          <p class="prototype__label">{{ copy.outputLabel }}</p>
          <span class="prototype__count">{{ copy.items.length }}</span>
        </div>
        <dl class="prototype__order">
          <div v-for="item in copy.items" :key="item.name">
            <dt><span>{{ item.name }}</span><span class="prototype__quantity">1×</span></dt>
            <dd>{{ item.detail }}</dd>
          </div>
        </dl>
        <p class="prototype__result">{{ copy.result }}</p>
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
    flowLabel: 'Verarbeitung im Funktionsprototyp',
    steps: [
      { title: 'Sprache aufnehmen', body: 'Der Prototyp verarbeitet das Mikrofonsignal und zeigt die erkannte Bestellung im Live-Transkript.' },
      { title: 'Speisekarte zuordnen', body: 'Die Speisekarte ist als Kontext hinterlegt. Systemanweisungen begrenzen die Ausgabe auf Gerichte und ihre Bestelldaten.' },
      { title: 'Positionen ausgeben', body: 'Gerichte und Extras erscheinen als strukturierte Daten und als einzelne, sichtbare Bestellpositionen.' },
    ],
    exampleLabel: 'Bestellaufnahme im Funktionsprototyp · schematische Darstellung',
    inputLabel: 'Gesprochene Bestellung (Beispiel)',
    utterance: 'Ein Schnitzel mit Pommes und Käsespätzle mit extra vielen Röstzwiebeln, bitte.',
    context: 'Die hinterlegte Speisekarte gibt vor, welche Gerichte und Änderungen der Prototyp zuordnen kann.',
    outputLabel: 'Erkannte Bestellpositionen',
    items: [
      { name: 'Schnitzel mit Pommes', detail: 'Ohne Änderung' },
      { name: 'Käsespätzle', detail: 'Extra viele Röstzwiebeln' },
    ],
    result: 'Der Sonderwunsch bleibt bei der zugehörigen Position.',
    learning: 'Die Bestellaufnahme funktionierte im Test schnell und überwiegend fehlerfrei. Nachträgliche Änderungen machten deutlich, wie wichtig die Zuordnung zur richtigen Person und Bestellposition ist. Im ausgearbeiteten UI lassen sich die erkannten Positionen prüfen und einzeln bearbeiten.',
  },
  en: {
    intro: 'We built a functional prototype to test whether spoken orders could be quickly translated into structured order data. GPT-4o and the Realtime API made order capture available for practical testing; the detailed UI designs show the subsequent service workflow.',
    flowLabel: 'Processing in the functional prototype',
    steps: [
      { title: 'Capture speech', body: 'The prototype processes microphone input and shows the recognised order in a live transcript.' },
      { title: 'Use the menu as context', body: 'The menu provides context. System instructions limit the output to dishes and their order data.' },
      { title: 'Output order items', body: 'Dishes and extras appear as structured data and as individual, visible order items.' },
    ],
    exampleLabel: 'Order capture in the functional prototype · schematic illustration',
    inputLabel: 'Spoken order (example)',
    utterance: 'A schnitzel with fries and cheese spaetzle with extra fried onions, please.',
    context: 'The menu supplied as context defines which dishes and modifications the prototype can identify.',
    outputLabel: 'Recognised order items',
    items: [
      { name: 'Schnitzel with fries', detail: 'No changes' },
      { name: 'Cheese spaetzle', detail: 'Extra fried onions' },
    ],
    result: 'The modification stays with the dish it belongs to.',
    learning: 'Order capture was fast and mostly accurate during testing. Later modifications showed how important it is to assign changes to the right person and order item. In the detailed UI design, staff can review the recognised items and edit them individually.',
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
  align-items: center;
  figcaption { grid-area: caption; @include type.text(lg, normal, alt, big); }
}
.prototype__speech { grid-area: speech; }
.prototype__label { @include type.text(lg, normal, alt, big); }
.prototype__input-label {
  display: flex;
  align-items: center;
  gap: var(--spacing--sm);
  color: var(--kai__color--interactive);

  svg { width: var(--spacing--xxl); height: var(--spacing--xxl); flex-shrink: 0; }
}
.prototype__utterance {
  margin: var(--spacing--lg) 0;
  @include type.text(big, light, alt, big);
  font-size: max(var(--font__size--section-minimum), var(--font__size--big));
}
.prototype__context { @include type.text(lg, light, alt, big); }
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
  justify-self: center;
  box-sizing: border-box;
  width: 100%;
  max-width: var(--kai__prototype--width);
  padding: var(--spacing--xxl);
  border-radius: var(--radius--md);
  background: var(--kai__color--surface);
  color: var(--kai__color--ink);
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: var(--kai__prototype--accent-size);
    margin: calc(-1 * var(--spacing--xxl)) calc(-1 * var(--spacing--xxl)) var(--spacing--xxl);
    background: var(--kai__gradient--accent);
  }
}
.prototype__receipt-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing--md);
}
.prototype__count { color: var(--kai__color--interactive); @include type.text(lg, bold, alt, big); }
.prototype__order {
  display: grid;
  gap: var(--spacing--md);
  margin: var(--spacing--lg) 0 0;
  > div {
    padding: var(--spacing--lg);
    background: var(--kai__color--paper);
    border-radius: var(--radius--sm);
  }
  dt { display: flex; align-items: baseline; justify-content: space-between; gap: var(--spacing--lg); font-weight: var(--font__weight--bold); }
  dd { margin: var(--spacing--xs) 0 0; @include type.text(lg, normal, alt, big); }
}
.prototype__quantity { @include type.text(lg, normal, alt, big); white-space: nowrap; }
.prototype p.prototype__result { margin-top: var(--spacing--lg); @include type.text(lg, light, alt, big); }

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
