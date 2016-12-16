var React = require("react");
var actions = require("../actions/NonprofitActions")

module.exports = React.createClass({
    deleteNonprofit: function(e){
        e.preventDefault();
        actions.deleteNonprofit(this.props.info);
    },

    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteSchool}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
})