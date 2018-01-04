	import React, { Component } from 'react'

	export class Blog extends Component {

		doContent(blog, editable) {
			let content = []
			content.push(<h2 contnenteditable={editable}>{blog.header}</h2>)
			content.push(<div contenteditable={editable}>
				{blog.text}
				</div>)
			if (editable) {
				content.push(<button onClick={(e) => {
					this.props.actions.addBlog(this.blog)
				}}>Luo blogiteksti</button>)
			}
			return content
		}

		render() {
			return (
				<div>
					{this.doContent(this.props.blog, this.props.edit)}
				</div>)
		}
	}
