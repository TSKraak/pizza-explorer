// src/store/reducer.js
const initialState = {
  user: {
    name: "Helva",
    favorites: [161235, 357311],
    darkMode: false,
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      ingredients: ["tomatoes", "mozzarella", "basil", "oil"],
      bought: 5,
      imageUrl:
        "https://pizzeriapianob.com/wp-content/uploads/2019/01/pagina163-1.jpg",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      ingredients: ["tomatoes", "mozzarella", "oil"],
      bought: 2,
      imageUrl:
        "https://antonio-carluccio.com/wp-content/uploads/2018/05/pizza-napoletana.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      ingredients: ["ricotta", "mozzarella", "garlic"],
      bought: 10,
      imageUrl:
        "https://kookidee.nl/wp-content/uploads/2018/06/pizza-bianca-prosciutto-crudo-champignons-mozzarella-rucola.jpg",
    },
  ],
};

export default function reducer(state = initialState, action) {
  //   console.log("PAYLOAD", action.payload);

  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    case "TOGGLE_FAVORITE_PIZZA": {
      if (state.user.favorites.includes(action.payload)) {
        const removeFavorite = state.user.favorites.filter((favorite) => {
          return favorite !== action.payload;
        });
        return {
          ...state,
          user: {
            ...state.user,
            favorites: removeFavorite,
          },
        };
      }

      return {
        ...state,
        user: {
          ...state.user,
          favorites: [...state.user.favorites, action.payload],
        },
      };
    }

    case "TOGGLE_DARK_MODE": {
      if (state.user.darkMode === false) {
        return { ...state, user: { ...state.user, darkMode: true } };
      } else {
        return { ...state, user: { ...state.user, darkMode: false } };
      }
    }

    default: {
      return state;
    }
  }
}
