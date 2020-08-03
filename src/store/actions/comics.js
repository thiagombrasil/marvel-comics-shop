export function addComic(comic) {
  return {
    type: 'ADD_COMIC',
    comic,
  };
}

export function cleanComics(comic) {
  return {
    type: 'CLEAN_COMICS',
  };
}