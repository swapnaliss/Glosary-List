function items() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText)

            var items = response.items;

            document.getElementById("view").style.display = "none";

            document.getElementById("items").innerHTML = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit</th>
          <th scope="col">Department</th>
          <th scope="col">Notes</th>
          <th scope="col">Already bought?</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      <tr id="my_span0" >
      <td>${items[0].serialNumber}</td>
      <td>${items[0].name}</td>
      <td>${items[0].quantity}</td>
      <td>${items[0].unit}</td>
      <td>${items[0].Department}</td>
      <td>${items[0].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(0)" id="ckb0"></td>
      </tr>

      <tr id="my_span1" >
      <td>${items[1].serialNumber}</td>
      <td>${items[1].name}</td>
      <td>${items[1].quantity}</td>
      <td>${items[1].unit}</td>
      <td>${items[1].Department}</td>
      <td>${items[1].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(1)" id="ckb1"></td>
      </tr>

      <tr id="my_span2" >
      <td>${items[2].serialNumber}</td>
      <td>${items[2].name}</td>
      <td>${items[2].quantity}</td>
      <td>${items[2].unit}</td>
      <td>${items[2].Department}</td>
      <td>${items[2].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(2)" id="ckb2"></td>
      </tr>

      <tr id="my_span3" >
      <td>${items[3].serialNumber}</td>
      <td>${items[3].name}</td>
      <td>${items[3].quantity}</td>
      <td>${items[3].unit}</td>
      <td>${items[3].Department}</td>
      <td>${items[3].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(3)" id="ckb3"></td>
      </tr>

      <tr id="my_span4" >
      <td>${items[4].serialNumber}</td>
      <td>${items[4].name}</td>
      <td>${items[4].quantity}</td>
      <td>${items[4].unit}</td>
      <td>${items[4].Department}</td>
      <td>${items[4].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(4)" id="ckb4"></td>
      </tr>
      
      <tr id="my_span5" >
      <td>${items[5].serialNumber}</td>
      <td>${items[5].name}</td>
      <td>${items[5].quantity}</td>
      <td>${items[5].unit}</td>
      <td>${items[5].Department}</td>
      <td>${items[5].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(5)" id="ckb5"></td>
      </tr>

      <tr id="my_span6" >
      <td>${items[6].serialNumber}</td>
      <td>${items[6].name}</td>
      <td>${items[6].quantity}</td>
      <td>${items[6].unit}</td>
      <td>${items[6].Department}</td>
      <td>${items[6].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(6)" id="ckb6"></td>
      </tr>

      <tr id="my_span7" >
      <td>${items[7].serialNumber}</td>
      <td>${items[7].name}</td>
      <td>${items[7].quantity}</td>
      <td>${items[7].unit}</td>
      <td>${items[7].Department}</td>
      <td>${items[7].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(7)" id="ckb7"></td>
      </tr>
      
      <tr id="my_span8" >
      <td>${items[8].serialNumber}</td>
      <td>${items[8].name}</td>
      <td>${items[8].quantity}</td>
      <td>${items[8].unit}</td>
      <td>${items[8].Department}</td>
      <td>${items[8].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(8)" id="ckb8"></td>
      </tr>

      <tr id="my_span9" >
      <td>${items[9].serialNumber}</td>
      <td>${items[9].name}</td>
      <td>${items[9].quantity}</td>
      <td>${items[9].unit}</td>
      <td>${items[9].Department}</td>
      <td>${items[9].Notes}</td>
      <td><input type="checkbox" onclick="my_fun(9)" id="ckb9"></td>
      </tr>

      
      </tbody>`;


            document.getElementById("add").innerHTML = `<div style="padding-bottom:10%;" id="myDIV" class="header">
            <button onclick="clearItems()" class="btn btn-dark" id="clear">clear</button>
        
            <button class="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#addItemsModal" aria-controls="addItemsModal">ADD</button>

            <div class="modal fade" id="addItemsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">serialNumber :</label>
                        <input type="number" id="Number" placeholder="Number" class="form-control">
                   </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <input type="text" id="Name" placeholder="Name" class="form-control">
                   </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Quantity:</label>
                        <input type="number" id="Quantity" placeholder="Quantity" class="form-control">
                   </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Unit:</label>
                        <input type="text" id="Unit" placeholder="Unit" class="form-control">
                   </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Department:</label>
                        <input type="text" id="Department" placeholder="Department" class="form-control">
                   </div>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Notes:</label>
                        <input type="text" id="Notes" placeholder="Notes" class="form-control">
                   </div>
                   
                </div>
                <div class="modal-footer bg-dark text-center">
                   

                    <input type="button" onclick="newElement()" class="btn btn-success " value="Save">
       
                </div>
                
              </div>
            </div>
          </div>`


        }
         

    }
    
    xhttp.open("GET", "list.json", true)
    xhttp.send();
}

function my_fun(j) {


    var chkbox = "ckb" + j;

    var my_span = "my_span" + j;



    if (document.getElementById(chkbox).checked) {

        document.getElementById(my_span).style.textDecoration = 'line-through';
        document.getElementById(my_span).style.color = '#ff0000';


    } else {

        document.getElementById(my_span).style.textDecoration = 'none';
        document.getElementById(my_span).style.color = '#ffffff';

    }

}



function newElement() {
    var tr = document.createElement("tr");
    var val = document.getElementById("items").rows.length;
    var valu = val;




    tr.setAttribute("id", `my_span${valu}`)
    var num = document.getElementById("Number").value;
    var Name = document.getElementById("Name").value;
    var quan = document.getElementById("Quantity").value;
    var unit = document.getElementById("Unit").value;
    var dep = document.getElementById("Department").value;
    var notes = document.getElementById("Notes").value;
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");

    var tnum = document.createTextNode(num);
    var tnam = document.createTextNode(Name);
    var tqua = document.createTextNode(quan);
    var tunit = document.createTextNode(unit);
    var tdep = document.createTextNode(dep);
    var tnotes = document.createTextNode(notes);

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    td1.appendChild(tnum);
    td2.appendChild(tnam);
    td3.appendChild(tqua);
    td4.appendChild(tunit);
    td5.appendChild(tdep);
    td6.appendChild(tnotes);
    td7.innerHTML = `<input type="checkbox" onclick="my_fun(${valu})" id="ckb${valu}">`



    document.getElementById("tableBody").appendChild(tr);

    document.getElementById("Number").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Quantity").value = "";
    document.getElementById("Unit").value = "";
    document.getElementById("Department").value = "";
    document.getElementById("Notes").value = "";
    document.getElementById("clear").style.display = "block";
    $('#addItemsModal').modal('hide')
    return valu += 1;
    

}





function clearItems() {
    var val = document.getElementById("items").rows.length;
    var value = val - 1;

    document.getElementById("items").deleteRow(value);

}

