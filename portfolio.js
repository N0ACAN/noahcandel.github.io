const experiences = [
  {
    type: "Alternance",
    title: "Technicien informatique",
    company: "Fresenius Kabi",
    period: "Sept. 2024 - aujourd'hui",
    location: "France",
    description:
      "Alternance en environnement d'entreprise axee sur le support, l'administration systemes et reseaux, le suivi du parc et les projets d'infrastructure.",
    missions: [
      "Gestion des tickets, diagnostic, suivi et compte rendu des incidents utilisateurs",
      "Configuration d'equipements reseau : switchs, firewalls et bornes Wi-Fi",
      "Interventions terrain : cablage, baies, deploiements et continuite de service",
      "Documentation et structuration de l'infrastructure via NetBox"
    ],
    tags: ["Systemes", "Reseaux", "Support", "Documentation"]
  },
  {
    type: "Independant",
    title: "Fondateur",
    company: "Vivtek",
    period: "Sept. 2023 - juin 2024",
    location: "Independant",
    description:
      "Projet de creation web utile pour la presence en ligne, la relation client et la structuration de livrables numeriques.",
    missions: [
      "Creation de sites web et structuration du besoin",
      "Gestion de la relation client et suivi des demandes",
      "Pilotage du projet, organisation et rendu professionnel"
    ],
    tags: ["Web", "Livrables", "Relation client"]
  },
  {
    type: "Interim",
    title: "Manutentionnaire",
    company: "Exertis Azenn",
    period: "Mai 2024",
    location: "Job d'ete",
    description:
      "Experience de terrain dans un contexte logistique, avec gestion des stocks et rigueur d'execution.",
    missions: [
      "Gestion et manipulation des stocks",
      "Respect des procedures et du rythme de production",
      "Travail efficace dans un environnement operationnel"
    ],
    tags: ["Stocks", "Logistique", "Rigueur"]
  },
  {
    type: "CDD",
    title: "Conseiller ventes",
    company: "Le Coq Sportif",
    period: "Mars 2024 - mai 2024",
    location: "Job d'ete",
    description:
      "Poste centre sur la vente, le conseil et la relation client, avec une forte dimension de contact terrain.",
    missions: [
      "Conseil client et accompagnement en point de vente",
      "Application du processus de vente",
      "Tenue de l'espace de vente et participation aux objectifs"
    ],
    tags: ["Vente", "Relation client", "Terrain"]
  },
  {
    type: "Alternance",
    title: "Technicien automatisme",
    company: "GONZALES SEVMHY",
    period: "Mai 2023 - févr. 2024",
    location: "France",
    description:
      "Experience technique en environnement industriel, utile pour la rigueur d'exploitation, le diagnostic et la logique de fonctionnement des systemes.",
    missions: [
      "Intervention sur des sujets d'automatisation industrielle",
      "Participation a des taches techniques en environnement contraint",
      "Montee en competence sur des logiques systeme et automatisme"
    ],
    tags: ["Automatisme", "Diagnostic", "Methode"]
  },
  {
    type: "CDD",
    title: "Equipier",
    company: "McDonald's",
    period: "Juil. 2021 - aout 2021",
    location: "Job d'ete",
    description:
      "Premiere experience professionnelle dans un environnement rapide et exigeant, utile pour la discipline, l'organisation et le travail en equipe.",
    missions: [
      "Execution rapide et rigoureuse des taches",
      "Travail en equipe dans un environnement rythme",
      "Respect des standards et de l'organisation"
    ],
    tags: ["Equipe", "Discipline", "Organisation"]
  }
];

