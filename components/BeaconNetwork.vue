<template>
  <div class="network">
    <div class="network__introduction">
      <div class="network__copy"><p>{{ copy.intro }}</p><p>{{ copy.detail }}</p></div>
      <figure class="network__mockup">
        <ZoomableImage src="/img/beacon/campaign.webp" :alt="copy.imageAlt" loading="lazy" />
      </figure>
    </div>
    <div class="network__explorer">
      <div class="network__tabs" role="tablist" :aria-label="copy.switchLabel">
        <AppLink v-for="(label, index) in copy.states" :key="label" :id="`${prefix}-tab-${index}`" role="tab"
          :aria-selected="active === index" :aria-controls="`${prefix}-panel`" :tabindex="active === index ? 0 : -1"
          :scale="false" @click="active = index" @keydown="onTabKey($event, index)">{{ label }}</AppLink>
      </div>
      <div :id="`${prefix}-panel`" role="tabpanel" :aria-labelledby="`${prefix}-tab-${active}`" tabindex="0" class="network__panel">
        <div class="network__diagram" :class="{ 'is-active': active === 1 }">
          <div v-for="role in copy.roles" :key="role.id" class="network__node" :class="`network__node--${role.id}`" :style="{gridArea: role.id}">
            <span class="network__marker" aria-hidden="true" />
            <h3>{{ role.title }}</h3>
            <div class="network__stack"><p v-for="(text, index) in role.text" :key="index" :aria-hidden="active !== index">{{ text }}</p></div>
          </div>
          <div class="network__connection network__connection--inbound">
            <div class="network__stack"><p v-for="(text, index) in copy.inbound" :key="index" :aria-hidden="active !== index">{{ text }}</p></div>
            <svg viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true"><path d="M1 8h96m-8-6 8 6-8 6" /></svg>
          </div>
          <div class="network__connection network__connection--outbound">
            <div class="network__stack"><p v-for="(text, index) in copy.outbound" :key="index" :aria-hidden="active !== index">{{ text }}</p></div>
            <svg viewBox="0 0 100 16" preserveAspectRatio="none" aria-hidden="true"><path d="M1 8h96m-8-6 8 6-8 6" /></svg>
          </div>
        </div>
        <div class="network__note network__stack" aria-live="polite"><p v-for="(text, index) in copy.notes" :key="index" :aria-hidden="active !== index">{{ text }}</p></div>
      </div>
    </div>
    <AppLink class="network__source" href="/docs/beacon/beacon-dokumentation-de.pdf#page=63" :label="copy.source" underline :scale="false" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const route = useRoute();
