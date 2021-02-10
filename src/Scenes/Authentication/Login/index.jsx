import React from "react";

export default function Login() {
  return (
    <>
      <div id="vertical-flip" class="card">
        <div class="flip">
          <div class="front">
            <div class="logo">
              <img
                src="https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png"
                alt="Netlflix"
              />
            </div>
          </div>
        </div>

        <div class="back">
          <form>
            <div class="box-input">
              <input
                type="email"
                name="email"
                placeholder="&#xf007;"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="&#xf023;"
                required
              />
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
