import React, { Component } from "react";
import parse from 'html-react-parser';
import Popup from "reactjs-popup";
 
export class Recipes extends Component {
    render() {
        var html = "<div class='card-body'>";
        var temp = html;
        temp += "<h2 class = 'card-title'>" + this.props.data.name + "</h2><p class='card-text'>";
        let intro = "";
        if (this.props.data.description == "") {
            intro += "( No Description )";
        } else {
            intro += this.props.data.description.substring(0,100);
        }
        if (this.props.data.description.length > 100) {
            temp += intro + "...";
        } else if (intro != "") {
            temp += intro;
        }
        temp += "</p><div class='d-flex justify-content-between'><span class='type-span'>";
        let tag = this.props.data.tags;
        let tagArr = tag.split(",");
        let tagNum = tagArr.length;
        this.props.data.numTags = tagNum;
        if(tagArr.length > 3) {
            for (let k = 3; k < tagArr.length; k+= 3) {
                temp += "<mark>" + tagArr[k] + "</mark>  ";
            }
        } else {
            for (let k = 0; k < tagArr.length; k+= 3) {
                temp += "<mark>" + tagArr[k] + "</mark>  ";
            }
        }
        let ingre = this.props.data.ingredients;
        let ingreArr = ingre.split(",")
        let ingreNum = ingreArr.length;
        this.props.data.numIngredients = ingreNum;
        if (parseInt(this.props.data.minutes) > 999) {
            this.props.data.minutes = 999;
        }
        temp += "</span></div></div><div class='card-footer text-left text-muted'><p><small>" + ingreArr.length +
        " ingredients</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>"
        + this.props.data.minutes + " minutes</small></p>";
        temp = parse(temp);
        return(
            <div className='col-sm-12 col-md-6 col-lg-4'><div class='card mb-4 box-shadow'>{temp}{Recipespop(this.props.data)}</div></div>
        )
   }

}
function Recipespop(data) {
    return (
        <Popup trigger={<button className="btn btn-warning btn-sm" style={{position: "absolute", bottom:"2.1%", right: "2.5%"}}> Details </button>}
        modal
        closeOnDocumentClick>
            <div id="see" className="popup">
                <div>
                    
                    <div className="content">
                        <h2>{data.name.toUpperCase()} ({data.minutes}mins)</h2>
                        {data.description}
                        <h3>Required Ingredients</h3>
                        <p>{data.ingredients}</p>
                        <h3>Steps:</h3>
                        <p>{data.steps}</p>
                    </div>
                </div>
            </div>
        </Popup>
    )
}
export default Recipes;