const active = ref(0);
const german = computed(() => route.path.startsWith('/de/'));
const prefix = computed(() => `beacon-network-${german.value ? 'de' : 'en'}`);
const copy = computed(() => german.value ? {
  intro: 'Für die Konzeptwahl waren zwei Anforderungen besonders wichtig: Hilfe soll früh erreichbar sein und auch zwischen festen Schutzräumen entlang eines frei gewählten Heimwegs funktionieren. Wir verglichen dafür vier Ansätze: ein Hilfenetzwerk, feste Schutzräume, stationierte Drohnen und Gruppenbildung. Maßstab waren die sieben Anforderungen aus der Recherche.',
  detail: 'Das Hilfenetzwerk verbindet vorhandene Personen und Orte. Die Hilfeanfrage spricht Einzelne direkt an und gibt ihnen eine konkrete Aufgabe. Wer Hilfe sucht, sieht den Weg zum sicheren Ort; wer hilft, bekommt die Informationen für die eigene Aufgabe.',
  imageAlt: 'Die Beacon-Kampagne lädt dazu ein, Teil des lokalen Hilfsnetzwerks zu werden',
  switchLabel: 'Zustand des Hilfenetzwerks', states: ['Vor dem Hilferuf', 'Im Einsatz'],
  roles: [
    { id: 'helper', title: 'Mobile Hilfe', text: ['Kann Hilfe anbieten.', 'Bestätigt die Anfrage und geht der Person entgegen.'] },
    { id: 'seeker', title: 'Hilfesuchende Person', text: ['Sieht, wie viel Hilfe erreichbar ist.', 'Erhält Orientierung und macht sich auf den Weg.'] },
    { id: 'place', title: 'Sicherer Ort', text: ['Steht als mögliche Anlaufstelle bereit.', 'Bestätigt die Aufnahme und wird zum Ziel.'] },
  ],
  inbound: ['', 'kommt entgegen'], outbound: ['', 'geht zum Ort'],
  notes: ['Vor dem Hilferuf bleibt verborgen, wo sich einzelne Helfende aufhalten. Sichtbar ist ihre Verfügbarkeit.', 'Die Anfrage richtet sich gezielt an einzelne Helfende. Damit ist klar, wer angesprochen ist und welche Unterstützung gebraucht wird.'],
  source: 'Rollen und Datenschutz in der Dokumentation (S. 124–127, 138–139)',
} : {
  intro: 'Two requirements mattered most when choosing the concept: help should be available early and work along a freely chosen route, including between fixed safe spaces. We compared four approaches: a support network, fixed safe spaces, stationed drones and forming groups. We assessed them against the seven requirements drawn from the research.',
  detail: 'The network connects existing people and places. Each request addresses individuals directly and assigns a specific task. The person seeking help sees the route to a safe place; helpers receive the information needed for their task.',
  imageAlt: 'The Beacon campaign invites people to join the local support network',
  switchLabel: 'State of the support network', states: ['Before a request', 'During a response'],
  roles: [
    { id: 'helper', title: 'Mobile helper', text: ['Can offer support.', 'Accepts the request and walks towards the person.'] },
    { id: 'seeker', title: 'Person seeking help', text: ['Sees how much help is available.', 'Receives directions and starts moving.'] },
    { id: 'place', title: 'Safe place', text: ['Is available as a possible destination.', 'Confirms support and becomes the destination.'] },
  ],
  inbound: ['', 'approaches person'], outbound: ['', 'goes to place'],
  notes: ['Before a request, individual helpers’ locations stay hidden. Their availability is visible.', 'The request addresses individual helpers directly, making clear who is being asked and what support is needed.'],
  source: 'Roles and privacy in the documentation (pp. 124–127, 138–139; DE)',
});
function onTabKey(event: KeyboardEvent, index: number) {
  let next = index;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = 1 - index;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = 1;
  else return;
  event.preventDefault();
  active.value = next;
  (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;
.network { display: grid; gap: var(--project__media--gap); }
.network p { margin: 0; @include type.text(xl, light, alt, big); }
.network__introduction { display: grid; grid-template-areas: 'copy mockup'; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: var(--project__media--gap); align-items: center; }
.network__copy { grid-area: copy; display: grid; gap: var(--spacing--lg); }
.network__mockup { grid-area: mockup; margin: 0; width: min(100%, var(--accordion__image--width)); justify-self: center; }
.network__mockup :deep(.zoom-image) { width: 100%; aspect-ratio: var(--accordion__image--ratio); }
.network__mockup :deep(img) { width: 100%; height: 100%; object-fit: contain; }
.network__tabs { display: flex; flex-wrap: wrap; gap: var(--spacing--lg); }
.network__tabs [role='tab'] { margin: 0; padding: var(--spacing--sm) 0; min-height: var(--control__size--minimum); border: 0; border-bottom: var(--border__size) solid transparent; background: transparent; color: var(--color--primary); @include type.text(lg, normal); transition: color var(--interaction__duration--color); }
.network__tabs [aria-selected='true'], .network__tabs [role='tab']:hover { color: var(--beacon__color--interactive); }
.network__tabs [aria-selected='true'] { border-bottom-color: currentColor; }
.network__tabs [role='tab']:focus-visible, .network__panel:focus-visible { outline: var(--border__size) solid var(--beacon__color--interactive); outline-offset: var(--spacing--xs); }
.network__diagram { display: grid; grid-template-areas: 'helper inbound seeker outbound place'; grid-template-columns: minmax(0, 1fr) minmax(0, .6fr) minmax(0, 1fr) minmax(0, .6fr) minmax(0, 1fr); gap: var(--spacing--sm); align-items: start; padding-block: var(--spacing--xxxl); }
.network__node { display: grid; grid-template-areas: 'marker' 'title' 'copy'; justify-items: center; gap: var(--spacing--md); min-width: 0; text-align: center; }
.network__marker { grid-area: marker; display: block; width: var(--beacon__network--marker-size); aspect-ratio: 1; border-radius: 50%; background: var(--beacon__color--helper); }
.network__node--seeker .network__marker { background: var(--research__accent); }
.network__node h3 { grid-area: title; margin: 0; min-height: var(--beacon__network--title-height); @include type.text(xl, normal, alt, big); color: var(--beacon__color--helper); }
.network__node--seeker h3 { color: var(--beacon__color--interactive); }
.network__node > .network__stack { grid-area: copy; }
.network__stack { display: grid; grid-template-areas: 'state'; }
.network__stack > p { grid-area: state; visibility: hidden; opacity: 0; transition: opacity var(--interaction__duration--color); }
.network__stack > p[aria-hidden='false'] { visibility: visible; opacity: 1; }
.network__node p { @include type.text(lg, light, alt, big); }
.network__connection { padding-top: calc(var(--beacon__network--marker-size) / 2); color: var(--beacon__color--helper); }
.network__connection--inbound { grid-area: inbound; }
.network__connection--outbound { grid-area: outbound; color: var(--beacon__color--interactive); }
.network__connection p { @include type.text(lg, light, alt, big); text-align: center; padding-top: var(--spacing--md); }
.network__connection svg { display: block; width: 100%; height: var(--spacing--md); overflow: visible; opacity: 0; transition: opacity var(--interaction__duration--color); }
.network__connection path { fill: none; stroke: currentColor; stroke-width: 1.5; vector-effect: non-scaling-stroke; }
.network__connection .network__stack { order: 1; }
.network__connection { display: flex; flex-direction: column; }
.is-active .network__connection svg { opacity: 1; }
.network__note { max-width: 75ch; padding-top: var(--spacing--lg); border-top: var(--border__size) solid var(--border__color); }
.network__source { justify-self: start; }
@include bp.stacked {
  .network__introduction { grid-template-areas: 'copy' 'mockup'; grid-template-columns: minmax(0, 1fr); }
  .network__diagram { grid-template-areas: 'helper' 'inbound' 'seeker' 'outbound' 'place'; grid-template-columns: minmax(0, 1fr); gap: var(--spacing--md); }
  .network__node { grid-template-areas: 'marker title' 'marker copy'; grid-template-columns: var(--beacon__network--marker-size) minmax(0, 1fr); justify-items: start; align-items: center; text-align: left; gap: var(--spacing--sm) var(--spacing--lg); }
  .network__node h3 { min-height: 0; }
  .network__connection { width: 100%; padding-top: 0; min-height: var(--control__size--minimum); display: grid; grid-template-areas: 'arrow label'; grid-template-columns: var(--beacon__network--marker-size) minmax(0, 1fr); gap: var(--spacing--lg); align-items: center; }
  .network__connection .network__stack { grid-area: label; }
  .network__connection p { padding: 0; text-align: left; }
  .network__connection svg { grid-area: arrow; width: var(--spacing--xxl); height: var(--spacing--lg); justify-self: center; transform: rotate(90deg); }
}
@include bp.reduced-motion {
  .network__tabs [role='tab'], .network__stack > p, .network__connection svg { transition: none; }
}
</style>
