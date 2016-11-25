class CommentBox extends React.Component{
	constructor(){
		super()
		this.state = {
			showComments: false,
			comments:[
				{id: 1, author: 'Morgain McCircuit', body: 'Great picture!'},
				{id: 2, author: 'Fred', body: 'its all crap'}
			]
		}
	}
	render(){
		const comments = this._getComments()
		let commentNodes
		let buttonText = 'Show Comments'
		if(this.state.showComments){
			buttonText = 'Hide Comments'
			commentNodes=<div className="comment-list">{comments}</div>
		}
		return(
			<div className="comment-box">
				<CommentForm addComment={this._addComment.bind(this)}/>
				<h3>Comments</h3>
				<h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
				{commentNodes}
				<button onClick={this._handleClick.bind(this)}>{buttonText}</button>
			</div>
		)
	}
	_addComment(author,body){
		const comment={
			id: this.state.comments.length +1,
			author,
			body
		}
		this.setState({comments: this.state.comments.concat([comment])})
	}
	_getComments(){
		return this.state.comments.map((comment)=>{
			return (
				<Comment author={comment.author} body={comment.body} key={comment.id} />
			)
		})
	}
	_getCommentsTitle(commentCount){
		if(commentCount === 0){
			return 'No comments yet'
		}else if(commentCount ===1){
			return '1 comment'
		}else{
			return `${commentCount} comments`
		}
	}
	_handleClick(){
		this.setState({
			showComments: !this.state.showComments
		})
	}
}
class CommentForm extends React.Component{
	constructor(){
		super()
	}
	render(){
		return(
		<form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
			<label> Join the discussion</label>
			<div className="comment-form-fields">
				<input placeholder="Name:" ref={(input)=>this._author = input}/>
				<textarea placeholder="Comment:"ref={(textArea)=>this._body = textArea}></textarea>
			</div>
			<div className="comment-form-actions">
				<button type="submit">
					Post Comment
				</button>
			</div>
		</form>
		)
	}
	_handleSubmit(e){
		e.preventDefault()

		let author = this._author
		let body = this._body
		this.props.addComment(author.value,body.value)

	}
}
class Comment extends React.Component{
	constructor(){
		super()
		this.state={
			isAbusive:false
		}
	}
	render(){
		let commentBody
		if(!this.state.isAbusive){
			commentBody = this.props.body
		}else{
			commentBody = <em> Content marked as abusive</em>
		}
		return(
			<div className="comment">
				<p className="comment-header">{this.props.author}</p>
				<p className="comment-body">
					{commentBody}
				</p>
				<div className="comment-footer">
					<a href="#" className="comment-footer-delete">
						Delete Comment
					</a>
					<a href="#" className="comment-footer-report" onClick={this._isAbusive.bind(this)}>
						Report as Abuse
					</a>
				</div>
			</div>
		)
	}
	_isAbusive(e){
		e.preventDefault()

		this.setState({
			isAbusive:!this.state.isAbusive
		})
	}

}

ReactDOM.render(
	<CommentBox />, document.getElementById('story-app')
)