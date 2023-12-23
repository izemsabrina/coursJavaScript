// const lis = document.querySelectorAll('li')
// lis.forEach(v => console.log(v))
// console.log(Array.from(lis))
// const li = document.querySelector('ul')
// li.style.color = 'blue'
// li.style.fontWeight =  'bold'
// ul.nodeName,
// ul.innerHTML,
// ul.innerText,
// ul.textContent,

// const newLi = document.createElement('li')
// newLi.innerHTML = 'bonjour les gens '
// document.querySelector('ul').appendChild(newLi)

/**
 * crée un élement HTML representant un article
 * @param {{title: string , body:string}} post 
 * @return {HTMLElement}
 */
function createArticle(post) {
    const article = document.createElement('article')
    article.innerHTML = `
        <h2> ${post.title}</h2>
        <p>${post.body}</p>
    `
    return article
}
async function main() {
  const wrapper = document.querySelector("#lastPosts");
  const loader = document.createElement("p");
  loader.innerText = "Chargement....";
     wrapper.append(loader);
  try {
    const r = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
      if (!r.ok) {
        throw new Error('Erreur serveur')
      }
      const posts = await r.json()
     loader.remove()
      for (let post of posts) {
          wrapper.append(createArticle(post))
      }
  } catch (e) {
    loader.innerHTML = "impossible de charger les articles ";
    loader.style.color = "red";
    return
  }
}
main();
