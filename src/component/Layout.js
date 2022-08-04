import React from 'react';
import './style1.css'
import Home from './image/pngtree-clothes-and-shoes-in-clothing-stores-picture-image_1516281.jpg'
import Image from './image/images (1).jfif'
import Image1 from './image/download (1).jfif'
import Image2 from './image/download.jfif'
import Image3 from './image/images (2).jfif'
function Layout() {
    return (
       <div>
        <div className='nav'>
            <p>Home</p>
            <p>Services</p>
            <p>Contact</p>
            <p>About</p>
        </div>
        <div className='bca'>
        <img src={Home} height={350} width={700} className="img2" alt=""/>
        </div>
        <h1 style={{textAlign:'center'}}>WELCOME TO E-TAIL SX</h1>
        <div className='paragraph'>
        <div className='parag'>
            <p style={{textAlign:'justify'}} className='kkk1'>You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.

We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.
</p>
        </div>
        <div className='parag'>
            <p style={{textAlign:'justify'}} className='kkk'>You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.

We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.</p>
        </div>
        
        </div>
       <div className='divi'>
        <div className='pp'>
        {/* <p className='pasu'>If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser.</p> */}

             <img src={Image} height={250} width={300} className="img1" alt=""/>
        </div>
        <div className='ss'>
        <img src={Image1} height={250} width={300} className="img1" alt=""/>

        </div>
        <div className='gg'>
        <img src={Image2} height={250} width={300} className="img1" alt=""/>
        </div>
        <div className='kk'>
        <img src={Image3} height={250} width={300} className="img1" alt=""/>

        </div>
       </div>
       <div className='foot'>
<h3 className='title'>THANKYOU ALL</h3>
<button className='but'>click here</button>
       </div>
       </div> 
    );
}

export default Layout;