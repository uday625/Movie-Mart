import React from 'react';

const ShowList = props => {

    // let searchHeading ="Available TV Show ";

    // if (props.showList.length===0)
    //     searchHeading ="Search to find TV Show";
    
    const SearchHeading = () => {
        let showCounter = props.showList.length;
        let displayMessage
        return(props.showList.length === 0 ? <p>Search to find TV Show</p> : <h2>Available TV Show</h2>);
    }
    

    return ( 
        <div>
             {/* <h3> {searchHeading} </h3>          */}
             <SearchHeading/>
             {                  
                props.showList.map(show =>{
                    return <p key={show.show.id}> {show.show.name}</p>
                })
            }
        </div>
     );
}
 
export default ShowList;