const education = [
  {
    title: "BTS SIO - Option SISR",
    school: "BTS Services Informatiques aux Organisations • Solutions d'infrastructure, systèmes et réseaux",
    period: "Sept. 2024 - juin 2026",
    description:
      "Formation professionnalisante orientee administration systemes et reseaux, cybersecurite, documentation, tests, deploiement et supervision."
  },
  {
    title: "BTS CIRA - Controle Industriel et Regulation Automatique",
    school: "BTS CIRA • Automatisme / Robotique",
    period: "Sept. 2023 - févr. 2024",
    description:
      "Parcours technique qui a renforce la rigueur, la logique de diagnostic et l'interet pour les systemes, l'automatisation et l'exploitation."
  },
  {
    title: "Bac STI2D - Specialite SIN - Mention",
    school: "Baccalaureat STI2D option SIN",
    period: "Sept. 2021 - juil. 2023",
    description:
      "Base solide en informatique, systemes d'information et genie industriel, a l'origine de mon orientation vers l'infrastructure."
  },
  {
    title: "Poursuite d'etudes visee",
    school: "Bachelor administration d'infrastructure securisee",
    period: "Après BTS",
    description:
      "Objectif : consolider le socle infra et cyber, poursuivre la montee en competence en systemes, reseaux et securite, puis evoluer vers une specialisation plus avancee."
  }
];

const skillGroups = [
  {
    title: "Gerer le patrimoine informatique",
    icon: "Patrimoine",
    items: [
      { name: "KACE" },
      { name: "NetBox" },
      { name: "Gestion du parc / SCCM / AD" }
    ]
  },
  {
    title: "Repondre aux incidents et demandes",
    icon: "Support",
    items: [
      { name: "ServiceNow" },
      { name: "Incident BIOS a distance" }
    ]
  },
  {
    title: "Developper la presence en ligne",
    icon: "Web",
    items: [{ name: "WordPress / projet web" }]
  },
  {
    title: "Travailler en mode projet",
    icon: "Projet",
    items: [
      { name: "Migration Windows 11" },
      { name: "Projet 1 BTS" },
      { name: "Projet 2 BTS" }
    ]
  },
  {
    title: "Mettre a disposition un service",
    icon: "Service",
    items: [
      { name: "Dell Command Configure" },
      { name: "Centreon" },
      { name: "Deploiements KACE" },
      { name: "Migration Windows 11" }
    ]
  },
  {
    title: "Organiser son developpement professionnel",
    icon: "Veille",
    items: [
      { name: "Veille technologique" },
      { name: "Veille cyber" },
      { name: "Feedback hebdomadaire" },
      { name: "LinkedIn" },
      { name: "KnowBe4" },
      { name: "Projet professionnel" }
    ]
  }
];

const skillGroupLabels = {
  "Gerer le patrimoine informatique": "Gérer le patrimoine informatique",
  "Repondre aux incidents et demandes": "Répondre aux incidents et demandes",
  "Developper la presence en ligne": "Développer la présence en ligne",
  "Travailler en mode projet": "Travailler en mode projet",
  "Mettre a disposition un service": "Mettre à disposition un service",
  "Organiser son developpement professionnel": "Organiser son développement professionnel"
};

const educationLabels = {
  "BTS CIRA - Controle Industriel et Regulation Automatique": "BTS CIRA - Contrôle Industriel et Régulation Automatique",
  "Bac STI2D - Specialite SIN - Mention": "Bac STI2D - Spécialité SIN - Mention",
  "Poursuite d'etudes visee": "Poursuite d'études visée"
};

