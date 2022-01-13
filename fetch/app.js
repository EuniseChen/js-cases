//  Javascript Nuggets

// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://res.cloudinary.com/t19887349/raw/upload/v1641488541/ksd4ogv40sh4i9vcuu4z.json'

// console.log(fetch(url));

// Promise
// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// use async and await
const getTour = async () => {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      const msg = `there was an error${resp.status} ${resp.statusText}`
      throw new Error(msg)
    }
    const data = await resp.json()
    console.log(data);
    // return data
    // return resp.json()
  } catch (error) {
    console.log(error);
  }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTour)


// https://ithelp.ithome.com.tw/articles/10204214 参考文章
