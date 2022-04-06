console.log("Hello World from my js file")

const rootDiv = document.getElementById("root")

const div = document.createElement('div')
div.innerHTML = "Hello World"

const HelloWorld = React.createClass({
    render() {
      return (
        <div>
            <h1 id="hello" class="blah">Hello World</h1>
            <h2>Hello again</h2>
        </div>
      )
    }
  });





React.render(<HelloWorld />, rootDiv);