const skillDetails = {
  "Gerer le patrimoine informatique::KACE": {
    context:
      "Outil utilise pour l'inventaire materiel et logiciel, le suivi du parc et la tracabilite des postes.",
    period: "2024-2025",
    competency: "Gerer le patrimoine informatique / Mettre a disposition un service",
    contribution:
      "Suivi de l'inventaire, analyse d'une non-remontee d'agent, verification des deploiements et exploitation des donnees du parc.",
    result:
      "Meilleure visibilite sur les actifs, suivi plus fiable du parc et support facilite pour les deploiements.",
    proof: "Captures KACE, exports d'inventaire, procedures de deploiement"
  },
  "Gerer le patrimoine informatique::NetBox": {
    context:
      "Projet de documentation et de cartographie pour mieux structurer l'infrastructure reseau.",
    period: "2024-2025",
    competency: "Gerer le patrimoine informatique",
    contribution:
      "Deploiement sur VM Debian via Docker, structuration des donnees techniques, documentation et premiers usages orientes supervision.",
    result:
      "Infrastructure mieux documentee et visibilite renforcee sur les equipements et les liaisons.",
    proof: "Captures NetBox, schemas reseau, documentation technique"
  },
  "Gerer le patrimoine informatique::Gestion du parc / SCCM / AD": {
    context:
      "Administration quotidienne du parc Windows, des comptes, des groupes, des droits et des postes utilisateurs.",
    period: "2024-2026",
    competency: "Gerer le patrimoine informatique",
    contribution:
      "Suivi des postes, gestion des droits et habilitations, accompagnement utilisateur et maintien d'une base parc coherente.",
    result:
      "Parc plus propre, droits mieux suivis et exploitation plus fluide des postes et des comptes.",
    proof: "Captures AD/SCCM, tickets, documentation interne"
  },
  "Repondre aux incidents et demandes::ServiceNow": {
    context:
      "Outil de gestion des incidents et demandes permettant d'assurer la tracabilite et le suivi des interventions.",
    period: "2024-2026",
    competency: "Repondre aux incidents et demandes d'evolution",
    contribution:
      "Prise en charge des tickets, diagnostic, saisie de work notes, suivi des echanges et communication adaptee avec les utilisateurs.",
    result:
      "Traitement plus structure des demandes, meilleure tracabilite et suivi plus clair des incidents.",
    proof: "Tickets ServiceNow, captures, comptes rendus d'intervention"
  },
  "Repondre aux incidents et demandes::Incident BIOS a distance": {
    context:
      "Incident utilisateur necessitant un diagnostic et une resolution malgre l'absence d'acces physique direct au poste.",
    period: "2025",
    competency: "Repondre aux incidents et demandes d'evolution / Mettre a disposition un service",
    contribution:
      "Analyse du blocage BIOS, recherche d'une solution a distance, preparation de la procedure et accompagnement utilisateur.",
    result:
      "Resolution de l'incident sans deplacement immediat et formalisation d'une reponse plus reutilisable.",
    proof: "Ticket, procedure BIOS, echanges utilisateur"
  },
  "Developper la presence en ligne::WordPress / projet web": {
    context:
      "Projet web oriente presence en ligne, lisibilite des informations et valorisation d'un contenu professionnel.",
    period: "2024-2025",
    competency: "Developper la presence en ligne de l'organisation",
    contribution:
      "Structuration du contenu, organisation des pages, amelioration du rendu et travail sur la coherence globale.",
    result:
      "Support web plus lisible et plus professionnel pour presenter les contenus et les realisations.",
    proof: "Maquettes, captures du site, livrables web"
  },
  "Travailler en mode projet::Migration Windows 11": {
    context:
      "Projet de migration progressive vers Windows 11 avec preparation, tests, deploiement et suivi.",
    period: "2024-2025",
    competency: "Travailler en mode projet / Mettre a disposition un service",
    contribution:
      "Participation au planning, aux tests, au suivi des vagues, aux verifications de compatibilite et aux ajustements GPO.",
    result:
      "Migration mieux maitrisee, deploiement progressif et accompagnement de la continuite de service.",
    proof: "Planning, comptes rendus, captures de tests, documentation"
  },
  "Travailler en mode projet::Projet 1 BTS": {
    context:
      "Premier projet structure du BTS pour travailler l'analyse du besoin, le cadrage et la formalisation d'une solution.",
    period: "Annee scolaire 2024-2025",
    competency: "Travailler en mode projet",
    contribution:
      "Analyse du contexte, redaction des livrables, documentation et suivi de l'avancement du projet.",
    result:
      "Methode de travail plus structuree et meilleure maitrise du compte rendu technique.",
    proof: "Livrables BTS, cahier des charges, documentation"
  },
  "Travailler en mode projet::Projet 2 BTS": {
    context:
      "Second projet du BTS davantage oriente mise en oeuvre, installation, tests et validation de la solution.",
    period: "Annee scolaire 2025-2026",
    competency: "Travailler en mode projet",
    contribution:
      "Installation, tests, suivi des ajustements techniques et mise a jour de la documentation associee.",
    result:
      "Approche plus operationnelle avec validation progressive de la solution et tracabilite des actions.",
    proof: "Tests, captures, comptes rendus, documentation"
  },
  "Mettre a disposition un service::Dell Command Configure": {
    context:
      "Besoin de modifier un parametre BIOS a distance sur plusieurs postes Dell en conservant une demarche exploitable.",
    period: "2025",
    competency: "Mettre a disposition un service",
    contribution:
      "Generation des scripts via Dell Command Configure, preparation de la procedure, tests et accompagnement utilisateur.",
    result:
      "Solution reutilisable a l'echelle du parc concerne, avec procedure claire et deploiement facilite.",
    proof: "Scripts, procedure utilisateur, captures de configuration"
  },
  "Mettre a disposition un service::Centreon": {
    context:
      "Mise en place et remise en fonctionnement d'une solution de supervision en environnement Linux.",
    period: "2025",
    competency: "Mettre a disposition un service",
    contribution:
      "Installation, diagnostic Linux, verification des services, correction SNMP et validation des flux reseau necessaires.",
    result:
      "Supervision remise en fonctionnement avec meilleure visibilite sur l'infrastructure et continuite de service renforcee.",
    proof: "Captures Centreon, logs, tests SNMP, documentation"
  },
  "Mettre a disposition un service::Deploiements KACE": {
    context:
      "Mise a disposition de logiciels sur les postes utilisateurs via une logique de ciblage, de tests et de suivi.",
    period: "2024-2025",
    competency: "Mettre a disposition un service / Gerer le patrimoine informatique",
    contribution:
      "Preparation des deploiements, ciblage des machines, tests, suivi des retours d'installation et ajustements.",
    result:
      "Deploiements plus suivis et mise a disposition plus fiable des logiciels aux utilisateurs.",
    proof: "Taches KACE, captures de deploiement, suivi d'installation"
  },
  "Mettre a disposition un service::Migration Windows 11": {
    context:
      "Sous l'angle service, la migration Windows 11 correspond a la mise a disposition d'un nouvel environnement de travail.",
    period: "2024-2025",
    competency: "Mettre a disposition un service / Travailler en mode projet",
    contribution:
      "Deploiement progressif, verification post-installation, suivi utilisateur et continuite de service pendant la transition.",
    result:
      "Transition plus fiable pour les utilisateurs avec un suivi technique et documentaire coherent.",
    proof: "Procedures de migration, captures, suivi de deploiement"
  },
  "Organiser son developpement professionnel::Veille technologique": {
    context:
      "Veille reguliere sur la supervision, la gestion de parc, Windows, Linux et les architectures utiles au contexte professionnel.",
    period: "Suivi regulier 2024-2026",
    competency: "Organiser son developpement professionnel",
    contribution:
      "Selection des sujets, lecture reguliere, synthese personnelle et reutilisation concrete dans les projets et en entreprise.",
    result:
      "Progression technique continue et meilleure capacite a relier la veille aux besoins du terrain.",
    proof: "Notes de veille, articles, syntheses personnelles"
  },
  "Organiser son developpement professionnel::Veille cyber": {
    context:
      "Suivi regulier des menaces, des bonnes pratiques ANSSI, des VLAN, du filtrage et de la securisation des architectures reseau.",
    period: "Suivi regulier 2024-2026",
    competency: "Organiser son developpement professionnel",
    contribution:
      "Analyse des sujets cyber, mise en perspective avec les labs et renforcement de ma culture securite en environnement SISR.",
    result:
      "Meilleure comprehension des risques, des defenses adaptees et des exigences de securisation.",
    proof: "Notes de veille, ressources ANSSI, syntheses techniques"
  },
  "Organiser son developpement professionnel::Feedback hebdomadaire": {
    context:
      "Suivi hebdomadaire de la progression afin d'identifier les acquis, les difficultes et les axes d'amelioration.",
    period: "En cours",
    competency: "Organiser son developpement professionnel",
    contribution:
      "Formalisation reguliere des retours, analyse des semaines et priorisation des prochaines etapes de progression.",
    result:
      "Montee en competence plus structuree et meilleure visibilite sur les besoins d'amelioration.",
    proof: "Syntheses hebdomadaires, notes de suivi"
  },
  "Organiser son developpement professionnel::LinkedIn": {
    context:
      "Presence professionnelle utilisee pour valoriser le parcours, structurer l'identite professionnelle et suivre l'environnement IT.",
    period: "En cours",
    competency: "Organiser son developpement professionnel",
    contribution:
      "Mise a jour du profil, suivi du secteur, valorisation des experiences et structuration d'une identite professionnelle visible.",
    result:
      "Profil plus coherent et meilleure visibilite de mon parcours aupres d'un reseau professionnel.",
    proof: "Profil LinkedIn, publications, captures"
  },
  "Organiser son developpement professionnel::KnowBe4": {
    context:
      "Support de sensibilisation securite utile pour renforcer les reflexes face aux usages a risque et aux menaces courantes.",
    period: "2024-2026",
    competency: "Organiser son developpement professionnel",
    contribution:
      "Suivi des modules, appropriation des messages de sensibilisation et reutilisation dans ma culture cybersecurite.",
    result:
      "Reflexes securite renforces et meilleure comprehension des bonnes pratiques cote utilisateur.",
    proof: "Modules suivis, attestations, captures"
  },
  "Organiser son developpement professionnel::Projet professionnel": {
    context:
      "Reflexion structuree sur la poursuite d'etudes et la progression vers l'administration d'infrastructures securisees.",
    period: "En cours",
    competency: "Organiser son developpement professionnel",
    contribution:
      "Analyse des poursuites d'etudes, alignement avec le parcours BTS SIO SISR et choix coherents avec mon projet technique.",
    result:
      "Cap plus clair pour l'apres-BTS et projection professionnelle mieux structuree.",
    proof: "Recherches d'orientation, synthese du projet professionnel"
  }
};

