/* 
 * Kira Jiroux
 * CS 499 Advanced Web Development
 * Assignment 1
 */

import './index.css';

import React from 'react'
import ReactDOM from 'react-dom'


// Container for all Card elements to be added to DOM
const cards = []


// Content of Page
class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageurl: props.imageurl,
            caption: props.caption,
        };
        this.handleDelete = this.handleDelete.bind(this)

    }

    handleDelete() {
        console.log("--- Delete Button Hit")
        
        this.componentWillUnmount()
        this.forceUpdate()
    }
    

    tick() {
        this.setState({
            imageurl: this.state.imageurl,
            caption: this.state.caption
        })
    }

    componentDidMount() {
        //this.imgId = setInterval(() => this.tick(), 1000)
        this.imageId = this.state.imageurl
        console.log("--- componentDidMount(), id: ", this.imageId)
    }

    componentWillUnmount() {
        console.log("--- componentWillUnmount(), id: ", this.imageId)

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].imageurl === this.imageId) {
                console.log("------ cards[i].imageurl: ", cards[i].imageurl)
                console.log("------ this.imageId:     ", this.imageId)

                var removedCard = cards.splice(i, 1)
                console.log("Current Cards: ", cards)
                console.log("Removed Card:  ", removedCard)
            }

        }
        //clearInterval(this.imgId)
        
    }

    render() {
        return (<div>
            <Card>
                <img src={this.state.imageurl} />
                <h3 className="captionline">
                    <button onClick={this.handleDelete} type="button" className="deletebutton">x</button>
                    {this.state.caption}
                </h3>
           </Card>
           </div> )
    }
}

// CSS Function
function Card(props) {
    return (
        <div className="card">
            {props.children}
        </div>
        );
}

// ----------------------------------------------------------------------------------------------------- 

class App extends React.Component {

    constructor(props) {
        super(props);

        {/* Original State 
            -- Closed Form
            -- Text Fields Empty
         */}
        this.state = {
            isOpen: false,
            imageurl: "",
            caption: "",
            /*cards: []*/
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.handleCaption = this.handleCaption.bind(this)

    }

    tick() {
        this.setState({
            imageurl: this.state.imageurl,
            caption: this.state.caption
        })
    }

    componentDidMount() {
        this.appId = setInterval(() => this.tick(), 1)
    }

    /* Form Toggle
     * --- Opens/Closes Form
     * --- Changes open state to closed
     * --- Clears input fields
     */
    handleClick() {
        console.log("--- Toggle Button Hit: ", !this.state.isOpen)
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            imageurl: "",
            caption: ""

        }))

    }

    /* Accept Form Functionality
     * --- Stores content from input fields into first position in list
     * --- Changes open state to closed
     * --- Clears input fields
     */
    handleAccept(event) {
        event.preventDefault()
        console.log("--- Accept Button Hit")
        console.log("------ Image Url: ", this.state.imageurl)
        console.log("------ Caption: ", this.state.caption)

    /*
        this.setState({
            cards: this.state.cards.unshift({ imageurl: this.state.imageurl, caption: this.state.caption })
        })
    */

        cards.unshift({imageurl: this.state.imageurl, caption: this.state.caption})
        console.log("Current Cards: ", cards)
        //console.log("Current Cards: ", this.state.cards)

        this.setState({
            isOpen: false,
            imageurl: "",
            caption: ""
        })
    }

    // Helper -- Gets Image Text Field Input
    handleImage(event) {
        console.log("Image Changed")
        this.setState({
            imageurl: event.target.value
        })
    }

    // Helper -- Gets Caption Text Field Input
    handleCaption(event) {
        console.log("Caption Changed")
        this.setState({
            caption: event.target.value
        })
    }


    render() {

        /* If Closed */
        if (this.state.isOpen == false) {
            return (
                <div className="interface">
                    {/* Left Side */}
                    <div className="leftColumn">
                        <button onClick={this.handleClick} className="openButton">Open photo entry dialog</button>
                    </div>
                    {/* Right Side */}
                    <div className="rightColumn">
                        {/*Card Stuff Here, display regardless of state, so long as there are things in the list*/}
                        {cards.map(card => <Content key={card.imageurl} imageurl={card.imageurl} caption={card.caption} />)}
                        {/*{this.state.cards.map(card => <Content key={card.imageurl} imageurl={card.imageurl} caption={card.caption}/>)}*/}
                    </div>
                </div>
            )
        }
        /* Else Open */ 
        else {
            return (
                <div className="interface">
                    {/* Left Side */}
                    <div className="leftColumn">
                        <button onClick={this.handleClick} className="openButton">Open photo entry dialog</button>
                            <form >
                                <div>
                                    <div className="form">
                                        {/* Photo URL Input */}
                                        <div>   
                                            <input
                                                type="text"
                                                placeholder="Enter Photo URL"
                                                className="inputField"
                                                onChange={this.handleImage}
                                                value={this.state.imageurl}
                                                >
                                            </input>
                                        </div>
                                        {/* Caption Input */}
                                        <div>   
                                            <input
                                                type="text"
                                                placeholder="Enter Caption"
                                                className="inputField"
                                                onChange={this.handleCaption}
                                                value={this.state.caption}                                        >
                                            </input>
                                        </div>
                                        {/* Form Buttons*/}
                                        <div>
                                            <button type="submit" className="formButtons" onClick={this.handleAccept}>
                                                Accept
                                            </button>
                                            <button type="reset" className="formButtons" onClick={this.handleClick}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    </div>
                    {/* Right Side */}
                    <div className="rightColumn">

                        {/*Card Stuff Here*/}
                        {/*{this.state.cards.map(card => <Content key={card.imageurl} imageurl={card.imageurl} caption={card.caption} />)}*/}
                        {cards.map(card => <Content key={card.imageurl} imageurl={card.imageurl} caption={card.caption} />)}

                    </div>
                </div>

            )
        }

    }
    
}


ReactDOM.render(
    <App />, document.getElementById('root')
);