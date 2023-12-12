import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';


function Usuarios () {
    const[usuarios,setUsuarios] = useState([]);

    useEffect(() => {    
      const restCall = async () => {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        const dados = await resposta.json();
        setUsuarios(dados);
        console.log(JSON.stringify(dados));
      
      }
    restCall();
      
    }, []);
    
    return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Username</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.name}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.phone}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.address.city}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          
        </div>
        
      );
}

export default Usuarios;