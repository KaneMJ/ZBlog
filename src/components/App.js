import React from 'react';
import Header from './Header';
import FeaturedBlog from './FeaturedBlog'
import BlogTopic from './BlogTopic';
import AboutZettler from './AboutZettler';
import Footer from './Footer';
import styles from '../css/app.css';
import he from 'he';

class App extends React.Component {
    state = {
        content: []
    };

    componentDidMount() {
        let dataURL = "http://www.zettlerblog.com/wp-json/wp/v2/posts?orderby=date&per_page=1";
        fetch(dataURL)
            .then( res => res.json())
            .then(res => {
                let addData = [];
                addData.push(this.grabImage(res[0].content.rendered)),
                addData.push(this.shortenTitle(res[0].title.rendered)),
                addData.push(this.stripHtml(res[0].content.rendered)),
                this.setState({
                    content : addData
                })
            })
    };

    grabImage(data) {
        // Grab image link from the post
        let start = data.indexOf('src="');
        let end = data.indexOf('"', start+5);
        let image = data.substring(start+5, end);
        return image;
    }

    stripHtml(data) {          
        // Strip tag elements
        data = data.replace(/<[^>]+>/g, '');
        // Decode html entities
        data = he.decode(data);
        // Shorten length if too long
        if(data.length > 220)
            data = data.substring(0, 220);
            data = data.concat("[...]");
        return data;
    }

    shortenTitle(title) {
        // Shorten title if too long
        if(title.length > 35){
            title = title.substring(0, 35);
            title = title.concat("...");
        }
        return title;
    }


    render() {
        return (
            <div className={styles.container}>
                <Header />
                <FeaturedBlog blog={this.state.content}/>
                <BlogTopic />
                <AboutZettler />
                <Footer />
            </div>
        )
    }
}

export default App;