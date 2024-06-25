import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();
  console.log(books)
  // render out the books
  renderBookList(bookListEl, books)

  bookListEl.addEventListener('click', async (e) => {
    if(e.target.matches('button')) {
      const urlKey = e.target.dataset.authorUrlKey
      const fetch = await getAuthor(urlKey)

      renderAuthorInfo(authorInfoEl, fetch)
    }
  })

  newUserFormEl.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(newUserFormEl)
    console.log(formData)

    const user = {
      username: formData.get('username'),
      isCool: formData.get('isCool') === 'on',
      favoriteLanguage: formData.get('favoriteLanguage')
    }
    
    const newUser = await createNewUser(user)

    if(newUser) {
      renderNewUser(newUserEl, newUser)
      newUserFormEl.reset()
    } else {
      console.error('Failed to create user')
    }

  })
}
