import data from '../data';

function Set01() {
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="Shoe Image" />
      <h4>{data[0].title}</h4>
      <p>{data[0].price}</p>
    </div>
  );
}

export default Set01;