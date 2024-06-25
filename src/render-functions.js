export const renderBookList = (bookListEl, books) => {
    bookListEl.innerHTML = ''

    books.forEach((book) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const button = document.createElement('button')

        img.src = book.coverUrl
        img.alt = `An old cover of ${book.title}`

        p.textContent = `Title: ${book.title}`

        button.textContent = `View ${book.author.name}`
        button.dataset.authorUrlKey = book.author.urlKey

        li.append(img, p, button)
        bookListEl.append(li)
    })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
    authorInfoEl.innerHTML = ''

    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const a = document.createElement('a')

    h2.textContent = author.name

    img.src = author.pictureUrl
    img.alt = `A picture of ${author.name}`

    p.textContent = `Born: ${author.birthDate}`
    p2.textContent = author.bio

    a.textContent = 'Wikipedia Link'
    a.href = author.wikipediaUrl

    authorInfoEl.append(h2, img, p, p2, a)
}

export const renderNewUserForm = (newUserFormEl) => {
    newUserFormEl.innerHTML = `
    <div>
  <label for="username">Username</label>
  <input type="text" id="username" name="username">
</div>
<div>
  <label for="is-cool">Is this user cool?</label>
  <input type="checkbox" name="isCool" id="is-cool">
</div>
<div>
  <label for="favorite-language">Favorite Language</label>
  <select name="favoriteLanguage" id="favorite-language">
    <option value="None">None</option>
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Ruby">Ruby</option>
  </select>
</div>
<button>Create User</button>`
}

export const renderNewUser = (newUserEl, user) => {
    newUserEl.innerHTML = ''

    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const p2 = document.createElement('p')

    h2.textContent = user.username;
    h2.dataset.userId = user.id;

    if(user.isCool) {
        p.textContent = "The hippest in the house!"
    } else {
        p.textContent = "A real square."
    }

    p2.textContent = `Favorite Language: ${user.favoriteLanguage}`
    
    newUserEl.append(h2, p, p2)
}