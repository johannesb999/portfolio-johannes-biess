<template>
  <div class="research">
    <div class="research__intro">
      <h3>{{ copy.title }}</h3>
      <p>{{ copy.intro }}</p>
      <p>{{ copy.findings }}</p>
      <p class="research__method">{{ copy.method }}</p>
      <AppLink href="/docs/beacon/beacon-dokumentation-de.pdf#page=12" :label="copy.source" underline :scale="false" />
    </div>

    <div class="research__explorer">
      <div class="research__tabs" role="tablist" :aria-label="copy.tabLabel">
        <AppLink
          v-for="(label, index) in copy.tabs"
          :id="`${prefix}-tab-${index}`"
          :key="label"
          role="tab"
          :aria-selected="active === index"
          :aria-controls="`${prefix}-panel`"
          :tabindex="active === index ? 0 : -1"
          :scale="false"
          @click="active = index"
          @keydown="onTabKey($event, index)"
        >{{ label }}</AppLink>
      </div>

      <div :id="`${prefix}-panel`" class="research__panel" role="tabpanel" :aria-labelledby="`${prefix}-tab-${active}`" tabindex="0">
        <template v-if="active === 0">
          <p class="research__deficit">{{ copy.deficit }}</p>
          <dl class="research__factors">
            <div v-for="factor in copy.factors" :key="factor.title" class="research__factor">
              <dt>{{ factor.title }}</dt>
              <dd>{{ factor.description }}</dd>
            </div>
          </dl>
          <p class="research__lens">{{ copy.lens }}</p>
        </template>

        <template v-else-if="active === 1">
          <ol class="research__stages">
            <li v-for="(stage, index) in copy.stages" :key="stage.title" :style="{ gridArea: `stage${index}` }">
              <span class="research__step" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
              <h4>{{ stage.title }}</h4>
              <p>{{ stage.text }}</p>
            </li>
          </ol>
          <p class="research__insight">{{ copy.early }}</p>
          <p class="research__note">{{ copy.sudden }}</p>
        </template>

        <dl v-else class="research__requirements">
          <div v-for="requirement in copy.requirements" :key="requirement.title">
            <dt>{{ requirement.title }}</dt><dd>{{ requirement.text }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const route = useRoute();
const german = computed(() => route.path.startsWith('/de/'));
const active = ref(0);
const prefix = computed(() => `beacon-research-${german.value ? 'de' : 'en'}`);
const copy = computed(() => german.value ? {
  title: 'Wie entsteht Unsicherheit?',
  intro: 'Wir wollten verstehen, wann ein nächtlicher Heimweg als unsicher erlebt wird und welche Unterstützung in diesem Moment fehlt. Dafür haben wir Literatur ausgewertet, eine eigene Umfrage durchgeführt und die Wege unserer Personas untersucht.',
  findings: 'Mit einer 5-Why-Analyse haben wir die Auslöser auf vier Faktoren zurückgeführt. Ihnen gemeinsam ist ein Informationsdefizit: Die betroffene Person kann ihre Umgebung, die Absichten anderer oder ihre eigenen Handlungsmöglichkeiten nicht ausreichend einschätzen.',
  method: 'Die untersuchten Situationen zeigen außerdem, wie sich Unsicherheit bis zum Notfall steigern kann. Aus diesen Eskalationsstufen, den vier Faktoren und den Personas haben wir sieben Anforderungen abgeleitet. An ihnen haben wir bestehende Angebote und eigene Lösungsansätze gemessen; sie bestimmen auch die spätere Bedienung von Beacon.',
  source: 'Herleitung in der Dokumentation (S. 22–35)',
  tabLabel: 'Recherche von Beacon',
  tabs: ['Vier Faktoren', 'Eskalation', 'Anforderungen'],
  deficit: 'Ein Informationsdefizit',
  factors: [
    { title: 'Eingeschränkte Wahrnehmung', description: 'Dunkelheit, unübersichtliche Orte oder Lärm erschweren es, die Umgebung einzuschätzen.' },
    { title: 'Nicht einordenbarer Reiz', description: 'Ein ungewohntes Verhalten fällt auf. Die Absicht dahinter bleibt unklar.' },
    { title: 'Soziale Isolation', description: 'Es ist nicht erkennbar, ob jemand in der Nähe helfen würde.' },
    { title: 'Keine mentalen Fluchtwege', description: 'Es fehlt eine konkrete Vorstellung davon, wohin man gehen oder wie man reagieren kann.' },
  ],
  lens: 'Erfahrungen und gesellschaftliche Erzählungen prägen, wie diese Signale bewertet werden.',
  stages: [
    { title: 'Wachsamkeit', text: 'Die Umgebung verändert sich.' },
    { title: 'Verdacht', text: 'Ein Reiz bindet die Aufmerksamkeit.' },
    { title: 'Bedrohung', text: 'Aus Unsicherheit wird konkrete Angst.' },
    { title: 'Notfall', text: 'Die Situation eskaliert zum Übergriff.' },
  ],
  early: 'Beacon setzt früh an: Orientierung und Hilfe, bevor die Situation eskaliert.',
  sudden: 'Nicht jeder Verlauf ist linear. Eine Bedrohung kann auch ohne Vorwarnung entstehen.',
  requirements: [
    { title: 'Orientierung', text: 'Informationen und nächste Schritte sichtbar machen.' },
    { title: 'Community', text: 'Menschen gezielt zum Helfen ansprechen.' },
    { title: 'Diskretion', text: 'Hilfe leise vorbereiten und einen Abbruch ermöglichen.' },
    { title: 'Unterwegs', text: 'Über feste Schutzzonen und Öffnungszeiten hinausdenken.' },
    { title: 'Bedienung unter Stress', text: 'Wenige eindeutige Handlungen verlangen.' },
    { title: 'Zugang', text: 'Unterschiedliche Voraussetzungen berücksichtigen.' },
    { title: 'Früher Einsatz', text: 'Schon auf ein ungutes Gefühl reagieren.' },
  ],
} : {
  title: 'How does uncertainty arise?',
  intro: 'We wanted to understand when a walk home at night feels unsafe and what support is missing at that moment. We reviewed literature, conducted our own survey and examined the journeys of our personas.',
  findings: 'A 5 Whys analysis helped us trace the triggers to four factors. They share an information gap: the person cannot adequately assess their surroundings, other people’s intentions or their own options for action.',
  method: 'The situations also show how uncertainty can escalate into an emergency. We derived seven requirements from these stages, the four factors and the personas. We used them to assess existing services and our own concepts; they also inform how people use Beacon.',
  source: 'Research in the documentation (pp. 22–35, DE)',
  tabLabel: 'Beacon research',
  tabs: ['Four factors', 'Escalation', 'Requirements'],
  deficit: 'An information gap',
  factors: [
    { title: 'Limited perception', description: 'Darkness, poor visibility or noise make it difficult to assess the surroundings.' },
    { title: 'An ambiguous cue', description: 'Unusual behaviour draws attention, but the intention behind it remains unclear.' },
    { title: 'Social isolation', description: 'It is unclear whether anyone nearby would offer help.' },
    { title: 'No clear way out', description: 'There is no concrete idea of where to go or how to respond.' },
  ],
  lens: 'Personal experience and social narratives shape how these signals are interpreted.',
  stages: [
    { title: 'Vigilance', text: 'The surroundings begin to change.' },
    { title: 'Suspicion', text: 'A cue draws focused attention.' },
    { title: 'Threat', text: 'Uncertainty becomes concrete fear.' },
    { title: 'Emergency', text: 'The situation escalates into an assault.' },
  ],
  early: 'Beacon starts early: orientation and support before a situation escalates.',
  sudden: 'Not every situation progresses step by step. A threat can arise without warning.',
  requirements: [
    { title: 'Orientation', text: 'Make information and next steps visible.' },
    { title: 'Community', text: 'Ask individuals nearby to help.' },
    { title: 'Discretion', text: 'Prepare support quietly and allow cancellation.' },
    { title: 'On the move', text: 'Look beyond fixed safe zones and opening hours.' },
    { title: 'Use under stress', text: 'Ask for few, unambiguous actions.' },
    { title: 'Access', text: 'Account for different needs and capabilities.' },
    { title: 'Early support', text: 'Respond to the first feeling of unease.' },
  ],
});

function onTabKey(event: KeyboardEvent, index: number) {
  let next = index;
  if (event.key === 'ArrowRight') next = (index + 1) % 3;
  else if (event.key === 'ArrowLeft') next = (index + 2) % 3;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = 2;
  else return;
  event.preventDefault();
  active.value = next;
  const target = event.currentTarget as HTMLElement;
  target.parentElement?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;

.research {
  display: grid;
  grid-template-areas: 'intro explorer';
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.4fr);
  gap: var(--project__media--gap);
}
.research__intro { grid-area: intro; }
.research__explorer { grid-area: explorer; min-width: 0; }
.research h3 { margin: 0 0 var(--spacing--lg); @include type.text(big, normal, alt, big); font-size: max(var(--font__size--section-minimum), var(--font__size--big)); }
.research h4 { margin: 0; @include type.text(xl, normal, alt, big); }
.research p { @include type.text(xl, light, alt, big); }
.research__intro > p { margin: 0 0 var(--spacing--lg); }
.research__intro > .research__method { margin-bottom: var(--spacing--xxl); }
.research__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing--xs) var(--spacing--lg);
  border-bottom: var(--border__size) solid var(--border__color);
}
.research__tabs [role='tab'] {
  min-height: var(--control__size--minimum);
  margin: 0;
  padding: var(--spacing--sm) 0;
  border: 0;
  border-bottom: var(--border__size) solid transparent;
  @include type.text(lg, normal);
  color: var(--color--primary);
  transition: color var(--interaction__duration--color) ease, border-color var(--interaction__duration--color) ease;
  &[aria-selected='true'] { color: var(--beacon__color--interactive); border-bottom-color: currentColor; }
  &:hover { color: var(--beacon__color--interactive); border-bottom-color: currentColor; transform: none; }
}
.research__panel { padding-top: var(--spacing--xl); }
.research__panel:focus-visible, .research__tabs [role='tab']:focus-visible {
  outline: var(--border__size) solid var(--beacon__color--interactive);
  outline-offset: var(--spacing--xs);
}
.research p.research__deficit {
  margin: 0 0 var(--spacing--xl);
  color: var(--research__accent);
  font-size: max(var(--font__size--title-minimum), var(--font__size--big));
}
.research__factors { margin: 0; }
.research__factor {
  display: grid;
  grid-template-areas: 'term meaning';
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
  gap: var(--spacing--lg);
  padding-block: var(--spacing--lg);
  border-top: var(--border__size) solid var(--border__color);
  dt { grid-area: term; @include type.text(xl, normal, alt, big); }
  dd { grid-area: meaning; margin: 0; @include type.text(xl, light, alt, big); }
}
.research__lens { margin: var(--spacing--lg) 0 0; }
.research__stages {
  display: grid;
  grid-template-areas: 'stage0 stage1' 'stage2 stage3';
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0; padding: 0; list-style: none;
  li { padding: var(--spacing--lg); border-top: var(--border__size) solid var(--border__color); }
  p { margin: var(--spacing--xs) 0 0; }
}
.research__step { display: block; margin-bottom: var(--spacing--lg); color: var(--research__accent); @include type.text(huge, normal); }
.research__insight { margin: var(--spacing--xl) 0 var(--spacing--md); padding: var(--spacing--lg); background: var(--color--gray-light); }
.research__note { margin: 0; }
.research__requirements {
  margin: 0;
  > div { display: grid; grid-template-areas: 'term meaning'; grid-template-columns: minmax(0, 1fr) minmax(0, 1.5fr); gap: var(--spacing--lg); padding-block: var(--spacing--md); border-bottom: var(--border__size) solid var(--border__color); }
  dt { grid-area: term; @include type.text(xl, normal, alt, big); }
  dd { grid-area: meaning; margin: 0; @include type.text(xl, light, alt, big); }
}
@include bp.stacked {
  .research { grid-template-areas: 'intro' 'explorer'; grid-template-columns: minmax(0, 1fr); }
}
@include bp.mobile {
  .research__factor { grid-template-areas: 'term' 'meaning'; grid-template-columns: minmax(0, 1fr); gap: var(--spacing--xs); }
  .research__stages { grid-template-areas: 'stage0' 'stage1' 'stage2' 'stage3'; grid-template-columns: minmax(0, 1fr); }
  .research__stages li { display: grid; grid-template-areas: 'step title' 'step text'; grid-template-columns: auto minmax(0, 1fr); column-gap: var(--spacing--lg); padding-inline: 0; }
  .research__step { grid-area: step; }
  .research__stages h4 { grid-area: title; }
  .research__stages p { grid-area: text; }
  .research__requirements > div { grid-template-areas: 'term' 'meaning'; grid-template-columns: minmax(0, 1fr); gap: var(--spacing--xs); }
}

@include bp.reduced-motion {
  .research__tabs [role='tab'] { transition: none; }
}
</style>
