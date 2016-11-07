class StoryBox extends React.Component {
	render(){
		const now = new Date();
		const topicList = ['HTML', 'JavaScript', 'React'];
		return(
			<div>
				<h3>Stories App</h3>
				<p className="lead">Current time: {now.toTimeString()}</p>
				<ul>
					{topicList.map((topic,index)=> <li key={index}>{topic}</li>)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<StoryBox />, document.getElementById('story-app')
);