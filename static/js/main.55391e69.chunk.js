(this["webpackJsonpproject-wz0805-1736705"]=this["webpackJsonpproject-wz0805-1736705"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/file1.88b4fb9f.csv"},51:function(e,t,a){e.exports=a(79)},56:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(38),o=a.n(r),l=(a(56),a(57),a(6)),s=a(7),c=a(9),m=a(8),d=a(10),u=a(12),h=a(1),p=a(41),E=a.n(p),g=a(42);var f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="<div class='card-body'>";e+="<h2 class = 'card-title'>"+this.props.data.name+"</h2><p class='card-text'>";var t="";""===this.props.data.description?t+="( No Description )":t+=this.props.data.description.substring(0,100),this.props.data.description.length>100?e+=t+"...":""!==t&&(e+=t),e+="</p><div class='d-flex justify-content-between'><span class='type-span'>";var a=this.props.data.tags.split(","),n=a.length;if(this.props.data.numTags=n,a.length>3)for(var r=3;r<a.length;r+=3)e+="<mark>"+a[r]+"</mark>  ";else for(var o=0;o<a.length;o+=3)e+="<mark>"+a[o]+"</mark>  ";var l,s=this.props.data.ingredients.split(","),c=s.length;return this.props.data.numIngredients=c,parseInt(this.props.data.minutes)>999&&(this.props.data.minutes=999),e+="</span></div></div><div class='card-footer text-left text-muted'><p><small>"+s.length+" ingredients</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>"+this.props.data.minutes+" minutes</small></p>",e=E()(e),i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4"},i.a.createElement("div",{className:"card mb-4 box-shadow"},e,(l=this.props.data,i.a.createElement(g.a,{trigger:i.a.createElement("button",{className:"btn btn-warning btn-sm",style:{position:"absolute",bottom:"2.1%",right:"2.5%"}}," Details "),modal:!0,closeOnDocumentClick:!0},i.a.createElement("div",{id:"see",className:"popup"},i.a.createElement("div",null,i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,l.name.toUpperCase()," (",l.minutes,"mins)"),l.description,i.a.createElement("h3",null,"Required Ingredients"),i.a.createElement("p",null,l.ingredients),i.a.createElement("h3",null,"Steps:"),i.a.createElement("p",null,l.steps))))))))}}]),t}(n.Component),b=a(27),y=a.n(b),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:a.props.data},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"hero-image1"},i.a.createElement("div",{className:"drop"},i.a.createElement("button",{className:"dropbtn"},i.a.createElement("img",{id:"menu",alt:"menu bar",src:"https://img.icons8.com/material-rounded/48/000000/menu.png"}),i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"drop-content"},i.a.createElement(h.HashLink,{to:"/#homebody"},"Welcome"),i.a.createElement(h.HashLink,{to:"/Community#homebody"},"Community"),i.a.createElement(h.HashLink,{to:"/Community#contact"},"Contact Us"),i.a.createElement(h.HashLink,{to:"/Login"},"Login"))),i.a.createElement("div",{className:"hero-text1"},i.a.createElement("h1",null,"Communities"),i.a.createElement("p",null,"Share and post in our community!"),i.a.createElement("div",{className:"container",id:"filter"},i.a.createElement("p",null,"Order By:\xa0\xa0\xa0",i.a.createElement("button",{className:"button btn btn-warning",onClick:function(){return e.props.handleSort()}},"Least Time"),"\xa0\xa0\xa0",i.a.createElement("button",{className:"button btn btn-warning",onClick:function(){return e.props.handleShow()}},"Latest Upload")),i.a.createElement("div",{className:"box"},i.a.createElement(h.HashLink,{to:"/Post",className:"button",id:"start"},"Post Your Own")),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement(h.HashLink,{to:"/Community#communitymain"},"Click Here"),"\u2193 for Recipes")))),i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement("h1",{id:"logo"},"Mood Recipes"),i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/#homebody"},"Welcome")),i.a.createElement("li",{className:"current"},i.a.createElement(h.HashLink,{to:"/Community#homebody"},"Community")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/Community#contact"},"Contact Us")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/Login"},"Login"))))),i.a.createElement("main",null,i.a.createElement("div",{className:"album py-5",id:"communitymain"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row",id:"showRecipes"}),i.a.createElement("div",{className:"row",id:"recipeList"},i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",width:"100%",marginBottom:"50px"}},i.a.createElement("button",{className:"button btn btn-warning",onClick:function(){window.location.reload(),window.scrollTo(0,0)}},"Show all recipes")),this.props.data.map((function(e,t){return i.a.createElement(f,{key:t,data:e})})),0===this.props.data.length&&i.a.createElement("div",{style:{left:"auto",right:"auto",textAlign:"center",width:"100%"}},i.a.createElement("b",{style:{fontSize:"30px"}},"Your answers do not match any recipes"),i.a.createElement("br",null),i.a.createElement(h.HashLink,{to:"/#homebody",style:{fontSize:"20px"}},"Try Again")))))),i.a.createElement("div",{className:"parallax",id:"bottomp"},i.a.createElement("footer",{className:"index-footer",id:"contact"},i.a.createElement("p",null,"This page is a cooperative course work created by Xiying Zhang and Zhan Wu as an initial static version of this web app."),i.a.createElement("address",null,i.a.createElement("p",null,"Contact us at ",i.a.createElement("a",{href:"mailto:xz67@uw.edu"},"xz67@uw.edu"),", or at ",i.a.createElement("a",{href:"mailto:alex.zhan.wu@icloud.com"},"alex.zhan.wu@icloud.com"),".")),i.a.createElement("p",null,"\xa9 2020 Zhan Wu and Xiying Zhang."))))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"hero-image"},i.a.createElement("div",{className:"drop"},i.a.createElement("button",{className:"dropbtn"},i.a.createElement("img",{id:"menu",alt:"menu bar",src:"https://img.icons8.com/material-rounded/48/000000/menu.png"}),i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"drop-content"},i.a.createElement(h.HashLink,{to:"/#homebody"},"Welcome"),i.a.createElement(h.HashLink,{to:"/Community#homebody"},"Community"),i.a.createElement(h.HashLink,{to:"/ContactUs#homebody"},"Contact Us"),i.a.createElement(h.HashLink,{to:"/Login"},"Login"))),i.a.createElement("div",{className:"hero-text"},i.a.createElement("h1",null,"Some hints for what to cook? "),i.a.createElement("p",null,"Here are several questions can help you decide"),i.a.createElement("div",{className:"box"},i.a.createElement(h.HashLink,{className:"button",to:"/Question",id:"start"},"Get Started")),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement(y.a,{to:"#main"},"Click Here"),"\u2193 for More Information About Us"))),i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement("h1",{id:"logo"},"Mood Recipes"),i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{className:"current"},i.a.createElement(h.HashLink,{to:"/#homebody"},"Welcome")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/Community#homebody"},"Community")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/#contact"},"Contact Us")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/Login"},"Login"))))),i.a.createElement("main",{id:"main"},i.a.createElement("section",{className:"ourApp"},i.a.createElement("div",{className:"parallax"},i.a.createElement("h2",{className:"ourAppH2"},"Why Us?")),i.a.createElement("p",null,"Whether someone is a busy working crew, a parent supporting a whole family, or any college students living on their own, home cooking and preparing food is always a tough process. Cooking itself is already such a pain, and it even takes longer to search through the market and prepare for the ingredients. Especially for people returning home after a whole day working or studying, they may have limited time and energy to decide what to cook, among so many choices of recipes, and spend time shopping the ingredients they need. Therefore, it will definitely be necessary to provide a functional application targeted on those who have no time looking through the bulky recipes each day, save their time and bring the dishes they like to the table."),i.a.createElement("p",null,"The existing applications designated to help people cooking are still in lack of some important features the users may need. One of the very intelligent cooking websites that inspire us is the ",i.a.createElement("a",{href:"https://www.supercook.com/#/recipes"},"Supercook"),"which allows users to enter the ingredients they have in the fridge and generate ready-to-cook recipes. It is quite easy to use, but the lack of features that allows people to find recipes within their limited time frame is one issue which this type of application always has. For people who are busy, the recipes it generates that require a long time cooking cannot meet their needs well. Other typical cooking websites include ",i.a.createElement("a",{href:"https://foodgawker.com/"},"Foodgawker"),", and ",i.a.createElement("a",{href:"https://www.skinnytaste.com/"},"Skinnytaste")," which provides healthy cooking ideas for people on diet. But again, some of them are still unfilterable by either time or ingredients, and most do not support ingredients purchasing which could be highly convenient. Therefore, we brainstorm several possible applications that may solve cooking problems in different ways. It may have a better filtering functionality, a community sharing feature, or an ingredients purchasing option. Overall, we want to promote the exchange and inspiration for cooking ideas and bring people better experiences of cooking!")),i.a.createElement("section",{className:"ourApp"},i.a.createElement("div",{className:"parallax"},i.a.createElement("h2",{className:"ourAppH2",id:"spH2"},"\u201cMood\u201d Recipes")),i.a.createElement("p",null,"The overarching goal of the \u201cmood\u201d recipes application will be recommending recipes to the users. It will let the users answer several questions, and the system will automatically recommend recipes to them based on the answers. For example, on a cold winter night, you and your family members are celebrating for your graduation, and you want to eat some warm Asian food, the system will be likely to recommend you Chinese Spicy Hotpot, Japanese Sukiyaki, Korean Budae Jjigae, and some similar food which can make you warmer, good for sharing. The system can make the best choices based on your occasions, the number of people, the current weather, and so on. The users can have the most appropriate food on each specific day and time."),i.a.createElement("p",null,"We are also integrating the functions of \u201ccommunity\u201d where all users could share their own recipes to the whole community so that other people can have more ideas on what they want to cook. People can see the latest and most popular shared recipes on this app. It also has recipes sorted by locations or countries, for example, Mexican Food, American Food, Italian Food, etc. When the user finds the recipe they like, they can add the ingredients in that recipe into their shopping cart and purchase it online, and the online grocery stores will deliver the ingredients to users, or the users can choose to pick them up at a local store. The users can save time on shopping for the ingredients they need."))),i.a.createElement("div",{className:"parallax",id:"bottomp"},i.a.createElement("footer",{className:"index-footer",id:"contact"},i.a.createElement("p",null,"This page is a cooperative course work created by Nina Zhang and Zhan Wu as an initial static version of this web app."),i.a.createElement("address",null,i.a.createElement("p",null,"Contact us at ",i.a.createElement("a",{href:"mailto:xz67@uw.edu"},"xz67@uw.edu"),", or at ",i.a.createElement("a",{href:"mailto:alex.zhan.wu@icloud.com"},"alex.zhan.wu@icloud.com"),".")),i.a.createElement("p",null,"\xa9 2020 Zhan Wu and Nina Zhang."))))}}]),t}(n.Component),N=a(17),k=a(43),C=Object(u.o)((function(e){var t=e.history,a=(e.location,e.match,e.staticContext,e.to),n=e.onClick,r=Object(k.a)(e,["history","location","match","staticContext","to","onClick"]);return i.a.createElement("button",Object.assign({},r,{onClick:function(e){n&&n(e),t.push(a)}}))})),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:a.props.data,time:"",typeHealthy:"",ingre:"",typeFruity:"",comfort:""},a.submitRecipe=a.submitRecipe.bind(Object(N.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"inputChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t),this.updateButton()}},{key:"updateButton",value:function(){var e=""===this.state.time||""===this.state.typeHealthy||""===this.state.ingre||""===this.state.typeFruity||""===this.state.comfort,t={};t.disabled=e,this.setState(t)}},{key:"submitRecipe",value:function(e){var t=this;e.preventDefault();var a=[];this.state.data.map((function(e){return parseInt(e.minutes,10)<parseInt(t.state.time,10)&&e.tags.includes(t.state.typeHealthy)&&parseInt(e.n_ingredients,10)<parseInt(t.state.ingre,10)&&e.tags.includes(t.state.typeFruity)&&e.tags.includes(t.state.comfort)?a.push(e):a}));var n={};n.data=a,console.log(n),this.setState(n)}},{key:"render",value:function(){var e=this;return console.log(this.state),i.a.createElement("div",{className:"parallax2"},i.a.createElement("div",null,i.a.createElement("div",{className:"drop"},i.a.createElement("button",{className:"dropbtn"},i.a.createElement("img",{id:"menu",alt:"menu bar",src:"https://img.icons8.com/material-rounded/48/000000/menu.png"}),i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"drop-content"},i.a.createElement(h.HashLink,{to:"/#homebody"},"Welcome"),i.a.createElement(h.HashLink,{to:"/Community#homebody"},"Community"),i.a.createElement(h.HashLink,{to:"/#contact"},"Contact Us"),i.a.createElement(h.HashLink,{to:"/Login"},"Login"))),i.a.createElement("div",{className:"hero-text3",id:"questionText"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{id:"webpageTop"},i.a.createElement("form",{action:"",method:"POST"},i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"1. How much time approximately you have for cooking today?"),i.a.createElement("input",{type:"radio",id:"30",name:"time",value:"30",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"30"},"\xa0Under 30 Minutes"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"60",name:"time",value:"60",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"60"},"\xa030 - 60 Minutes"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"60+",name:"time",value:"1000000000000",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"60+"},"\xa0Over 60 Minutes!")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"2. Want something healthy or sweet & relaxing?"),i.a.createElement("input",{type:"radio",id:"healthy",name:"typeHealthy",value:"healthy",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"healthy"},"\xa0Healthy!"),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement("input",{type:"radio",id:"dessert",name:"typeHealthy",value:"dessert",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"dessert"},"\xa0Sweet & Relaxing!")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"3. Do you have abundant ingredients or have less for preparation?"),i.a.createElement("input",{type:"radio",id:"ingremore",name:"ingre",value:"1000000000000",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"ingremore"},"\xa0Yes!"),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement("input",{type:"radio",id:"ingreless",name:"ingre",value:"7",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"ingreless"},"\xa0Not a lot..")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"4. Do you like fruity or meaty?"),i.a.createElement("input",{type:"radio",id:"fruit",name:"typeFruity",value:"fruit",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"fruit"},"\xa0Fruit"),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement("input",{type:"radio",id:"meat",name:"typeFruity",value:"meat",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"meat"},"\xa0Meat")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"5. Do you need something comfort food?"),i.a.createElement("input",{type:"radio",id:"comfort",name:"comfort",value:"comfort",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"comfort"},"\xa0Yes"),"\xa0\xa0\xa0\xa0\xa0",i.a.createElement("input",{type:"radio",id:"course",name:"comfort",value:"course",onInput:this.inputChange.bind(this)}),i.a.createElement("label",{htmlFor:"course"},"\xa0No")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("input",{type:"checkbox",id:"confirm",name:"confirm",onInput:function(t){e.inputChange(t),e.submitRecipe(t)}}),i.a.createElement("label",{htmlFor:"confirm"},"\xa0I agree to the",i.a.createElement("a",{href:"https://www.termsfeed.com/terms-conditions/48f76bd8e5f2333f79f1195ca2e325fb/",target:"_blank",rel:"noopener noreferrer"},"\xa0Terms and Conditions")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement(C,{to:"/Community#homebody",className:"post-button btn btn-warning",onClick:function(t){return e.props.onUpdate(e.state.data)},disabled:!this.state.time||!this.state.ingre||!this.state.confirm},"Done"))))))))),i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement("h1",{id:"logo"},"Mood Recipes"),i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",{className:"current"},i.a.createElement(h.HashLink,{to:"/#homebody"},"Welcome")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/Community#homebody"},"Community")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/#contact"},"Contact Us")),i.a.createElement("li",null,i.a.createElement(h.HashLink,{to:"/Login"},"Login"))))))}}]),t}(n.Component),L=a(4),H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={data:a.props.data,id:"",name:"",description:"",steps:"",ingredients:"",minutes:"",tags:""},a.submitRecipe=a.submitRecipe.bind(Object(N.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"inputChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t),this.updateButton()}},{key:"updateButton",value:function(){var e=""===this.state.name||""===this.state.description||""===this.state.steps||""===this.state.tags||""===this.state.ingredients||""===this.state.minutes,t={};t.disabled=e,this.setState(t)}},{key:"submitRecipe",value:function(e){e.preventDefault();var t=[];this.state.data.map((function(e){return t.push(e)}));var a=t.length+1,n=[];n.push({id:a,name:this.state.name,description:this.state.description,ingredients:this.state.ingredients,steps:this.state.steps,tags:this.state.tags,minutes:this.state.minutes}),n.push.apply(n,t),console.log(t);var i={};i.data=n,console.log(i),this.setState(i)}},{key:"render",value:function(){var e=this;return console.log(this.state),i.a.createElement("div",{className:"parallax2"},i.a.createElement("div",{className:"hero-image3"},i.a.createElement("div",{className:"drop"},i.a.createElement("button",{className:"dropbtn"},i.a.createElement("img",{id:"menu",alt:"menu bar",src:"https://img.icons8.com/material-rounded/48/000000/menu.png"}),i.a.createElement("i",{className:"fa fa-caret-down"})),i.a.createElement("div",{className:"drop-content"},i.a.createElement(L.Link,{to:"/"},"Welcome"),i.a.createElement(L.Link,{to:"/Community"},"Community"),i.a.createElement(L.Link,{to:"/ContactUs"},"Contact Us"),i.a.createElement(L.Link,{to:"/Login"},"Login"))),i.a.createElement("div",{className:"hero-text3"},i.a.createElement("h1",{className:"display-lg"},"Make your post"),i.a.createElement("div",{className:"container1"},i.a.createElement("div",{className:"row"},i.a.createElement("div",null,i.a.createElement("form",{action:"",method:"POST"},i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("label",{htmlFor:"name",className:"title-text require"},"Title ",i.a.createElement("span",{className:"require"},"*")),i.a.createElement("input",{id:"name",type:"text",className:"form-control",name:"name",placeholder:"Name of your recipe",onInput:this.inputChange.bind(this)}))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("label",{htmlFor:"description",className:"title-text require"},"Description"),i.a.createElement("input",{id:"description",className:"form-control",name:"description",placeholder:"Give your recipe a introduction",onInput:this.inputChange.bind(this)}))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("label",{htmlFor:"ingredients",className:"title-text require"},"Ingredients ",i.a.createElement("span",{className:"require"},"*")),i.a.createElement("input",{id:"ingredients",className:"form-control",name:"ingredients",placeholder:"Ingredients of your recipe",onInput:this.inputChange.bind(this)}))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("label",{htmlFor:"steps",className:"title-text require"},"Steps"),i.a.createElement("input",{id:"steps",className:"form-control",name:"steps",placeholder:"How do you make it",onInput:this.inputChange.bind(this)}))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-6"},i.a.createElement("label",{htmlFor:"tags",className:"title-text"},"Tags ",i.a.createElement("span",{className:"require"},"*"),i.a.createElement("small",null,"\xa0\xa0(Seperate by comma)")),i.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"}),i.a.createElement("input",{id:"tags",className:"form-control",type:"text",placeholder:"Give Some Tags",onInput:this.inputChange.bind(this)})),i.a.createElement("div",{className:"form-group col-md-6"},i.a.createElement("label",{htmlFor:"minutes",className:"title-text"},"Time Needed ",i.a.createElement("span",{className:"require"},"*"),i.a.createElement("small",null,"\xa0\xa0(Minutes)")),i.a.createElement("input",{id:"minutes",className:"form-control",type:"number",placeholder:"Estimate time",onInput:this.inputChange.bind(this)}))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement("input",{type:"checkbox",id:"confirm",name:"confirm",onInput:function(t){e.inputChange(t),e.submitRecipe(t)}}),i.a.createElement("label",{htmlFor:"confirm"},"\xa0I agree to the",i.a.createElement("a",{href:"https://www.termsfeed.com/terms-conditions/48f76bd8e5f2333f79f1195ca2e325fb/",target:"_blank",rel:"noopener noreferrer"},"\xa0Terms and Conditions")))),i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement(C,{to:"/Community#homebody",className:"post-button btn btn-warning",onClick:function(t){return e.props.onUpdate(e.state.data)},disabled:!this.state.name||!this.state.ingredients||!this.state.tags||!this.state.minutes||!this.state.confirm},"Create"),i.a.createElement(L.Link,{to:"/Community",className:"post-button btn btn-light"},"Cancel"))))))))),i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement("h1",{id:"logo"},"Mood Recipes"),i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(L.Link,{to:"/"},"Welcome")),i.a.createElement("li",{className:"current"},i.a.createElement(L.Link,{to:"/Community"},"Community")),i.a.createElement("li",null,i.a.createElement(L.Link,{to:"/ContactUs"},"Contact Us")),i.a.createElement("li",null,i.a.createElement(L.Link,{to:"/Login"},"Login"))))))}}]),t}(n.Component),O=a(45),j=a(44),I=a.n(j),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t={};t.data=e,a.setState(t)},a.state={data:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a(I.a).then((function(t){e.setState({data:t})}))}},{key:"onSort",value:function(){var e=this.state.data.sort((function(e,t){return e.minutes-t.minutes}));this.setState({data:e}),console.log(this.state)}},{key:"onShow",value:function(){var e=this.state.data.sort((function(e,t){return e.id-t.id}));this.setState({data:e}),console.log(this.state)}},{key:"render",value:function(){return i.a.createElement(u.g,null,i.a.createElement(u.d,{exact:!0,path:"/"},i.a.createElement(w,{data:this.state.data})),i.a.createElement(u.d,{path:"/Community"},i.a.createElement(v,{data:this.state.data,handleSort:this.onSort.bind(this),handleShow:this.onShow.bind(this)})),i.a.createElement(u.d,{path:"/Question"},i.a.createElement(x,{data:this.state.data,onUpdate:this.handleChange.bind(this)})),i.a.createElement(u.d,{path:"/Post"},i.a.createElement(H,{data:this.state.data,onUpdate:this.handleChange.bind(this)})))}}]),t}(n.Component);o.a.render(i.a.createElement(L.HashRouter,null,i.a.createElement(S,null)),document.getElementById("homebody"))}},[[51,1,2]]]);
//# sourceMappingURL=main.55391e69.chunk.js.map