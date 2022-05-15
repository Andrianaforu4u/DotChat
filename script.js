window.wasm = null;

  function FetchWasm() {
    fetch("https://andrianaforu4u.github.io/DotChat/XeroCore.wasm")
      .then((response) => response.arrayBuffer())
      .then((bytes) => WebAssembly.instantiate(bytes, {}))
      .then((result) => (window.wasm = result.instance.exports));
  }
  
FetchWasm();
