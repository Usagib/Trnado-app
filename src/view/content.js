const content =
` <div class="card border-0 shadow my-5">
    <div class="card-body p-5">

      <div class="text-center">
        <img src="../src/view/img/main.png" class="img-fluid main-image" alt="">
        <h1 class="font-weight-light text-center">Trnado, How's the weather in?</h1>
        <form id="weatherForm">
          <div class="input-group">
            <input type="text" class="form-control" id="city" placeholder="Search weather by city">
              <div class="input-group-append">
                <input type="submit" class="input-group-text" id="go-button" value="Go!">
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-secondary">
                    <input type="radio" name="degree" id="celsius" autocomplete="off" value="metric" checked> C°
                  </label>
                  <label class="btn btn-secondary">
                    <input type="radio" name="degree" id="farenheight" value="imperial" autocomplete="off"> F°
                  </label>

</div>
              </div>
          </div>
        </form>
      </div>

      <div class="card">
        <div class="card-body">
          <h4 class="card-title" id="showCity"></h4>
          <h3 class="card-text" id="showTemp"></h3>
          <p class="card-text" id="showMinMax"></p>
          <p class="card-text" id="showWeather"></p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="showWind"></li>
            <li class="list-group-item" id="showHumid"></li>
          </ul>
        </div>
      </div>


    </div>
  </div>
`;
export default content;
