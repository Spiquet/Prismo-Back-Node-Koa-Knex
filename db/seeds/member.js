exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('member')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('member').insert([
        {
          id: 1,
          firstname: 'Thomas',
          lastname: 'Bonnefoy',
          avatar: 'thomas.png',
          function: 'Le capitaine passionné',
          description:
            "Thomas a longuement navigué entre terre et mer jusqu'au jour où il est tombé amoureux du Mt Blanc. Depuis son esprit se promène en la compagnie de chatons sur cette montagne au rythme des musiques d'Indie Shuffle."
        },
        {
          id: 2,
          firstname: 'Franck',
          lastname: 'Monod',
          avatar: 'franck.png',
          function: "L'inventeur visionnaire",
          description:
            "Rien de mieux que de comprendre le passé pour imaginer l'avenir. Sa passion pour l'Arpitan et pour l'histoire de la Savoie permet à Franck de s'évader du monde digital afin de toujours revenir avec de nouvelles idées."
        },
        {
          id: 3,
          firstname: 'Christophe',
          lastname: 'Prevelle',
          avatar: 'christophe.png',
          function: 'Le compétiteur sociable',
          description:
            'Impitoyable en jeu comme en vente. Si vous voulez gagner Cris doit être dans votre équipe. Il occupe son temps libre à faire des compétitions de Mölkky et de Quidditch sans pour autant perdre son humour.'
        },
        {
          id: 4,
          firstname: 'Rémi',
          lastname: 'Rohrbach',
          avatar: 'remi.png',
          function: 'Le communiquant curieux',
          description:
            "Passioné par les choses simples, Rémi parti durant 12 long mois pour trouver le fromage de son coeur au travers d'un Roadtrip mondial. Son unique équipement de départ fut un bilboquet, et depuis ces histoires animent nos repas."
        },
        {
          id: 5,
          firstname: 'Samuel',
          lastname: 'Sciascia',
          avatar: 'samuel.png',
          function: 'Le batisseur avisé',
          description:
            'Quel est le point commun entre le Japon et la tome des Bauges ? Samuel est la réponse. Curieux de tout, il est en perpétuel apprentissage depuis toujours. Une bonne culture Dr Who ou DragonBall et vous voilà partie pour des heures de discussions.'
        },
        {
          id: 6,
          firstname: 'Florian',
          lastname: 'Leroux',
          avatar: 'florian.png',
          function: "L'artiste technique",
          description:
            "Les points à retenir sur Florian se résume à des pâtes avec du fromage, du fromage avec des pâtes et des concerts qui s'enchaînent à chaque instant au travers de ses écouteurs."
        },
        {
          id: 7,
          firstname: 'Anaïs',
          lastname: 'Fournier',
          avatar: 'anais.png',
          function: 'La plume authentique',
          description:
            'Il est possible de rire de tout avec Anaïs, une petite Pale Ale est la soirée commence dans le meilleur des mondes. Sortez un jeu de plateau et elle se transformera en battante pour obtenir la victoire. Prenez garde à vous !'
        },
        {
          id: 8,
          firstname: 'Yannick',
          lastname: 'Debrée',
          avatar: 'yannick.png',
          function: "L'ingénieux apprenti",
          description:
            "Avec Yannick aucun instant n'est un temps mort. Des blagues sur commande, des références à Fight Club à chaque instant et de la rosette. En somme un univers bien complet, à découvrir sans modération."
        },
        {
          id: 9,
          firstname: 'Leïla',
          lastname: 'Tilout',
          avatar: 'leila.png',
          function: 'La créative organisée',
          description:
            'Sous ses airs angéliques, Leïla cache un jeu et une précision des détails sans concession. Un pixel est un pixel, un bain toujours avec de la mousse et les escargots toujours cuit à la poêle.'
        }
      ]);
    });
};
