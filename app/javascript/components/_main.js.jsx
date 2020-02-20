var Main = React.createClass({
    // This component has only one method; render(). 
    // In this case, it’s used to return static html to the page. 
    // The render() method also triggers render() to all child components of the parent component, eventually printing all the components on the page. 
    // Each React component can only return one element, so all jsx elements in the return statement need to be in one wrapper div.
    // The <Main /> component has two child components; <Header /> and <Body />.
    render() {
      return (
        <div>
          <Header />
        </div>
      );
    }
  });