interface PostCardProps {
	post: Post
}

export default function PostCard({ post: { title, body} }: PostCardProps) {
	return (
		<div className='card'>
			<h2>Title: {title}</h2>
			<p>Body: {body}</p>
		</div>
	)
}
