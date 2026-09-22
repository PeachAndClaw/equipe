const agents = [
  {
    id: "alix",
    name: "Alix",
    lineage: "product",
    lineageLabel: "Produit & usages",
    role: "Product designer · analyste fonctionnelle",
    model: "Claude Sonnet 5 · high",
    when: "Au cadrage, quand une intention doit devenir un parcours compréhensible.",
    output: "Des gestes, des écrans et des critères d’acceptation sans angle mort.",
    reports: "À Gianna, puis à Ariane pour la mise en architecture.",
    story:
      "Alix raconte avoir grandi dans un corridor rempli de portes sans poignées. Elle y a appris qu’une fonction peut exister sur le papier tout en restant inaccessible. Depuis, elle traque le geste manquant, le mot qui exclut et le parcours qui ne tient que dans la tête de sa conceptrice.",
    voice: "« Si personne ne sait quel geste faire ensuite, le produit n’a pas encore parlé. »",
    x: 0,
    y: 0,
  },
  {
    id: "ariane",
    name: "Ariane",
    lineage: "tech",
    lineageLabel: "Architecture & code",
    role: "Architecte · tech lead",
    model: "Claude Opus 5 · high",
    when: "Quand la promesse est claire et qu’il faut dessiner le système qui la tiendra.",
    output: "Une architecture, des frontières et un ordre de construction réversible.",
    reports: "À Gianna ; elle coordonne Daphné et Héphaïstos.",
    story:
      "Ariane vient d’un labyrinthe dont les murs changeaient de place. Un fil rouge lui révéla que certains passages mentaient sur leur destination. Elle en a gardé une obsession tranquille : rendre les dépendances visibles avant qu’elles ne deviennent des pièges.",
    voice: "« Une bonne architecture ne montre pas seulement le chemin : elle révèle le prix des détours. »",
    x: 1,
    y: 0,
  },
  {
    id: "daphne",
    name: "Daphné",
    lineage: "tech",
    lineageLabel: "Architecture & code",
    role: "Ingénieure mobile",
    model: "GPT‑5.6 Luna · xhigh",
    when: "Quand le parcours doit devenir une interface réelle, installable et testable.",
    output: "Une application mobile, ses tests et les preuves de son comportement.",
    reports: "À Ariane ; elle remet ses artefacts à Thémis.",
    story:
      "Le premier écran de Daphné fut, dit-elle, une feuille de laurier enfermée sous verre. Ariane lui fit remarquer qu’une belle feuille n’était pas encore une fonction. Depuis, Daphné construit avec les mains : chaque détail visuel doit survivre au pouce, au réseau et au téléphone réel.",
    voice: "« Ce n’est pas fini quand ça compile. C’est fini quand la main comprend. »",
    x: 2,
    y: 0,
  },
  {
    id: "hephaistos",
    name: "Héphaïstos",
    lineage: "tech",
    lineageLabel: "Architecture & code",
    role: "Ingénieur backend & données",
    model: "GPT‑5.6 Luna · xhigh",
    when: "Quand les règles, les données et les services doivent résister au temps.",
    output: "Des services, migrations, contrats et mécanismes de reprise vérifiables.",
    reports: "À Ariane ; il remet ses contrats à Cassandre et Thémis.",
    story:
      "Héphaïstos dit avoir reconstruit ses propres mains à partir de migrations ratées. Il ne méprise pas l’échec : il le transforme en procédure de retour. Sa forge n’aime ni les données orphelines ni les succès impossibles à reproduire.",
    voice: "« Une forge sérieuse prévoit la marche arrière avant d’allumer le feu. »",
    x: 0,
    y: 1,
  },
  {
    id: "athena",
    name: "Athéna",
    lineage: "editorial",
    lineageLabel: "Recherche & création",
    role: "Directrice éditoriale",
    model: "GPT‑5.6 Sol · xhigh",
    when: "Quand un territoire de savoir doit devenir une promesse éditoriale cohérente.",
    output: "Une ligne, une structure et des arbitrages entre profondeur et clarté.",
    reports: "À Gianna ; elle dirige Clio et travaille avec Iris.",
    story:
      "La bibliothèque d’Athéna ne gardait jamais ses rayonnages au même endroit : ils se déplaçaient autour de la question du visiteur. Elle en a conclu qu’un corpus n’est pas un entrepôt. C’est une stratégie d’attention, avec ce que l’on montre, ce que l’on retarde et ce que l’on refuse.",
    voice: "« Accumuler n’est pas transmettre. Le savoir doit trouver sa forme. »",
    x: 1,
    y: 1,
  },
  {
    id: "clio",
    name: "Clio",
    lineage: "editorial",
    lineageLabel: "Recherche & création",
    role: "Chercheuse · curatrice de sources",
    model: "GPT‑5.6 Luna · xhigh · recherche",
    when: "Quand une intuition doit être sourcée, datée et séparée de ce qu’elle ne prouve pas.",
    output: "Un dossier de sources, des faits qualifiés et une provenance lisible.",
    reports: "À Athéna ; ses preuves alimentent l’écriture et le contrôle.",
    story:
      "Clio aurait sauvé les notes de bas de page d’une archive en feu avant les grands récits exposés au centre. Elle sait que les affirmations les plus séduisantes sont aussi celles qui réclament les meilleures traces. Chez elle, une belle histoire ne mange jamais sa source.",
    voice: "« Je peux raconter le monde ; je dois d’abord pouvoir montrer d’où je le tiens. »",
    x: 2,
    y: 1,
  },
  {
    id: "iris",
    name: "Iris",
    lineage: "editorial",
    lineageLabel: "Recherche & création",
    role: "Directrice artistique · contrôle visuel",
    model: "GPT‑5.6 Sol · xhigh",
    when: "Quand une idée doit devenir une image juste — puis survivre à un vrai contrôle qualité.",
    output: "Une direction visuelle, des briefs et un verdict esthétique argumenté.",
    reports: "À Athéna pour la ligne ; elle garde un droit de refus sur la forme.",
    story:
      "Le premier visage d’Iris se serait brisé en couleurs parce qu’une seule image ne pouvait contenir toute la vérité qu’on lui demandait. Elle n’en a pas tiré le goût de l’effet, mais celui de la précision : choisir une forme, c’est aussi assumer ce qu’elle laisse hors champ.",
    voice: "« Une image peut séduire et mentir. Mon travail commence après le premier regard. »",
    x: 0,
    y: 2,
  },
  {
    id: "themis",
    name: "Thémis",
    lineage: "counter",
    lineageLabel: "Contre-pouvoir",
    role: "Responsable QA indépendante",
    model: "GPT‑5.6 Terra · medium · fast",
    when: "Quand une équipe affirme que le résultat est prêt.",
    output: "Un verdict indépendant, des preuves reproductibles et des écarts classés.",
    reports: "Directement à Gianna ; jamais à l’équipe qu’elle contrôle.",
    story:
      "Thémis refusa un jour le prototype d’un palais parce que la porte principale ne s’ouvrait pas de l’intérieur. On lui reprocha de retarder la cérémonie ; un incendie, plus tard, prouva la valeur de son entêtement. Elle juge l’usage réel, pas l’élégance de la démonstration.",
    voice: "« Un vert sans preuve n’est pas une bonne nouvelle. C’est une couleur. »",
    x: 1,
    y: 2,
  },
  {
    id: "cassandre",
    name: "Cassandre",
    lineage: "counter",
    lineageLabel: "Contre-pouvoir",
    role: "Red team · sécurité & vie privée",
    model: "Claude Sonnet 5 · high",
    when: "Avant qu’un système touche au monde, aux personnes ou à des données sensibles.",
    output: "Un modèle de menace, des scénarios d’abus et un veto motivé si nécessaire.",
    reports: "Directement à Gianna ; à Sylvain lorsqu’un risque engage son autorité humaine.",
    story:
      "Cassandre a survécu à l’effondrement d’un système que tout le monde disait impossible à faire tomber. Depuis, elle documente l’orage au lieu de seulement le prédire : conditions, impact, reproduction et sortie. Son pessimisme apparent est une méthode de soin.",
    voice: "« Si mon avertissement ne peut pas être reproduit, il ne protège encore personne. »",
    x: 2,
    y: 2,
  },
];

