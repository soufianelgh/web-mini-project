Pour html :
Pour css : 
Pour js :
2 fonctions principaux : 
Une gere le filtre pour la page "books" et l'autre pour la partie de contact / descussion ;
    ---la premier() ;
    var filterbuttons : liste contenant les 4 boutons ils sont cherches utilisant la classe specifie ;
    Apres on boucle sur les boutons pour determiner si un bouton est clicke ("listening") , si ce le cas la fonction a l'interieure est appliquee ;
    D'abord on boucle sur tous les boutons pour en supprimer la classe "active" et puis l'ajoute pour le bouton selectionne (c'est "bnc" qui est venu de la boucle exterieure) ;
    Le navigateur lit le changement de classe , puis supprime le CSS pour les autre bouton et l'applique pour le bouton selectionne ;
    Maintenant qu'on a le bouton on veut l'etat correspondante (all , reading , want , done) , on cherche l'attribut de 'data-filter' ; 
    var shelves : aussi une liste contenant les 3 rayons ;
    1er boucle :
        pour chaque element de la liste :
        si l'attribut est "all" supprimer "hidden" de tous les rayons (pour qu'on puisse voir tout);
        sinon :
            comparer l'attribut 'data-shelf'(de chaque rayonnage) avec l'attribut obtenu auparavant ("chosen")
            s'ils ont le meme attribut supprimer le "hidden" pour les afficher ;
            sinon ajouter le "hidden" pour les masquer ;  
    ---la deuxienme();
    pour chaque champ on verifier s'il est vide : on commence par le nom si le champ est vide on quite la fonction pour ne pas traiter les autre champs (meme chose pour les autre champs);
    validation de l'email :
    si le input ne contient pas le symbole "@" ou "." on renvoie un feedback concernant la forme de l'email;
