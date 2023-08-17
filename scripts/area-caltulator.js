function calculateTriangleArea() {
      // get triangle base value 
      const baseField = document.getElementById("triangle-base");
      const baseValueText = baseField.value;
      const base = parseFloat(baseValueText);


      // get triangle height value 
      const heightField = document.getElementById("triangle-height");
      const heightValueText = heightField.value;
      const height = parseFloat(heightValueText);


      const area = 0.5 * base * height;


      // show triangle area 
      const areaSpan = document.getElementById("triangle-area");
      areaSpan.innerText = area;
}

function calculateRectangleArea() {
      // get rectangle width
      const widthField = document.getElementById("rectangle-width");
      const widthValueField = widthField.value;
      const width = parseFloat(widthValueField);

      // get rectangle length

      const lengthField = document.getElementById("rectangle-length");
      const lengthValueField = lengthField.value;
      const length = parseFloat(lengthValueField);

      // calculate area
      const area = width * length;
      // show rectangle area

      const rectangleAreaSpan = document.getElementById("rectangle-area");
      rectangleAreaSpan.innerText = area;

}