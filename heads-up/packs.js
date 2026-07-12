/*
 * Heads Up! — Template Card Packs
 * --------------------------------
 * Each pack has:
 *   id     : unique slug (used for saving progress/custom packs)
 *   name   : display name
 *   emoji  : icon shown on the deck
 *   color  : gradient theme for the deck + in-game background
 *   desc   : one-line description
 *   cards  : array of words/phrases players act out or describe
 *
 * Want your own deck? Copy any object below, change the cards, and give it a
 * new id. Custom packs you build in the app are stored in your browser and
 * merged in automatically — these are just the starter templates.
 */
window.HEADS_UP_PACKS = [
  {
    id: 'animals',
    name: 'Animals',
    emoji: '🦁',
    color: '#f59e0b',
    desc: 'From house pets to the wild savanna.',
    cards: [
      'Elephant', 'Kangaroo', 'Penguin', 'Dolphin', 'Giraffe', 'Octopus',
      'Cheetah', 'Koala', 'Sloth', 'Flamingo', 'Hedgehog', 'Chameleon',
      'Rhinoceros', 'Platypus', 'Jellyfish', 'Peacock', 'Hummingbird', 'Walrus',
      'Meerkat', 'Armadillo', 'Chihuahua', 'Goldfish', 'Hamster', 'Parrot',
      'Crocodile', 'Gorilla', 'Zebra', 'Owl', 'Bat', 'Seahorse',
      'Porcupine', 'Raccoon', 'Otter', 'Panda', 'Toucan', 'Camel',
      'Lobster', 'Squirrel', 'Woodpecker', 'Tarantula'
    ]
  },
  {
    id: 'movies',
    name: 'Blockbuster Movies',
    emoji: '🎬',
    color: '#8b5cf6',
    desc: 'Act out the biggest films of all time.',
    cards: [
      'Titanic', 'Jurassic Park', 'The Lion King', 'Frozen', 'Star Wars',
      'The Matrix', 'Jaws', 'Toy Story', 'Avatar', 'Shrek',
      'The Godfather', 'Home Alone', 'Ghostbusters', 'E.T.', 'Rocky',
      'Finding Nemo', 'The Avengers', 'Forrest Gump', 'Grease', 'Up',
      'Inception', 'Gladiator', 'Pirates of the Caribbean', 'Back to the Future',
      'The Wizard of Oz', 'Harry Potter', 'Spider-Man', 'The Notebook',
      'Mrs. Doubtfire', 'King Kong', 'Moana', 'The Terminator',
      'Jumanji', 'Men in Black', 'Cast Away', 'Twister'
    ]
  },
  {
    id: 'celebrities',
    name: 'Celebrities',
    emoji: '⭐',
    color: '#ec4899',
    desc: 'Famous faces and household names.',
    cards: [
      'Beyoncé', 'Tom Hanks', 'Oprah Winfrey', 'Dwayne Johnson', 'Taylor Swift',
      'Morgan Freeman', 'Lady Gaga', 'Leonardo DiCaprio', 'Ariana Grande',
      'Will Smith', 'Adele', 'Keanu Reeves', 'Rihanna', 'Snoop Dogg',
      'Ellen DeGeneres', 'Bad Bunny', 'Zendaya', 'Elon Musk', 'Serena Williams',
      'Ryan Reynolds', 'Billie Eilish', 'Jennifer Lawrence', 'Drake',
      'Meryl Streep', 'Justin Bieber', 'Emma Watson', 'Kanye West',
      'Cristiano Ronaldo', 'Selena Gomez', 'Bruno Mars', 'Gordon Ramsay',
      'Kim Kardashian', 'Post Malone', 'Scarlett Johansson'
    ]
  },
  {
    id: 'charades',
    name: 'Act It Out',
    emoji: '🎭',
    color: '#10b981',
    desc: 'Classic charades — actions & activities.',
    cards: [
      'Brushing your teeth', 'Riding a horse', 'Swimming', 'Bowling',
      'Playing guitar', 'Taking a selfie', 'Sneezing', 'Chopping wood',
      'Fishing', 'Dancing ballet', 'Boxing', 'Juggling', 'Yoga',
      'Doing laundry', 'Flying a kite', 'Milking a cow', 'Rock climbing',
      'Playing tennis', 'Conducting an orchestra', 'Blowing out candles',
      'Tying your shoes', 'Shooting a bow', 'Skateboarding', 'Painting a wall',
      'Vacuuming', 'Golf swing', 'Jumping rope', 'Eating spaghetti',
      'Applying makeup', 'Karate chop', 'Snorkeling', 'Air guitar',
      'Making a snow angel', 'Cracking an egg'
    ]
  },
  {
    id: 'food',
    name: 'Food & Drink',
    emoji: '🍕',
    color: '#ef4444',
    desc: 'Tasty bites and drinks to describe.',
    cards: [
      'Pizza', 'Sushi', 'Tacos', 'Ice cream', 'Spaghetti', 'Pancakes',
      'Hamburger', 'Popcorn', 'Cotton candy', 'Guacamole', 'Ramen',
      'Croissant', 'Watermelon', 'Nachos', 'Cheesecake', 'Smoothie',
      'Pretzel', 'Dumplings', 'Bacon', 'Cupcake', 'Hot dog', 'Waffles',
      'Burrito', 'Milkshake', 'Donut', 'French fries', 'Lasagna',
      'Pineapple', 'Coffee', 'Marshmallow', 'Meatball', 'Bubble tea',
      'Corn dog', 'Avocado toast'
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    emoji: '⚽',
    color: '#3b82f6',
    desc: 'Games, moves, and athletes.',
    cards: [
      'Basketball', 'Soccer', 'Tennis', 'Golf', 'Baseball', 'Surfing',
      'Boxing', 'Skiing', 'Gymnastics', 'Volleyball', 'Hockey', 'Cricket',
      'Archery', 'Wrestling', 'Table tennis', 'Rugby', 'Figure skating',
      'Weightlifting', 'Fencing', 'Bowling', 'Rowing', 'Snowboarding',
      'Badminton', 'Marathon', 'Diving', 'Karate', 'Curling', 'Sumo',
      'Slam dunk', 'Home run', 'Touchdown', 'Penalty kick', 'Hat trick',
      'Pole vault'
    ]
  },
  {
    id: 'music',
    name: 'Hum That Tune',
    emoji: '🎵',
    color: '#a855f7',
    desc: 'Sing, hum, or dance out these hits.',
    cards: [
      'Happy Birthday', 'Bohemian Rhapsody', 'Baby Shark', 'Sweet Caroline',
      'YMCA', 'Bad Guy', 'Rolling in the Deep', 'Shake It Off', 'Uptown Funk',
      'Thriller', 'Wonderwall', 'Despacito', 'Smells Like Teen Spirit',
      'Dancing Queen', 'Old Town Road', 'Livin\' on a Prayer', 'Hey Jude',
      'Twinkle Twinkle Little Star', 'We Will Rock You', 'Single Ladies',
      'Take On Me', 'Africa', 'Blinding Lights', 'Macarena', 'Toxic',
      'Sweet Home Alabama', 'I Will Survive', 'Don\'t Stop Believin\'',
      'Wannabe', 'Party in the U.S.A.'
    ]
  },
  {
    id: 'places',
    name: 'Around the World',
    emoji: '🌍',
    color: '#14b8a6',
    desc: 'Cities, countries, and landmarks.',
    cards: [
      'Eiffel Tower', 'Egypt', 'Great Wall of China', 'New York City',
      'Amazon Rainforest', 'Mount Everest', 'Venice', 'The Sahara Desert',
      'Statue of Liberty', 'Big Ben', 'Grand Canyon', 'Tokyo', 'Niagara Falls',
      'Australia', 'Antarctica', 'Rome', 'Hawaii', 'The Pyramids',
      'Times Square', 'Hollywood', 'Machu Picchu', 'The Leaning Tower of Pisa',
      'Mount Rushmore', 'Dubai', 'Iceland', 'Brazil', 'The Golden Gate Bridge',
      'Stonehenge', 'Bali', 'Las Vegas', 'The Colosseum', 'Paris'
    ]
  },
  {
    id: 'kids',
    name: 'Kids & Family',
    emoji: '🧸',
    color: '#f97316',
    desc: 'Easy, friendly words for all ages.',
    cards: [
      'Dog', 'Cat', 'Rainbow', 'Balloon', 'Dinosaur', 'Superhero', 'Robot',
      'Butterfly', 'Cookie', 'Bicycle', 'Snowman', 'Fire truck', 'Teddy bear',
      'Rocket ship', 'Mermaid', 'Pirate', 'Wizard', 'Ice cream cone',
      'Bubbles', 'Puppy', 'Kite', 'Clown', 'Frog', 'Dragon', 'Princess',
      'Train', 'Tooth fairy', 'Unicorn', 'Sandcastle', 'Ladybug',
      'Cupcake', 'Astronaut', 'Piggy bank', 'Umbrella'
    ]
  },
  {
    id: 'tvshows',
    name: 'TV Shows',
    emoji: '📺',
    color: '#6366f1',
    desc: 'Binge-worthy series to act out.',
    cards: [
      'Friends', 'The Office', 'Stranger Things', 'Game of Thrones',
      'Breaking Bad', 'SpongeBob SquarePants', 'The Simpsons', 'Seinfeld',
      'Squid Game', 'The Mandalorian', 'Sesame Street', 'Grey\'s Anatomy',
      'Wednesday', 'The Crown', 'Peaky Blinders', 'Ted Lasso', 'Sherlock',
      'Modern Family', 'Survivor', 'Jeopardy!', 'Bluey', 'The Walking Dead',
      'Black Mirror', 'Downton Abbey', 'Family Guy', 'Cobra Kai',
      'The Big Bang Theory', 'Scooby-Doo', 'Bridgerton', 'Pokémon'
    ]
  }
];
