function createPost() {
  // Set up page with post
  let postHTML = buildPost();
  let page = buildPage(postHTML);
  let commentsSection = buildCommentsSection();

  // Add page to main HTML
  let main = document.querySelector('main');
  main.innerHTML += postHTML + commentsSection;
}

function postComment() {
  // Get comment data
  let comment = document.getElementById("commentText").value;
  let commenterName = document.getElementById("commenterName").value;

  // set up comment template and HTML
  let commentTemplate = document.getElementById('comment-template').innerHTML;
  let templateFn = _.template(commentTemplate);
  let commentHTML = templateFn({ comment: comment, commenterName: commenterName });

  // append to comments section
  let commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentHTML;

  clearCommentForm();
}

function buildPage(post) {
  // Get template
  let pageTemplate = document.getElementById('page-template').innerHTML;

  // Create template function and prepare template HTML
  let templateFn = _.template(pageTemplate);
  return templateFn({ post: post });
}

function buildPost() {
  // Get data for blog
  let title = document.getElementById('postTitle').value;
  let content = document.getElementById('postBody').value;
  let author = document.getElementById('author').value;

  // Get template
  let postTemplate = document.getElementById("post-template").innerHTML;

  // Create template function and prepare template HTML
  let templateFn = _.template(postTemplate);
  return templateFn({ title: title, content: content, author: author });
}

function buildCommentsSection() {
  // Get template
  let commentsTemplate = document.getElementById("comments-template").innerHTML;

  let templateFn = _.template(commentsTemplate);
  return templateFn();
}

function clearCommentForm() {
  let comment = document.getElementById("commentText");
  let commenterName = document.getElementById("commenterName");

  comment.value = "";
  commenterName.value = "";
}
