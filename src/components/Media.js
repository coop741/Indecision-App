import React from "react";

const Media = props => {
  return (
    <article className="media">
      <figure className="media-left" />
      <div className="media-content">
        <div className="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>{" "}
            <small>31m</small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
            non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
      </div>
      <div className="media-right">
        <button className="delete" />
      </div>
    </article>
  );
};

export default Media;
