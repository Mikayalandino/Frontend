const Card = ({name, img}) => {
  return (
    <article>
        <h2>{name}</h2>
        <img src={img}></img>
      {/* <img></img>

      <div>
        <h2></h2>
        <p></p>

        <div>
          <p></p>
          <p></p>
        </div>

        <div>
          <p></p>
          <p></p>
        </div>
      </div> */}
    </article>
  );
};

export default Card;
