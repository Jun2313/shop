
import {Table} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { incrementAge} from '../store/userSlice';
import { UpNumber, removeToCart } from'../store';
function Cart(){

  let state = useSelector( (state)=> state)
  console.log (state.cart[0].count)

  let dispatch = useDispatch()
  console.log(state.user.age + 1)


  return(
    <div>
      {state.user.name} {state.user.age}의 장바구니
      <button onClick={() => dispatch(incrementAge())}>버튼</button>
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
        state.cart.map((a, i) => 
        <tr key ={i}>
          <td>{i + 1}</td>
          <td>{state.cart[i].name}</td>
          <td>{state.cart[i].count}</td>
          <td>
            <button onClick={()=> {
              dispatch(UpNumber(i))
            }}>+</button>
            <button className="btn btn-danger" onClick={ ()=> {
              dispatch(removeToCart(i))
            }}>삭제</button>
          </td>
        </tr>
        )
        }
        
      </tbody>
    </Table> 
    </div>
  )
}

export default Cart;