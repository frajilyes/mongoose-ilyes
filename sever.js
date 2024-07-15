const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement depuis .env

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Vérification de la connexion
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB !');
});





// Définir le schéma de personne
const personSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Créer un modèle basé sur le schéma
const Person = mongoose.model('Person', personSchema);

// Créer une nouvelle personne
const nouvellePersonne = new Person({
  nom: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Sushi']
});

// Sauvegarder la personne dans la base de données
nouvellePersonne.save(function(err, personne) {
  if (err) return console.error(err);
  console.log('Personne sauvegardée avec succès:', personne);
});








const arrayOfPeople = [
    { nom: 'Jane Smith', age: 25, favoriteFoods: ['Burger', 'Pasta'] },
    { nom: 'Mike Johnson', age: 35, favoriteFoods: ['Salad', 'Steak'] }
  ];
  
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    console.log('Personnes créées avec succès:', people);
  });
  




  // Trouver toutes les personnes avec un prénom donné (par exemple, 'Jane')
Person.find({ nom: 'Jane' }, function(err, personnes) {
    if (err) return console.error(err);
    console.log('Personnes trouvées:', personnes);
  });
  




  // Trouver une personne qui aime les burritos
Person.findOne({ favoriteFoods: 'Burritos' }, function(err, personne) {
    if (err) return console.error(err);
    console.log('Personne trouvée:', personne);
  });

  




  // Trouver une personne par son ID
const personId = 'your_person_id_here';
Person.findById(personId, function(err, personne) {
  if (err) return console.error(err);
  console.log('Personne trouvée par ID:', personne);
});




// Mettre à jour l'âge d'une personne par son nom
const personName = 'John Doe';
Person.findOneAndUpdate({ nom: personName }, { age: 20 }, { new: true }, function(err, personne) {
  if (err) return console.error(err);
  console.log('Personne mise à jour:', personne);
});




/*// Supprimer une personne par son ID
const personId = 'your_person_id_here';
Person.findByIdAndRemove(personId, function(err, personne) {
  if (err) return console.error(err);
  console.log('Personne supprimée:', personne);
});




// Supprimer toutes les personnes dont le nom est 'Mary'
Person.remove({ nom: 'Mary' }, function(err, result) {
    if (err) return console.error(err);
    console.log('Personnes supprimées:', result);
  });*/