const documents = [
  {
    category: "Attestations",
    title: "CV 2026",
    description:
      "Version actuelle de mon CV, utilisee comme support complementaire pour presenter mon parcours, mes competences et mon orientation professionnelle.",
    href: "assets/documents/cv-2026-noah-candel.pdf",
    meta: "PDF",
    download: true
  },
  {
    category: "Epreuve",
    title: "Tableau de synthèse",
    description:
      "Fichier Excel principal reliant les realisations presentees aux competences mobilisees dans le cadre de l'epreuve E5.",
    href: "Tableau%20de%20synth%C3%A8se%20NCANDEL.xlsx",
    meta: "Excel"
  },
  {
    category: "Epreuve",
    title: "Annexes officielles",
    description:
      "Document PDF officiel de l'epreuve E5 servant de reference pour la presentation, les attendus et la conformite du dossier.",
    href: "assets/documents/8_-_BTS_SIO_-_2025_-_Annexes_8_-_Epreuve_E5.pdf",
    meta: "PDF"
  },
  {
    category: "Preuves",
    title: "Preuves par réalisation",
    description:
      "Espace regroupant les captures, procedures, tickets, exports et livrables associes aux realisations presentees, avec une logique de classement par projet.",
    href: "assets/documents/annexes/README.txt",
    meta: "15 annexes",
    proofs: true
  },
  {
    category: "Attestations",
    title: "Attestations et certificats",
    description:
      "CERFA d'alternance et justificatifs complementaires du parcours, disponibles en telechargement direct.",
    href: "assets/documents/attestations/cerfa-candel-noah-fresenius-vial-modifie.pdf",
    meta: "PDF",
    download: true
  }
];

