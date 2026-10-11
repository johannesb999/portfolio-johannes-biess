<template>
  <div class="research">
    <div class="research__intro">
      <p v-for="paragraph in copy.intro" :key="paragraph">{{ paragraph }}</p>
    </div>

    <h3 class="research__heading">{{ copy.heading }}</h3>
    <div class="research__fields" role="tablist" :aria-label="copy.fieldsLabel">
      <AppLink
        v-for="(field, index) in copy.fields"
        :key="field.title"
        class="research__field"
        :id="`${panelId}-tab-${index}`"
        role="tab"
        :scale="false"
        :aria-selected="selected === index"
        :tabindex="selected === index ? 0 : -1"
        :aria-controls="panelId"
        @click="selected = index"
        @keydown="onTabKey($event, index)"
      >
        {{ field.title }}
      </AppLink>
    </div>

    <div :id="panelId" class="research__relationship" role="tabpanel" :aria-labelledby="`${panelId}-tab-${selected}`" tabindex="0">
      <section class="research__observation">
        <h4>{{ copy.observation }}</h4>
        <p>{{ active.observation }}</p>
      </section>
      <section class="research__design">
        <h4>{{ copy.design }}</h4>
        <p>{{ active.design }}</p>
      </section>
    </div>

    <p class="research__selection">{{ copy.selection }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{ language?: 'de' | 'en' }>(), { language: 'de' });