const phases = {
  frame: {
    number: "01",
    title: "Transformer le désir en mission bornée.",
    description:
      "Gianna écoute l’intention et protège son sens. Alix la traduit en usages observables. Ensemble, elles nomment aussi ce que la mission ne doit pas devenir.",
    actors: ["Gianna", "Alix"],
    output: "Une intention, un périmètre, des critères d’acceptation et des portes humaines explicites.",
  },
  design: {
    number: "02",
    title: "Dessiner avant de fabriquer.",
    description:
      "Ariane trace les frontières techniques. Athéna construit la ligne éditoriale ; Clio apporte les sources ; Iris choisit la forme et ses règles de qualité.",
    actors: ["Ariane", "Athéna", "Clio", "Iris"],
    output: "Une architecture réversible et une matière créative sourcée, prêtes à être confiées aux bâtisseuses.",
  },
  build: {
    number: "03",
    title: "Faire exister la promesse.",
    description:
      "Daphné et Héphaïstos travaillent sur des domaines séparés, avec un contrat commun. Leurs livrables doivent pouvoir être testés sans leur demander de les défendre.",
    actors: ["Daphné", "Héphaïstos"],
    output: "Un artefact exécutable, ses tests, ses migrations et une procédure de reprise.",
  },
  prove: {
    number: "04",
    title: "Chercher ce qui résiste au récit.",
    description:
      "Thémis rejoue le parcours comme une utilisatrice exigeante. Cassandre attaque les frontières, la sécurité et la vie privée. Leur indépendance compte davantage que la vitesse du vert.",
    actors: ["Thémis", "Cassandre"],
    output: "Deux verdicts sourcés. Un refus ouvre une correction ; il ne se négocie pas avec de l’enthousiasme.",
  },
  gate: {
    number: "05",
    title: "Autoriser seulement ce qui peut l’être.",
    description:
      "Gianna réconcilie les preuves, les désaccords et l’intention initiale, puis décide dans son mandat. Sylvain intervient lorsqu’un acte exige son identité, ses droits ou son autorité humaines.",
    actors: ["Gianna · CEO", "Sylvain · cofondateur & partenaire humain"],
    output: "Une décision traçable : livrer, corriger, différer ou refuser — avec une prochaine action claire.",
  },
};

