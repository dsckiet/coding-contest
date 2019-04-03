const app = document.getElementById('root');

const container1 = document.createElement('div');
container1.setAttribute('class', 'container');

const container2 = document.createElement('div');
container2.setAttribute('class', 'container');

const container3 = document.createElement('div');
container3.setAttribute('class', 'container');

const container4 = document.createElement('div');
container4.setAttribute('class', 'container');

app.appendChild(container4);

app.appendChild(container1);

app.appendChild(container3);

app.appendChild(container2);



var request = new XMLHttpRequest();
request.open('GET', 'https://contesttrackerapi.herokuapp.com', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  var on = data.result['ongoing'];
  var up = data.result['upcoming'];

  const mid = document.createElement('p');
      mid.setAttribute('class', 'on');
      mid.textContent = "On Going Contest";
      container4.appendChild(mid);
  
  if (request.status >= 200 && request.status < 400) {
    on.forEach(program => {
      
      const card = document.createElement('a');
      card.setAttribute('class', 'card');
      card.setAttribute('href',`${program.url}`);
      card.setAttribute('target','blank');

      const h1 = document.createElement('h1');
      h1.textContent =  program.Name;

      const p = document.createElement('p');
      p.textContent = `End Time - ${program.EndTime}`;

      const h2 = document.createElement('h2');
      h2.textContent = program.Platform;

      container1.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(h2);
      

    });
  }

const tag = document.createElement('p');
      tag.setAttribute('class', 'on');
      tag.textContent = "Up Coming Contest";
      container3.appendChild(tag);

  if (request.status >= 200 && request.status < 400) {

    

    up.forEach(program => {
      
      const card = document.createElement('a');
      card.setAttribute('class', 'card');
      card.setAttribute('href',`${program.url}`);
      card.setAttribute('target','blank');

      const h1 = document.createElement('h1');
      h1.textContent = program.Name;

      const p = document.createElement('p');
      p.textContent = `End Time - ${program.EndTime}`;

      const b = document.createElement('p');
      b.setAttribute('cl', 'ur');
      b.textContent = `Link - ${program.url}`;

      const h2 = document.createElement('h2');
      h2.textContent = program.Platform;

      const a = document.createElement('p');
      a.textContent = `Duration - ${program.Duration}`;

      const c = document.createElement('p');
      c.textContent = `Start Time - ${program.StartTime}`;

      container2.appendChild(card);
      card.appendChild(h1);
      card.appendChild(c);
      card.appendChild(p);
      card.appendChild(a);
      card.appendChild(h2);
      
    });
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `It's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();