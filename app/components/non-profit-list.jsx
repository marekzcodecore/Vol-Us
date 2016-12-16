var React = require("react");
var NonprofitInfo = require("./non-profit-info.jsx")
var AddNonprofit = require("./AddNonprofit.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    < AddNonprofit />
                </div>
                <div className="col-md-6">
                    {
                        this.props.nonprofits.map(function(n,index){
                            return(
                                <NonprofitInfo info={n} key={"nonprofit"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});