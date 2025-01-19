import review_1 from '../videos/review_1.mp4'
import review_2 from '../videos/review_2.mp4'

function Reviews() {
    return (
        <div className='reviews_page'>
            <h1 className="reviews_title">ОТЗЫВЫ <br /> УЧАСТНИКОВ РЕТРИТА</h1>
            <div className="videos_container">
                <div className="review_container">
                    <p>Октябрь 2024 года</p>
                    <video className='video_review' type="video/mp4" src={`${review_1}#t=0.1`} controls/>
                </div>
                <div className="review_container">
                    <p>Октябрь 2024 года</p>
                    <video className='video_review' type="video/mp4" src={`${review_2}#t=0.1`} controls/>
                </div>

            </div>
        </div>
    );
}

export default Reviews;