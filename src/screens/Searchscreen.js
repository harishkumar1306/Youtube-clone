import React from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../redux/actions.js/videos.action'
import VideoHorizontal from '../components/videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SearchScreen = () => {

    const dispatch = useDispatch()
    const {query} = useParams()

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    },[dispatch, query])


    const {videos, loading} = useSelector(state=>state.searchedVideo)

    return (
        <Container>
            {!loading ? (
                videos?.map(video => <VideoHorizontal 
                    video={video} key={video.id.VideoId} searchScreen />)
            ) : (
                <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                    <Skeleton width='100%' height='130px' count={20} />
                </SkeletonTheme>
            )}
        </Container>
    )
}

export default SearchScreen
