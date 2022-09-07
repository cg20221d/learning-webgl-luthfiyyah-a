function main() {
  var kanvas = document.getElementById("kanvas");
  // var gl = kanvas.getContext("2d");
  var gl = kanvas.getContext("webgl");
  // kalo kita mau gambar di 3d, alat gambarnya webgl
  // gl = grafics library

  //   mendifinisikan shaders
  // shaders itu ada macem2.
  // shaders -> sebuah source code yg akan di-run oleh gpu

  // vertex shader
  var vertexShaderCode = "void main(){" + "}";
  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); //sampai sini udah jadi .o

  // itu gaya nulisnya doang yg beda y
  // fragment shader
  var fragmentShaderCode = `
    void main(){ 

    }
    `;
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject); //sampai sini jadi .o

  var shaderProgram = gl.createProgram(); // wadah dari excecutable (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram); //kita siap untuk menggambar (scr analogi)

  gl.clearColor(1.0, 0.65, 0.8, 1.0); //(merah, hijau, biru, transparansi)
  gl.clear(gl.COLOR_BUFFER_BIT);
}
