import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
  const invoice = getInvoice();
  const {
    client: {
      name: nameClient,
      lastName,
      address: { city, country, number, street },
    },
    id,
    name,
    items,
    company: { name: companyName, fiscalNumber },
  } = invoice;

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">
            <h1>Ejemplo facturas</h1>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">id: {id}</li>
              <li className="list-group-item">name: {name}</li>
            </ul>

            <div className="row my-3">
              <div className="col">
                <h3>Datos del cliente</h3>
                <ul className="list-group">
                  <li className="list-group-item active">
                    {nameClient} {lastName}
                  </li>
                  <li className="list-group-item">
                    {country} / {city}
                  </li>
                  <li className="list-group-item">
                    {street} {number}
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>Datos de la empresa</h3>
                <ul className="list-group">
                  <li className="list-group-item active">{companyName}</li>
                  <li className="list-group-item">{fiscalNumber}</li>
                </ul>
              </div>
            </div>

            <h4>Productos de la factura</h4>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ product, price, quantity }) => (
                  <tr>
                    <td>{product}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