const selected = ref(0);
const panelId = computed(() => `kai-research-${props.language}-relationship`);
const content = {
  de: {
    intro: [
      'Im Design-Sprint untersuchten wir bestehende Kassensysteme und den Serviceablauf vom Platzieren der Gäste bis zur Zahlung. Interviews mit Kommilitoninnen und Kommilitonen mit Gastronomieerfahrung ergänzten die Recherche um Situationen aus ihrem Arbeitsalltag. Offene Fragen halfen uns, eigene Annahmen zu prüfen, bevor wir Bestellaufnahme, Geräte und Einarbeitung vertieften.',
      'Nach dem Sprint fragten wir, ob eine bessere Oberfläche allein neue Servicekräfte entlasten würde. Die Recherche zum Fachkräftemangel zeigte weitere Ursachen; im Arbeitsablauf wurden besonders fehlendes Wissen, wenig Routine und Überforderung sichtbar. KAI richtet seine Unterstützung auf diese konkreten Momente aus.',
    ],
    heading: 'Fünf Problemfelder im Service',
    fieldsLabel: 'Problemfeld auswählen',
    observation: 'Beobachtung',
    design: 'Im Entwurf',
    selection: 'Ein Serviceszenario mit der neuen Mitarbeiterin Lea führte die fünf Problemfelder durch eine Schicht zusammen. Priority Guides und eine Impact-Effort-Map halfen uns, die Eingriffe nach Nutzen und Aufwand zu ordnen. Daraus leiteten wir die Bestellaufnahme, situative Hinweise und die Verbindung von Tischstatus und räumlicher Orientierung ab.',
    fields: [
      {
        title: 'Wissenslücken',
        observation: 'Neue Mitarbeitende mussten die Speisekarte, Zutaten und mögliche Sonderwünsche schnell kennen. Fehlende Einarbeitung führte dazu, dass dieses Wissen im Service oft nicht sicher abrufbar war.',
        design: 'KAI führt in die Kernfunktionen ein und gibt passende Hinweise während der Bestellung. Einstiegshilfen lassen sich mit wachsender Erfahrung reduzieren; eine Wissensabfrage begleitet diesen Schritt.',
      },
      {
        title: 'Eingabegeräte',
        observation: 'Kleine Schaltflächen, unklare Kategorien und fehlende Suchfunktionen erschwerten die Eingabe. Die Befragten wünschten sich eine übersichtlichere Oberfläche und eine einfache Möglichkeit, Fehler zurückzunehmen.',
        design: 'Gesprochene Bestellungen werden zu sichtbaren Bestellpositionen. Die Servicekraft kann einzelne Positionen prüfen und bearbeiten. Klare Hierarchien und Kontraste erleichtern die Orientierung in der mobilen Oberfläche.',
      },
      {
        title: 'Orientierung',
        observation: 'Neue Servicekräfte müssen Tischnummern, Laufwege und den Aufbau des Restaurants erst kennenlernen. Das richtige Zuordnen von Tisch und Bestellung gehört deshalb zur Einarbeitung.',
        design: 'Die Tischübersicht verbindet Aufgaben mit ihrem Ort. Eine Karte und eine Richtungsanzeige führen zum ausgewählten Tisch und unterstützen den Aufbau räumlicher Orientierung.',
      },
      {
        title: 'Abläufe',
        observation: 'Sonderwünsche wurden häufig handschriftlich notiert. Unklare Statusanzeigen ließen offen, ob eine Bestellung die Küche erreicht hatte; gleichzeitig mussten mehrere Aufgaben und Tische im Blick bleiben.',
        design: 'Sonderwünsche bleiben bei der jeweiligen Bestellposition sichtbar. Die Tischübersicht zeigt offene Aufgaben und ihren Status, etwa bereitstehende Speisen oder einen Zahlungswunsch. So wird erkennbar, wo als Nächstes Service gebraucht wird.',
      },
      {
        title: 'Soziale Interaktion',
        observation: 'Die Befragten wollten mehr Aufmerksamkeit für ihre Gäste haben. Spracheingabe versprach Entlastung, brachte aber auch Fragen nach Fehlinterpretationen und dem Umgang mit Aufnahmen mit sich.',
        design: 'KAI unterstützt das Gespräch durch automatische Bestellaufnahme und situative Hinweise. Die sichtbare Liste hält die Servicekraft im Ablauf; die persönliche Betreuung der Gäste bleibt der Ausgangspunkt des Entwurfs.',
      },
    ],
  },
  en: {
    intro: [
      'During the design sprint, we examined existing POS systems and the service workflow from seating guests to payment. Interviews with fellow students who had worked in hospitality added situations from their daily work. Open questions helped us test our assumptions before focusing on order entry, devices and training.',
      'After the sprint, we asked whether a better interface alone would ease the load on new staff. Our review of staff shortages revealed broader causes; within the workflow, missing knowledge, limited routine and overload stood out. KAI focuses its assistance on those specific moments.',
    ],
    heading: 'Five problem areas in service',
    fieldsLabel: 'Choose a problem area',
    observation: 'Observation',
    design: 'In the design',
    selection: 'A service scenario following new employee Lea through a shift brought the five problem areas together. Priority guides and an impact-effort map helped us weigh value against effort. From this, we developed order capture, guidance at the point of choice, and table status paired with spatial navigation.',
    fields: [
      {
        title: 'Knowledge gaps',
        observation: 'New staff had to learn the menu, ingredients and possible modifications quickly. A lack of training meant they often could not confidently recall this information during service.',
        design: 'KAI introduces its core functions and provides relevant guidance while taking orders. Beginner assistance can be reduced as experience grows, with a knowledge check accompanying that step.',
      },
      {
        title: 'Input devices',
        observation: 'Small buttons, unclear categories and missing search functions made order entry difficult. Interviewees wanted a clearer interface and an easy way to undo mistakes.',
        design: 'Spoken orders become visible order items that staff can review and edit individually. Clear hierarchies and contrast make the mobile interface easier to navigate.',
      },
      {
        title: 'Orientation',
        observation: 'New staff first need to learn table numbers, routes and the restaurant layout. Matching a table to its order is therefore part of their training.',
        design: 'The table overview connects tasks to their location. A map and direction indicator guide staff to the selected table and help them learn the space.',
      },
      {
        title: 'Workflows',
        observation: 'Special requests were often handwritten. Unclear status indicators left staff unsure whether an order had reached the kitchen, while they had to keep track of several tasks and tables.',
        design: 'Modifications stay visible alongside the relevant order item. The table overview shows open tasks and their status, including meals ready to serve or requests to pay. Staff can see where service is needed next.',
      },
      {
        title: 'Social interaction',
        observation: 'Interviewees wanted to give their guests more attention. Speech input promised to ease their workload, but also raised questions about misinterpretations and the handling of recordings.',
        design: 'KAI supports the conversation with automatic order capture and situational guidance. The visible list keeps staff involved in the workflow, with personal hospitality as the starting point for the design.',
      },
    ],
  },
};
const copy = computed(() => content[props.language]);
const active = computed(() => copy.value.fields[selected.value]);
function onTabKey(event: KeyboardEvent, index: number) {
  let next = index;
  if (event.key === 'ArrowRight') next = (index + 1) % copy.value.fields.length;
  else if (event.key === 'ArrowLeft') next = (index + copy.value.fields.length - 1) % copy.value.fields.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = copy.value.fields.length - 1;
  else return;
  event.preventDefault();
  selected.value = next;
  (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/type' as type;
@use '@/assets/styles/breakpoints' as bp;

.research {
  display: grid;
  gap: var(--spacing--lg);
  @include type.text(xl, light, alt, big);

  p { margin: 0; }
}

.research__intro {
  display: grid;
  gap: var(--spacing--md);
  max-width: 75ch;
}

.research__heading {
  margin: var(--spacing--sm) 0 0;
  @include type.text(xxl, bold, alt, big);
}

.research__fields {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing--xs) var(--spacing--lg);
  border-bottom: var(--border__size) solid var(--color--gray-light);
}

.research__field {
  display: flex;
  align-items: baseline;
  gap: var(--spacing--xs);
  padding: var(--spacing--sm) 0;
  border: 0;
  border-bottom: var(--border__size) solid transparent;
  background: transparent;
  color: var(--color--primary-translucent);
  @include type.text(lg, normal, alt, big);
  transition: color var(--interaction__duration--color), border-color var(--interaction__duration--color);

  &[aria-selected='true'],
  &:hover {
    color: var(--kai__color--interactive);
    border-image: var(--kai__gradient--accent) 1;
  }

  &:focus-visible {
    outline: var(--border__size) solid var(--kai__color--interactive);
    outline-offset: var(--spacing--xxs);
  }
}

.research__relationship {
  display: grid;
  grid-template-areas: 'observation' 'design';
  grid-template-columns: minmax(0, 1fr);
  gap: var(--spacing--lg);

  h4 {
    margin: 0 0 var(--spacing--sm);
    @include type.text(lg, bold, alt, big);
  }
}

.research__relationship:focus-visible {
  outline: var(--border__size) solid var(--kai__color--interactive);
  outline-offset: var(--spacing--xxs);
}

.research__observation { grid-area: observation; }
.research__design { grid-area: design; }

.research__selection {
  padding-top: var(--spacing--lg);
  border-top: var(--border__size) solid var(--color--gray-light);
  max-width: 75ch;
}

@include bp.side-by-side {
  .research__relationship {
    grid-template-areas: 'observation design';
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--spacing--xxl);
  }

  .research__design {
    padding-left: var(--spacing--xxl);
    border-left: var(--border__size) solid var(--color--gray-light);
  }
}

@include bp.reduced-motion {
  .research__field { transition: none; }
}
</style>
