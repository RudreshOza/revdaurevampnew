function CustomCard({ title, body, button,icons }) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{icons}{title}</h2>
          <p>{body}</p>
          {button && (
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
