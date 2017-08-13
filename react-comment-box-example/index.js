var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./app');
var $ = require('jquery');
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox3 = React.createClass({
  render: function(){
    return (<div className="commentBox">
        Hello, world! I am a CommentBox3.
      </div>);
    }
  }
);

var CommentBox4 = React.createClass({
  render: function(){
    return (<div className="commentBox">
        Hello, world! I am a CommentBox4.
      </div>);
    }
  }
);

ReactDOM.render(<CommentBox data={data}/>,document.getElementById('content'));
ReactDOM.render(<CommentBox.box2 />,document.getElementById('content2'));
ReactDOM.render(<CommentBox3/>,document.getElementById('content3'));
ReactDOM.render(<CommentBox4/>,document.getElementById("content4"));
ReactDOM.render(<CommentBox4/>,document.getElementById("content5"));
