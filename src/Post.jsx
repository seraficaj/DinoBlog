import Comment from "./Comment";

const Post = ({comments, title, author, body}) => {
    const commentParagraphs = comments.map((commentBody, index) => {
        return <Comment key={`Commment-${index}`} content={commentBody} />;
    });
    return (
        <article>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{body}</p>
            <hr></hr>
            <h3>Comments:</h3>
            {commentParagraphs}
        </article>
    );
};

export default Post;