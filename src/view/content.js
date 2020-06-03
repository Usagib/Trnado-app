const content =
` <div class="card border-0 shadow my-5">
    <div class="card-body p-5">

      <div class="text-center">
        <img src="../src/view/img/main.png" class="img-fluid main-image" alt="">
        <h1 class="font-weight-light text-center">Trnado, How's the weather in?</h1>
        <form class="" action="index.html" method="post">
          <div class="input-group">
            <input type="text" class="form-control" id="city" placeholder="Search weather by city">
              <div class="input-group-append">
                <span class="input-group-text" id="search-button">Go!</span>
              </div>
          </div>
        </form>
      </div>

      <div class="card mb-3">
        <!-- <img class="card-img-top" style="height: 70px;" src="../src/view/img/main.png" alt="city image by api">
-->
        <div class="card-body">
          <h5 class="card-title">City</h5>
          <p class="card-text">38°F</p>
          <p class="card-text">Sunny.</p>
        </div>
      </div>

    </div>
  </div>
`;
export default content;
