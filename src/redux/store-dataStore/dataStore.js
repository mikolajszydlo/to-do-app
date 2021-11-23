export const settings = {
  listCreatorText: 'Add new list, description',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  navigation: {
    icon: 'cat',
  },
};

export const pageContents = {
  home: {
    title: 'My first React app',
    subtitle: 'A simple to-do app, with lists, columns and cards',
  },
  info: {
    title: 'How it works',
    image: 'https://images.pexels.com/photos/4009017/pexels-photo-4009017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi quo mollitia illum commodi ab aspernatur. Deserunt commodi explicabo numquam.',
  },
  faq: {
    title: 'FAQ',
    image: 'https://images.pexels.com/photos/4913769/pexels-photo-4913769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum sequi quo mollitia illum commodi ab aspernatur.',
  },

};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;

