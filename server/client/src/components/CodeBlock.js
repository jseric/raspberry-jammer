// File name: CodeBlock.js
// Description: Code block component
// Date created: 20th January 2018
// Author: Josip Seric

// Import modules
import React, { Component } from 'react';

import './styles/CodeBlock.css';

let console_output = [
  '#include <stdio.h>',
  '#include <stdlib.h>',
  'int main(void)',
  '{',
  '  int a = 0;',
  '  int b = 0;',
  '  printf("Hello world\n");',
  '  return 0;',
  '}'
];

// CodeBlock component
class CodeBlock extends Component {
  getConsoleLog() {
		// TODO

    return (
      <div>
        { console_output.map(function(line, index) {
	        return (
						<div className="console-output-inner-container" >
							<code className="console-output-codetag" >
							  { line }
						  </code>
					 		<br>
							</br>
						</div>);
	      }) }
      </div>
    ); // return
  } // getConsoleLog()

  render() {
    return (
      <div className="console-output-outer-container" >
        { this.getConsoleLog() }
      </div>
    ); // return
  } // render()
} // class CodeBlock extends Component

// Export CodeBlock component
export default CodeBlock;
