
let list=[
    {
      "product": "POUDRE IMPERIALE",
      "FR": "« Je vous aime. » Parce qu’il me semble qu’elle dort profondément, j’ose, le visage lové contre son cou, chuchoter, dans le silence délicat du premier matin de cette première nuit, cette déclaration tonitruante. « Vous dites ? » Elle est réveillée ! Bref moment de panique. « Je vous hume. »",
      "EN": "“I love you.” Because she seemed to be sleeping deeply, I dared, my face curled against her neck, to whisper, in the delicate silence of the first morning of that first night, that booming declaration. “What did you say?\" She is awake! Brief moment of panic. \"I inspire you.",
      "Color":"#E57AA9"
    },
    {
      "product": "FONTAINE ROYALE",
      "FR": "Il s’amuse à respirer les pages des plus précieux volumes de ma bibliothèque, dissertant exagérément sur l’odeur des reliures. « Vous êtes tragédie ou comédie ? Poésie ? Philosophie peut-être ? » Et il s’approche, près, vraiment très. Un long instant. « Non, roman. Précisément roman d’aventures, roman-fleuve. »",
      "EN": "He entertains himself sniffing the pages of my library’s most precious volumes, pontificating on the smell of the bindings. \"Are you tragedy or comedy?  Poetry? Philosophy perhaps?” Then he comes close, very close. A long moment.  \"No, a novel. An adventure novel, a saga, to be precise, a roman-fleuve.”",
      "Color":"#7C9CB5"
    },
    {
      "product": "CUIR D'ORIENT",
      "FR": "Je la connais à peine. Le monde entier à cette soirée. Elle me sourit : « Je vous présente mon mari. Chéri !… » Il se retourne, il est surpris. Pas autant que moi. Je souris. Lui aussi. Un couple passe. « Je ne savais pas. Excusez-moi. » Les sourires s’effacent. Je les plante et me fonds dans les effluves de la fête.",
      "EN": "I hardly know her. The whole world is here tonight. She gives me a smile: \"Let me introduce my husband. Honey!...\" He turns around, surprised. Not as surprised as I am. I smile. So does he. A couple walks by. \"I didn't know. I’m sorry.\" The smiles fade. I ditch them and go blend myself into the scents of the party.",
      "Color":"#FF9232"
    },
    {
      "product": "ESSENCE DU SERAIL",
      "FR": "Dans ma vie, je n’ai été fidèle qu’à mon parfum. Quand un ancien amant me dit « Toujours le même parfum », cela m’enchante. C’est pourquoi, ce soir, quand je le revois, par hasard, dans l’allée du parc désert, et qu’il déclare  « Toujours en beauté », je réponds sèchement « Je m’en moque. »",
      "EN": "My whole life, I’ve only ever been faithful to my perfume. When an old lover says, \"Always the same perfume,” I just adore it. That is why this evening when I bump into him in the deserted park and he says, \"Still beautiful,” I respond drily, \"I don’t care. »",
      "Color":"#BEB9B6"
    },
    {
      "product": "VAPEURS DIABLOTINES",
      "FR": "Il ne faut pas s’éterniser chez un inconnu. Même s’il pleut à verse. J’ouvre donc mon parapluie, fais quelques pas prudents dans la fraîcheur de la nuit. Son odeur encore sur mes lèvres. Au balcon, sa voix : « Vous avez oublié votre écharpe ! » J’adore réussir aussi subtilement mes actes manqués.",
      "EN": "One should not linger too long in a stranger's home. Even if it's pouring outside. So i open my umbrella and take a few cautious steps out into the cool of the evening. His scent still on my lips. From the balcony, his voice: \"You forgot your scarf!\" I love the subtle success of my forgetting.",
      "Color":"#C50C17"
  
    },
    {
      "product": "ODISIAQUE",
      "FR": "«Bonjour amour, comment va ? » «Suis enrhumé. » J’annule la soirée — concert, dîner, etc. Et je lui raccroche au nez. Ceux qu’on aime se croient tout permis. Je crise, un peu ; je crie à la fenêtre, pas trop fort. Le vent dehors, la pluie bientôt. C’est décidé, je me parfume, vite, pour aller écouter la mer.",
      "EN": "“Hello, my love, how are you?”  “Sick.”  I bail on the evening — concert, dinner, etc. And i hang up on him.  The people we love think they can do anything.  I’m in crisis, a bit.  I cry out the windows, but not too loud. Wind, outside, and soon rain. It’s decided, I put on some perfume, fast, to go listen to the sea.",
      "Color":"#44B89A"
    },
    {
      "product": "sous le manteau",
      "FR": "… puis c’est sous le crâne la tempête, ensuite ça devrait saisir la poitrine, précisément à l'endroit du cœur, enfin envahir le reste du corps. En toute logique. Implacable.",
      "EN": "...then it is under the skull, the tempest, and next it should catch the chest, in the purlieus of the heart, to be precise, and finally it takes over the whole body.  With logic. Without restraint.",
      "Color":"#ffffff"
    
    },
    {
      "product": "prologue",
      "FR": "Séduire fut longtemps affaire de magie. Les alchimistes notaient dans leurs grimoires des formules de philtres aphrodisiaques. Cela prête à sourire. Pourtant, ces pages oubliées pleines d’essences irrésistibles ont été retrouvées par slm, officine libertine qui en a extrait des recettes sublimées par le parfumeur Nathalie Feisthauer, et inspirant à la photographe Mara Gunja et au dramaturge Florient Azoulay de brèves comédies amoureuses.",
      "EN": "Seduction has long been a magical affair. In their books of spells, alchemists recorded the formulas for their love potions. That makes you smile. slm’s intimate cabinet blew the dust off these forgotten pages of forbidden scents. Perfumer Nathalie Feisthauer sublimated them, Photographer Mara Gunja and Playwright Florient Azoulay crystallized love scenes around them.",
      "Color":"#ffffff"

    }
  ]
// console.log(list);
// var app = new Vue({
//     el: '#textapp',
//     data: {
 
//     },
//     methods:{
//       getProduct:function(){

//       }
//     }
//     });
var app2 = new Vue({
    el:"#buttonobj",
    data:{
        w:'120px',
        h: '120px',
        counter:0,
        bg:`${list[0].Color}`,
        thisColor: `${list[0].Color}`,
        product: `${list[0].product}`,
        content: `${list[0].FR}`,
    },
    methods:{
        increment: function(){
              this.counter += 1;
              if(this.counter>5){
                this.counter= 0;
              }
              this.thisColor=list[this.counter].Color;
              this.product=list[this.counter].product;
              this.content=list[this.counter].FR;

        }
    }  
})
// console.log(p_name[0],lines_fr[0],color);


