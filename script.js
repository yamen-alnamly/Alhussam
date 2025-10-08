

   import {projects} from './projects.js'
 
   let projectsHtml = ``
   projects.map( (project) => {
     projectsHtml += `
     <div class="ProjectBlock">
     <div class="ProjectPageImage"><img src="${project.img}" alt="${project.name}" width="260" height ="380"></div>
     <div class="ProjectPageText">
         <h1>${project.name}</h1>
         ____________________________________
         <p>${project.desc}</p>
         </div>
         </div>  `
       })

       console.log(projectsHtml);
   document.querySelector('.ProjectsPage').innerHTML = projectsHtml