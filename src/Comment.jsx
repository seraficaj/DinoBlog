// no longer have to have imrc line
// import React from 'react;

function Comment(props) {
    // function that is copes to this component
    // const add = (x,y) => {
    //     return x + y;
    // }
    // just return jsx
    return (
        <>
        <p>{props.content}</p>
        {/* <p>Math is fun! {add(2,2)}</p> */}
        </>
    );
}

export default Comment;
