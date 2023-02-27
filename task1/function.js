function getAndupdate() {
    console.log("Updating list.....");

    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    else {
      itemJsonArraystr = localStorage.getItem('itemsJson');
      itemJsonArray = JSON.parse(itemJsonArraystr);
      itemJsonArray.push([tit, desc]);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    update()
  }
  function update() {
    if (localStorage.getItem('itemsJson') == null) {
      itemJsonArray = [];
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

    }
    else {
      itemJsonArraystr = localStorage.getItem('itemsJson');
      itemJsonArray = JSON.parse(itemJsonArraystr);


    }
    //populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
      str += `
      <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>

        </tr>`;
    });
    tableBody.innerHTML = str;
  }
  add = document.getElementById("add");
  add.addEventListener("click", getAndupdate);
  update();
  function deleted(itemindex) {
    console.log("Delete", itemindex);
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    //delete item index element from the array
    itemJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();

  }
  function clearstorage() {
    if (confirm('Do you really want to clear your list')) {
      console.log('claering the items ');
      localStorage.clear();
      update();
    }
  }