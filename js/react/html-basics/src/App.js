import React from 'react'
import './App.css';

const App = () => {
  return (
    <> {/* React Fragment */}

      <hr />
      <h1>Grid and Flexbox</h1>

      <div>
        <div style={{ backgroundColor: 'red', display: 'grid', padding: 1 }}>
          <div style={{ backgroundColor: 'blue', gridColumn: '1' }}>1</div>
          <div style={{ backgroundColor: 'yellow', gridColumn: '2' }}>2</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '3' }}>3</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '4' }}>4</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '5' }}>5</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '6' }}>6</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '7' }}>7</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '8' }}>8</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '9' }}>9</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '10' }}>10</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '11' }}>11</div>
          <div style={{ backgroundColor: 'orange', gridColumn: '12' }}>12</div>
          <div style={{ backgroundColor: 'pink', gridColumn: '13' }}>13</div>
        </div>
        <div style={{ backgroundColor: 'black', display: 'grid', padding: 1 }}>
          <div style={{ backgroundColor: 'blue', gridColumn: '1/2' }}>1</div>
          <div style={{ backgroundColor: 'yellow', gridColumn: '2/4' }}>2</div>
          <div style={{ backgroundColor: 'white', gridColumn: '4/12', display: 'grid' }}>
            <div style={{ backgroundColor: 'purple', gridColumn: '1/3' }}>another one</div>
            <div style={{ backgroundColor: 'red', gridColumn: '3/6' }}>another one</div>
            <div style={{ backgroundColor: 'blue', gridColumn: '6/9' }}>another one</div>
            <div style={{ backgroundColor: 'gray', gridColumn: '9/12' }}>another one</div>
          </div>
        </div>
      </div>
     
      <hr />

      <div>
        <p>This is a div</p>
      </div>
      <div>
        <p>These are my headers</p>
        <h1>This is an H1</h1>
        <h2>This is an H2</h2>
        <h3>This is an h3</h3>
        <p>I think headers go all the way to h6... maybe h7?</p>
      </div>

      <div>
        <h3>This is a unordered list</h3>
        <ul>
          <li>this is my first list item</li>
          <li>this is the second item</li>
          <li>This is my third item</li>
        </ul>
      </div>

      <div>
        <h3>This is an ordered list</h3>

        <ol>
          <li>First thing</li>
          <li>Second thing</li>
          <li>Third thing</li>
        </ol>
      </div>

      <div>
        <h3 style={{ color: 'red', fontSize: '30px' }}>This is a table....</h3>

        <table>
          <thead>
            <tr>
              <td>First Header</td>
              <td>Second Header</td>
              <td>Third Header</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First item top left</td>
              <td>Second item in the middle</td>
              <td>Third item in the right</td>
            </tr>
            <tr>
              <td>Another item top left</td>
              <td>Another item in the middle</td>
              <td>Another item in the right</td>
            </tr>
            <tr>
              <td>Another item top left</td>
              <td>Another item in the middle</td>
              <td>Another item in the right</td>
              <td>Oopss..</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br/>
      <p>There was a break above me</p>

      <hr/>
      <p>There was a some human resources happening above me</p>

      <div>
        <p>This is an 'A href' tag</p>

        <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
      </div>

      <div>
        <p>This is an img tag</p>

        <img width={300} height={400} alt="doggo" src="https://media.istockphoto.com/photos/dog-surfing-on-a-wave-picture-id912592258?k=20&m=912592258&s=612x612&w=0&h=L2ax3nYfFfqH2RwEpOyFGizo2vi2bVNDAuqDVhNeIpU=" />
      </div>

      <div>
        <h3>This is a button</h3>

        <button>Click me!</button>
      </div>
      
    </>
  );
}

export default App;