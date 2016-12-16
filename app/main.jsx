var React = require("react");
var ReactDOM = require("react-dom");
var NonprofitsList = require("./components/non-profit-list.jsx");
var nonprofitsStore = require("./stores/nonprofitsStore");

var _nonprofits = nonprofitsStore.getNonprofits();
nonprofitsStore.onChange(function(nonprofits){
    _nonprofits = nonprofits;
    render();
});
                
function render(){
    ReactDOM.render(<NonprofitsList nonprofits={_nonprofits} />, document.getElementById("container"));    
}
render();
