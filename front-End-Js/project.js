const renderProject = function () {
  db.collection("Project")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((project) => {
        renderContent(project);
      });
    })
    .catch(function (error) {
      alert(`Something went wrong error:${error}`);
    });
};
renderProject();

const renderContent = function (project) {
  const projectCard = document.querySelector(".project-section");

  const cols = document.createElement("div");
  cols.setAttribute("class", "col-md-4");

  const project_container = document.createElement("div");
  project_container.setAttribute("class", "work-box");

  const a = document.createElement("a");
  a.setAttribute("href", `../pages/viewProject.html#${project.id}`);

  const image = document.createElement("div");
  image.setAttribute("class", "work-img");
  image.innerHTML = `<img class="img-fluid" src="${
    project.data().Image
  }" alt="Project Picture">`;

  const content_card = document.createElement("div");
  content_card.setAttribute("class", "work-content");

  const row = document.createElement("div");
  row.setAttribute("class", "row");

  const inside_content = document.createElement("div");
  inside_content.setAttribute("class", "col-sm-8");

  const project_title = document.createElement("h4");
  project_title.setAttribute("class", "w-title");
  project_title.textContent = project.data().Title;

  const description = document.createElement("div");
  description.setAttribute("class", "w-more");

  const span = document.createElement("span");
  span.setAttribute("class", "w-ctegory");
  span.textContent = project.data().Description.slice(0, 20) + "...";

  description.append(span);
  inside_content.append(description);
  inside_content.append(project_title);
  row.append(inside_content);
  content_card.append(row);
  a.append(content_card);
  a.append(image);
  project_container.append(a);
  cols.append(project_container);
  projectCard.append(cols);
};

{
  /* <div class="col-md-4">
<div class="work-box">
    <a href="#">
        <div class="work-img">
            <img src="./img/7.jpg" class="img-fluid">
        </div>
        <div class="work-content">
            <div class="row">
                <div class="col-sm-8">
                    <h2 class="w-title">ALSARH</h2>
                    <div class="w-more">
                        <span class="w-ctegory">Let's the beuaty of the sky shine on top of you!!</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div class="col-md-4">
<div class="work-box">
    <a href="#">
        <div class="work-img">
            <img src="./img/8.jpg" class="img-fluid">
        </div>
        <div class="work-content">
            <div class="row">
                <div class="col-sm-8">
                    <h4 class="w-title">Design Studio</h4>
                    <div class="w-more">
                        <span class="w-ctegory">Let's the beuaty of the sky shine on top of you!!</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div class="col-md-4">
<div class="work-box">
    <a href="#">
        <div class="work-img">
            <img src="./img/9.jpg" class="img-fluid">
        </div>
        <div class="work-content">
            <div class="row">
                <div class="col-sm-8">
                    <h2 class="w-title">Great Impressions</h2>
                    <div class="w-more">
                        <span class="w-ctegory">Let's the beuaty of the sky shine on top of you!!</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
</div>
<div class="col-md-4">
<div class="work-box">
    <a href="#">
        <div class="work-img">
            <img src="./img/10.jpg" class="img-fluid">
        </div>
        <div class="work-content">
            <div class="row">
                <div class="col-sm-8">
                    <h2 class="w-title">Olde World Interiors</h2>
                    <div class="w-more">
                        <span class="w-ctegory">Let's the beuaty of the sky shine on top of you!!</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
</div>
</div> */
}
