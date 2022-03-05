import Comment from "./Comment";

const Post = (props) => {
    const allComments = props.comments.map((comment, i) => (
        <Comment comment={comment} key={i} />
    ));

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.body}</p>
            <p>Comments:</p>
            <ul>{allComments}</ul>
        </div>
    );
};

export default Post;