const annexGroups = [
  {
    title: "Gérer le patrimoine informatique",
    code: "PAT",
    items: [
      {
        label: "Active Directory - organisation des postes",
        href: "assets/documents/annexes/annexe-01_patrimoine_active-directory-organisation-postes.png"
      },
      {
        label: "KACE - tableau de bord inventaire",
        href: "assets/documents/annexes/annexe-02_patrimoine_kace-tableau-bord-inventaire.png"
      },
      {
        label: "KACE - gestion des actifs",
        href: "assets/documents/annexes/annexe-12_patrimoine_kace-gestion-actifs-tableau-bord.png"
      },
      {
        label: "SCCM - console devices",
        href: "assets/documents/annexes/annexe-13_patrimoine_sccm-console-devices.png"
      },
      {
        label: "KACE - périphériques inventoriés",
        href: "assets/documents/annexes/annexe-14_patrimoine_kace-peripheriques-inventories.png"
      }
    ]
  },
  {
    title: "Répondre aux incidents et demandes",
    code: "INC",
    items: [
      {
        label: "ServiceNow - liste des incidents assignés",
        href: "assets/documents/annexes/annexe-15_incidents_servicenow-liste-incidents-assignes.png"
      }
    ]
  },
  {
    title: "Travailler en mode projet",
    code: "PRO",
    items: [
      {
        label: "Migration Windows 11 - signalement erreur phase test",
        href: "assets/documents/annexes/annexe-04_migration-windows11_signalement-erreur-phase-test.png"
      },
      {
        label: "Migration Windows 11 - communication utilisateurs",
        href: "assets/documents/annexes/annexe-10_migration-windows11_communication-utilisateurs.png"
      }
    ]
  },
  {
    title: "Mettre à disposition un service",
    code: "SER",
    items: [
      {
        label: "Dell Command Configure - interface de configuration",
        href: "assets/documents/annexes/annexe-05_service_dell-command-configure-interface.png"
      },
      {
        label: "SCCM - procédure d'activation caméra BIOS",
        href: "assets/documents/annexes/annexe-06_service_sccm-procedure-activation-camera-bios.png"
      },
      {
        label: "KACE - installations infogérées",
        href: "assets/documents/annexes/annexe-07_service_kace-installations-infogerees.png"
      }
    ]
  },
  {
    title: "Exploiter, dépanner et superviser",
    code: "SUP",
    items: [
      {
        label: "Centreon - statut des ressources",
        href: "assets/documents/annexes/annexe-03_supervision_centreon-statut-ressources.png"
      }
    ]
  },
  {
    title: "Organiser son développement professionnel",
    code: "VEI",
    items: [
      {
        label: "LinkedIn - profil professionnel",
        href: "assets/documents/annexes/annexe-08_developpement-professionnel_linkedin-profil.png"
      },
      {
        label: "Organisation du dossier de preuves",
        href: "assets/documents/annexes/annexe-09_developpement-professionnel_organisation-dossier-preuves.png"
      },
      {
        label: "KnowBe4 - tableau de bord formation",
        href: "assets/documents/annexes/annexe-11_developpement-professionnel_knowbe4-tableau-bord.png"
      }
    ]
  }
];

