class CommentBox extends React.Component{
	render(){
		return(
			<div className="comment-box">
				<h3>Comments</h3>
				<h4 className="comment-count">2 comments</h4>
				<div className="comment-list">
					<Comment author="Fred" body="It sucks"/>
					<Comment author="Austin" body="Looks great!"/>
				</div>
			</div>
		)
	}
}
class Comment extends React.Component{
	render(){
		return(
			<div className="comment">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body">
					{this.props.body}
				</p>
				<div className="comment-footer">
					<a href="#" className="comment-footer-delete">
						Delete Comment
					</a>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<CommentBox />, document.getElementById('story-app')
);