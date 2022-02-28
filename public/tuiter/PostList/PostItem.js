const PostItem = (post) => {
  return(`
    <li class="list-group-item d-flex border-secondary">
      <img src="${post.avatarIcon}" class="img-fluid rounded-circle wd-avatar-icon" alt="${post.handle}" />
      <div class="ms-2 me-auto">
        <div class="d-flex justify-content-between">
          <div>
            <span class="fw-bold">${post.userName}</span>
            <i class="fa fa-check-circle"></i>
            <span class="text-secondary">@${post.handle}</span>
            <span class="text-secondary"> - ${post.time}</span>
          </div>
          <div><i class="fa fa-ellipsis text-secondary"></i></div>
        </div>
        <div>${post.title}</div>
        ${getImageSection(post)}
        <div class="row">
          <a href="#" class="col-3 text-decoration-none text-secondary">
            <i class="fa-regular fa-comment"></i>
            <span class="ms-2 me-auto">${post.replies}</span>
          </a>
          <a href="#" class="col-3 text-decoration-none text-secondary">
            <i class="fa fa-retweet"></i>
            <span class="ms-2 me-auto">${post.retweets}</span>
          </a>
          <a href="#" class="col-3 text-decoration-none text-secondary">
            <i class="fa-regular fa-heart"></i>
            <span class="ms-2 me-auto">${post.likes}</span>
            </a>
          <a href="#" class="col-3 text-decoration-none text-secondary">
            <i class="fa fa-arrow-up-from-bracket"></i>
          </a>
        </div>
      </div>
    </li>
  `);
};

const getImageSection = (post) => {
  if (post.image) {
    let imageSection = `<img src="${post.image.path}" alt="" class="img-fluid" />`;
    const imageContent = getImageContent(post);
    if (imageContent) {
      imageSection += `<div class="p-2 pe-auto border-top border-secondary">${imageContent}</div>`;
    }

    return(`<div class="my-2 border border-secondary wd-post-image-section overflow-hidden">${imageSection}</div>`);
  }

  return('');
}

const getImageContent = (post) => {
  let imageContent = '';
  imageContent += post.image.title ? `<div>${post.image.title}</div>` : '';
  imageContent += post.image.text ? `<div class="text-secondary">${post.image.text}</div>` : '';
  imageContent += post.image.link ? `<a href="${post.image.link}" class="text-secondary"><i class="fa fa-link"></i> ${post.image.link}</a>` : '';
  return imageContent;
}

export default PostItem;