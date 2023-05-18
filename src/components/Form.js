import React, { useState } from 'react';
import axios from 'axios';
import styles from '../css/Adress.module.css';
import imageClose from '../imgs/close.png';

const AddressForm = () => {
  const [cep, setCep] = useState('');
  const [addressData, setAddressData] = useState(null);

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    consultarEndereco();
  };

  const consultarEndereco = () => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    axios.get(url)
      .then(response => {
        setAddressData(response.data);
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  };

  return (
    <div className="container">
      <h1>Consulte um CEP</h1>
      <h6>Precisa saber o logradouro de algum CEP específico? Basta consultar o endereço abaixo!</h6>
      <br/><br/>

      
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <div className="input-group">
            <input type="text" id="cep" value={cep} onChange={handleChange} className="form-control" />
            {/* <div className="input-group-append"> */}
              <button type="submit" className="btn btn-primary">Consultar</button>
            {/* </div> */}
          </div>
        </div>
      </form>

      <br/><br/><img className="iconeFechar" src={imageClose} width="30" height="30"/> <br/>

      {addressData && (
        <div className="endereco">

            <br/><br/>

          <label>Logradouro</label>
          <input type="text" value={addressData.logradouro} disabled/>

          <br/><br/>

          <label>Bairro</label>
          <input type="text" value={addressData.bairro} disabled/>

          <br/><br/>

          <label>Localidade</label>
          <input type="text" value={addressData.localidade} disabled/>

          <br/><br/>

          <label>Estado</label>
          <input type="text" value={addressData.uf} disabled/>
          
        </div>
      )}
    </div>
  );
};

export default AddressForm;
