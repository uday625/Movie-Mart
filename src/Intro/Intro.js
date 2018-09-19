import React from 'react';

const Intro = props => {

    const currentDate = () => {
        const date = new Date();
        return (<p>{date.toDateString()}</p>)
    }

    return (         
        <div>
            <h2>{props.msg} </h2>
                {currentDate()}
        </div>        
     );
}
 
export default Intro;