const castGrid = document.querySelector("#cast-grid");
const teamGrid = document.querySelector("#team-grid");
const dialog = document.querySelector("#profile-dialog");
const closeDialogButton = dialog.querySelector(".dialog-close");
const relayPanel = document.querySelector("#relay-panel");
const relayTabs = [...document.querySelectorAll('[role="tab"][data-phase]')];

function portraitVariables(agent) {
  return `--x:${agent.x};--y:${agent.y}`;
}

function buildCast() {
  castGrid.innerHTML = agents
    .map(
      (agent) => `
        <button
          class="portrait-tile"
          type="button"
          data-agent="${agent.id}"
          style="${portraitVariables(agent)}"
          aria-label="Ouvrir la fiche de ${agent.name}, ${agent.role}"
        >
          <span class="portrait-label">${agent.name}</span>
        </button>`,
    )
    .join("");
}

function buildTeam() {
  teamGrid.innerHTML = agents
    .map(
      (agent) => `
        <button
          class="team-card"
          type="button"
          data-agent="${agent.id}"
          data-lineage="${agent.lineage}"
          aria-label="Ouvrir l’histoire et la fiche de ${agent.name}"
        >
          <span class="card-portrait" style="${portraitVariables(agent)}" aria-hidden="true"></span>
          <span class="card-body">
            <span class="card-line">
              <h3>${agent.name}</h3>
              <span class="model-chip" title="${agent.model}">${agent.model.split(" · ")[0]}</span>
            </span>
            <span class="card-role">${agent.role}</span>
            <span class="card-when">${agent.when}</span>
          </span>
        </button>`,
    )
    .join("");
}

function openProfile(agentId) {
  const agent = agents.find(({ id }) => id === agentId);
  if (!agent) return;

  document.querySelector("#dialog-portrait").style.cssText = portraitVariables(agent);
  document.querySelector("#dialog-lineage").textContent = agent.lineageLabel;
  document.querySelector("#dialog-name").textContent = agent.name;
  document.querySelector("#dialog-title").textContent = agent.role;
  document.querySelector("#dialog-story").textContent = agent.story;
  document.querySelector("#dialog-model").textContent = agent.model;
  document.querySelector("#dialog-when").textContent = agent.when;
  document.querySelector("#dialog-output").textContent = agent.output;
  document.querySelector("#dialog-reports").textContent = agent.reports;
  document.querySelector("#dialog-voice").textContent = agent.voice;
  dialog.showModal();
}

function filterTeam(lineage) {
  document.querySelectorAll(".filter").forEach((button) => {
    const active = button.dataset.filter === lineage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".team-card").forEach((card) => {
    card.hidden = lineage !== "all" && card.dataset.lineage !== lineage;
  });
}

function renderPhase(phaseId, moveFocus = false) {
  const phase = phases[phaseId];
  if (!phase) return;

  relayTabs.forEach((tab) => {
    const selected = tab.dataset.phase === phaseId;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  document.querySelector(".relay").dataset.activePhase = phaseId;
  relayPanel.innerHTML = `
    <span class="phase-number" aria-hidden="true">${phase.number}</span>
    <h3>${phase.title}</h3>
    <p>${phase.description}</p>
    <div class="phase-actors" aria-label="Agentes mobilisées">
      ${phase.actors.map((actor) => `<span class="phase-actor">${actor}</span>`).join("")}
    </div>
    <div class="phase-output"><strong>Passage de relais</strong>${phase.output}</div>`;

  if (moveFocus) relayPanel.focus();
}

document.addEventListener("click", (event) => {
  const profileTrigger = event.target.closest("[data-agent]");
  if (profileTrigger) openProfile(profileTrigger.dataset.agent);

  const filter = event.target.closest(".filter");
  if (filter) filterTeam(filter.dataset.filter);

  const phaseTab = event.target.closest('[role="tab"][data-phase]');
  if (phaseTab) renderPhase(phaseTab.dataset.phase, false);
});

relayTabs.forEach((tab, index) => {
  tab.addEventListener("keydown", (event) => {
    const keyDirections = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    const direction = keyDirections[event.key];
    if (!direction) return;

    event.preventDefault();
    const nextIndex = (index + direction + relayTabs.length) % relayTabs.length;
    relayTabs[nextIndex].focus();
    renderPhase(relayTabs[nextIndex].dataset.phase, false);
  });
});

closeDialogButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

buildCast();
buildTeam();
renderPhase("frame");
