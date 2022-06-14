const button = document.querySelector("#btn");
const innerContainer = document.querySelector(".inner-container");
// https://randomuser.me/api

button.addEventListener("click", () => {
  const getPersonData = async () => {
    try {
      // const url = `https://reqres.in/api/users?page=2`;
      const url = `https://randomuser.me/api/?results=2`;
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data.results[0]);
      createPerson(data);
    } catch (error) {
      alert(error);
    }
  };

  getPersonData();
});

const createPerson = (data) => {
  let { first, last } = data.results[0].name;
  // let name = data.results[0];
  // let { country } = data.results[0].location;
  let location = data.results[0].location.country;
  let { email, phone } = data.results[0];
  let image = data.results[0].picture.medium;

  innerContainer.innerHTML = `
    <img class="image" src="${image}" alt="img" style="width:8rem ;" />
            <p>
                <i class="fa-solid fa-user"></i> Name :
                <span class="name"> ${first}</span>
            </p>
            <p>
                <i class="fa-solid fa-user"></i> LastName :
                <span class="last-name"> ${last} </span>
            </p>
            <p>
                <i class="fa-solid fa-magnifying-glass-location"></i> Location :
                <span class="location"> ${location}</span>
            </p>
            <p>
                <i class="fa-solid fa-phone-flip"></i>Phone :
                <span class="phone"> ${phone}</span>
            </p>
            <p>
                <i class="fa-solid fa-envelope"></i>Email :
                <span class="email"> ${email}</span>
            </p>

    `;
};

// document.querySelector(".name").innerText = first;
//     document.querySelector(".last-name").innerText = last;
//     document.querySelector(".location").innerText = location;
//     document.querySelector(".email").innerText = email;
//     document.querySelector(".phone").innerText = phone;
//     document.querySelector(".image").src = image;

// 2.Yöntem
//  const sname = document.querySelector(".name");
//     sname.innerText = first;
//     const slastname = document.querySelector(".last-name");
//     slastname.innerText = last;
//     const slocation = document.querySelector(".location");
//     slocation.innerText = location;
//     const semail = document.querySelector(".email");
//     semail.innerText = email;
//     const sphone = document.querySelector(".phone");
//     sphone.innerText = phone;
//     const simage = document.querySelector(".image");
//     simage.src = image;