const watchItems = [
  {
    category: "Cybersécurité",
    title: "Veille cyber",
    description:
      "Suivi regulier des menaces, des bonnes pratiques ANSSI, du filtrage, des firewalls, des VLAN et des principes de securisation des architectures reseau.",
    tags: ["Firewall", "VLAN", "ANSSI"]
  },
  {
    category: "Infrastructure",
    title: "Veille technologique",
    description:
      "Suivi regulier des outils de gestion de parc, de supervision, des environnements Windows, des services Linux et des architectures utiles au contexte professionnel.",
    tags: ["Windows", "Centreon", "Parc"]
  },
  {
    category: "Développement professionnel",
    title: "Développement professionnel",
    description:
      "Veille reguliere, syntheses personnelles, LinkedIn, feedbacks, Town Hall, KnowBe4 et reflexion sur la poursuite d'etudes afin de structurer ma progression professionnelle apres le BTS.",
    tags: ["LinkedIn", "KnowBe4", "Projet pro"]
  }
];

let docsFilter = "Tous";
let watchFilter = "Tous les sujets";

function getSkillMeta(groupTitle, itemName) {
  return skillDetails[`${groupTitle}::${itemName}`] || {};
}

function renderExperiences() {
  const host = document.querySelector("#experience-list");
  if (!host) return;

  host.innerHTML = experiences
    .map(
      (item) => `
        <article class="stack-card">
          <div class="stack-top">
            <div>
              <h4>${item.title}</h4>
              <p class="stack-company">${
                item.company === "Fresenius Kabi"
                  ? `<button class="inline-company-link stack-company-link" type="button" data-company-modal-open>${item.company}</button>`
                  : item.company
              }</p>
            </div>
            <span class="stack-badge">${item.type}</span>
          </div>
          <div class="stack-meta">
            <span>${item.period}</span>
            <span>${item.location}</span>
          </div>
          <p>${item.description}</p>
          <ul class="mini-list">
            ${item.missions.map((mission) => `<li>${mission}</li>`).join("")}
          </ul>
          <div class="tag-list">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderEducation() {
  const host = document.querySelector("#education-list");
  if (!host) return;

  const visibleTitles = [
    "BTS SIO - Option SISR",
    "BTS CIRA - Controle Industriel et Regulation Automatique",
    "Bac STI2D - Specialite SIN - Mention",
    "Poursuite d'etudes visee"
  ];

  host.innerHTML = education
    .filter((item) => visibleTitles.includes(item.title))
    .map(
      (item) => {
        const displayTitle = educationLabels[item.title] || item.title;
        return `
        <article class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-head">
              <h4>${displayTitle}</h4>
              <span>${item.period}</span>
            </div>
            <p class="timeline-school">${item.school}</p>
            <p>${item.description}</p>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderSkills() {
  const host = document.querySelector("#skills-list");
  if (!host) return;

  host.innerHTML = skillGroups
    .map((group) => {
      const iconLabel = (group.icon || group.title)
        .replace(/[^A-Za-z]/g, "")
        .slice(0, 3)
        .toUpperCase();

      const displayTitle = skillGroupLabels[group.title] || group.title;

      return `
        <details class="skill-group">
          <summary class="skill-group-head">
            <div class="skill-icon" aria-hidden="true">${iconLabel}</div>
            <div>
              <h3>${displayTitle}</h3>
            </div>
            <span class="skill-group-toggle" aria-hidden="true"></span>
          </summary>
          <div class="skill-group-body">
            <div class="skill-items">
            ${group.items
              .map((item) => {
                const meta = getSkillMeta(group.title, item.name);
                return `
                  <article class="skill-item-card">
                    <h4>${item.name}</h4>
                    <p class="skill-item-copy">${meta.context || "Realisation professionnelle liee a cette competence."}</p>
                    <div class="skill-fact-list">
                      <div class="skill-fact"><span>Période</span><strong>${meta.period || "À préciser"}</strong></div>
                      <div class="skill-fact"><span>Compétence mobilisée</span><strong>${meta.competency || displayTitle}</strong></div>
                      <div class="skill-fact"><span>Ma contribution</span><strong>${meta.contribution || "Intervention technique et suivi de la realisation."}</strong></div>
                    </div>
                    <p class="skill-item-result"><strong>Résultat :</strong> ${meta.result || "Réalisation exploitable et documentée."}</p>
                    <p class="skill-item-proof"><strong>Preuves associées :</strong> ${meta.proof || "Captures, documentation et livrables associés."}</p>
                  </article>
                `;
              })
              .join("")}
            </div>
          </div>
        </details>
      `;
    })
    .join("");
}

function renderDocs() {
  const host = document.querySelector("#docs-list");
  if (!host) return;

  const filteredDocs =
    docsFilter === "Tous"
      ? documents
      : documents.filter((doc) => doc.category === docsFilter);

  host.innerHTML = filteredDocs
    .map(
      (doc) =>
        doc.proofs
          ? `
        <details class="doc-card doc-card-proof">
          <summary class="doc-proof-head">
            <div class="doc-proof-summary">
              <div class="doc-category">${doc.category}</div>
              <h3>${doc.title}</h3>
              <p>${doc.description}</p>
              <div class="doc-footer">
                <span class="doc-meta">${doc.meta}</span>
                <span class="doc-open">Choisir un document</span>
              </div>
            </div>
            <span class="skill-group-toggle" aria-hidden="true"></span>
          </summary>
          <div class="proofs-panel">
            ${annexGroups
              .map(
                (group) => `
              <div class="proof-group">
                <div class="proof-group-head">
                  <span class="proof-group-code">${group.code}</span>
                  <h4>${group.title}</h4>
                </div>
                <div class="proof-group-list">
                  ${group.items
                    .map(
                      (item) => `
                    <a class="proof-link" href="${item.href}" download>
                      <span>${item.label}</span>
                      <strong>Télécharger</strong>
                    </a>
                  `
                    )
                    .join("")}
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </details>
      `
          : `
        <a class="doc-card" href="${doc.href}"${doc.download ? " download" : ""}>
          <div class="doc-category">${doc.category}</div>
          <h3>${doc.title}</h3>
          <p>${doc.description}</p>
          <div class="doc-footer">
            <span class="doc-meta">${doc.meta}</span>
            <span class="doc-open">Télécharger le document</span>
          </div>
        </a>
      `
    )
    .join("");
}

function renderWatch() {
  const host = document.querySelector("#watch-list");
  if (!host) return;

  const filteredWatch =
    watchFilter === "Tous les sujets"
      ? watchItems
      : watchItems.filter((item) => item.category === watchFilter);

  host.innerHTML = filteredWatch
    .map(
      (item) => `
        <article class="watch-card">
          <div class="watch-category">${item.category}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="tag-list">
            ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function setupMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (!menuToggle || !siteNav) return;

  const setMenuState = (isOpen) => {
    siteNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  };

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = !siteNav.classList.contains("is-open");
    setMenuState(isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("is-open")) return;
    if (siteNav.contains(event.target) || menuToggle.contains(event.target)) return;
    setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}

function setupThemeToggle() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  const icon = themeToggle.querySelector(".theme-toggle-icon");
  const label = themeToggle.querySelector(".theme-toggle-label");
  const storageKey = "portfolio-theme";
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.dataset.theme = isLight ? "light" : "dark";
    themeToggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    themeToggle.setAttribute("aria-label", isLight ? "Activer le mode sombre" : "Activer le mode clair");

    if (icon) {
      icon.textContent = isLight ? "☾" : "☀";
    }

    if (label) {
      label.textContent = isLight ? "Sombre" : "Clair";
    }
  };

  const getInitialTheme = () => {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return mediaQuery.matches ? "light" : "dark";
  };

  applyTheme(getInitialTheme());

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });

  const syncWithSystem = (event) => {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === "light" || savedTheme === "dark") return;
    applyTheme(event.matches ? "light" : "dark");
  };

  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", syncWithSystem);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(syncWithSystem);
  }
}

