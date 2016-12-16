var dispatcher = require("../dispatcher");

module.exports = {
    addNonprofit:function(nonprofit){
        dispatcher.dispatch({
           nonprofit:nonprofit,
           type:"nonprofit:addNonprofit" 
        });
    },
    deleteNonprofit:function(nonprofit){
        dispatcher.dispatch({
           nonprofit:nonprofit,
           type:"nonprofit:deleteNonprofit" 
        });
    }
}