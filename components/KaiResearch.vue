<template>
  <div class="research">
    <div class="research__intro"><p>{{ copy.intro }}</p><p>{{ copy.focus }}</p></div>
    <figure class="research__figure">
      <figcaption>{{ copy.mapTitle }}</figcaption>
      <div class="research__map">
        <div class="research__fields" role="group" :aria-label="copy.fieldsLabel">
          <AppLink v-for="(field, index) in copy.fields" :key="field.title" class="research__field"
            :aria-pressed="selected === index" :aria-controls="panelId" :scale="false" @click="selected = index">
            <span>{{ field.title }}</span><span class="research__task">{{ field.task }}</span><span class="research__dot" aria-hidden="true" />
          </AppLink>
        </div>
        <svg class="research__connections" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true">
          <g v-for="(targets, from) in connections" :key="from" :class="{ 'is-active': selected === from }">
            <path v-for="to in targets" :key="to" :d="connectionPath(from, to)" />
          </g>
        </svg>
        <div class="research__outcomes" :aria-label="copy.outcomesLabel">
          <div v-for="(outcome, index) in copy.outcomes" :key="outcome.title" class="research__outcome" :class="{ 'is-active': connections[selected].includes(index) }">
            <span class="research__dot" aria-hidden="true" />
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <template v-if="index === 0"><path d="M9 8h26v32H9zM15 16h14M15 23h8M15 30h14" /><path d="m29 25 4 4 9-10" /></template>
              <template v-else-if="index === 1"><path d="M8 9h32v25H22l-9 7v-7H8zM15 17h18M15 24h10" /></template>
              <template v-else><rect x="7" y="8" width="12" height="10" rx="2" /><rect x="29" y="8" width="12" height="10" rx="2" /><rect x="7" y="30" width="12" height="10" rx="2" /><path d="M35 22v10H24m5-5-5 5 5 5" /></template>
            </svg>
            <div><h3>{{ outcome.title }}</h3><p>{{ outcome.detail }}</p></div>
          </div>
        </div>
      </div>
      <p class="research__hint">{{ copy.hint }}</p>
    </figure>
    <div :id="panelId" class="research__detail" aria-live="polite" aria-atomic="true">
      <h3>{{ active.heading }}</h3><div><p>{{ active.context }}</p><p>{{ active.response }}</p></div>
    </div>
    <div class="research__conclusion"><p>{{ copy.selection }}</p><AppLink href="/docs/kai/kai-dokumentation-de.pdf#page=50" :label="copy.source" underline :scale="false" /></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const props = withDefaults(defineProps<{ language?: 'de' | 'en' }>(), { language: 'de' });
