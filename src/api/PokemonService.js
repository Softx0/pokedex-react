import { BaseApi } from './BaseApi';

const getPokemonByNameUrl = (name) => `${process.env.REACT_APP_URL}pokemon/${name}`;
const getTypeOfPokemonUrl = (type) => `${process.env.REACT_APP_URL}type/${type}`;

/**
 * Obtiene la informacion relacionada al pokemon escrito
 *
 * @param request = {
 * }
 * @returns {Promise<ApiResponse<any> | never>} 
 * {
    "abilities": [
        {
            "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "chlorophyll",
                "url": "https://pokeapi.co/api/v2/ability/34/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ],
    "base_experience": 64,
    "forms": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
        }
    ],
    "game_indices": [
        {
            "game_index": 153,
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        },
    ],
    "height": 7,
    "held_items": [],
    "id": 1,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
    "moves": [
        {
            "move": {
                "name": "razor-wind",
                "url": "https://pokeapi.co/api/v2/move/13/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "gold-silver",
                        "url": "https://pokeapi.co/api/v2/version-group/3/"
                    }
                },
            ]
        },
        {
            "move": {
                "name": "facade",
                "url": "https://pokeapi.co/api/v2/move/263/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ruby-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/5/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "emerald",
                        "url": "https://pokeapi.co/api/v2/version-group/6/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "firered-leafgreen",
                        "url": "https://pokeapi.co/api/v2/version-group/7/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "diamond-pearl",
                        "url": "https://pokeapi.co/api/v2/version-group/8/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "platinum",
                        "url": "https://pokeapi.co/api/v2/version-group/9/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "heartgold-soulsilver",
                        "url": "https://pokeapi.co/api/v2/version-group/10/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-white",
                        "url": "https://pokeapi.co/api/v2/version-group/11/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "colosseum",
                        "url": "https://pokeapi.co/api/v2/version-group/12/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "xd",
                        "url": "https://pokeapi.co/api/v2/version-group/13/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "black-2-white-2",
                        "url": "https://pokeapi.co/api/v2/version-group/14/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "omega-ruby-alpha-sapphire",
                        "url": "https://pokeapi.co/api/v2/version-group/16/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "sun-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/17/"
                    }
                },
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "ultra-sun-ultra-moon",
                        "url": "https://pokeapi.co/api/v2/version-group/18/"
                    }
                }
            ]
        },
        {
            "move": {
                "name": "grassy-terrain",
                "url": "https://pokeapi.co/api/v2/move/580/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "egg",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/2/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
            ]
        },
        {
            "move": {
                "name": "confide",
                "url": "https://pokeapi.co/api/v2/move/590/"
            },
            "version_group_details": [
                {
                    "level_learned_at": 0,
                    "move_learn_method": {
                        "name": "machine",
                        "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                    },
                    "version_group": {
                        "name": "x-y",
                        "url": "https://pokeapi.co/api/v2/version-group/15/"
                    }
                },
    ],
    "name": "bulbasaur",
    "order": 1,
    "past_types": [],
    "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        "front_shiny_female": null,
        "other": {
            "dream_world": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
                "front_female": null
            },
            "home": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
                "front_shiny_female": null
            },
        },
        "versions": {
            "generation-i": {
                "red-blue": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/1.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/1.png"
                },
                "yellow": {
                    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png",
                    "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png",
                    "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/1.png",
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/1.png",
                    "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/1.png",
                    "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/1.png"
                }
            },
    },
    "stats": [
        {
            "base_stat": 45,
            "effort": 0,
            "stat": {
                "name": "hp",
                "url": "https://pokeapi.co/api/v2/stat/1/"
            }
        },
    ],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
            }
        },
    ],
    "weight": 69
*/
const getPokemonByName = (request, headers) =>
    BaseApi.get(getPokemonByNameUrl(request), null, headers).then(
        (response) => response.data
    );

const getTypePokemon = (request, headers) =>
    BaseApi.get(getTypeOfPokemonUrl(request), null, headers).then(
        (response) => response.data
    );

export default {
    getPokemonByName,
    getTypePokemon,
};