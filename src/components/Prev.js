import october from '../videos/october.mp4'

function Prev() {
    return (
        <div className='prev_page'>
            <h1 className="prev_title">Как это было в Октябре</h1>
            <div className="prev_videos_container">
                <div className="prev_container">
                    {/*<p>Октябрь 2024 года</p>*/}
                    <video className='prev_video' type="video/mp4" src={`${october}#t=0.1`} controls/>
                </div>
                {/*<div className="review_container">*/}
                {/*    <p>Октябрь 2024 года</p>*/}
                {/*    <video className='video_review' type="video/mp4" src={`${review_2}#t=0.1`} controls/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Prev;