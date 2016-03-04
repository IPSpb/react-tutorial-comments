'use strict';

import React from 'react';

const CommentForm = React.createClass({
    getInitialState: function () {
        return {author: '', text: ''}
    },

    handleAuthorChange: function (e) {
        this.setState({author: e.target.value});
    },

    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function (e) {
        e.preventDefault();

        const author = this.state.author.trim(),
              text = this.state.text.trim();

        console.log(author, text);

        if (!text || !author) {
            return;
        }

        // Вызываем функцию определенную в файле box.js
        this.props.onCommentSubmit({author: author, text: text});
        // Обнуляем форму
        this.setState({author: '', text: ''});
    },

    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text"
                       name="name"
                       placeholder="Your name"
                       value={this.state.author}
                       onChange={this.handleAuthorChange}/><br/>
                <textarea name="text"
                          placeholder="Say something..."
                          onChange={this.handleTextChange}
                          value={this.state.text}>
                </textarea>

                <input type="submit" value="Post"/>
            </form>
        );
    }
});

export default CommentForm;