function setupCompanyModal() {
  const modalBackdrop = document.querySelector("[data-company-modal]");
  const modalClose = document.querySelector(".company-modal-close");
  const modalTriggers = document.querySelectorAll("[data-company-modal-open]");

  if (!modalBackdrop || !modalClose || !modalTriggers.length) return;

  const openModal = () => {
    modalBackdrop.hidden = false;
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modalBackdrop.hidden = true;
    document.body.classList.remove("modal-open");
  };

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", openModal);
  });

  modalClose.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modalBackdrop.hidden) {
      closeModal();
    }
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    if (!element.classList.contains("is-visible")) {
      observer.observe(element);
    }
  });
}

function setupActiveNav() {
  const navLinks = [...document.querySelectorAll(".site-nav a")];
  const sections = [...document.querySelectorAll("main section[id]")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -50% 0px",
      threshold: 0.08
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupFilters() {
  const docButtons = [...document.querySelectorAll(".filter-chip")];
  const watchButtons = [...document.querySelectorAll(".watch-chip")];

  docButtons.forEach((button) => {
    button.addEventListener("click", () => {
      docsFilter = button.textContent.trim();
      docButtons.forEach((entry) => entry.classList.toggle("is-active", entry === button));
      renderDocs();
    });
  });

  watchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      watchFilter = button.textContent.trim();
      watchButtons.forEach((entry) => entry.classList.toggle("is-active", entry === button));
      renderWatch();
    });
  });
}

renderExperiences();
renderEducation();
renderSkills();
renderDocs();
renderWatch();
setupThemeToggle();
setupMenu();
setupCompanyModal();
setupReveal();
setupActiveNav();
setupFilters();


