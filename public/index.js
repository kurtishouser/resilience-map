var map, infobox, currentPushpin;

function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: BingMapsKey,
        // mapTypeId: Microsoft.Maps.MapTypeId.aerial, // This is running really slow... 
        center: new Microsoft.Maps.Location(37.78, -122.44),
        zoom: 14
    });
    //Add a click event to the map.

    //Create an infobox, but hide it. We can reuse it for each pushpin.
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), { visible: false });
    infobox.setMap(map);

    $.get('/api/pushpins', function (data) {
        console.log(data);
    })

    $.get('/api/pushpins', function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].loc != undefined && data[i].metadata != undefined) {
                var d = data[i]; 
                console.log(d);
                var lat = parseFloat(d.loc.y);
                var lon = parseFloat(d.loc.x);
                var loc = new Microsoft.Maps.Location(lat, lon);
                var pin = new Microsoft.Maps.Pushpin(loc);


                pin.metadata = {
                    title: d.metadata.title,
                    description: "Asset: " + d.metadata.asset + " Description: " + d.metadata.description + " Author: " + d.metadata.author
                }
                Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

                map.entities.push(pin);
            }
        }
    })

    Microsoft.Maps.Events.addHandler(map, 'click', mapClicked);
    Microsoft.Maps.Events.addHandler(infobox, 'infoboxChanged', function () { highlight('infoboxChanged'); });
    Microsoft.Maps.Events.addHandler(infobox, 'mouseenter', function () { highlight('mouseenter'); });
    Microsoft.Maps.Events.addHandler(infobox, 'mouseleave', function () { highlight('mouseleave'); });

}

function highlight(id) {
    //Highlight the mouse event div to indicate that the event has fired.
    document.getElementById(id).style.background = 'LightGreen';
    //Remove the highlighting after a second.
    setTimeout(function () { document.getElementById(id).style.background = 'white'; }, 1000);
}

function mapClicked(e) {
    //Create a pushpin.
    currentPushpin = new Microsoft.Maps.Pushpin(e.location);

    //Add a click event to the pushpin.
    Microsoft.Maps.Events.addHandler(currentPushpin, 'click', pushpinClicked);

    //Add the pushpin to the map.
    map.entities.push(currentPushpin);

    //Open up an input form here the user can enter in details for pushpin. 
    document.getElementById('inputForm').style.display = '';
}

function deleteEntry(){
    console.log("You clicked Delete"); 
}

function saveData() {
    currentPushpin.metadata = {
        title: document.getElementById('titleTbx').value,
        description: document.getElementById('descriptionTbx').value,
        author: document.getElementById('authorTbx').value,
        asset: document.getElementById('assetSelect').value
    }

    requestBody = { metadata: currentPushpin.metadata, loc: currentPushpin.geometry }

    $.post('api/pushpins', requestBody, function (data) {
        console.log(requestBody + " posted to api/pushpins")
    }, 'json');

    document.getElementById('titleTbx').value = '';
    document.getElementById('descriptionTbx').value = '';
    document.getElementById('authorTbx').value = '';
    document.getElementById('assetSelect').value = '';
    document.getElementById('inputForm').style.display = 'none';
}


function pushpinClicked(e) {
    //Make sure the infobox has metadata to display.
    if (e.target.metadata) {
        //Set the infobox options with the metadata of the pushpin.
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}