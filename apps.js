/* Grâce à l'API Fetch récupérez et affichez le contenu du fichier JSON dans la console (utilisateurs et animaux). */
//fetch('./users.json')
fetch('./users-mickey.json')
    .then(json => json.text())
    .then(data => {
        const users = JSON.parse(data);


        for (var id in users["customers"]) {

            /* N'affichez que la liste des utilisateurs. */
            const personnes = () => {
                console.log("=====[ID : " + users["customers"][id]["user_id"] + "]=====");
                for (var i in users["customers"][id]) {
                    if (i != "user_pets") {
                        console.log(i + " : " + users["customers"][id][i]);
                    }

                }
                console.log("=======================");
                console.log(" ");
            }


            /* N'affichez que la liste des animaux, classés dans l'ordre alphabétique de leurs noms. 
                -> Les noms sont par ordre alphabetique mais les annimaux apparaisent dans l'ordre des utilisateurs*/
            const animaux = () => {
                for (var pets in users.customers[id].user_pets) {

                    users["customers"][id]["user_pets"].sort(function (a, b) {
                        if (a.pet_name > b.pet_name) {
                            return 1;
                        }
                        if (a.pet_name < b.pet_name) {
                            return -1;
                        }
                        // a must be equal to b
                        return 0;
                    });

                    console.log("=====[PET : " + users["customers"][id]["user_pets"][pets]["pet_name"] + "]=====");
                    for (var pet in users["customers"][id]["user_pets"][pets]) {
                        console.log(pet + " : " + users["customers"][id]["user_pets"][pets][pet]);
                    }
                    console.log("=======================");
                    console.log(" ");
                }

            }


            /* N'affichez dans la console que les utilisateurs qui possèdent au moins un animal. */
            const peoplePets = () => {

                let countPets = users["customers"][id]["user_pets"].length;
                //console.log(countPets);

                if (countPets != 0) {
                    console.log("=====[ID : " + users["customers"][id]["user_id"] + "]=====");
                }

                for (var i in users["customers"][id]) {
                    if (i != "user_pets" && countPets != 0) {
                        console.log(i + " : " + users["customers"][id][i]);
                    }

                }
                if (countPets != 0) {
                    console.log("=======================");
                    console.log(" ");
                }

            }


            /* Ajoutez un animal Mickey, de type souris, âgé de 0.1 an à chaque utilisateur puis affichez la liste des utilisateurs. */

            //personnes();
            //animaux();
            //peoplePets();

        }


    }

    );

    

    /* En bonus, parce que le propriétaire adore les chats :
            affichez 5 faits au hasard concernant les chats, en vous
            appuyant sur l'API Cat Facts : 
            https://alexwohlbruck.github.io/cat-facts/docs/ */

    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
    .then(json => json.text())
    .then(data => {
        const catFacts = JSON.parse(data);
        
        const CatFacts = () => {

        for (var id in catFacts) {
            
                console.log("=====[ID : " + catFacts[id]["_id"] + "]=====");
                console.log("Fact : " + catFacts[id]["text"]);
                console.log("Verified : " + catFacts[id]["status"]["verified"]);
                console.log("=======================");
                console.log(" ");
            }

        }
        
        //CatFacts();


    });