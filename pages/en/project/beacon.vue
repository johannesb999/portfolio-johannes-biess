<template>
  <main>
    <div class="background">
      <client-only>
        <ScrollLink />
      </client-only>
    </div>

    <ProjectNav current="beacon" />

    <div class="projectFlap">
      <SplitFlapText preset="detailsFlap" :align="'center'" :texts="[
        '[BEACON]',
      ]" />
      <SplitFlapText preset="detailsFlap" :align="'random'" :texts="[
        'HELP NETWORK',
        'BACHELOR THESIS',
        'FIGMA   UI   UX',
        'RESEARCH   PROTOTYPING',
        'BRANDING   CAMPAIGN',
      ]" />
    </div>

    <div class="wrapper">
      <img src="/img/beacon/thumbnail.webp" alt="Beacon in use on the way home at night" />
    </div>

    <DetailsScroll />

    <div class="project-details">
      <section id="details-section">
        <p class="project-intro">
          Beacon is a digital, local help network for orientation, confidence to act and civil courage
          in public space. It makes the help that is already there, but invisible, perceptible and
          connects people seeking protection in real time with verified helpers and safe places
          nearby.
        </p>
        <ProjectAccordion :items="accordionItems" id-prefix="beacon" />
      </section>

      <AppLink class="tryOutLink" href="/docs/beacon/beacon-dokumentation-de.pdf" label="VIEW DOCUMENTATION (DE)" hreflang="de" size="xxxxl" weight="bold" underline />

      <div class="projectDetailsFlap">
        <SplitFlapText preset="keydataFlap" :align="'center'" :texts="[
          '[KEYDATA]',
          'BACHELOR THESIS',
          'SEVENTH SEMESTER',
          'TEAMWORK',
        ]" />
      </div>
    </div>
  </main>
</template>

