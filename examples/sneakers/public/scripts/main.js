'use strict';

var dataBase = [
    {model: "Kobe", brand: "Nike", price: 220, size: 14},
    {model: "LeBron", brand: "Nike", price: 220, size: 10},
    {model: "Air Force One", brand: "Nike", price: 110, size: 8}
];

// Populate table on page load
loadSneakerTable();

// Add click event to save button
$('button.btn.btn-success').on('click', function() {
     // Get values from input fields
     var modelValue = $('#model').val();
     var brandValue = $('#brand').val();
     var priceValue = parseInt($('#price').val(), 10); // convert string to int
     var sizeValue = parseInt($('#size').val(), 10); // convert string to int

     var sneaker = new Sneaker(modelValue, brandValue, priceValue, sizeValue);

    dataBase.push(sneaker);

    console.log(dataBase);

    updateSneakerTable(sneaker);
});

function loadSneakerTable() { 
    var currentSneaker;
    var sneakerTableRow;

    // Display sneaker data to UI
    for (var i = 0; i < dataBase.length; i++) {
        currentSneaker = dataBase[i];

        // if the object exists, write it to the DOM
        if (currentSneaker) {
            sneakerTableRow = '<tr>' +
                                    '<td>' + currentSneaker.model + '</td>' +
                                    '<td>' + currentSneaker.brand + '</td>' +
                                    '<td>' + currentSneaker.price + '</td>' +
                                    '<td>' + currentSneaker.size + '</td>' +
                                  '</tr>';

            $('tbody').append(sneakerTableRow);
        }
    }
}

function updateSneakerTable(sneakerObj) {
    var sneakerTableRow = '<tr>' +
                            '<td>' + sneakerObj.model + '</td>' +
                            '<td>' + sneakerObj.brand + '</td>' +
                            '<td>' + sneakerObj.price + '</td>' +
                            '<td>' + sneakerObj.size + '</td>' +
                          '</tr>';

    $('tbody').append(sneakerTableRow);
}
