const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);


// const h2 = React.createElement("h2",{style:{color:'red'}},"Hello");
// const li1 = React.createElement("li",{},"Orange")
// const li2 = React.createElement("li",{},"Apple")
// const ul = React.createElement("ul",{},li1,li2);
// const div = React.createElement("div",{style:{backgroundColor:'cyan'}},h2,ul)

const h2 = React.createElement("h2",{},"Heading Tag")
const h21 = <h2>Hello JSX</h2>;

const li1 = <li>Orange</li>;
const li2 = <li>Apple</li>
const li3 = <li>Mango</li>;
const li4 = <li>Guava</li>
const ul = <ul style={{color:'red'}}>{li1}{li2}{li3}{li4}</ul>;

const container = {

    <div>
        <div>{ul}</div>
        <div>{h21}</div>
    </div>

};






root.render(container);