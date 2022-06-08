// Your readmore html

<a href="index.html?id=${post.id}">Read more</a>

//readmore js snippet


const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('your readmore container');

const renderDetails = async () => {
    const res = await fetch('Your api link ' + id);
    if (!res.ok) {
      window.location.replace("/");
    }
    const post = await res.json();

    const template = `
      <h1>${post.title}</h1>
      <p>${post.body}</p>
    `

    container.innerHTML = template;
  }
  window.addEventListener('DOMContentLoaded', renderDetails);