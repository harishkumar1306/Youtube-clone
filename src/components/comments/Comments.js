import React, { useEffect } from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions.js/comments.action'
import { useState } from 'react'

const Comments = (videoId) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId))
    },[dispatch,videoId])

    const comments = useSelector(state=>state.commentsList.comments)
    
    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet)

    const [text, setText] = useState('')

    const handleComment = (e) => {
        e.preventDefault();
        if(text.length === 0) return
        dispatch(addComment(videoId, text))
        setText('')
    }

    return (
        <div className="comments">
            <p>1234 comments</p>
            <div className="comments__form d-flex w-100 my-2">
                <img 
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"                 
                    alt="" 
                    className="rounded-circle mr-3"/>
            
            <form onSubmit={handleComment} className="d-flex flex-grow-1">
                <input type="text" className="flex-grow-1 p-2" 
                    placeholder="Write a comment..." 
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    />
                <button className="border-0 p-2">Comment</button>
            </form>
            </div>
        
        <div className="comments__list">
            {_comments.map((comment, i) => (
                <Comment comment={comment} key={i} />
            ))}
        </div>    
        
        </div>
    )
}

export default Comments
