import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import {useDispatch }from 'react-redux'
import {register} from '../../actions/auth_actions'


const ActiveUser = ({ match }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    token: "",
  });
  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setFormData({ ...formData, name, token });
    }
  }, []);

  const { name, token } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(token))
  };

  return (
    <div>
      <h1>Hey {name}, Ready to active your account</h1>
      <button
        variant="contained"
        size="medium"
        color="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Active your Account
      </button>
    </div>
  );
};

export default ActiveUser;