const selected = ref(0);
const panelId = computed(() => `kai-research-${props.language}-detail`);
// Editorial grouping of documented problem fields and the final design.
// Connections express relationships, not frequency, priority or measured impact.
const connections = [[1], [0], [2], [0, 2], [0, 1]];
const connectionPath = (from: number, to: number) => `M0 ${30 + from * 60} C45 ${30 + from * 60},55 ${50 + to * 100},100 ${50 + to * 100}`;
const content = {
  de: {
    intro: 'Im Design-Sprint untersuchten wir Kassensysteme und den Ablauf vom Platzieren der Gäste bis zur Zahlung. Gespräche mit Kommilitoninnen und Kommilitonen mit Gastronomieerfahrung zeigten, was neuen Servicekräften im Alltag Schwierigkeiten macht.',
    focus: 'Eine verständlichere Oberfläche allein reicht dafür nicht aus. Neue Mitarbeitende müssen Wissen abrufen, Geräte bedienen, Wege finden und gleichzeitig auf ihre Gäste eingehen. Wir bündelten diese Anforderungen in fünf Problemfeldern.',
    mapTitle: 'Was im Service zusammenkommt', fieldsLabel: 'Problemfeld erkunden', outcomesLabel: 'Schwerpunkte im KAI-Entwurf',
    hint: 'Ein Problemfeld auswählen, um seine Verbindung zum Entwurf zu sehen.',
    outcomes: [
      { title: 'Bestellaufnahme', detail: 'Gesprochenes erfassen und Positionen prüfen.' },
      { title: 'Situative Hinweise', detail: 'Wissen dort anbieten, wo es gebraucht wird.' },
      { title: 'Tischübersicht und Navigation', detail: 'Aufgaben, Status und Ort zusammenbringen.' },
    ],
    fields: [
      { title: 'Wissenslücken', task: 'Zutaten und Sonderwünsche kennen', heading: 'Speisekarte und Sonderwünsche', context: 'Speisekarte, Zutaten und mögliche Änderungen gehören zum täglichen Service. Gerade am Anfang ist dieses Wissen noch nicht sicher abrufbar. Bei Allergien kommt die Verantwortung hinzu, eine verlässliche Auskunft zu geben.', response: 'KAI stellt Hinweise während der Bestellaufnahme bereit. Die Servicekraft muss dafür das Gespräch nicht unterbrechen und an anderer Stelle nach der Information suchen. Einstiegshilfen lassen sich später mit wachsender Erfahrung reduzieren.' },
      { title: 'Eingabegerät', task: 'Bestellungen sicher eingeben', heading: 'Bestellungen erfassen und prüfen', context: 'Neue Mitarbeitende lernen gleichzeitig das Restaurant und sein Kassensystem kennen. Bestellungen, Sonderwünsche und Korrekturen müssen trotzdem nachvollziehbar erfasst werden.', response: 'Im Entwurf wird die gesprochene Bestellung als Liste sichtbar. Einzelne Positionen lassen sich prüfen und bearbeiten, bevor die Servicekraft sie an die Küche sendet. Die Bestätigung bleibt bewusst bei ihr.' },
      { title: 'Orientierung', task: 'Tische und Laufwege finden', heading: 'Tische im Restaurant finden', context: 'Wer neu im Restaurant ist, kennt weder alle Tischnummern noch die Wege zwischen Gastraum, Küche und Lager. Eine Aufgabe zu kennen bedeutet deshalb noch nicht, ihren Ort zu finden.', response: 'KAI verbindet die Tischübersicht mit Karte und Richtungsanzeige. Die Servicekraft sieht zunächst, was ansteht, und kann sich anschließend zum ausgewählten Tisch orientieren.' },
      { title: 'Abläufe', task: 'Timing und Aufgaben koordinieren', heading: 'Aufgaben im Blick behalten', context: 'Speisen abholen, Bestellungen aufnehmen und eine Zahlung vorbereiten: Im Service greifen Aufgaben ineinander. Neue Mitarbeitende müssen Prioritäten erst kennenlernen und dabei ihre Station im Blick behalten.', response: 'Die Übersicht ordnet offene Aufgaben und Status dem jeweiligen Tisch zu. Sonderwünsche bleiben direkt an der Bestellposition. So stehen die Informationen bei der Aufgabe, zu der sie gehören.' },
      { title: 'Soziale Interaktion', task: 'Gäste und Situationen einschätzen', heading: 'Zeit für das Gespräch', context: 'Service heißt auch, Bedürfnisse zu erkennen, auf Beschwerden einzugehen und Empfehlungen im passenden Moment auszusprechen. Dieses Gespür lässt sich nicht durch eine Oberfläche ersetzen.', response: 'KAI unterstützt die Erfassung der Bestellung und bietet passende Hinweise an. Die Servicekraft behält die Kontrolle über Eingaben und Empfehlungen; das persönliche Gespräch bleibt ihre Aufgabe.' },
    ],
    selection: 'Im Szenario mit der neuen Mitarbeiterin Lea betrachteten wir diese Anforderungen gemeinsam. Priority Guides und eine Impact-Effort-Map halfen anschließend, Funktionen nach Nutzen und Aufwand einzuordnen. Daraus entstand der hier gezeigte Schwerpunkt auf Bestellaufnahme, Hinweisen und Orientierung.',
    source: 'Problemfelder und Priorisierung in der Dokumentation (S. 50–56)',
  },
  en: {
    intro: 'During the design sprint, we examined POS systems and the workflow from seating guests to payment. Conversations with fellow students who had worked in hospitality showed where new staff struggle in everyday service.',
    focus: 'A clearer interface alone cannot address all of this. New staff have to recall information, use devices, find their way and attend to guests at the same time. We grouped these demands into five problem areas.',
    mapTitle: 'What comes together during service', fieldsLabel: 'Explore a problem area', outcomesLabel: 'Focus of the KAI design',
    hint: 'Select a problem area to see how it connects to the design.',
    outcomes: [
      { title: 'Order capture', detail: 'Capture speech and review order items.' },
      { title: 'Situational guidance', detail: 'Offer information where it is needed.' },
      { title: 'Table overview and navigation', detail: 'Connect tasks, status and location.' },
    ],
    fields: [
      { title: 'Knowledge gaps', task: 'Know ingredients and modifications', heading: 'The menu and modifications', context: 'The menu, ingredients and possible changes are part of everyday service. New staff cannot yet recall all this reliably. Allergies add the responsibility of providing dependable information.', response: 'KAI offers guidance while taking an order. Staff do not have to interrupt the conversation to look elsewhere for information. Beginner assistance can be reduced as experience grows.' },
      { title: 'Input device', task: 'Enter orders reliably', heading: 'Capture and review orders', context: 'New staff are learning both the restaurant and its POS system. Orders, modifications and corrections still need to be recorded clearly.', response: 'The design turns spoken orders into a visible list. Staff can review and edit individual items before sending them to the kitchen. Confirmation remains their decision.' },
      { title: 'Orientation', task: 'Find tables and routes', heading: 'Find tables in the restaurant', context: 'Someone new to a restaurant does not yet know every table number or the routes between the dining area, kitchen and storage. Knowing the task does not necessarily mean knowing its location.', response: 'KAI connects the table overview to a map and a direction indicator. Staff first see what needs doing, then find their way to the selected table.' },
      { title: 'Workflows', task: 'Coordinate timing and tasks', heading: 'Keep track of tasks', context: 'Collecting meals, taking orders and preparing a payment: service tasks overlap. New staff need to learn priorities while keeping track of their section.', response: 'The overview assigns open tasks and status to each table. Modifications stay alongside the order item they belong to, keeping information with the relevant task.' },
      { title: 'Social interaction', task: 'Read guests and situations', heading: 'Time for the conversation', context: 'Service also means recognising needs, responding to complaints and making recommendations at the right moment. An interface cannot replace that judgement.', response: 'KAI supports order capture and offers relevant guidance. Staff retain control over entries and recommendations; the personal conversation remains theirs.' },
    ],
    selection: 'In a scenario with new employee Lea, we considered these demands together. Priority guides and an impact-effort map then helped us weigh the value and effort of features. The design concentrates on the order capture, guidance and orientation shown here.',
    source: 'Problem areas and prioritisation in the documentation (pp. 50–56, DE)',
  },
};
const copy = computed(() => content[props.language]);
const active = computed(() => copy.value.fields[selected.value]);
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;
.research { display: grid; gap: var(--spacing--xxxl); @include type.text(xl, light, alt, big); }
.research p { margin: 0; }
.research__intro { display: grid; gap: var(--spacing--md); max-width: 75ch; }
.research__figure { margin: 0; }
.research__figure figcaption { margin-bottom: var(--spacing--xl); @include type.text(big, normal, alt, big); }
.research__map { display: grid; grid-template-areas: 'fields connections outcomes'; grid-template-columns: minmax(0, 1fr) minmax(0, .4fr) minmax(0, 1.15fr); grid-template-rows: minmax(0, 1fr); height: var(--kai__research--map-height); }
.research__map > * { min-height: 0; }
.research__fields { grid-area: fields; display: grid; grid-template-rows: repeat(5, minmax(0, 1fr)); }
.research__field { position: relative; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; min-width: 0; margin: 0; padding: var(--spacing--xs) var(--spacing--lg) var(--spacing--xs) 0; color: var(--color--primary); @include type.text(xl, normal, alt, big); transition: color var(--interaction__duration--color); }
.research__task { @include type.text(lg, light, alt, big); }
.research__field { text-align: left; }
.research__dot { position: absolute; width: var(--kai__research--dot-size); height: var(--kai__research--dot-size); border: var(--border__size) solid var(--border__color); border-radius: 50%; background: var(--color--background); top: 50%; transform: translateY(-50%); transition: background var(--interaction__duration--color), border-color var(--interaction__duration--color); }
.research__field .research__dot { right: calc(var(--kai__research--dot-size) / -2); }
.research__field[aria-pressed='true'], .research__field:hover { color: var(--kai__color--interactive); }
.research__field[aria-pressed='true'] > span:first-child { font-weight: var(--font__weight--bold); }
.research__field[aria-pressed='true'] .research__dot, .research__outcome.is-active .research__dot { border-color: var(--kai__color--interactive); background: var(--kai__color--interactive); }
.research__field:focus-visible { outline: var(--border__size) solid var(--kai__color--interactive); outline-offset: var(--spacing--xs); border-radius: var(--radius--xxs); }
.research__connections { grid-area: connections; display: block; width: 100%; height: 100%; overflow: visible; }
.research__connections path { fill: none; stroke: var(--border__color); stroke-width: 1; vector-effect: non-scaling-stroke; transition: stroke var(--interaction__duration--color); }
.research__connections .is-active path { stroke: var(--kai__color--interactive); stroke-width: 2; }
.research__outcomes { grid-area: outcomes; display: grid; grid-template-rows: repeat(3, minmax(0, 1fr)); }
.research__outcome { position: relative; display: grid; grid-template-areas: 'icon text'; grid-template-columns: var(--research__mark--size) minmax(0, 1fr); align-items: center; gap: var(--spacing--md); padding-left: var(--spacing--xl); min-width: 0; }
.research__outcome .research__dot { left: calc(var(--kai__research--dot-size) / -2); }
.research__outcome > svg { grid-area: icon; width: 100%; color: var(--color--secondary); }
.research__outcome > div { grid-area: text; }
.research__outcome h3 { margin: 0 0 var(--spacing--xxs); @include type.text(xl, normal, alt, big); transition: color var(--interaction__duration--color); }
.research__outcome p { @include type.text(lg, light, alt, big); }
.research__outcome.is-active h3, .research__outcome.is-active > svg { color: var(--kai__color--interactive); }
.research__hint { padding-top: var(--spacing--lg); @include type.text(lg, light, alt, big); }
.research__detail { display: grid; grid-template-areas: 'title copy'; grid-template-columns: minmax(0, .85fr) minmax(0, 1.4fr); gap: var(--project__media--gap); padding-block: var(--spacing--xxl); border-top: var(--border__size) solid var(--border__color); border-bottom: var(--border__size) solid var(--border__color); min-height: var(--kai__research--detail-height); align-content: start; }
.research__detail h3 { grid-area: title; margin: 0; @include type.text(big, normal, alt, big); }
.research__detail > div { grid-area: copy; display: grid; gap: var(--spacing--md); }
.research__conclusion { display: grid; justify-items: start; gap: var(--spacing--md); max-width: 75ch; }
@include bp.stacked {
  .research__map { grid-template-areas: 'fields' 'outcomes'; grid-template-columns: minmax(0, 1fr); grid-template-rows: auto auto; height: auto; gap: var(--spacing--xl); }
  .research__fields { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: auto; gap: var(--spacing--sm) var(--spacing--lg); }
  .research__field { padding: var(--spacing--xs) 0; min-height: var(--control__size--minimum); border-bottom: var(--border__size) solid transparent; }
  .research__field[aria-pressed='true'] { border-bottom-color: var(--kai__color--interactive); }
  .research__task { display: none; }
  .research__connections, .research__dot { display: none; }
  .research__outcomes { grid-template-rows: auto; border-left: var(--kai__prototype--accent-size) solid var(--kai__color--interactive); }
  .research__outcome { padding-block: var(--spacing--sm); }
  .research__outcome:not(.is-active) { display: none; }
  .research__detail { grid-template-areas: 'title' 'copy'; grid-template-columns: minmax(0, 1fr); min-height: 0; gap: var(--spacing--lg); }
}
@include bp.reduced-motion {
  .research__field, .research__dot, .research__connections path, .research__outcome h3 { transition: none; }
}
</style>
