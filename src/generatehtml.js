function generateHtml(){
    return `<!DOCTYPE html>
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
};

function generateEngineer(){
  return `<section class="d-flex gap-3 mt-5 justify-content-center">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <p class="card-text">${date.engineerName}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:</li>
      <li class="list-group-item">Email:</li>
      <li class="list-group-item">Github:</li>
    </ul>
  </div>`
};

function generateIntern(){
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <p class="card-text">${data.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:</li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">School:</li>
  </ul>
</div>`
};

function generateManager(){
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <p class="card-text">${this.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID:</li>
    <li class="list-group-item">Email:</li>
    <li class="list-group-item">Office Number:</li>
  </ul>
</div>
</section>`
};
