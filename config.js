/* ------------------------------------------------------------------
   RÉGLAGES DU JEU  —  c'est le seul fichier à modifier.
   L'ordre de la liste "etapes" est l'ordre dans lequel les objets
   doivent être trouvés.

   fleche : direction à suivre pour aller vers CET objet quand on se
            tient face à l'objet PRÉCÉDENT.
            Valeurs possibles : "devant", "gauche", "droite", "derriere",
            "devant-gauche", "devant-droite"
            (inutile pour la première étape : il n'y a pas d'objet avant).
------------------------------------------------------------------- */
window.JEU_CONFIG = {
  titre: "La Chasse aux Cinq Objets",

  // Secondes d'attente avant que le bouton « Coup de pouce » apparaisse.
  delaiAide: 120,

  // Message affiché quand le dernier objet est trouvé.
  tresor: "Le trésor vous attend… demandez à Papa où il l'a caché !",

  etapes: [
    {
      id: "toile",
      nom: "le tableau aux quatre visages",
      enigme: "J'ai quatre visages mais un seul modèle. Les mêmes traits, quatre fois, dans quatre humeurs de couleur. Je vous regarde passer sans jamais cligner des yeux.",
      indice2: "Cherchez un tableau carré, façon pop art.",
      fleche: "devant"
    },
    {
      id: "mosaique",
      nom: "la mosaïque",
      enigme: "Soixante-quatre petits carrés, rangés huit par huit comme sur un échiquier. Mais ici, ni roi ni reine : seulement du jaune, du rouge, et une main patiente qui les a collés un à un.",
      indice2: "Une mosaïque faite main, posée contre un mur.",
      fleche: "devant"
    },
    {
      id: "escrimeurs",
      nom: "les escrimeurs de métal",
      enigme: "Nous sommes deux, nés d'écrous et de boulons. Depuis des années nous croisons le fer devant un désert de l'Ouest américain, et personne n'a encore crié « Touché ! ».",
      indice2: "Deux petits escrimeurs en métal, posés sur un meuble.",
      fleche: "devant"
    },
    {
      id: "arbre",
      nom: "l'arbre de fer",
      enigme: "Je suis un arbre qui ne boit jamais et ne perd jamais ses feuilles. Mes branches sont en fer, une pomme de pin s'y est installée et une libellule y reste accrochée.",
      indice2: "Un petit arbre décoratif en métal noir.",
      fleche: "devant"
    },
    {
      id: "savon",
      nom: "le cube de savon",
      enigme: "Mon premier est à elle. Mon second : ils s'en…, quand ils partent. Mon tout mousse entre les mains. Je suis un cube qui se prend pour un savon de Marseille, mais appuyez sur ma tête et vous verrez que je triche.",
      indice2: "Un distributeur de savon en forme de cube.",
      fleche: "devant"
    }
  ]
};