<script setup>
// Bachelorarbeit, Team Biess / Flaig / Kling. Aufbau wie pages/en/project/goEase.vue.
// Die Doku liegt nur auf Deutsch vor, deshalb verweisen beide Sprachen auf dieselbe Datei.
const accordionItems = [
  {
    title: 'The Problem',
    body:
      'At night in public space a diffuse sense of insecurity sets in. Under acute stress, fine motor ' +
      'control and clear thinking fail. At the same time bystanders rarely step in: nobody is addressed ' +
      'directly, and everyone assumes someone else is responsible. People in danger are surrounded by ' +
      'others and still end up isolated when it matters.',
    images: [
      '/img/beacon/campaign.webp',
    ],
  },
  {
    title: 'The Concept',
    body:
      'Beacon is a digital, local help network for public space. It makes the help that is already there, ' +
      'but invisible, perceptible, and connects people seeking protection in real time with verified ' +
      'helpers and safe places nearby. Passers-by who would otherwise wait become individually addressed ' +
      'helpers with a clear task. An uncertain walk becomes a navigable route to the nearest safe place. ' +
      'The person stays able to act at every stage, from the first uneasy feeling to an actual emergency.',
    images: [
      '/img/beacon/overview.webp',
    ],
  },
  {
    title: 'Research',
    body:
      'Insecurity at night rarely comes from objective danger but from a lack of information. Four ' +
      'factors make a situation unreadable, the internal early-warning system escalates in stages, and at ' +
      'the critical moment the person lacks an assessment of the situation, a clear option to act and any ' +
      'certainty that someone will help. Seven requirements for an effective solution follow from this.',
  },
  {
    title: 'Four Factors of Insecurity',
    body:
      'The lack of information that insecurity grows from consists of four factors. How early and how ' +
      'strongly they take effect depends on intersubjective perception, shaped by personal experience and ' +
      'social narratives.',
    points: [
      'Perceptual limitation: darkness and poor visibility make it hard to judge people, movements and ' +
      'distances.',
      'An unreadable stimulus: behaviour that no longer fits a familiar pattern, such as footsteps ' +
      'keeping a constant distance or a car slowly driving alongside.',
      'Social isolation: no perceptible support, nobody who could be addressed or would intervene.',
      'No mental escape routes: no clear next step, no answer to the question of what to do now.',
    ],
  },
  {
    title: 'Stages of Escalation',
    body:
      'The internal early-warning system runs through four stages. Most sequences develop stage by stage ' +
      'and leave time to act. A second, rarer sequence begins without warning directly at the threat ' +
      'stage.',
    points: [
      'Alertness: no concrete trigger, but conditions change; the person starts scanning the ' +
      'surroundings.',
      'Suspicion: an unreadable stimulus appears, attention focuses, and the system already treats the ' +
      'situation as threatening.',
      'Threat: the situation tips from “maybe” to “unmistakably”, and insecurity turns into fear.',
      'Emergency: an assault occurs. Whoever keeps one option to the very end, even if it is only knowing ' +
      'that help is on its way, stays able to act.',
    ],
  },
  {
    title: 'Seven Requirements for a Solution',
    body:
      'The factors and escalation stages produce seven requirements that an effective solution has to ' +
      'meet, all of them.',
    points: [
      'Information and options to act: help make sense of stimuli and show mental escape routes.',
      'Social penetration: ask passers-by for help specifically and at a low threshold, bypassing the ' +
      'bystander effect.',
      'Error tolerance and discretion: triggerable discreetly and without negative consequences for a ' +
      'false alarm.',
      'Independence from infrastructure: usable anywhere and at any time on the way home, without fixed ' +
      'zones or opening hours.',
      'Cognitive accessibility: triggerable blind and without cognitive effort, because under stress ' +
      'thinking and fine motor control fail.',
      'Universal inclusion: helps the full spectrum of those affected, without financial barriers or ' +
      'assuming physical superiority.',
      'Early effectiveness: starts working at the early stages, not only in an emergency.',
    ],
  },
  {
    title: 'Design Challenges',
    body:
      'For an application to hold up at the decisive moment it has to do more than offer functions. Six ' +
      'challenges follow from the lack of information, and they build on one another.',
    points: [
      'Make presence visible without giving it away: help is usually nearby but invisible. Making it ' +
      'perceptible must not reveal locations or movements that could be turned against helpers or those ' +
      'affected.',
      'Lighten the first step: anyone wanting to react to an uneasy feeling hesitates, because a false ' +
      'alarm would be embarrassing and calling the police feels like too big a step. The entry point has ' +
      'to be small, discreet and, in case of doubt, without consequences.',
      'Operable under stress: under acute stress fine motor control and clear thinking fail, and nobody ' +
      'looks at their display at that moment. Triggering has to work without looking and without ' +
      'thinking.',
      'Replace orientation: under stress no inner map of possible ways out remains. The missing option ' +
      'has to come from outside, as a fast, unambiguous direction rather than a task to think through.',
      'Turn a crowd into responsibility: bystanders cannot be relied on as long as nobody is specifically ' +
      'meant. A diffuse crowd has to become individually addressed helpers.',
      'Trust before the encounter: strangers only help each other where trust exists. And that trust has ' +
      'to exist before the situation arises, not only within it.',
    ],
  },
  {
    title: 'The Solution',
    body:
      'Beacon makes the help that is present visible on the map, lets it be requested silently and ' +
      'reversibly by holding a button, guides the person along a route to the nearest safe place, and ' +
      'addresses helpers nearby individually with a clear task. Every challenge gets a concrete answer.',
  },
  {
    title: 'Help Becomes Visible',
    body:
      'The map shows how many Beacons are reachable in the area and answers the question of whether ' +
      'anyone is nearby at all. That number alone breaks the isolation an empty, dark route otherwise ' +
      'reinforces. The exact locations stay hidden as long as nobody calls for help. Presence becomes ' +
      'perceptible without movements becoming traceable.',
    images: [
      '/img/beacon/visibility.webp',
    ],
  },
  {
    title: 'Calling for Help at a Low Threshold',
    body:
      'While still suspicious, the person only holds the help button and silently announces to nearby ' +
      'Beacons that they feel unsafe, without provoking a possible attacker. Releasing the button ' +
      'actually calls for help. Whether the police are alerted as well is their own decision. Because the ' +
      'first step is only a silent preparation and the alarm can be ended at any time, a false alarm ' +
      'stays without consequences.',
    images: [
      '/img/beacon/call.webp',
    ],
  },
  {
    title: 'A Route Appears',
    body:
      'Under stress no inner map remains. Beacon draws the route to the nearest safe place, adds two ' +
      'alternatives and points an arrow in the right direction. In place of the missing escape route ' +
      'comes a fast, unambiguous reaction that requires no long deliberation. So the map stays readable ' +
      'in the dark, it adapts to day and night.',
    images: [
      '/img/beacon/route.webp',
    ],
  },
  {
    title: 'Bystanders Become Active',
    body:
      'Beacon addresses the people nearby who use the app individually and gives each of them a clearly ' +
      'bounded task. They make themselves visible as a safe place or walk part of the way towards the ' +
      'person seeking protection. Because everyone knows they are meant, the bystander effect no longer ' +
      'applies and the willingness to help that is already there becomes available.',
    images: [
      '/img/beacon/helpers.webp',
    ],
  },
  {
    title: 'Recognising Help',
    body:
      'Once helpers and the person seeking protection are close enough, they still have to find each ' +
      'other in the dark. Beacon uses the phone\'s flashlight for this: it lights up on both sides, and ' +
      'those involved recognise each other by it.',
    images: [
      '/img/beacon/recognition.webp',
    ],
  },
  {
    title: 'Trust and Responsibility',
    body:
      'Beacon verifies each person\'s identity once, so that a network of checked people emerges that can ' +
      'only be used for its purpose. Nobody picks whom they help or who comes. Helpers receive clear ' +
      'rules of conduct and do not intervene where doing so would put them in danger themselves. The map ' +
      'never serves as a situation picture.',
  },
  {
    title: 'Preparing for the Emergency',
    body:
      'Because there is no time to read instructions in an emergency, the sequence has to be familiar ' +
      'beforehand. A demo plays it through once calmly, so the person can later trigger it half blind. ' +
      'While they hold the help button, haptic feedback confirms what is happening and what releasing ' +
      'will trigger. That way they do not break off the interaction by accident.',
  },
  {
    title: 'Outlook',
    body:
      'Beacon makes visible what is there anyway: help that is almost always nearby on the way home at ' +
      'night and only has to become available. Whether the application holds up in real fear will only ' +
      'show in real operation. Until then it is a well-founded answer to a simple question: how does a ' +
      'person stay able to act when they feel alone although help is nearby?',
    images: [
      '/img/beacon/team.webp',
    ],
  },
];
</script>

<style lang="scss" src="assets/styles/project.scss" scoped></style>
