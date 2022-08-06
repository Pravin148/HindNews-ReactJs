import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class NewsBundle extends Component {

    static defaultProps = {
        country: "in",
        category: "sports"
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `HindNews | ${this.props.category}`
    }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=15`;
        this.props.setProgress(25);
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(75);
        this.setState({ articles: parsedData.articles, totalRusults: parsedData.totalRusults, loading: false })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {

        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=319c50da4fcb49379235c26460094b22&page=${this.state.page + 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalRusults: parsedData.totalRusults,
            loading: false
        })
    };

    render() {
        return (
            <div className='my-5 mx-4'>
                <h1 className='mb-3 mx-5'>HindNews - Top {this.props.category} Headlines</h1>
                <div className='container' style={{ marginTop: "30px"}}>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}>
                        {this.state.loading && <Spinner />}

                        {this.state.articles.map((element) => {
                            return <div key={element.url}>
                                <NewsItems title={element.title} description={element.description ? element.description.slice(0, 100) : ""} urlToImage={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} />
                            </div>
                        })}
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}
