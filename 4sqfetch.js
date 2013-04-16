var foursquareFetch = {
    checkins: {},

    getData: function(callback) {
        this.checkins = fourSq.currentPage.checkins_.checkins.items;
        callback();
    },

    saveJSON: function() {
        var data = this.checkins;
        var jsonData = JSON.stringify(data);
        if(window.Blob && (window.createObjectURL || window.webkitURL.createObjectURL)) {
                    var blob = new Blob([jsonData], {type: "application/octet-stream"}),
                        saveas = document.createElement("iframe");
                    saveas.style.display = "none";
                    saveas.src = (window.createObjectURL||window.webkitURL.createObjectURL)(blob);
                    (document.body || document.getElementsByTagName("html")[0]).appendChild(saveas);
        } else {
            var jsonField = document.createElement("textarea");
            jsonField.setAttribute("style", "display: block; position: absolute; top: 0px; width: 100%; height: 100%; z-index: 1000;");
            document.body.appendChild(jsonField);

            var jsonVal = document.createTextNode(jsonData);
            jsonField.appendChild(jsonVal);
            jsonField.select();
            alert("Your checkins have been liberated! Just copy and paste into a document.");
        }
    },

    start: function() {
        var _this = this;
        _this.getData(function() {
            _this.saveJSON();
        });
    },
}
foursquareFetch.start();
