document.addEventListener('DOMContentLoaded', function() {
    const typingText = "Welcome to the Drone Project";
    let index = 0;
    const typingSpeed = 100;
  
    function type() {
      if (index < typingText.length) {
        document.getElementById('typing').innerHTML += typingText.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          document.getElementById('welcome').style.display = 'none';
          document.getElementById('buttons').style.display = 'block';
          loadButtons();
        }, 1000);
      }
    }
  
    type();
  
    function loadButtons() {
      fetch('links.json')
        .then(response => response.json())
        .then(data => {
          const linksDiv = document.getElementById('links');
          data.links.forEach(link => {
            const button = document.createElement('button');
            button.textContent = link.name;
            button.onclick = () => window.open(link.url, '_blank');
            linksDiv.appendChild(button);
          });
        });
    }
  });
  