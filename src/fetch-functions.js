export const getFirstThreeFantasyBooks = async () => {
    try {
        const url = `https://openlibrary.org/subjects/fantasy.json`
        const response = await fetch(url)
    
        if (!response.ok) throw new Error("Failed to get fantasy books")

        const jsonData = await response.json()

        return jsonData.works.slice(0, 3).map((work) => {
            return {
                title: work.title,
                author: {
                  name: work.authors[0].name,
                  urlKey: work.authors[0].key,
                },
                coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
            }
        })
    }
    catch (error) {
        console.warn(error.message)

        return null
    }
};

export const getAuthor = async (urlKey) => {
    try {
        const url = `https://openlibrary.org${urlKey}.json`
        const response = await fetch(url)
    
        if(!response.ok) throw new Error("Failed to get author")
    
        const author = await response.json()

        return {
            birthDate: author.birth_date,
            bio: author.bio,
            wikipediaUrl: author.wikipedia,
            name: author.name,
            pictureUrl: `https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`
        }

    }
    catch(error) {
        console.warn(error.message)

        return null
    }
};

export const createNewUser = async (user) => {
    // try{
    //     const option = {
    //         method:"POST",
    //         body: JSON.stringify(user),
    //         header: { "Content-Type": "application/json" }
    //     }
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users', option)

    //     if(!response.ok) throw new Error("Failed to create new user") 
         
    //     const newUser = await response.json()

    //     return {
    //         username: newUser.username,
    //         isCool: newUser.isCool,
    //         favoriteLanguage: newUser.favoriteLanguage,
    //         id: 11
    //     }
    // }
    // catch(error) {
    //     console.warn(error.message)
        
    //     return null
    // }  
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', option);

        if (!response.ok) {
            throw new Error('Failed to create new user');
        }

        const newUser = await response.json();
        return newUser;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
};