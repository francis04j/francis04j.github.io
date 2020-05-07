//


// TODO: make an article page

//const axios = require('axios');

// const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

// const getPokemonData = names =>
//   Promise.all(
//     names.map(async name => {
//       const { data: pokemon } = await get(`/pokemon/${name}`);
//       const abilities = await Promise.all(
//         pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
//           const { data: ability } = await get(`/ability/${abilityName}`);

//           return ability;
//         })
//       );

//       return { ...pokemon, abilities };
//     })
//   );

// const getPodcastData = () => {
//    return [
//     {
//       "id": "1",
//       "title": "Leanne Graham",
//       "description": "Bret",
//       "url": "Sincere@april.biz",
//       "date": "29 April 2020"
//     },
//     {
//       "id": "2",
//       "title": "Graham Graham",
//       "description": "Graham",
//       "url": "Graham@april.biz",
//       "date": "29 April 2020"
//     }
//   ]
// }
//   exports.createPages = async ({ actions: { createPage } }) => {
//   const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);
//   const allPodcasts = getPodcastData();
//  // const podcast = getPodcast(name);
//   // Create a page that lists all Pokémon.
//   createPage({
//     path: `/pokemons`,
//     component: require.resolve('./src/templates/all-pokemon.js'),
//     context: { allPokemon }
//   });

//   createPage({
//     path: '/podcasts',
//     component: require.resolve('./src/templates/audio-list.js'),
//     context: { allPodcasts }
//   })

//   createPage({
//     path: `/podcast/${pod.name}/`,
//     component: require.resolve('./src/templates/audio.js'),
//     context: { allPodcasts }
//   })
//   // Create a page for each Pokémon.
//   allPokemon.forEach(pokemon => {
//     createPage({
//       path: `/pokemon/${pokemon.name}/`,
//       component: require.resolve('./src/templates/pokemon.js'),
//       context: { pokemon }
//     });

//     // Create a page for each ability of the current Pokémon.
//     pokemon.abilities.forEach(ability => {
//       createPage({
//         path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
//         component: require.resolve('./src/templates/ability.js'),
//         context: { pokemon, ability }
//       });
//     });
//   });
// };