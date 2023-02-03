function generateHtml(array){ 
  const cardsArray = array.map(employee => {
    if (employee.getRole() === "Manager"){
      return generateManager(employee)
    }else if (employee.getRole() === "Intern"){
      return generateIntern(employee)
    } else {
      return generateEngineer(employee)
    }
  }) 

    let htmlData = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="./style.css" />
        <title>Document</title>
    </head>
    
    <body>
      <!-- Navbar -->
        <nav id="navbar" class="navbar bg-body-tertiary">
            <div class="container-fluid d-flex justify-content-center">
              <p class="navbar-brand text-uppercase fw-bold">
                Team Profile Generator
              </p>
            </div>
          </nav>`
    for (var i=0; i<cardsArray.length; i++ ){
            htmlData+=cardsArray[i]
          }
  htmlData+= `
  </body>
  </html>`
return htmlData

};

function generateEngineer(engineer){
  return `<section class="d-flex gap-3 mt-5 justify-content-center">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <p class="card-text">${engineer.getName()}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${engineer.getId()}</li>
      <li class="list-group-item">Email:${engineer.getEmail()}</li>
      <li class="list-group-item">Github:${engineer.getGithub()}</li>
    </ul>
  </div>`
};

function generateIntern(intern){
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <p class="card-text">${intern.getName()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${intern.getId()}</li>
    <li class="list-group-item">Email:${intern.getEmail()}</li>
    <li class="list-group-item">School:${intern.getSchool()}</li>
  </ul>
</div>
</section>`
};

function generateManager(manager){
  return `<section class="d-flex gap-3 mt-5 justify-content-center">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">${manager.getName()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:${manager.getId()}</li>
    <li class="list-group-item">Email:${manager.getEmail()}</li>
    <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
  </ul>
</div>
</section>`
};

module.exports = generateHtml
