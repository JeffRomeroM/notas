import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import './Modal.css';

const Notas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    date: '',
    image: '',
  });
  const [notas, setNotas] = useState([]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const baseUrl = import.meta.env.VITE_API_URL;

    const requestOptions = {
      method: formData.id ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        date: formData.date,
        image: formData.image,
      }),
    };

    fetch(`${baseUrl}/notas${formData.id ? `/${formData.id}` : ''}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert(formData.id ? 'Registro actualizado con éxito' : 'Registro creado con éxito');
          toggleModal();
          setFormData({
            id: '',
            name: '',
            description: '',
            date: '',
            image: '',
          });
          getNotas(); // Actualizar la lista de notas después de la creación o actualización
        } else {
          throw new Error('Error al guardar la nota');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Error al guardar la nota');
      });
  };

  const eliminarNota = async (id:'') => {
    const baseUrl = import.meta.env.VITE_API_URL;
    try {
      await fetch(`${baseUrl}/notas/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      getNotas();
    } catch (error) {
      console.log('Error al eliminar la nota:', error);
    }
  };

  const handleEdit = (id, name, description, date, image) => {
    setFormData({
      id: id,
      name: name,
      description: description,
      date: date,
      image: image,
    });
    toggleModal();
  };

  const getNotas = async () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${baseUrl}/notas`);
      const data = await response.json();
      setNotas(data);
    } catch (error) {
      console.log('Error al obtener las notas:', error);
    }
  };

  useEffect(() => {
    getNotas();
  }, []);

  const handleCancel = () => {
    setFormData({
      id: '',
      name: '',
      description: '',
      date: '',
      image: '',
    });
    toggleModal();
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal animate__animated animate__slideInLeft">
            <h2 className="titleFormNacimiento">
              {formData.id ? 'Editar nota' : 'Registrar una nueva nota'}
            </h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="description">Descripción:</label>
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={formData.description}
                onChange={handleChange}
              />
              <label htmlFor="date">Fecha:</label>
              <input
                type="text"
                name="date"
                placeholder="Fecha"
                value={formData.date}
                onChange={handleChange}
              />

              <label htmlFor="image">Imagen</label>
              <input
                type="text"
                name="image"
                placeholder="Imagen"
                value={formData.image}
                onChange={handleChange}
              />

              <button type="submit">
                {formData.id ? 'Actualizar' : 'Enviar'}
              </button>
              <br />
              <button type="button" onClick={handleCancel}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="div-btn-agregar">
        <section className="section-title">
          <h1 className="txt-register-nacim">Registro de Notas</h1>
        </section>
        <section className="section-title-btn">
          <button className="open-modal-btn" onClick={toggleModal}>
            NUEVA NOTA
          </button>
        </section>
      </div>

      <div className="user-cards">
        {notas.map((nota) => (
          <div key={nota.id} className="user-card">
            <h2>{nota.name}</h2>
            <p>Descripción: {nota.description}</p>
            <p>Fecha: {nota.date}</p>
            <img src={nota.image} alt={nota.name} />
            <div className="user-actions">
              {formData.id === nota.id ? (
                <></>
              ) : (
                <button
                  className="button-edit"
                  onClick={() =>
                    handleEdit(nota.id, nota.name, nota.description, nota.date, nota.image)
                  }
                >
                  <FontAwesomeIcon icon={faPenSquare} />
                </button>
              )}
              <button className="button-delete" onClick={() => eliminarNota(nota.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notas;
