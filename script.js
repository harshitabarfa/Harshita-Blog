const blogData = [
  {
    title: "@harshitaa.__06",
    date: "January 1, 2024",
    content: ":) Find your happy place and live in it.",
    url: "Harshi1.jpg",
  },
  {
    title: "@harshitaa.__06",
    date: "February 1, 2024",
    content: ":) Self love isn't selfish, it's important.",
    url: "Harshi2.jpg",
  },
  {
    title: "@harshitaa.__06",
    date: "March 1, 2024",
    content: ":) Good vibes, big dreams, and self-love, always.",
    url: "Harshi3.jpg",
  },
  {
    title: "@harshitaa.__06",
    date: "April 1, 2024",
    content: ":) Simplicity is the ultimate sophistication.",
    url: "Harshi4.jpg",
  },
  {
    title: "@harshitaa.__06",
    date: "May 1, 2024",
    content: ":) Collect moments, not things.",
    url: "Harshi5.jpg",
  },
];

function addBlog(blog) {
  const blogList = document.querySelector(".blog-list");

  const newBox = document.createElement("div");
  newBox.classList.add("blog-box"); // Create a div in html document : <div class="blog-box"></div>
  blogList.append(newBox);

  const blogPost = document.createElement("div");
  blogPost.classList.add("blog-post");
  newBox.append(blogPost);

  const blogHeader = document.createElement("div");
  blogHeader.classList.add("blog-header");
  blogPost.append(blogHeader);

  const blogTitle = document.createElement("h1");
  blogTitle.classList.add("blog-title");
  blogTitle.textContent = blog.title;
  blogHeader.append(blogTitle);

  const blogImage = document.createElement("img");
  blogImage.classList.add("blog-image");
  blogImage.src = blog.url;
  blogPost.append(blogImage);

  const blogContent = document.createElement("p");
  blogContent.classList.add("blog-content");
  blogContent.textContent = blog.content;
  blogPost.append(blogContent);

  const blogDate = document.createElement("p");
  blogDate.classList.add("blog-date");
  blogDate.textContent = blog.date;
  blogHeader.append(blogDate);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("blog-buttons");

  const moveUpBtn = document.createElement("button");
  moveUpBtn.classList.add("blog-button", "move-up");
  moveUpBtn.textContent = "Move Up";
  buttonsDiv.appendChild(moveUpBtn);

  const moveDownBtn = document.createElement("button");
  moveDownBtn.classList.add("blog-button", "move-down");
  moveDownBtn.textContent = "Move Down";
  buttonsDiv.appendChild(moveDownBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("blog-button", "delete");
  deleteBtn.textContent = "Delete";
  buttonsDiv.appendChild(deleteBtn);

  newBox.appendChild(buttonsDiv);

  moveUpBtn.addEventListener("click", function () {
    const prevSibling = newBox.previousElementSibling;
    if (prevSibling !== null) {
      blogList.insertBefore(newBox, prevSibling);
    }
  });

  moveDownBtn.addEventListener("click", function () {
    const nextSibling = newBox.nextElementSibling;
    if (nextSibling !== null) {
      blogList.insertBefore(nextSibling, newBox);
    }
  });

  deleteBtn.addEventListener('click', function(){
    newBox.remove();
  })
}
// addBlog();
blogData.forEach((blog) => addBlog(blog));
