const projectButtons = document.querySelectorAll('.project-button');
const projectGrid = document.querySelector('.project-grid');
const textElement = document.querySelector('.typewriter');

const text = textElement.textContent;
textElement.textContent = '';
let index = 0;

function type() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}

window.onload = type; 

/*const blogLink = document.getElementById("blogLink");
const githubImage = document.createElement("img"); 
githubImage.src = "image/git.png"; 
githubImage.style.display = "none"; 
githubImage.style.position = "absolute"; 
githubImage.style.top = "0";
githubImage.style.left = "0";
githubImage.style.width = "50%";
githubImage.style.height = "50%";
githubImage.style.backgroundRepeat = "no-repeat";
githubImage.style.backgroundPosition = "center";
githubImage.style.backgroundSize = "contain"; 
blogLink.appendChild(githubImage); 

blogLink.addEventListener('mouseover', function() {
  githubImage.style.display = "block"; 
  this.style.opacity = 0; 
});

blogLink.addEventListener('mouseout', function() {
  githubImage.style.display = "none"; 
  this.style.opacity = 1; 
});*/


projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.project;
    projectButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'block';
      } else {
        if (project.dataset.category === filter) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      }
    });
  });
});