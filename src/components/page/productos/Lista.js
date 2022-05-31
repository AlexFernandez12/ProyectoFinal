import React from "react";
import data from "./data.json";
import Search from "./Search";
import { Link } from "react-router-dom";
 
//import Table from "./Table";
 
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());
class Table extends React.Component {
 
   
  render() {
    const { data, pattern } = this.props;
    return (
      <div>
        {data.filter(isSearched(pattern)).map(row => (
          <fieldset>
            <table>
              <tr>
            <td>{row.title}</td>
 
              <td />
 
               <td />
 
              <td />
 
              <td>
                <img src={row.image} width="70px"></img></td>
 
 
              <Link to={`/producto/${row.id}`}>
                <td /><button  className="btn_lista1">Ver producto</button><td />
                </Link>
         
              </tr>
             
            </table>
          </fieldset>
        ))}
      </div>
    );
  }
}
 
 
class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      searchTerm: "",
      search:false,
      search1:false
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }
 
  onSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "search":
        this.setState({ search: !this.state.search });
        this.setState({ search1: !this.state.search1 });
        break;
      default:
       
    }
  }
  render() {
    const { searchTerm, data, search, search1 } = this.state;
    return (
      <div className="lista_productos">
          <button className="btn_lista" onClick={() => this.hideComponent("search")}>
            Buscar Producto
          </button>
          <div>
              {search && <Search value={searchTerm} onChange={this.onSearchChange} />}<br></br>
             
              {search1 && <Table data={data} pattern={searchTerm} />}
          </div>
      </div>
    );
  }
}
 
export default Lista;

 
