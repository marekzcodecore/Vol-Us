var dispatcher = require("../dispatcher");

function NonprofitStore() {
    var listeners = [];
    var nonprofits = [{ name: "Big fish small ocean", tagline:"make a difference" }, 
                    { name: "Bikes for tykes",tagline:"volenteer here" }, 
                    { name: "save a salmon", tagline:"why not" }];

    function getNonprofits() {
        return nonprofits;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addNonprofit(nonprofit) {
        nonprofits.push(nonprofit)
        triggerListeners();
    }

    function deleteNonprofit(nonprofit) {
        var _index;
        nonprofits.map(function (n, index) {
            if (n.name === nonprofit.name) {
                _index = index;
            }
        });
        nonprofits.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(nonprofits);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "nonprofit") {
            switch (split[1]) {
                case "addNonprofit":
                    addNonprofit(payload.nonprofit);
                    break;
                case "deleteNonprofit":
                    deleteNonprofit(payload.nonprofit);
                    break;
            }
        }
    });

    return {
        getNonprofits: getNonprofits,
        onChange: onChange
    }
}

module.exports = NonprofitStore();