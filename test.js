const Book = require('./models/books');

// Créer un nouveau livre
async function createBook() {
  try {
    const newBook = await Book.create({
      titre: 'Titre du livre',
      auteur: 'Nom de l\'auteur',
      annee: 2022,
      imageUri: 'url/de/limage.jpg'
    });
    console.log('Nouveau livre créé:', newBook.toJSON());
  } catch (error) {
    console.error('Erreur lors de la création du livre:', error);
  }
}

// Appeler la fonction pour créer un nouveau livre
createBook();
