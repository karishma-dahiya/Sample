/*const heading = React.createElement(
    "h1",
    {id:"abc"},
    "This is a heading"
);



const paragraph = React.createElement(
    "p",
    null,
    "this is a paragraph."
);

const box = React.createElement(
    "div",
    {id:"box"},
    heading,
    paragraph,
);

ReactDOM.render(
    box,
   document.getElementById("react-container")
); */



//JSX
/*
const box = (
    <div className="box">
        <h1>This is a heading</h1>
        <p>this is a paragraph</p>
    </div>
);
ReactDOM.render(
    box,
    document.getElementById("react-container")
); */



//Components
/*
function Box(){
    return(
        <div className="box">
            <h1 id="abc">This is a heading</h1>
            <p>This is some random paragraph i am not your problem anymore, So who am i defending now...??
            </p>
        </div>
    );
}

ReactDOM.render(
    <Box/>,
    document.getElementById("react-container")

);

function App(){
    return(
        <div className="row">
            <div className="col">
                <Box/>
            </div>
            <div className="col">
                <Box/>
            </div>
        </div>
  
    );  return(
        <div className="row">
            <div className="col">
                <Box/>
            </div>
            <div className="col">
                <Box/>
            </div>
        </div>
  
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("react-container")

); */



/*props  and states

class Box extends React.Component {
    state = {
        color: "black"
    };
    
    changeColor(color) {
        this.setState({color:color});
    }
  
    render() {
        return (
            <div className='box'>
                <h1 className = {this.state.color}> { this.props.heading } </h1>
                <p>This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.</p>
                <button onClick={()=>this.changeColor("red")}>Red</button>
                <button onClick={()=>this.changeColor("yellow")}>Yellow</button>
                <button onClick={()=>this.changeColor("blue")}>Blue</button>
                <button onClick={()=>this.changeColor("green")}>Green</button>
            </div>
        );
    }
}
  
const App=()=>{
    return(
        <div className="row">
            <div className="col">
                <Box heading="First heading"/>
            </div>
            <div className="col">
                <Box heading="Second heading"/>
            </div>
            <div className="col">
                <Box heading="Third heading"/>
            </div>
            <div className="col">
                <Box heading="Fourth heading"/>
            </div><div className="col">
                <Box heading="Fifth heading"/>
            </div>
            <div className="col">
                <Box heading="Sixth heading"/>
            </div>
        </div>
  
    );

};

ReactDOM.render(
    <App/>,
    document.getElementById("react-container")
);

*/



//Data Flow

const Box=(props)=> {
   
        return (
            <div className='box'>
                <h1 className = {props.color}> { props.heading } </h1>
                <p>This is a test paragraph which is created by React. This paragraph has no attribute and is contained inside a div which is also created by React.</p>
                <button onClick={()=>props.changeColor(props.id,"red")}>Red</button>
                <button onClick={()=>props.changeColor(props.id,"yellow")}>Yellow</button>
                <button onClick={()=>props.changeColor(props.id,"blue")}>Blue</button>
                <button onClick={()=>props.changeColor(props.id,"green")}>Green</button>
            </div>
        );
    }

    const Stats=(props)=>{
        let boxes=props.boxes;
        let black_count=0, red_count=0,yellow_count=0,blue_count=0,green_count=0;
        boxes.forEach(box=>{
            if(box.color=="black"){
                black_count++;
            } else if(box.color=="red"){
                red_count++;
            } else if(box.color=="yellow"){
                yellow_count++;
            }else if(box.color=="blue"){
                blue_count++;
            } else if(box.color=="green"){
                green_count++;
            }
        });
    
    return(
        <div className="stats">
            Total heading color count:
            <div>Black:{black_count}</div>
            <div>Red:{red_count}</div>
            <div>Yellow:{yellow_count}</div>
            <div>Blue:{blue_count}</div>
            <div>Green:{green_count}</div>
        </div>

    );
    }
    
  
class App extends React.Component{
    state={
        boxes:[
            {
                id:1,
                heading:"First heading",
                color:"black"
            },
            {
                id:2,
                heading:"Second heading",
                color:"black"
            },
            {
                id:3,
                heading:"Third heading",
                color:"black"
            },
            {
                id:4,
                heading:"Fourth heading",
                color:"black"
            },
            {
                id:5,
                heading:"Fifth heading",
                color:"black"
            },
            {
                id:6,
                heading:"Sixth heading",
                color:"black"
            },
            {
                id:7,
                heading:"Seventh heading",
                color:"black"
            },
        ]
    };

    changeColor(id,color){
        let boxes=this.state.boxes;
        boxes[id-1].color=color;
        this.setState({
            boxes:boxes
        });

    }
    render(){
    return(
    <div>
        <div className="row">
          {
              this.state.boxes.map(box=>
                  <div className="col">
                  <Box
                  id={box.id}
                      heading={box.heading}
                      color={box.color}
                      changeColor={this.changeColor.bind(this)}
                  />
                  </div>
              )
          }
        </div>
        <div className="row">
            <Stats boxes={this.state.boxes}/>
        </div>
    </div>
    );
    }

};

ReactDOM.render(
    <App/>,
    document.getElementById("react-container")
);

