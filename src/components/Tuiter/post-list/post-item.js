import React from "react";
import './index.css';

const PostItem = ({
                    post = {
                      "avatarIcon": "/tuiter/assets/elonmusk.jpg",
                      "userName": "Elon Musk",
                      "handle": "elonmusk",
                      "time": "23h",
                      "title": "Amazing show about <a href=\"https://twitter.com/inspiration4x\">@Inspiration4x</a> mission!",
                      "image": {
                        "path": "/tuiter/assets/inspiration4x.jpg",
                        "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                        "text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
                        "link": "https://www.netflix.com/title/81441273"
                      },
                      "replies": "4.2K",
                      "retweets": "3.5K",
                      "likes": "37.5K"
                    }
                  }) => {
  return(
    <li className="list-group-item d-flex border-secondary">
      <img src={post.avatarIcon} className="img-fluid rounded-circle wd-avatar-icon" alt={post.handle} />
      <div className="ms-2 me-auto">
        <div className="d-flex justify-content-between">
          <div>
            <span className="fw-bold">{post.userName} </span>
            <i className="fa fa-check-circle" />
            <span className="text-secondary"> @{post.handle} - {post.time}</span>
          </div>
          <div><i className="fa fa-ellipsis text-secondary"/></div>
        </div>
        <div><Content text={post.title} refs={post.refs} /></div>
        {
          post.image &&
          <div className="my-2 border border-secondary wd-post-image-section overflow-hidden">
            {post.image.path && <img src={post.image.path} alt="" className="img-fluid" />}
            {
              (post.image.title || post.image.text || post.image.link) &&
              <div className="p-2 pe-auto border-top border-secondary">
                {post.image.title && <div>{post.image.title}</div>}
                {post.image.text && <div className="text-secondary">{post.image.text}</div>}
                {post.image.link && <a href={post.image.link} className="text-secondary"><i className="fa fa-link"/> {post.image.link}</a>}
              </div>
            }
          </div>
        }
        <div className="row">
          <a href="/#" className="col-3 text-decoration-none text-secondary">
            <i className="fa-regular fa-comment"/>
            <span className="ms-2 me-auto">{post.replies}</span>
          </a>
          <a href="/#" className="col-3 text-decoration-none text-secondary">
            <i className="fa fa-retweet"/>
            <span className="ms-2 me-auto">{post.retweets}</span>
          </a>
          <a href="/#" className="col-3 text-decoration-none text-secondary">
            <i className="fa-regular fa-heart"/>
            <span className="ms-2 me-auto">{post.likes}</span>
            </a>
          <a href="/#" className="col-3 text-decoration-none text-secondary">
            <i className="fa fa-arrow-up-from-bracket"/>
          </a>
        </div>
      </div>
    </li>
  );
};

const Content = ({ text = "", refs = {} }) => {
  let words = text.split(" ");
  return (
    <>
      {
        words.map((word) => {
          if (word.startsWith("ref-link:")) {
            let linkName = word.split(":")[1];
            let reference = refs[linkName];
            if (reference) {
              return (<><a href={reference.hyperlink}>{reference.displayText}</a> </>);
            }
          }
          return (<>{word} </>);
        })
      }
    </>
  );
};

export default PostItem;