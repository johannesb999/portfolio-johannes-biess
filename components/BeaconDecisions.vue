<template>
  <div class="decisions">
    <p class="decisions__intro">{{ introduction }}</p>
    <div class="decisions__nav" role="tablist" :aria-label="german ? 'Bedienung von Beacon' : 'Using Beacon'">
      <AppLink
        v-for="(step, index) in steps" :key="step.title"
        :id="`${prefix}-tab-${index}`" role="tab"
        :aria-selected="active === index" :aria-controls="`${prefix}-panel`"
        :tabindex="active === index ? 0 : -1" :scale="false"
        @click="active = index" @keydown="onTabKey($event, index)"
      >{{ step.title }}</AppLink>
    </div>
    <div :id="`${prefix}-panel`" class="decisions__panel" role="tabpanel" :aria-labelledby="`${prefix}-tab-${active}`" tabindex="0">
      <div class="decisions__text">
        <h3>{{ current.question }}</h3>
        <p>{{ current.answer }}</p>
      </div>
      <figure class="decisions__image">
        <ZoomableImage :src="current.image" :alt="current.alt" loading="lazy" />
        <figcaption>{{ current.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const route = useRoute();
const german = computed(() => route.path.startsWith('/de/'));
const active = ref(0);
const prefix = computed(() => `beacon-interaction-${german.value ? 'de' : 'en'}`);
// These are editorial questions about the interface, not the thesis HMW set.
const introduction = computed(() => german.value
  ? 'Die Anforderungen aus der Recherche betreffen auch die Bedienung: Wer sich unsicher fühlt, muss verfügbare Hilfe erkennen und ohne aufwendige Eingaben erreichen können. Gleichzeitig braucht die helfende Person eine klare Aufgabe. Daraus ergeben sich die hier gezeigten Abläufe, vom ersten Blick auf die Karte bis zum Treffen vor Ort.'
  : 'The research requirements also shape the interface. A person who feels unsafe needs to see available help and reach it without complicated input. The helper needs a clear task. These needs inform the interactions shown here, from opening the map to meeting in person.');
const steps = computed(() => german.value ? [
  { title: 'Präsenz', question: 'Wie wird verfügbare Hilfe sichtbar?', answer: 'Die Karte zeigt, wie viele Beacons in der Umgebung erreichbar sind. Ihre genauen Standorte bleiben zunächst verborgen. So lässt sich schon vor einem Hilferuf einschätzen, ob Unterstützung in der Nähe ist, ohne die Aufenthaltsorte anderer Personen offenzulegen.', image: '/img/beacon/visibility.webp', alt: 'Beacon-Karte mit erreichbarer Hilfe in der Umgebung', caption: 'Die Anzahl erreichbarer Beacons ist sichtbar, einzelne Standorte bleiben geschützt.' },
  { title: 'Hilferuf', question: 'Wie lässt sich Hilfe unauffällig anfordern?', answer: 'Die Person hält den Hilfeknopf gedrückt, während sie die Situation beobachtet. Erst beim Loslassen wird der Hilferuf ausgelöst. Haptisches Feedback bestätigt die Eingabe, ohne dass ein Blick auf das Display nötig ist. Entspannt sich die Situation, lässt sich der Vorgang abbrechen. Ob zusätzlich die Polizei verständigt wird, entscheidet die betroffene Person.', image: '/img/beacon/call.webp', alt: 'Der Hilfeknopf und seine Interaktionszustände in Beacon', caption: 'Gedrückt halten bereitet den Hilferuf vor, Loslassen löst ihn aus.' },
  { title: 'Orientierung', question: 'Wohin kann die betroffene Person gehen?', answer: 'Nach dem Hilferuf zeigt Beacon den Weg zum nächsten sicheren Ort. Ein Richtungspfeil ergänzt die Karte, damit die Person ihren Weg auch mit einem kurzen Blick erfassen kann. Zwei alternative Ziele lassen ihr eine Wahl, wenn die vorgeschlagene Route nicht zur Situation passt. Für Tag und Nacht gibt es angepasste Darstellungen.', image: '/img/beacon/route.webp', alt: 'Beacon mit Route, Alternativen und Richtungspfeil', caption: 'Route und Richtungspfeil führen zum sicheren Ort; alternative Ziele bleiben wählbar.' },
  { title: 'Verantwortung', question: 'Wer übernimmt die Hilfe?', answer: 'Beacon richtet die Anfrage gezielt an einzelne Helfende. Sie erhalten eine konkrete Aufgabe: einen sicheren Ort anbieten oder der hilfesuchenden Person entgegengehen. Die persönliche Ansprache klärt, wer gemeint ist und welche Hilfe erwartet wird. Die Aufgabe bleibt begrenzt; Helfende sollen sich nicht selbst in Gefahr bringen.', image: '/img/beacon/helpers.webp', alt: 'Persönliche Hilfeanfrage mit einer konkreten Aufgabe', caption: 'Die Anfrage nennt der helfenden Person eine konkrete Aufgabe.' },
  { title: 'Begegnung', question: 'Wie erkennen sich die Beteiligten?', answer: 'Wenn sich die Beteiligten nähern, leuchten ihre Smartphone-Taschenlampen auf. Das gemeinsame Signal hilft ihnen, einander in der Dunkelheit zu erkennen. So wird aus der auf der Karte angezeigten Unterstützung ein auffindbares Gegenüber.', image: '/img/beacon/recognition.webp', alt: 'Beacon zeigt das gemeinsame Lichtsignal zur Wiedererkennung', caption: 'Das Lichtsignal unterstützt die Wiedererkennung beim Zusammentreffen.' },
] : [
  { title: 'Presence', question: 'How does available help become visible?', answer: 'The map shows how many Beacons are available nearby. Their exact locations remain hidden. Before requesting help, a person can see whether support is close without exposing where other people are.', image: '/img/beacon/visibility.webp', alt: 'Beacon map showing available support nearby', caption: 'The number of available Beacons is visible; individual locations remain private.' },
  { title: 'Request', question: 'How can someone request help discreetly?', answer: 'The person holds the help button while assessing the situation. Releasing it sends the request. Haptic feedback confirms the input without requiring a glance at the screen. If the situation improves, the action can be cancelled. The person decides whether to contact the police as well.', image: '/img/beacon/call.webp', alt: 'Beacon help button and its interaction states', caption: 'Pressing and holding prepares the request; releasing sends it.' },
  { title: 'Direction', question: 'Where can the person go?', answer: 'After a request, Beacon shows the way to the nearest safe place. A directional arrow supplements the map so the person can check their route at a glance. Two alternative destinations offer a choice if the suggested route does not suit the situation. The display adapts to day and night.', image: '/img/beacon/route.webp', alt: 'Beacon route with alternatives and a directional arrow', caption: 'The route and arrow lead to a safe place, with alternative destinations available.' },
  { title: 'Responsibility', question: 'Who takes on the request?', answer: 'Beacon addresses helpers individually. Each receives a specific task: offer a safe place or walk towards the person seeking help. The personal request makes clear who is being addressed and what help is expected. The task has limits; helpers should not put themselves at risk.', image: '/img/beacon/helpers.webp', alt: 'A personal request to help with a specific task', caption: 'The request assigns a concrete task to the helper.' },
  { title: 'Meeting', question: 'How do people recognise each other?', answer: 'As the people involved get closer, their phone flashlights light up. The shared signal helps them recognise each other in the dark. It connects the support shown on the map to a person they can find nearby.', image: '/img/beacon/recognition.webp', alt: 'Beacon uses a shared light signal to help people recognise each other', caption: 'The light signal helps people recognise each other when they meet.' },
]);
const current = computed(() => steps.value[active.value]);
function onTabKey(event: KeyboardEvent, index: number) {
  let next = index;
  if (event.key === 'ArrowRight') next = (index + 1) % steps.value.length;
  else if (event.key === 'ArrowLeft') next = (index + steps.value.length - 1) % steps.value.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = steps.value.length - 1;
  else return;
  event.preventDefault();
  active.value = next;
  (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;
.decisions { display: grid; gap: var(--spacing--xxl); }
.decisions__intro { margin: 0; max-width: 75ch; @include type.text(xl, light, alt, big); }
.decisions__nav {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 100%;
  gap: var(--spacing--xs) var(--spacing--lg);
  border-bottom: var(--border__size) solid var(--border__color);
  [role='tab'] {
    min-height: var(--control__size--minimum);
    margin: 0;
    padding: var(--spacing--sm) 0;
    border: 0;
    border-bottom: var(--border__size) solid transparent;
    color: var(--color--primary);
    @include type.text(lg, normal);
    transition: color var(--interaction__duration--color) ease, border-color var(--interaction__duration--color) ease;
    &[aria-selected='true'] { color: var(--beacon__color--interactive); border-bottom-color: currentColor; }
    &:hover { color: var(--beacon__color--interactive); border-bottom-color: currentColor; transform: none; }
  }
}
.decisions__panel {
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--project__media--gap);
  align-items: start;
}
.decisions__panel:focus-visible, .decisions__nav [role='tab']:focus-visible {
  outline: var(--border__size) solid var(--beacon__color--interactive);
  outline-offset: var(--spacing--xxs);
}
.decisions__text {
  grid-area: text;
  h3 { @include type.text(big, normal, alt, big); font-size: max(var(--font__size--section-minimum), var(--font__size--big)); margin: 0 0 var(--spacing--lg); }
  p { margin: 0; @include type.text(xl, light, alt, big); }
}
.decisions__image {
  grid-area: image;
  width: min(100%, var(--accordion__image--width));
  margin: 0;
  justify-self: end;
  .zoom-image { width: 100%; --image__ratio: var(--accordion__image--ratio); }
  figcaption { margin-top: var(--spacing--sm); @include type.text(lg, normal, alt, big); }
}
@include bp.stacked {
  .decisions__panel { grid-template-areas: 'text' 'image'; grid-template-columns: minmax(0, 1fr); }
  .decisions__image { justify-self: center; }
}
@include bp.reduced-motion {
  .decisions__nav [role='tab'] { transition: none; }
}
</style>
