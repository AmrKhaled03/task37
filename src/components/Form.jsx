import React, { useContext } from 'react';
import { ShopContext } from '../context/Todo';

const Form = () => {
    const { setInputvalue, addTodo } = useContext(ShopContext);

    return (
        <div className="form my-5 py-5">
            <div className="container">
                <form>
                    <div className="my-5 mx-auto">
                        <div className="row p-3 to">
                            <div className="col-md-10 col-12 mb-3">
                                <input type="text" className="form-control" onChange={(e) => setInputvalue(e.target.value)} placeholder='Enter Text'/>      
                            </div>
                            <div className="col-md-2 col-12 ">
                                <button type="button" className="btn btn-primary w-100" onClick={addTodo}>ADD</button> 
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
