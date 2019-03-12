const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://contesttrackerapi.herokuapp.com', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  var on = data.result['ongoing'];
  var up = data.result['upcoming'];
  if (request.status >= 200 && request.status < 400) {
    on.forEach(program => {
      
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent =  program.Name;

      const p = document.createElement('p');
      p.textContent = `End Time - ${program.EndTime}`;

      const b = document.createElement('p');
      b.textContent = `Link - ${program.url}   `;

      const h2 = document.createElement('h2');
      h2.textContent = program.Platform;

      const mid = document.createElement('p');
      mid.setAttribute('class', 'on');
      mid.textContent = "On Going Contest";
      

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(b);
      card.appendChild(h2);
      card.appendChild(mid);

    });
      

    up.forEach(program => {
      
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = program.Name;

      const p = document.createElement('p');
      p.textContent = `End Time - ${program.EndTime}`;

      const b = document.createElement('p');
      b.setAttribute('class', 'ur');
      b.textContent = `Link - ${program.url}`;

      const h2 = document.createElement('h2');
      h2.textContent = program.Platform;

      const a = document.createElement('p');
      a.textContent = `Duration - ${program.Duration}`;

      const c = document.createElement('p');
      c.textContent = `Start Time - ${program.StartTime}`;

      const tag = document.createElement('p');
      tag.setAttribute('class', 'on');
      tag.textContent = "Up Coming Contest";

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(c);
      
      card.appendChild(p);
      card.appendChild(a);
      card.appendChild(b);
      card.appendChild(h2);
      card.appendChild(tag);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `It's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();