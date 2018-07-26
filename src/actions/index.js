export function selectBook (book) {
//selectBook is an action creator and needs to return an action which has a type
//property
return {
type:  'BOOK_SELECTED',
payload: book
 };
}
