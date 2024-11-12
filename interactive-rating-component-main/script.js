let selectedRating = null;

function setRating(rating) {
  selectedRating = rating;
}

function usuwanie() {
  const container = document.querySelector('.container');

  container.innerHTML = '';


  const image = document.createElement('img');
  image.src = 'images/illustration-thank-you.svg';
  image.alt = 'Thank you!';

  const description = document.createElement('div');
  description.classList.add('des');

  if (selectedRating !== null) {
    description.innerHTML = `
      <h2>Thank you!</h2>
      <p>You selected ${selectedRating} out of 5</p>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
    `;
  } else {
    description.innerHTML = `
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
    `;
  }


  container.appendChild(image);
  container.appendChild(description);
}
