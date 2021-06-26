import React from 'react';
import './_comment.scss';
import moment from 'moment';

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img 
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" 
                alt=""
                className="rounded-circle mr-3" 
            />
        <div className="comment__body px-2">
            <p className="comment__header mb-1">
                Harish Kumar • {moment('2021-01-01').fromNow()}
            </p>
            <p className="mb-0">Nice video buddy!</p>
        </div>
            
        </div>
    )
}

export default Comment
