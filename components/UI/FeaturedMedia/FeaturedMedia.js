

const FeaturedMedia = (props) => {
    return(
        <div className="featured-media">
            <iframe className="featured-media__video" width="100%" height="100%" src="https://www.youtube.com/embed/JIVeGGIXvPA?autoplay=1&loop=1&start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="featured-media__bg">
                <div className="featured-media__container">
                    <div className="featured-media__title">Respect</div>
                    <div className="featured-media__playing">Coming Soon</div>
                    <div className="featured-media__location">In Theaters and on HBO MAX. Streaming this December.</div>
                    <div className="featured-media__buttons">
                    <div className="featured-media__play-btn">
                        <i className="fas fa-play" />
                    </div>
                    <div className="featured-media__info-btn">More Info</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMedia;