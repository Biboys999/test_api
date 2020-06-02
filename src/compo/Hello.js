import React from 'react';


class Hello extends React.Component {
    render() {
      return(
        <div>
         <h2 style = {{color:'teal'}}>
          Bonjour {this.props.name}
         </h2>
        </div>
      )
    }
  }

  export default Hello;